"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"docs":[{"type":"category","label":"Introduction","collapsed":true,"items":[{"type":"link","label":"Introduction","href":"/gatekeeper-library/website/","docId":"intro"}],"collapsible":true},{"type":"category","label":"Validation","collapsed":true,"items":[{"type":"category","label":"General","collapsed":true,"items":[{"type":"link","label":"Allowed Repositories","href":"/gatekeeper-library/website/validation/allowedrepos","docId":"validation/allowedrepos"},{"type":"link","label":"Automount Service Account Token for Pod","href":"/gatekeeper-library/website/validation/automount-serviceaccount-token","docId":"validation/automount-serviceaccount-token"},{"type":"link","label":"Block Endpoint Edit Default Role","href":"/gatekeeper-library/website/validation/block-endpoint-edit-default-role","docId":"validation/block-endpoint-edit-default-role"},{"type":"link","label":"Block Services with type LoadBalancer","href":"/gatekeeper-library/website/validation/block-loadbalancer-services","docId":"validation/block-loadbalancer-services"},{"type":"link","label":"Block NodePort","href":"/gatekeeper-library/website/validation/block-nodeport-services","docId":"validation/block-nodeport-services"},{"type":"link","label":"Block Wildcard Ingress","href":"/gatekeeper-library/website/validation/block-wildcard-ingress","docId":"validation/block-wildcard-ingress"},{"type":"link","label":"Container Limits","href":"/gatekeeper-library/website/validation/containerlimits","docId":"validation/containerlimits"},{"type":"link","label":"Container Requests","href":"/gatekeeper-library/website/validation/containerrequests","docId":"validation/containerrequests"},{"type":"link","label":"Container Ratios","href":"/gatekeeper-library/website/validation/containerresourceratios","docId":"validation/containerresourceratios"},{"type":"link","label":"Required Resources","href":"/gatekeeper-library/website/validation/containerresources","docId":"validation/containerresources"},{"type":"link","label":"Disallow Anonymous Access","href":"/gatekeeper-library/website/validation/disallowanonymous","docId":"validation/disallowanonymous"},{"type":"link","label":"Disallowed Repositories","href":"/gatekeeper-library/website/validation/disallowedrepos","docId":"validation/disallowedrepos"},{"type":"link","label":"Disallow tags","href":"/gatekeeper-library/website/validation/disallowedtags","docId":"validation/disallowedtags"},{"type":"link","label":"Container ephemeral storage limit","href":"/gatekeeper-library/website/validation/ephemeralstoragelimit","docId":"validation/ephemeralstoragelimit"},{"type":"link","label":"External IPs","href":"/gatekeeper-library/website/validation/externalip","docId":"validation/externalip"},{"type":"link","label":"Horizontal Pod Autoscaler","href":"/gatekeeper-library/website/validation/horizontalpodautoscaler","docId":"validation/horizontalpodautoscaler"},{"type":"link","label":"HTTPS Only","href":"/gatekeeper-library/website/validation/httpsonly","docId":"validation/httpsonly"},{"type":"link","label":"Image Digests","href":"/gatekeeper-library/website/validation/imagedigests","docId":"validation/imagedigests"},{"type":"link","label":"Block updating Service Account","href":"/gatekeeper-library/website/validation/noupdateserviceaccount","docId":"validation/noupdateserviceaccount"},{"type":"link","label":"Pod Disruption Budget","href":"/gatekeeper-library/website/validation/poddisruptionbudget","docId":"validation/poddisruptionbudget"},{"type":"link","label":"Replica Limits","href":"/gatekeeper-library/website/validation/replicalimits","docId":"validation/replicalimits"},{"type":"link","label":"Required Annotations","href":"/gatekeeper-library/website/validation/requiredannotations","docId":"validation/requiredannotations"},{"type":"link","label":"Required Labels","href":"/gatekeeper-library/website/validation/requiredlabels","docId":"validation/requiredlabels"},{"type":"link","label":"Required Probes","href":"/gatekeeper-library/website/validation/requiredprobes","docId":"validation/requiredprobes"},{"type":"link","label":"Storage Class","href":"/gatekeeper-library/website/validation/storageclass","docId":"validation/storageclass"},{"type":"link","label":"Unique Ingress Host","href":"/gatekeeper-library/website/validation/uniqueingresshost","docId":"validation/uniqueingresshost"},{"type":"link","label":"Unique Service Selector","href":"/gatekeeper-library/website/validation/uniqueserviceselector","docId":"validation/uniqueserviceselector"},{"type":"link","label":"Verify deprecated APIs","href":"/gatekeeper-library/website/validation/verifydeprecatedapi","docId":"validation/verifydeprecatedapi"}],"collapsible":true},{"type":"category","label":"Pod Security Policy","collapsed":true,"items":[{"type":"link","label":"Introduction","href":"/gatekeeper-library/website/pspintro","docId":"pspintro"},{"type":"link","label":"Allow Privilege Escalation in Container","href":"/gatekeeper-library/website/validation/allow-privilege-escalation","docId":"validation/allow-privilege-escalation"},{"type":"link","label":"App Armor","href":"/gatekeeper-library/website/validation/apparmor","docId":"validation/apparmor"},{"type":"link","label":"Capabilities","href":"/gatekeeper-library/website/validation/capabilities","docId":"validation/capabilities"},{"type":"link","label":"FlexVolumes","href":"/gatekeeper-library/website/validation/flexvolume-drivers","docId":"validation/flexvolume-drivers"},{"type":"link","label":"Forbidden Sysctls","href":"/gatekeeper-library/website/validation/forbidden-sysctls","docId":"validation/forbidden-sysctls"},{"type":"link","label":"FS Group","href":"/gatekeeper-library/website/validation/fsgroup","docId":"validation/fsgroup"},{"type":"link","label":"Host Filesystem","href":"/gatekeeper-library/website/validation/host-filesystem","docId":"validation/host-filesystem"},{"type":"link","label":"Host Namespace","href":"/gatekeeper-library/website/validation/host-namespaces","docId":"validation/host-namespaces"},{"type":"link","label":"Host Networking Ports","href":"/gatekeeper-library/website/validation/host-network-ports","docId":"validation/host-network-ports"},{"type":"link","label":"Privileged Container","href":"/gatekeeper-library/website/validation/privileged-containers","docId":"validation/privileged-containers"},{"type":"link","label":"Proc Mount","href":"/gatekeeper-library/website/validation/proc-mount","docId":"validation/proc-mount"},{"type":"link","label":"Read Only Root Filesystem","href":"/gatekeeper-library/website/validation/read-only-root-filesystem","docId":"validation/read-only-root-filesystem"},{"type":"link","label":"Seccomp","href":"/gatekeeper-library/website/validation/seccomp","docId":"validation/seccomp"},{"type":"link","label":"SELinux V2","href":"/gatekeeper-library/website/validation/selinux","docId":"validation/selinux"},{"type":"link","label":"Allowed Users","href":"/gatekeeper-library/website/validation/users","docId":"validation/users"},{"type":"link","label":"Volume Types","href":"/gatekeeper-library/website/validation/volumes","docId":"validation/volumes"}],"collapsible":true}],"collapsible":true},{"type":"category","label":"Mutation","collapsed":true,"items":[{"type":"link","label":"allow-privilege-escalation","href":"/gatekeeper-library/website/mutation-examples/allow-privilege-escalation","docId":"mutation-examples/allow-privilege-escalation"},{"type":"link","label":"capabilities","href":"/gatekeeper-library/website/mutation-examples/capabilities","docId":"mutation-examples/capabilities"},{"type":"link","label":"read-only-root-filesystem","href":"/gatekeeper-library/website/mutation-examples/read-only-root-filesystem","docId":"mutation-examples/read-only-root-filesystem"},{"type":"link","label":"seccomp","href":"/gatekeeper-library/website/mutation-examples/seccomp","docId":"mutation-examples/seccomp"},{"type":"link","label":"selinux","href":"/gatekeeper-library/website/mutation-examples/selinux","docId":"mutation-examples/selinux"},{"type":"link","label":"users","href":"/gatekeeper-library/website/mutation-examples/users","docId":"mutation-examples/users"}],"collapsible":true}]},"docs":{"intro":{"id":"intro","title":"Introduction","description":"Artifact Hub","sidebar":"docs"},"mutation-examples/allow-privilege-escalation":{"id":"mutation-examples/allow-privilege-escalation","title":"allow-privilege-escalation","description":"Usage","sidebar":"docs"},"mutation-examples/capabilities":{"id":"mutation-examples/capabilities","title":"capabilities","description":"Usage","sidebar":"docs"},"mutation-examples/read-only-root-filesystem":{"id":"mutation-examples/read-only-root-filesystem","title":"read-only-root-filesystem","description":"Usage","sidebar":"docs"},"mutation-examples/seccomp":{"id":"mutation-examples/seccomp","title":"seccomp","description":"Usage","sidebar":"docs"},"mutation-examples/selinux":{"id":"mutation-examples/selinux","title":"selinux","description":"Usage","sidebar":"docs"},"mutation-examples/users":{"id":"mutation-examples/users","title":"users","description":"Usage","sidebar":"docs"},"pspintro":{"id":"pspintro","title":"Introduction","description":"This repo contains common policies needed in Pod Security Policy but implemented as Constraints and Constraint Templates with Gatekeeper.","sidebar":"docs"},"validation/allow-privilege-escalation":{"id":"validation/allow-privilege-escalation","title":"Allow Privilege Escalation in Container","description":"Description","sidebar":"docs"},"validation/allowedrepos":{"id":"validation/allowedrepos","title":"Allowed Repositories","description":"Description","sidebar":"docs"},"validation/apparmor":{"id":"validation/apparmor","title":"App Armor","description":"Description","sidebar":"docs"},"validation/automount-serviceaccount-token":{"id":"validation/automount-serviceaccount-token","title":"Automount Service Account Token for Pod","description":"Description","sidebar":"docs"},"validation/block-endpoint-edit-default-role":{"id":"validation/block-endpoint-edit-default-role","title":"Block Endpoint Edit Default Role","description":"Description","sidebar":"docs"},"validation/block-loadbalancer-services":{"id":"validation/block-loadbalancer-services","title":"Block Services with type LoadBalancer","description":"Description","sidebar":"docs"},"validation/block-nodeport-services":{"id":"validation/block-nodeport-services","title":"Block NodePort","description":"Description","sidebar":"docs"},"validation/block-wildcard-ingress":{"id":"validation/block-wildcard-ingress","title":"Block Wildcard Ingress","description":"Description","sidebar":"docs"},"validation/capabilities":{"id":"validation/capabilities","title":"Capabilities","description":"Description","sidebar":"docs"},"validation/containerlimits":{"id":"validation/containerlimits","title":"Container Limits","description":"Description","sidebar":"docs"},"validation/containerrequests":{"id":"validation/containerrequests","title":"Container Requests","description":"Description","sidebar":"docs"},"validation/containerresourceratios":{"id":"validation/containerresourceratios","title":"Container Ratios","description":"Description","sidebar":"docs"},"validation/containerresources":{"id":"validation/containerresources","title":"Required Resources","description":"Description","sidebar":"docs"},"validation/disallowanonymous":{"id":"validation/disallowanonymous","title":"Disallow Anonymous Access","description":"Description","sidebar":"docs"},"validation/disallowedrepos":{"id":"validation/disallowedrepos","title":"Disallowed Repositories","description":"Description","sidebar":"docs"},"validation/disallowedtags":{"id":"validation/disallowedtags","title":"Disallow tags","description":"Description","sidebar":"docs"},"validation/ephemeralstoragelimit":{"id":"validation/ephemeralstoragelimit","title":"Container ephemeral storage limit","description":"Description","sidebar":"docs"},"validation/externalip":{"id":"validation/externalip","title":"External IPs","description":"Description","sidebar":"docs"},"validation/flexvolume-drivers":{"id":"validation/flexvolume-drivers","title":"FlexVolumes","description":"Description","sidebar":"docs"},"validation/forbidden-sysctls":{"id":"validation/forbidden-sysctls","title":"Forbidden Sysctls","description":"Description","sidebar":"docs"},"validation/fsgroup":{"id":"validation/fsgroup","title":"FS Group","description":"Description","sidebar":"docs"},"validation/horizontalpodautoscaler":{"id":"validation/horizontalpodautoscaler","title":"Horizontal Pod Autoscaler","description":"Description","sidebar":"docs"},"validation/host-filesystem":{"id":"validation/host-filesystem","title":"Host Filesystem","description":"Description","sidebar":"docs"},"validation/host-namespaces":{"id":"validation/host-namespaces","title":"Host Namespace","description":"Description","sidebar":"docs"},"validation/host-network-ports":{"id":"validation/host-network-ports","title":"Host Networking Ports","description":"Description","sidebar":"docs"},"validation/httpsonly":{"id":"validation/httpsonly","title":"HTTPS Only","description":"Description","sidebar":"docs"},"validation/imagedigests":{"id":"validation/imagedigests","title":"Image Digests","description":"Description","sidebar":"docs"},"validation/noupdateserviceaccount":{"id":"validation/noupdateserviceaccount","title":"Block updating Service Account","description":"Description","sidebar":"docs"},"validation/poddisruptionbudget":{"id":"validation/poddisruptionbudget","title":"Pod Disruption Budget","description":"Description","sidebar":"docs"},"validation/privileged-containers":{"id":"validation/privileged-containers","title":"Privileged Container","description":"Description","sidebar":"docs"},"validation/proc-mount":{"id":"validation/proc-mount","title":"Proc Mount","description":"Description","sidebar":"docs"},"validation/read-only-root-filesystem":{"id":"validation/read-only-root-filesystem","title":"Read Only Root Filesystem","description":"Description","sidebar":"docs"},"validation/replicalimits":{"id":"validation/replicalimits","title":"Replica Limits","description":"Description","sidebar":"docs"},"validation/requiredannotations":{"id":"validation/requiredannotations","title":"Required Annotations","description":"Description","sidebar":"docs"},"validation/requiredlabels":{"id":"validation/requiredlabels","title":"Required Labels","description":"Description","sidebar":"docs"},"validation/requiredprobes":{"id":"validation/requiredprobes","title":"Required Probes","description":"Description","sidebar":"docs"},"validation/seccomp":{"id":"validation/seccomp","title":"Seccomp","description":"Description","sidebar":"docs"},"validation/selinux":{"id":"validation/selinux","title":"SELinux V2","description":"Description","sidebar":"docs"},"validation/storageclass":{"id":"validation/storageclass","title":"Storage Class","description":"Description","sidebar":"docs"},"validation/uniqueingresshost":{"id":"validation/uniqueingresshost","title":"Unique Ingress Host","description":"Description","sidebar":"docs"},"validation/uniqueserviceselector":{"id":"validation/uniqueserviceselector","title":"Unique Service Selector","description":"Description","sidebar":"docs"},"validation/users":{"id":"validation/users","title":"Allowed Users","description":"Description","sidebar":"docs"},"validation/verifydeprecatedapi":{"id":"validation/verifydeprecatedapi","title":"Verify deprecated APIs","description":"Description","sidebar":"docs"},"validation/volumes":{"id":"validation/volumes","title":"Volume Types","description":"Description","sidebar":"docs"}}}')}}]);