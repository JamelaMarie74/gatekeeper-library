---
id: host-network-ports
title: Host Networking Ports
---

# Host Networking Ports

## Description
Controls usage of host network namespace by pod containers. Specific ports must be specified. Corresponds to the `hostNetwork` and `hostPorts` fields in a PodSecurityPolicy. For more information, see https://kubernetes.io/docs/concepts/policy/pod-security-policy/#host-namespaces

## Template
```yaml
apiVersion: templates.gatekeeper.sh/v1
kind: ConstraintTemplate
metadata:
  name: k8spsphostnetworkingports
  annotations:
    metadata.gatekeeper.sh/title: "Host Networking Ports"
    metadata.gatekeeper.sh/version: 1.0.0
    description: >-
      Controls usage of host network namespace by pod containers. Specific
      ports must be specified. Corresponds to the `hostNetwork` and
      `hostPorts` fields in a PodSecurityPolicy. For more information, see
      https://kubernetes.io/docs/concepts/policy/pod-security-policy/#host-namespaces
spec:
  crd:
    spec:
      names:
        kind: K8sPSPHostNetworkingPorts
      validation:
        # Schema for the `parameters` field
        openAPIV3Schema:
          type: object
          description: >-
            Controls usage of host network namespace by pod containers. Specific
            ports must be specified. Corresponds to the `hostNetwork` and
            `hostPorts` fields in a PodSecurityPolicy. For more information, see
            https://kubernetes.io/docs/concepts/policy/pod-security-policy/#host-namespaces
          properties:
            exemptImages:
              description: >-
                Any container that uses an image that matches an entry in this list will be excluded
                from enforcement. Prefix-matching can be signified with `*`. For example: `my-image-*`.

                It is recommended that users use the fully-qualified Docker image name (e.g. start with a domain name)
                in order to avoid unexpectedly exempting images from an untrusted repository.
              type: array
              items:
                type: string
            hostNetwork:
              description: "Determines if the policy allows the use of HostNetwork in the pod spec."
              type: boolean
            min:
              description: "The start of the allowed port range, inclusive."
              type: integer
            max:
              description: "The end of the allowed port range, inclusive."
              type: integer
  targets:
    - target: admission.k8s.gatekeeper.sh
      rego: |
        package k8spsphostnetworkingports

        import data.lib.exempt_container.is_exempt

        violation[{"msg": msg, "details": {}}] {
            input_share_hostnetwork(input.review.object)
            msg := sprintf("The specified hostNetwork and hostPort are not allowed, pod: %v. Allowed values: %v", [input.review.object.metadata.name, input.parameters])
        }

        input_share_hostnetwork(o) {
            not input.parameters.hostNetwork
            o.spec.hostNetwork
        }

        input_share_hostnetwork(o) {
            hostPort := input_containers[_].ports[_].hostPort
            hostPort < input.parameters.min
        }

        input_share_hostnetwork(o) {
            hostPort := input_containers[_].ports[_].hostPort
            hostPort > input.parameters.max
        }

        input_containers[c] {
            c := input.review.object.spec.containers[_]
            not is_exempt(c)
        }

        input_containers[c] {
            c := input.review.object.spec.initContainers[_]
            not is_exempt(c)
        }

        input_containers[c] {
            c := input.review.object.spec.ephemeralContainers[_]
            not is_exempt(c)
        }
      libs:
        - |
          package lib.exempt_container

          is_exempt(container) {
              exempt_images := object.get(object.get(input, "parameters", {}), "exemptImages", [])
              img := container.image
              exemption := exempt_images[_]
              _matches_exemption(img, exemption)
          }

          _matches_exemption(img, exemption) {
              not endswith(exemption, "*")
              exemption == img
          }

          _matches_exemption(img, exemption) {
              endswith(exemption, "*")
              prefix := trim_suffix(exemption, "*")
              startswith(img, prefix)
          }

```

### Usage
```shell
kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper-library/master/library/pod-security-policy/host-network-ports/template.yaml
```
## Examples
<details>
<summary>use-of-host-networking-ports-blocked</summary><blockquote>

<details>
<summary>constraint</summary>

```yaml
apiVersion: constraints.gatekeeper.sh/v1beta1
kind: K8sPSPHostNetworkingPorts
metadata:
  name: psp-host-network-ports
spec:
  match:
    kinds:
      - apiGroups: [""]
        kinds: ["Pod"]
  parameters:
    hostNetwork: true
    min: 80
    max: 9000

```

Usage

```shell
kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper-library/master/library/pod-security-policy/host-network-ports/samples/psp-host-network-ports/constraint.yaml
```

</details>

<details>
<summary>example-disallowed</summary>

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: nginx-host-networking-ports-disallowed
  labels:
    app: nginx-host-networking-ports
spec:
  hostNetwork: true
  containers:
  - name: nginx
    image: nginx
    ports:
    - containerPort: 9001
      hostPort: 9001

```

Usage

```shell
kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper-library/master/library/pod-security-policy/host-network-ports/samples/psp-host-network-ports/example_disallowed.yaml
```

</details>
<details>
<summary>example-allowed</summary>

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: nginx-host-networking-ports-allowed
  labels:
    app: nginx-host-networking-ports
spec:
  hostNetwork: false
  containers:
  - name: nginx
    image: nginx
    ports:
    - containerPort: 9000
      hostPort: 80

```

Usage

```shell
kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper-library/master/library/pod-security-policy/host-network-ports/samples/psp-host-network-ports/example_allowed.yaml
```

</details>
<details>
<summary>disallowed-ephemeral</summary>

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: nginx-host-networking-ports-disallowed
  labels:
    app: nginx-host-networking-ports
spec:
  hostNetwork: true
  ephemeralContainers:
  - name: nginx
    image: nginx
    ports:
    - containerPort: 9001
      hostPort: 9001

```

Usage

```shell
kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper-library/master/library/pod-security-policy/host-network-ports/samples/psp-host-network-ports/disallowed_ephemeral.yaml
```

</details>


</blockquote></details>