"use strict";(self.webpackChunkbaizhi_wiki=self.webpackChunkbaizhi_wiki||[]).push([[821],{3905:(e,n,a)=>{a.d(n,{Zo:()=>d,kt:()=>u});var t=a(7294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=t.createContext({}),c=function(e){var n=t.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},d=function(e){var n=c(e.components);return t.createElement(p.Provider,{value:n},e.children)},g={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},s=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=c(a),u=r,m=s["".concat(p,".").concat(u)]||s[u]||g[u]||o;return a?t.createElement(m,l(l({ref:n},d),{},{components:a})):t.createElement(m,l({ref:n},d))}));function u(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=s;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}s.displayName="MDXCreateElement"},4958:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var t=a(7462),r=(a(7294),a(3905));const o={},l="Golang",i={unversionedId:"blog/Golang",id:"blog/Golang",title:"Golang",description:"\u5b89\u88c5\u4f9d\u8d56",source:"@site/docs/blog/Golang.md",sourceDirName:"blog",slug:"/blog/Golang",permalink:"/docs/blog/Golang",draft:!1,editUrl:"https://github.com/baizhi958216/baizhi958216/tree/docusaurus/docs/blog/Golang.md",tags:[],version:"current",frontMatter:{},sidebar:"blog",previous:{title:"\u5728 github \u4e0a\u4f7f\u7528 ssh",permalink:"/docs/blog/Github-ssh-usage"},next:{title:"MariaDB \u5165\u95e8",permalink:"/docs/blog/MariaDB-beginning"}},p={},c=[{value:"\u5b89\u88c5\u4f9d\u8d56",id:"\u5b89\u88c5\u4f9d\u8d56",level:2},{value:"\u4f60\u7684\u9879\u76ee",id:"\u4f60\u7684\u9879\u76ee",level:2},{value:"\u8dd1\u8d77\u6765",id:"\u8dd1\u8d77\u6765",level:2},{value:"\u4ea4\u53c9\u7f16\u8bd1",id:"\u4ea4\u53c9\u7f16\u8bd1",level:2},{value:"\u5982\u679c\u9879\u76ee\u7528\u5230<code>cgo</code>(c/go \u8bed\u8a00\u4e4b\u95f4\u4e92\u76f8\u6c9f\u901a)\uff0c\u8fd8\u9700\u8981\u5b89\u88c5<code>aarch64-linux-gnu-gcc</code>",id:"\u5982\u679c\u9879\u76ee\u7528\u5230cgocgo-\u8bed\u8a00\u4e4b\u95f4\u4e92\u76f8\u6c9f\u901a\u8fd8\u9700\u8981\u5b89\u88c5aarch64-linux-gnu-gcc",level:4},{value:"\u8fd0\u884c\u4e00\u4e0b",id:"\u8fd0\u884c\u4e00\u4e0b",level:2}],d={toc:c};function g(e){let{components:n,...a}=e;return(0,r.kt)("wrapper",(0,t.Z)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"golang"},"Golang"),(0,r.kt)("h1",{id:"\u53ef\u80fd\u662f-go-\u7684\u7b2c\u4e00\u6b65"},"\u53ef\u80fd\u662f Go \u7684\u7b2c\u4e00\u6b65"),(0,r.kt)("h2",{id:"\u5b89\u88c5\u4f9d\u8d56"},"\u5b89\u88c5\u4f9d\u8d56"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo pacman -S go go-tools\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"go")," \u662f golang \u7684\u6807\u51c6\u7f16\u8bd1\u5668\uff0c\u8fd8\u6709\u4e00\u79cd\u662f gcc-go\uff0c\u4f46\u662f\u8fd8\u662f\u5efa\u8bae\u7528 go\uff0c\u7eb5\u4f7f gcc-go \u6709\u7384\u5b66\u4f18\u5316\uff0c\u539f\u751f\u81f3\u4e0a\uff01",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"go-tools")," \u5305\u542b\u4e86\u50cf",(0,r.kt)("inlineCode",{parentName:"p"},"godex, goimports, gorename..."),"\u8fd9\u4e9b\u4e1c\u897f\uff0c\u8be6\u60c5\u8bf7\u79fb\u6b65",(0,r.kt)("a",{parentName:"p",href:"https://archlinux.org/packages/community/x86_64/go-tools/"},"AUR")),(0,r.kt)("h2",{id:"\u4f60\u7684\u9879\u76ee"},"\u4f60\u7684\u9879\u76ee"),(0,r.kt)("p",null,"\u4e0b\u8f7d\u5b89\u88c5",(0,r.kt)("inlineCode",{parentName:"p"},"go.mod"),"\u91cc\u9762\u7684\u9879\u76ee\u4f9d\u8d56"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"go mod tidy;go mod download\n")),(0,r.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c$GOPATH \u662f\u5728\u7528\u6237\u76ee\u5f55\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"~/go"),"\u6587\u4ef6\u5939\u91cc\u9762\uff0c\u91cc\u9762\u6709\u7f16\u8bd1 golang \u6240\u9700\u5de5\u5177\u4ee5\u53ca\u5404\u79cd\u4f9d\u8d56\u5305\uff0c\u6bd4\u5982",(0,r.kt)("inlineCode",{parentName:"p"},"go.mod"),"\u91cc\u9762\u7684"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-mod"},"require (\n    github.com/dustin/go-humanize v1.0.0\n    github.com/golang/protobuf v1.4.2\n    github.com/spencercw/go-xz v0.0.0-20181128201811-c82a2123b492\n    github.com/vbauerster/mpb/v5 v5.3.0\n    google.golang.org/protobuf v1.25.0\n)\n")),(0,r.kt)("p",null,"\u5efa\u8bae\u9879\u76ee\u6e90\u7801\u653e\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"~/go/src/"),"\uff0c\u5f53\u7136\u6ca1\u4f5c\u5f3a\u5236\u8981\u6c42\u5c31\u662f\u4e86\u3002",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"go env")," \u6765\u67e5\u770b Go \u6240\u6709\u53d8\u91cf"),(0,r.kt)("h2",{id:"\u8dd1\u8d77\u6765"},"\u8dd1\u8d77\u6765"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"CGO_ENABLE=0 go build -trimpath -o ./hellogolang .\n")),(0,r.kt)("h2",{id:"\u4ea4\u53c9\u7f16\u8bd1"},"\u4ea4\u53c9\u7f16\u8bd1"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://go.dev/doc/install/source#environment"},"Go \u5b98\u65b9\u6587\u6863"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"go tool dist list"),"\u53ef\u67e5\u770b\u652f\u6301\u7684\u5e73\u53f0/\u67b6\u6784"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"[baizhi958216@TianXuan ~]$ go tool dist list\naix/ppc64\nandroid/386\nandroid/amd64\nandroid/arm\nandroid/arm64\ndarwin/amd64\ndarwin/arm64\ndragonfly/amd64\nfreebsd/386\nfreebsd/amd64\nfreebsd/arm\nfreebsd/arm64\nillumos/amd64\nios/amd64\nios/arm64\njs/wasm\nlinux/386\nlinux/amd64\nlinux/arm\nlinux/arm64\nlinux/mips\nlinux/mips64\nlinux/mips64le\nlinux/mipsle\nlinux/ppc64\nlinux/ppc64le\nlinux/riscv64\nlinux/s390x\nnetbsd/386\nnetbsd/amd64\nnetbsd/arm\nnetbsd/arm64\nopenbsd/386\nopenbsd/amd64\nopenbsd/arm\nopenbsd/arm64\nopenbsd/mips64\nplan9/386\nplan9/amd64\nplan9/arm\nsolaris/amd64\nwindows/386\nwindows/amd64\nwindows/arm\nwindows/arm64\n[baizhi958216@TianXuan ~]$\n")),(0,r.kt)("h4",{id:"\u5982\u679c\u9879\u76ee\u7528\u5230cgocgo-\u8bed\u8a00\u4e4b\u95f4\u4e92\u76f8\u6c9f\u901a\u8fd8\u9700\u8981\u5b89\u88c5aarch64-linux-gnu-gcc"},"\u5982\u679c\u9879\u76ee\u7528\u5230",(0,r.kt)("inlineCode",{parentName:"h4"},"cgo"),"(c/go \u8bed\u8a00\u4e4b\u95f4\u4e92\u76f8\u6c9f\u901a)\uff0c\u8fd8\u9700\u8981\u5b89\u88c5",(0,r.kt)("inlineCode",{parentName:"h4"},"aarch64-linux-gnu-gcc")),(0,r.kt)("p",null,"\u7f16\u8bd1"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"env GOOS=\u5e73\u53f0 GOARCH=\u67b6\u6784 go build -o hellogo_arm64\n")),(0,r.kt)("h2",{id:"\u8fd0\u884c\u4e00\u4e0b"},"\u8fd0\u884c\u4e00\u4e0b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"chmod +x hellogolang;./hellogolang\n")))}g.isMDXComponent=!0}}]);