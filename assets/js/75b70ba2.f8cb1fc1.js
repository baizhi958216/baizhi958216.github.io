"use strict";(self.webpackChunkbaizhi_wiki=self.webpackChunkbaizhi_wiki||[]).push([[90],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(t),m=a,g=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return t?r.createElement(g,l(l({ref:n},s),{},{components:t})):r.createElement(g,l({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=u;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1801:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=t(7462),a=(t(7294),t(3905));const o={},l="NodeJs \u914d\u7f6e NPM \u548c Yarn(Windows)",i={unversionedId:"blog/NPM-Yarn",id:"blog/NPM-Yarn",title:"NodeJs \u914d\u7f6e NPM \u548c Yarn(Windows)",description:"\u8bf7\u6ce8\u610f, npm -g\u5df2\u4e0d\u518d\u9002\u7528, \u8bf7\u4f7f\u7528--global",source:"@site/docs/blog/NPM-Yarn.md",sourceDirName:"blog",slug:"/blog/NPM-Yarn",permalink:"/docs/blog/NPM-Yarn",draft:!1,editUrl:"https://github.com/baizhi958216/baizhi958216/tree/docusaurus/docs/blog/NPM-Yarn.md",tags:[],version:"current",frontMatter:{},sidebar:"blog",previous:{title:"VSCode \u914d\u7f6e",permalink:"/docs/blog/My-VSCode"},next:{title:"Hi",permalink:"/docs/blog/intro"}},p={},c=[{value:"\u5b89\u88c5 NodeJs",id:"\u5b89\u88c5-nodejs",level:2},{value:"\u914d\u7f6e\u76ee\u5f55",id:"\u914d\u7f6e\u76ee\u5f55",level:2},{value:"\u914d\u7f6e\u5168\u5c40\u6a21\u5757\u8def\u5f84",id:"\u914d\u7f6e\u5168\u5c40\u6a21\u5757\u8def\u5f84",level:3},{value:"\u914d\u7f6e\u7f13\u5b58\u8def\u5f84",id:"\u914d\u7f6e\u7f13\u5b58\u8def\u5f84",level:3},{value:"\u914d\u7f6e npm \u73af\u5883\u53d8\u91cf",id:"\u914d\u7f6e-npm-\u73af\u5883\u53d8\u91cf",level:3},{value:"\u914d\u7f6e npm \u56fd\u5185\u955c\u50cf\u6e90",id:"\u914d\u7f6e-npm-\u56fd\u5185\u955c\u50cf\u6e90",level:2},{value:"Yarn",id:"yarn",level:2},{value:"\u5b89\u88c5 yarn",id:"\u5b89\u88c5-yarn",level:3},{value:"\u914d\u7f6e yarn \u56fd\u5185\u955c\u50cf\u6e90",id:"\u914d\u7f6e-yarn-\u56fd\u5185\u955c\u50cf\u6e90",level:3}],s={toc:c};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"nodejs-\u914d\u7f6e-npm-\u548c-yarnwindows"},"NodeJs \u914d\u7f6e NPM \u548c Yarn(Windows)"),(0,a.kt)("p",null,"\u8bf7\u6ce8\u610f, npm ",(0,a.kt)("inlineCode",{parentName:"p"},"-g"),"\u5df2\u4e0d\u518d\u9002\u7528, \u8bf7\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"--global")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm WARN config global `--global`, `--local`are deprecated. Use`--location=global` instead.\n")),(0,a.kt)("h2",{id:"\u5b89\u88c5-nodejs"},"\u5b89\u88c5 NodeJs"),(0,a.kt)("p",null,"\u4e0b\u8f7d\u5730\u5740: ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/en/download/"},"https://nodejs.org/en/download/")),(0,a.kt)("h2",{id:"\u914d\u7f6e\u76ee\u5f55"},"\u914d\u7f6e\u76ee\u5f55"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://s1.328888.xyz/2022/07/30/FO9tS.png",alt:"FO9tS.png"})),(0,a.kt)("h3",{id:"\u914d\u7f6e\u5168\u5c40\u6a21\u5757\u8def\u5f84"},"\u914d\u7f6e\u5168\u5c40\u6a21\u5757\u8def\u5f84"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'npm config set prefix "C:\\Users\\14752\\.node\\node_global" --location=global\n')),(0,a.kt)("h3",{id:"\u914d\u7f6e\u7f13\u5b58\u8def\u5f84"},"\u914d\u7f6e\u7f13\u5b58\u8def\u5f84"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'npm config set cache "C:\\Users\\14752\\.node\\node_cache" --location=global\n')),(0,a.kt)("h3",{id:"\u914d\u7f6e-npm-\u73af\u5883\u53d8\u91cf"},"\u914d\u7f6e npm \u73af\u5883\u53d8\u91cf"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://s1.328888.xyz/2022/07/30/FOInC.png",alt:"FOInC.png"})),(0,a.kt)("h2",{id:"\u914d\u7f6e-npm-\u56fd\u5185\u955c\u50cf\u6e90"},"\u914d\u7f6e npm \u56fd\u5185\u955c\u50cf\u6e90"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm config set registry=https://registry.npmmirror.com --location=global\n")),(0,a.kt)("h2",{id:"yarn"},"Yarn"),(0,a.kt)("h3",{id:"\u5b89\u88c5-yarn"},"\u5b89\u88c5 yarn"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install yarn --location=global\n")),(0,a.kt)("h3",{id:"\u914d\u7f6e-yarn-\u56fd\u5185\u955c\u50cf\u6e90"},"\u914d\u7f6e yarn \u56fd\u5185\u955c\u50cf\u6e90"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn config set registry https://registry.npmmirror.com --location=global\n")))}d.isMDXComponent=!0}}]);