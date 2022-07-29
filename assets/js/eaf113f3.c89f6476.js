"use strict";(self.webpackChunkbaizhi_wiki=self.webpackChunkbaizhi_wiki||[]).push([[17],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=o,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4197:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const i={},a="VSCode \u914d\u7f6e",s={unversionedId:"blog/My-VSCode",id:"blog/My-VSCode",title:"VSCode \u914d\u7f6e",description:"Setting.json",source:"@site/docs/blog/My-VSCode.md",sourceDirName:"blog",slug:"/blog/My-VSCode",permalink:"/docs/blog/My-VSCode",draft:!1,editUrl:"https://github.com/baizhi958216/baizhi958216/tree/docusaurus/docs/blog/My-VSCode.md",tags:[],version:"current",frontMatter:{},sidebar:"blog",previous:{title:"MariaDB \u5165\u95e8",permalink:"/docs/blog/MariaDB-beginning"},next:{title:"\u914d\u7f6e NPM \u548c Yarn(Windows)",permalink:"/docs/blog/NPM-Yarn"}},c={},l=[{value:"Setting.json",id:"settingjson",level:2},{value:"\u5728 Linux",id:"\u5728-linux",level:2}],u={toc:l};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"vscode-\u914d\u7f6e"},"VSCode \u914d\u7f6e"),(0,o.kt)("h2",{id:"settingjson"},"Setting.json"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "workbench.iconTheme": "material-icon-theme",\n  "[javascript]": {\n    "editor.defaultFormatter": "esbenp.prettier-vscode"\n  },\n  "workbench.colorTheme": "Aura Soft Dark (Soft Text)",\n  "editor.fontFamily": "Fira Code,\\"MiSans\\"",\n  "editor.fontLigatures": true,\n  "editor.fontWeight": "450",\n  "[jsonc]": {\n    "editor.defaultFormatter": "esbenp.prettier-vscode"\n  },\n  "editor.formatOnSave": true,\n  "editor.fontSize": 16\n}\n')),(0,o.kt)("h2",{id:"\u5728-linux"},"\u5728 Linux"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "workbench.iconTheme": "material-icon-theme",\n  "workbench.colorTheme": "Light Pink",\n  "git.enableSmartCommit": true,\n  // \u4fee\u6539\u6ce8\u91ca\u989c\u8272\n  "editor.tokenColorCustomizations": {\n    "comments": {\n      "foreground": "#99a9f0"\n    }\n  },\n  // \u914d\u7f6e\u6587\u4ef6\u7c7b\u578b\u8bc6\u522b\n  "files.associations": {\n    "*.js": "javascript",\n    "*.json": "jsonc",\n    "*.cjson": "jsonc",\n    "*.wxss": "css",\n    "*.wxs": "javascript"\n  },\n  "extensions.ignoreRecommendations": false,\n  "files.exclude": {\n    "**/.DS_Store": true,\n    "**/.git": true,\n    "**/.hg": true,\n    "**/.svn": true,\n    "**/CVS": true,\n    "**/node_modules": false,\n    "**/tmp": true\n  },\n  // "javascript.implicitProjectConfig.experimentalDecorators": true,\n  "explorer.confirmDragAndDrop": false,\n  "typescript.updateImportsOnFileMove.enabled": "prompt",\n  "git.confirmSync": false,\n  "editor.tabSize": 2,\n  "editor.fontFamily": "Fira Code,\\"MiSans\\"",\n  "editor.fontLigatures": true,\n  "editor.fontWeight": "450",\n  "editor.fontSize": 16,\n  "[json]": {},\n  "editor.tabCompletion": "on",\n  "vsicons.projectDetection.autoReload": true,\n  "[html]": {\n    "editor.defaultFormatter": "vscode.html-language-features"\n  },\n  "debug.console.fontSize": 14,\n  "vsicons.dontShowNewVersionMessage": true,\n  "editor.minimap.enabled": true,\n  // vue eslint start \u4fdd\u5b58\u65f6\u81ea\u52a8\u683c\u5f0f\u5316\u4ee3\u7801\n  "editor.formatOnSave": true,\n  // eslint\u914d\u7f6e\u9879\uff0c\u4fdd\u5b58\u65f6\u81ea\u52a8\u4fee\u590d\u9519\u8bef\n  "editor.codeActionsOnSave": {\n    "source.fixAll": true\n  },\n  "vetur.ignoreProjectWarning": true,\n  // \u8ba9vetur\u4f7f\u7528vs\u81ea\u5e26\u7684js\u683c\u5f0f\u5316\u5de5\u5177\n  // uni-app\u548cvue \u9879\u76ee\u4f7f\u7528\n  "vetur.format.defaultFormatter.js": "vscode-typescript",\n  "javascript.format.semicolons": "remove",\n  // // \u6307\u5b9a *.vue \u6587\u4ef6\u7684\u683c\u5f0f\u5316\u5de5\u5177\u4e3avetur\n  "[vue]": {\n    "editor.defaultFormatter": "Vue.volar"\n  },\n  // // \u6307\u5b9a *.js \u6587\u4ef6\u7684\u683c\u5f0f\u5316\u5de5\u5177\u4e3avscode\u81ea\u5e26\n  "[javascript]": {\n    "editor.defaultFormatter": "vscode.typescript-language-features"\n  },\n  // // \u9ed8\u8ba4\u4f7f\u7528prettier\u683c\u5f0f\u5316\u652f\u6301\u7684\u6587\u4ef6\n  "editor.defaultFormatter": "esbenp.prettier-vscode",\n  "prettier.jsxBracketSameLine": true,\n  // \u51fd\u6570\u524d\u9762\u52a0\u4e2a\u7a7a\u683c\n  "javascript.format.insertSpaceBeforeFunctionParenthesis": true,\n  "prettier.singleQuote": true,\n  "prettier.semi": false,\n  // eslint end\n  // react\n  // \u5f53\u6309tab\u952e\u7684\u65f6\u5019\uff0c\u4f1a\u81ea\u52a8\u63d0\u793a\n  "emmet.triggerExpansionOnTab": true,\n  "emmet.showAbbreviationSuggestions": true,\n  "emmet.includeLanguages": {\n    // jsx\u7684\u63d0\u793a\n    "javascript": "javascriptreact",\n    "vue-html": "html",\n    "vue": "html",\n    "wxml": "html"\n  },\n  // end\n  "[jsonc]": {\n    "editor.defaultFormatter": "vscode.json-language-features"\n  },\n  // @\u8def\u5f84\u63d0\u793a\n  "path-intellisense.mappings": {\n    "@": "${workspaceRoot}/src"\n  },\n  "git.ignoreMissingGitWarning": true,\n  "[java]": {\n    "editor.defaultFormatter": "redhat.java"\n  },\n  "redhat.telemetry.enabled": true,\n  "[xml]": {\n    "editor.defaultFormatter": "redhat.vscode-xml"\n  },\n  "editor.largeFileOptimizations": false,\n  "workbench.editor.splitInGroupLayout": "vertical",\n  "liveServer.settings.CustomBrowser": "chrome",\n  "vetur.validation.templateProps": true,\n  "terminal.integrated.fontFamily": "monospace",\n  "security.workspace.trust.startupPrompt": "never",\n  "security.workspace.trust.emptyWindow": false,\n  "security.workspace.trust.banner": "never",\n  "security.workspace.trust.enabled": false\n}\n')))}d.isMDXComponent=!0}}]);