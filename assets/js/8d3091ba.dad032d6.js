"use strict";(self.webpackChunkbaizhi_wiki=self.webpackChunkbaizhi_wiki||[]).push([[567],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(n),g=o,f=d["".concat(l,".").concat(g)]||d[g]||p[g]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3316:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const a={},i="ES6 \u89e3\u6784\u51fd\u6570",c={unversionedId:"blog/ES6-destructuring-function",id:"blog/ES6-destructuring-function",title:"ES6 \u89e3\u6784\u51fd\u6570",description:"\u4ece\u6570\u7ec4\u6216\u5bf9\u8c61\u4e2d\u63d0\u53d6\u503c\uff0c\u5bf9\u53d8\u91cf\u8fdb\u884c\u8d4b\u503c\uff0c\u79f0\u4e3a\u89e3\u6784\uff08Destructuring\uff09\u3002",source:"@site/docs/blog/ES6-destructuring-function.md",sourceDirName:"blog",slug:"/blog/ES6-destructuring-function",permalink:"/docs/blog/ES6-destructuring-function",draft:!1,editUrl:"https://github.com/baizhi958216/baizhi958216/tree/docusaurus/docs/blog/ES6-destructuring-function.md",tags:[],version:"current",frontMatter:{},sidebar:"blog",previous:{title:"Docker \u4e0a\u624b",permalink:"/docs/blog/Docker-beginning"},next:{title:"ES6 \u6a21\u5757\u5316",permalink:"/docs/blog/ES6-modules"}},l={},u=[{value:"\u4ece\u6570\u7ec4\u6216\u5bf9\u8c61\u4e2d\u63d0\u53d6\u503c\uff0c\u5bf9\u53d8\u91cf\u8fdb\u884c\u8d4b\u503c\uff0c\u79f0\u4e3a\u89e3\u6784\uff08Destructuring\uff09\u3002",id:"\u4ece\u6570\u7ec4\u6216\u5bf9\u8c61\u4e2d\u63d0\u53d6\u503c\u5bf9\u53d8\u91cf\u8fdb\u884c\u8d4b\u503c\u79f0\u4e3a\u89e3\u6784destructuring",level:2},{value:"\u6a21\u5f0f\u5339\u914d",id:"\u6a21\u5f0f\u5339\u914d",level:3}],s={toc:u};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"es6-\u89e3\u6784\u51fd\u6570"},"ES6 \u89e3\u6784\u51fd\u6570"),(0,o.kt)("h2",{id:"\u4ece\u6570\u7ec4\u6216\u5bf9\u8c61\u4e2d\u63d0\u53d6\u503c\u5bf9\u53d8\u91cf\u8fdb\u884c\u8d4b\u503c\u79f0\u4e3a\u89e3\u6784destructuring"},"\u4ece\u6570\u7ec4\u6216\u5bf9\u8c61\u4e2d\u63d0\u53d6\u503c\uff0c\u5bf9\u53d8\u91cf\u8fdb\u884c\u8d4b\u503c\uff0c\u79f0\u4e3a\u89e3\u6784\uff08Destructuring\uff09\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u89e3\u6784\u4e0d\u6210\u529f, \u5219\u4e3a undefined"),(0,o.kt)("h3",{id:"\u6a21\u5f0f\u5339\u914d"},"\u6a21\u5f0f\u5339\u914d"),(0,o.kt)("p",null,"\u4ece\u6570\u7ec4\u4e2d\u63d0\u53d6\u503c\uff0c\u6309\u7167\u5bf9\u5e94\u4f4d\u7f6e\uff0c\u5bf9\u53d8\u91cf\u8d4b\u503c\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-JavaScript"},"let user = {\n    name:'baizhi958216',\n    password:'123456'\n}\n// \u5141\u8bb8\u8d4b\u4e88\u65b0\u7684\u53d8\u91cf\u540d x:y, \u6700\u7ec8\u53d8\u91cf\u540d\u4e3a y\nlet {name:baizhiname,password} = user\n// \u8f93\u51fabaizhi958216 123456\nconsole.log(baizhiname,password)\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-JavaScript"},"let [a,b,c,d,e] = [1,2,3,4,5]\n// \u8f93\u51fa1\nconsole.log(a)\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-JavaScript"},"let [a,...b] = [1,2,3,4,5,6,7,8]\n// \u8f93\u51fa1\nconsole.log(a);\n// \u8f93\u51fa[2,3,4,5,6,7,8] \u6570\u7ec4\nconsole.log(b);\n")))}p.isMDXComponent=!0}}]);