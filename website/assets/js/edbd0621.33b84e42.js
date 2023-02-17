"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9910],{3905:(e,n,a)=>{a.d(n,{Zo:()=>p,kt:()=>d});var t=a(7294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function s(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?s(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},s=Object.keys(e);for(t=0;t<s.length;t++)a=s[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)a=s[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=t.createContext({}),m=function(e){var n=t.useContext(i),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},p=function(e){var n=m(e.components);return t.createElement(i.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=m(a),d=r,g=u["".concat(i,".").concat(d)]||u[d]||c[d]||s;return a?t.createElement(g,l(l({ref:n},p),{},{components:a})):t.createElement(g,l({ref:n},p))}));function d(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=a.length,l=new Array(s);l[0]=u;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var m=2;m<s;m++)l[m]=a[m];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9987:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>m});var t=a(7462),r=(a(7294),a(3905));const s={id:"containerresources",title:"Required Resources"},l="Required Resources",o={unversionedId:"validation/containerresources",id:"validation/containerresources",title:"Required Resources",description:"Description",source:"@site/docs/validation/containerresources.md",sourceDirName:"validation",slug:"/validation/containerresources",permalink:"/gatekeeper-library/website/validation/containerresources",draft:!1,editUrl:"https://github.com/open-policy-agent/gatekeeper-library/edit/master/website/docs/validation/containerresources.md",tags:[],version:"current",frontMatter:{id:"containerresources",title:"Required Resources"},sidebar:"docs",previous:{title:"Container Ratios",permalink:"/gatekeeper-library/website/validation/containerresourceratios"},next:{title:"Disallow Anonymous Access",permalink:"/gatekeeper-library/website/validation/disallowanonymous"}},i={},m=[{value:"Description",id:"description",level:2},{value:"Template",id:"template",level:2},{value:"Usage",id:"usage",level:3},{value:"Examples",id:"examples",level:2}],p={toc:m};function c(e){let{components:n,...a}=e;return(0,r.kt)("wrapper",(0,t.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"required-resources"},"Required Resources"),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"Requires containers to have defined resources set.\n",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/"},"https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/")),(0,r.kt)("h2",{id:"template"},"Template"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: templates.gatekeeper.sh/v1\nkind: ConstraintTemplate\nmetadata:\n  name: k8srequiredresources\n  annotations:\n    metadata.gatekeeper.sh/title: "Required Resources"\n    metadata.gatekeeper.sh/version: 1.0.0\n    description: >-\n      Requires containers to have defined resources set.\n\n      https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/\nspec:\n  crd:\n    spec:\n      names:\n        kind: K8sRequiredResources\n      validation:\n        # Schema for the `parameters` field\n        openAPIV3Schema:\n          type: object\n          properties:\n            exemptImages:\n              description: >-\n                Any container that uses an image that matches an entry in this list will be excluded\n                from enforcement. Prefix-matching can be signified with `*`. For example: `my-image-*`.\n\n                It is recommended that users use the fully-qualified Docker image name (e.g. start with a domain name)\n                in order to avoid unexpectedly exempting images from an untrusted repository.\n              type: array\n              items:\n                type: string\n            limits:\n              type: array\n              description: "A list of limits that should be enforced (cpu, memory or both)."\n              items:\n                type: string\n                enum:\n                - cpu\n                - memory\n            requests:\n              type: array\n              description: "A list of requests that should be enforced (cpu, memory or both)."\n              items:\n                type: string\n                enum:\n                - cpu\n                - memory\n  targets:\n    - target: admission.k8s.gatekeeper.sh\n      rego: |\n        package k8srequiredresources\n\n        import data.lib.exempt_container.is_exempt\n\n        violation[{"msg": msg}] {\n          general_violation[{"msg": msg, "field": "containers"}]\n        }\n\n        violation[{"msg": msg}] {\n          general_violation[{"msg": msg, "field": "initContainers"}]\n        }\n\n        general_violation[{"msg": msg, "field": field}] {\n          container := input.review.object.spec[field][_]\n          not is_exempt(container)\n          provided := {resource_type | container.resources.limits[resource_type]}\n          required := {resource_type | resource_type := input.parameters.limits[_]}\n          missing := required - provided\n          count(missing) > 0\n          msg := sprintf("container <%v> does not have <%v> limits defined", [container.name, missing])\n        }\n\n        general_violation[{"msg": msg, "field": field}] {\n          container := input.review.object.spec[field][_]\n          not is_exempt(container)\n          provided := {resource_type | container.resources.requests[resource_type]}\n          required := {resource_type | resource_type := input.parameters.requests[_]}\n          missing := required - provided\n          count(missing) > 0\n          msg := sprintf("container <%v> does not have <%v> requests defined", [container.name, missing])\n        }\n      libs:\n        - |\n          package lib.exempt_container\n\n          is_exempt(container) {\n              exempt_images := object.get(object.get(input, "parameters", {}), "exemptImages", [])\n              img := container.image\n              exemption := exempt_images[_]\n              _matches_exemption(img, exemption)\n          }\n\n          _matches_exemption(img, exemption) {\n              not endswith(exemption, "*")\n              exemption == img\n          }\n\n          _matches_exemption(img, exemption) {\n              endswith(exemption, "*")\n              prefix := trim_suffix(exemption, "*")\n              startswith(img, prefix)\n          }\n\n')),(0,r.kt)("h3",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper-library/master/library/general/containerresources/template.yaml\n")),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"container-limits-and-requests"),(0,r.kt)("blockquote",null,(0,r.kt)("details",null,(0,r.kt)("summary",null,"constraint"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: constraints.gatekeeper.sh/v1beta1\nkind: K8sRequiredResources\nmetadata:\n  name: container-must-have-limits-and-requests\nspec:\n  match:\n    kinds:\n      - apiGroups: [""]\n        kinds: ["Pod"]\n  parameters:\n    limits:\n      - cpu\n      - memory\n    requests:\n      - cpu\n      - memory\n\n')),(0,r.kt)("p",null,"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper-library/master/library/general/containerresources/samples/container-must-have-limits-and-requests/constraint.yaml\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"limits-and-requests-defined-allowed"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Pod\nmetadata:\n  name: opa-allowed\n  labels:\n    owner: me.agilebank.demo\nspec:\n  containers:\n    - name: opa\n      image: openpolicyagent/opa:0.9.2\n      args:\n        - "run"\n        - "--server"\n        - "--addr=localhost:8080"\n      resources:\n        limits:\n          cpu: "100m"\n          memory: "1Gi"\n        requests:\n          cpu: "100m"\n          memory: "1Gi"\n\n\n')),(0,r.kt)("p",null,"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper-library/master/library/general/containerresources/samples/container-must-have-limits-and-requests/limits-and-requests-defined-allowed.yaml\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"only-requests-defined-disallowed"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Pod\nmetadata:\n  name: opa-disallowed\n  labels:\n    owner: me.agilebank.demo\nspec:\n  containers:\n    - name: opa\n      image: openpolicyagent/opa:0.9.2\n      args:\n        - "run"\n        - "--server"\n        - "--addr=localhost:8080"\n      resources:\n        requests:\n          cpu: "100m"\n          memory: "2Gi"\n\n')),(0,r.kt)("p",null,"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper-library/master/library/general/containerresources/samples/container-must-have-limits-and-requests/only-requests-defined-disallowed.yaml\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"only-cpu-requests-and-memory-limits-defined-disallowed"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Pod\nmetadata:\n  name: opa-disallowed\n  labels:\n    owner: me.agilebank.demo\nspec:\n  containers:\n    - name: opa\n      image: openpolicyagent/opa:0.9.2\n      args:\n        - "run"\n        - "--server"\n        - "--addr=localhost:8080"\n      resources:\n        requests:\n          cpu: "100m"\n        limits:\n          memory: "2Gi"\n\n')),(0,r.kt)("p",null,"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper-library/master/library/general/containerresources/samples/container-must-have-limits-and-requests/only-cpu-requests-and-memory-limits-defined-disallowed.yaml\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"only-memory-limits-defined-disallowed"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Pod\nmetadata:\n  name: opa-disallowed\n  labels:\n    owner: me.agilebank.demo\nspec:\n  containers:\n    - name: opa\n      image: openpolicyagent/opa:0.9.2\n      args:\n        - "run"\n        - "--server"\n        - "--addr=localhost:8080"\n      resources:\n        limits:\n          memory: "2Gi"\n\n')),(0,r.kt)("p",null,"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper-library/master/library/general/containerresources/samples/container-must-have-limits-and-requests/only-memory-limits-defined-disallowed.yaml\n"))))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"container-cpu-requests-memory-limits-and-requests"),(0,r.kt)("blockquote",null,(0,r.kt)("details",null,(0,r.kt)("summary",null,"constraint"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: constraints.gatekeeper.sh/v1beta1\nkind: K8sRequiredResources\nmetadata:\n  name: container-must-have-cpu-requests-memory-limits-and-requests\nspec:\n  match:\n    kinds:\n      - apiGroups: [""]\n        kinds: ["Pod"]\n  parameters:\n    limits:\n      - memory\n    requests:\n      - cpu\n      - memory\n\n')),(0,r.kt)("p",null,"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper-library/master/library/general/containerresources/samples/container-must-have-cpu-requests-memory-limits-and-requests/constraint.yaml\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"limits-and-requests-defined-allowed"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Pod\nmetadata:\n  name: opa-allowed\n  labels:\n    owner: me.agilebank.demo\nspec:\n  containers:\n    - name: opa\n      image: openpolicyagent/opa:0.9.2\n      args:\n        - "run"\n        - "--server"\n        - "--addr=localhost:8080"\n      resources:\n        limits:\n          cpu: "100m"\n          memory: "1Gi"\n        requests:\n          cpu: "100m"\n          memory: "1Gi"\n\n\n')),(0,r.kt)("p",null,"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper-library/master/library/general/containerresources/samples/container-must-have-cpu-requests-memory-limits-and-requests/limits-and-requests-defined-allowed.yaml\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"only-cpu-requests-and-memory-limits-and-requests-defined-allowed"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Pod\nmetadata:\n  name: opa-disallowed\n  labels:\n    owner: me.agilebank.demo\nspec:\n  containers:\n    - name: opa\n      image: openpolicyagent/opa:0.9.2\n      args:\n        - "run"\n        - "--server"\n        - "--addr=localhost:8080"\n      resources:\n        limits:\n          memory: "2Gi"\n        requests:\n          cpu: "100m"\n          memory: "2Gi"\n\n')),(0,r.kt)("p",null,"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper-library/master/library/general/containerresources/samples/container-must-have-cpu-requests-memory-limits-and-requests/only-cpu-requests-and-memory-limits-and-requests-defined-allowed.yaml\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"only-requests-defined-disallowed"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Pod\nmetadata:\n  name: opa-disallowed\n  labels:\n    owner: me.agilebank.demo\nspec:\n  containers:\n    - name: opa\n      image: openpolicyagent/opa:0.9.2\n      args:\n        - "run"\n        - "--server"\n        - "--addr=localhost:8080"\n      resources:\n        requests:\n          cpu: "100m"\n          memory: "2Gi"\n\n')),(0,r.kt)("p",null,"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper-library/master/library/general/containerresources/samples/container-must-have-cpu-requests-memory-limits-and-requests/only-requests-defined-disallowed.yaml\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"only-memory-limits-defined-disallowed"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Pod\nmetadata:\n  name: opa-disallowed\n  labels:\n    owner: me.agilebank.demo\nspec:\n  containers:\n    - name: opa\n      image: openpolicyagent/opa:0.9.2\n      args:\n        - "run"\n        - "--server"\n        - "--addr=localhost:8080"\n      resources:\n        limits:\n          memory: "2Gi"\n\n')),(0,r.kt)("p",null,"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper-library/master/library/general/containerresources/samples/container-must-have-cpu-requests-memory-limits-and-requests/only-memory-limits-defined-disallowed.yaml\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"empty-resources-disallowed"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Pod\nmetadata:\n  name: opa-disallowed\n  labels:\n    owner: me.agilebank.demo\nspec:\n  containers:\n    - name: opa\n      image: openpolicyagent/opa:0.9.2\n      args:\n        - "run"\n        - "--server"\n        - "--addr=localhost:8080"\n      resources: {}\n\n')),(0,r.kt)("p",null,"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper-library/master/library/general/containerresources/samples/container-must-have-cpu-requests-memory-limits-and-requests/empty-resources-disallowed.yaml\n"))))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"no-enforcements"),(0,r.kt)("blockquote",null,(0,r.kt)("details",null,(0,r.kt)("summary",null,"constraint"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: constraints.gatekeeper.sh/v1beta1\nkind: K8sRequiredResources\nmetadata:\n  name: no-enforcements\nspec:\n  match:\n    kinds:\n      - apiGroups: [""]\n        kinds: ["Pod"]\n\n')),(0,r.kt)("p",null,"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper-library/master/library/general/containerresources/samples/no-enforcements/constraint.yaml\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"limits-and-requests-defined-allowed"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Pod\nmetadata:\n  name: opa-allowed\n  labels:\n    owner: me.agilebank.demo\nspec:\n  containers:\n    - name: opa\n      image: openpolicyagent/opa:0.9.2\n      args:\n        - "run"\n        - "--server"\n        - "--addr=localhost:8080"\n      resources:\n        limits:\n          cpu: "100m"\n          memory: "1Gi"\n        requests:\n          cpu: "100m"\n          memory: "1Gi"\n\n\n')),(0,r.kt)("p",null,"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper-library/master/library/general/containerresources/samples/no-enforcements/limits-and-requests-defined-allowed.yaml\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"only-requests-defined-allowed"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Pod\nmetadata:\n  name: opa-disallowed\n  labels:\n    owner: me.agilebank.demo\nspec:\n  containers:\n    - name: opa\n      image: openpolicyagent/opa:0.9.2\n      args:\n        - "run"\n        - "--server"\n        - "--addr=localhost:8080"\n      resources:\n        requests:\n          cpu: "100m"\n          memory: "2Gi"\n\n')),(0,r.kt)("p",null,"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper-library/master/library/general/containerresources/samples/no-enforcements/only-requests-defined-allowed.yaml\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"only-cpu-requests-and-memory-limits-defined-allowed"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Pod\nmetadata:\n  name: opa-disallowed\n  labels:\n    owner: me.agilebank.demo\nspec:\n  containers:\n    - name: opa\n      image: openpolicyagent/opa:0.9.2\n      args:\n        - "run"\n        - "--server"\n        - "--addr=localhost:8080"\n      resources:\n        requests:\n          cpu: "100m"\n        limits:\n          memory: "2Gi"\n\n')),(0,r.kt)("p",null,"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper-library/master/library/general/containerresources/samples/no-enforcements/only-cpu-requests-and-memory-limits-defined-allowed.yaml\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"empty-resources-allowed"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Pod\nmetadata:\n  name: opa-disallowed\n  labels:\n    owner: me.agilebank.demo\nspec:\n  containers:\n    - name: opa\n      image: openpolicyagent/opa:0.9.2\n      args:\n        - "run"\n        - "--server"\n        - "--addr=localhost:8080"\n      resources: {}\n\n')),(0,r.kt)("p",null,"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper-library/master/library/general/containerresources/samples/no-enforcements/empty-resources-allowed.yaml\n"))))))}c.isMDXComponent=!0}}]);