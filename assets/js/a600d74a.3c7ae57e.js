"use strict";(self.webpackChunkbaizhi_wiki=self.webpackChunkbaizhi_wiki||[]).push([[846],{3905:(e,n,a)=>{a.d(n,{Zo:()=>c,kt:()=>m});var r=a(7294);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,r)}return a}function t(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function d(e,n){if(null==e)return{};var a,r,i=function(e,n){if(null==e)return{};var a,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=r.createContext({}),s=function(e){var n=r.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):t(t({},n),e)),a},c=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var a=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),p=s(a),m=i,g=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return a?r.createElement(g,t(t({ref:n},c),{},{components:a})):r.createElement(g,t({ref:n},c))}));function m(e,n){var a=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=a.length,t=new Array(o);t[0]=p;var d={};for(var l in n)hasOwnProperty.call(n,l)&&(d[l]=n[l]);d.originalType=e,d.mdxType="string"==typeof e?e:i,t[1]=d;for(var s=2;s<o;s++)t[s]=a[s];return r.createElement.apply(null,t)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},3965:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>s});var r=a(7462),i=(a(7294),a(3905));const o={},t="\u5b89\u5353\u7b2c\u4e09\u65b9ROM\u6e90\u7801\u7f16\u8bd1",d={unversionedId:"Build-custom-android-rom",id:"Build-custom-android-rom",title:"\u5b89\u5353\u7b2c\u4e09\u65b9ROM\u6e90\u7801\u7f16\u8bd1",description:"\u7b14\u8005\u7528\u7684\u662f`ArchLinux`",source:"@site/docs/Build-custom-android-rom.md",sourceDirName:".",slug:"/Build-custom-android-rom",permalink:"/docs/Build-custom-android-rom",draft:!1,editUrl:"https://github.com/baizhi958216/baizhi958216/tree/docusaurus/docs/Build-custom-android-rom.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"OpenHarmony\u6298\u817e\u8bb0",permalink:"/docs/Build-OpenHarmony"},next:{title:"\u62c9\u6e90\u7801\u7f16\u8bd1UE5",permalink:"/docs/Build-unreal-5-from-source"}},l={},s=[{value:"\u914d\u7f6e\u73af\u5883",id:"\u914d\u7f6e\u73af\u5883",level:2},{value:"\u540c\u6b65\u6e90\u7801",id:"\u540c\u6b65\u6e90\u7801",level:2},{value:"\u521d\u59cb\u5316repo",id:"\u521d\u59cb\u5316repo",level:3},{value:"\u5f00\u59cb\u540c\u6b65",id:"\u5f00\u59cb\u540c\u6b65",level:3},{value:"\u7f16\u8bd1",id:"\u7f16\u8bd1",level:2},{value:"options:",id:"options",level:3},{value:"\u5b8c\u6210",id:"\u5b8c\u6210",level:2},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",level:2}],c={toc:s};function u(e){let{components:n,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u5b89\u5353\u7b2c\u4e09\u65b9rom\u6e90\u7801\u7f16\u8bd1"},"\u5b89\u5353\u7b2c\u4e09\u65b9ROM\u6e90\u7801\u7f16\u8bd1"),(0,i.kt)("h1",{id:"\u4ee5blissroms\u5b89\u535312\u4e3a\u4f8b"},"\u4ee5BlissROMs\u5b89\u535312\u4e3a\u4f8b"),(0,i.kt)("p",null,"\u7b14\u8005\u7528\u7684\u662f",(0,i.kt)("inlineCode",{parentName:"p"},"ArchLinux")),(0,i.kt)("h2",{id:"\u914d\u7f6e\u73af\u5883"},"\u914d\u7f6e\u73af\u5883"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yay lineageos_devel\n# \u67d0\u4e9b\u8bbe\u5907\u7f16\u8bd1\u5185\u6838\u7684\u65f6\u5019\u53ef\u80fd\u9700\u8981\u7528\u5230data\u52a0\u5bc6\uff0clibcrypt\u5728libxcrypt-compat\u91cc\n# \u6211\u7edd\u5bf9\u4e0d\u662f\u6307haydn\uff0c\u7edd\u5bf9\u4e0d\u662fhaydn\u54e6\nsudo pacman -S libxcrypt-compat\n")),(0,i.kt)("h2",{id:"\u540c\u6b65\u6e90\u7801"},"\u540c\u6b65\u6e90\u7801"),(0,i.kt)("h3",{id:"\u521d\u59cb\u5316repo"},"\u521d\u59cb\u5316repo"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir blissroms;cd blissroms;repo init --depth=1 -u https://github.com/BlissRoms/platform_manifest.git -b arcadia-next\n")),(0,i.kt)("p",null,"\u8f93\u51fa"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"Downloading Repo source from https://gerrit.googlesource.com/git-repo\nrepo: Updating release signing keys to keyset ver 2.3\nDownloading manifest from https://github.com/BlissRoms/platform_manifest.git\nremote: Enumerating objects: 7102, done.\nremote: Counting objects: 100% (694/694), done.\nremote: Compressing objects: 100% (312/312), done.\nremote: Total 7102 (delta 437), reused 623 (delta 382), pack-reused 6408\n\nYour identity is: baizhi958216 <1475289190@qq.com>\nIf you want to change this, please re-run 'repo init' with --config-name\n# \u8be2\u95ee\u662f\u5426\u5728commit\u663e\u793a\u989c\u8272 (y/n)\nTesting colorized output (for 'repo diff', 'repo status'):\n  black    red      green    yellow   blue     magenta   cyan     white \n  bold     dim      ul       reverse \nEnable color display in this user account (y/N)? y\n\nrepo has been initialized in /home/baizhi958216/blissroms/\nIf this is not the directory in which you want to initialize repo, please run:\n   rm -r /home/baizhi958216/blissroms//.repo\nand try again\n")),(0,i.kt)("h3",{id:"\u5f00\u59cb\u540c\u6b65"},"\u5f00\u59cb\u540c\u6b65"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"repo sync -c --force-sync --no-tags --no-clone-bundle -j$(nproc --all) --optimized-fetch --prune\n")),(0,i.kt)("p",null,"\u8f93\u51fa"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"remote: Total 0 (delta 0), reused 0 (delta 0), pack-reused 0\nFetching: 100% (1107/1107), done in 28m5.487s\nhardware/qcom-caf/msm8953/audio: Shared project android_hardware_qcom_audio found, disabling pruning.\nhardware/qcom-caf/msm8953/display: Shared project android_hardware_qcom_display found, disabling pruning.\nhardware/qcom-caf/msm8953/media: Shared project android_hardware_qcom_media found, disabling pruning.\nhardware/qcom-caf/msm8996/audio: Shared project android_hardware_qcom_audio found, disabling pruning.\nhardware/qcom-caf/msm8996/display: Shared project android_hardware_qcom_display found, disabling pruning.\nhardware/qcom-caf/msm8996/media: Shared project android_hardware_qcom_media found, disabling pruning.\nhardware/qcom-caf/msm8998/audio: Shared project android_hardware_qcom_audio found, disabling pruning.\nhardware/qcom-caf/msm8998/display: Shared project android_hardware_qcom_display found, disabling pruning.\nhardware/qcom-caf/msm8998/media: Shared project android_hardware_qcom_media found, disabling pruning.\nhardware/qcom-caf/sdm660/display: Shared project platform_hardware_qcom_display found, disabling pruning.\nhardware/qcom-caf/sdm845/audio: Shared project android_hardware_qcom_audio found, disabling pruning.\nhardware/qcom-caf/sdm845/display: Shared project android_hardware_qcom_display found, disabling pruning.\nhardware/qcom-caf/sdm845/media: Shared project android_hardware_qcom_media found, disabling pruning.\nhardware/qcom-caf/sm8150/audio: Shared project android_hardware_qcom_audio found, disabling pruning.\nhardware/qcom-caf/sm8150/display: Shared project android_hardware_qcom_display found, disabling pruning.\nhardware/qcom-caf/sm8150/media: Shared project android_hardware_qcom_media found, disabling pruning.\nhardware/qcom-caf/sm8250/audio: Shared project android_hardware_qcom_audio found, disabling pruning.\nhardware/qcom-caf/sm8250/display: Shared project platform_hardware_qcom_display found, disabling pruning.\nhardware/qcom-caf/sm8250/media: Shared project android_hardware_qcom_media found, disabling pruning.\nhardware/qcom-caf/sm8350/audio: Shared project android_hardware_qcom_audio found, disabling pruning.\nhardware/qcom-caf/sm8350/display: Shared project android_hardware_qcom_display found, disabling pruning.\nhardware/qcom-caf/sm8350/media: Shared project android_hardware_qcom_media found, disabling pruning.\nhardware/qcom-caf/wlan: Shared project android_hardware_qcom_wlan found, disabling pruning.\nhardware/qcom/audio: Shared project android_hardware_qcom_audio found, disabling pruning.\nhardware/qcom/wlan: Shared project android_hardware_qcom_wlan found, disabling pruning.\nvendor/nxp/opensource/pn5xx/halimpl: Shared project android_vendor_nxp_opensource_halimpl found, disabling pruning.\nvendor/nxp/opensource/pn5xx/hidlimpl: Shared project android_vendor_nxp_opensource_hidlimpl found, disabling pruning.\nvendor/nxp/opensource/sn100x/halimpl: Shared project android_vendor_nxp_opensource_halimpl found, disabling pruning.\nvendor/nxp/opensource/sn100x/hidlimpl: Shared project android_vendor_nxp_opensource_hidlimpl found, disabling pruning.\nGarbage collecting: 37% [16 jobs] (411/1107) started platform/external/rust/crates/fallible-streaming-iteratoGarbage collecting: 37% [14 jobs] (420/1107) finished platform/external/rust/crates/fallible-streaming-iteratGarbage collecting: 68% [16 jobs] (756/1107) started kernel/prebuilts/common-modules/virtual-device/5.10/x86-Garbage collecting: 68% [16 jobs] (756/1107) started kernel/prebuilts/common-modules/virtual-device/5.10/arm6Garbage collecting: 68% [16 jobs] (757/1107) started kernel/prebuilts/common-modules/virtual-device/5.4/x86-6Garbage collecting: 68% [16 jobs] (758/1107) started kernel/prebuilts/common-modules/virtual-device/mainline/Garbage collecting: 68% [16 jobs] (755/1107) started kernel/prebuilts/common-modules/virtual-device/4.19/arm6Garbage collecting: 68% [16 jobs] (758/1107) started kernel/prebuilts/common-modules/virtual-device/mainline/Garbage collecting: 68% [15 jobs] (763/1107) finished kernel/prebuilts/common-modules/virtual-device/mainlineGarbage collecting: 68% [16 jobs] (755/1107) started kernel/prebuilts/common-modules/virtual-device/4.19/x86-Garbage collecting: 69% [15 jobs] (766/1107) finished kernel/prebuilts/common-modules/virtual-device/4.19/armGarbage collecting: 69% [16 jobs] (768/1107) finished kernel/prebuilts/common-modules/virtual-device/5.4/arm6Garbage collecting: 68% [15 jobs] (762/1107) finished kernel/prebuilts/common-modules/virtual-device/5.10/armGarbage collecting: 69% [16 jobs] (770/1107) finished kernel/prebuilts/common-modules/virtual-device/4.19/x86Garbage collecting: 69% [14 jobs] (764/1107) finished kernel/prebuilts/common-modules/virtual-device/5.4/x86-Garbage collecting: 69% [16 jobs] (771/1107) finished kernel/prebuilts/common-modules/virtual-device/mainlineGarbage collecting: 70% [16 jobs] (775/1107) started platform/packages/apps/Car/DebuggingRestrictionControlleGarbage collecting: 71% [16 jobs] (786/1107) finished platform/packages/apps/Car/DebuggingRestrictionControllGarbage collecting: 69% [15 jobs] (765/1107) finished kernel/prebuilts/common-modules/virtual-device/5.10/x86Garbage collecting: 82% [15 jobs] (916/1107) started android_prebuilts_gcc_darwin-x86_arm_arm-linux-androideaGarbage collecting: 82% [16 jobs] (916/1107) started android_prebuilts_gcc_darwin-x86_aarch64_aarch64-linux-aGarbage collecting: 82% [15 jobs] (918/1107) started android_prebuilts_gcc_darwin-x86_x86_x86_64-linux-androiGarbage collecting: 83% [16 jobs] (920/1107) started android_prebuilts_gcc_linux-x86_arm_arm-linux-androideabGarbage collecting: 83% [15 jobs] (923/1107) finished android_prebuilts_gcc_darwin-x86_aarch64_aarch64-linux-Garbage collecting: 83% [16 jobs] (924/1107) finished android_prebuilts_gcc_darwin-x86_x86_x86_64-linux-androGarbage collecting: 83% [16 jobs] (923/1107) started android_prebuilts_gcc_linux-x86_x86_x86_64-linux-androidGarbage collecting: 83% [16 jobs] (926/1107) finished android_prebuilts_gcc_darwin-x86_arm_arm-linux-androideGarbage collecting: 82% [15 jobs] (918/1107) started platform/prebuilts/gcc/darwin-x86/host/i686-apple-darwinGarbage collecting: 82% [16 jobs] (918/1107) started android_prebuilts_gcc_linux-x86_aarch64_aarch64-linux-anGarbage collecting: 83% [16 jobs] (921/1107) started platform/prebuilts/gcc/linux-x86/host/x86_64-w64-mingw32Garbage collecting: 83% [16 jobs] (920/1107) started platform/prebuilts/gcc/linux-x86/host/x86_64-linux-glibcGarbage collecting: 84% [16 jobs] (932/1107) finished platform/prebuilts/gcc/darwin-x86/host/i686-apple-darwiGarbage collecting: 84% [16 jobs] (933/1107) finished android_prebuilts_gcc_linux-x86_x86_x86_64-linux-androiGarbage collecting: 84% [15 jobs] (935/1107) finished android_prebuilts_gcc_linux-x86_aarch64_aarch64-linux-aGarbage collecting: 84% [15 jobs] (938/1107) finished platform/prebuilts/gcc/linux-x86/host/x86_64-linux-glibGarbage collecting: 83% [15 jobs] (925/1107) finished android_prebuilts_gcc_linux-x86_arm_arm-linux-androideaGarbage collecting: 84% [16 jobs] (939/1107) finished platform/prebuilts/gcc/linux-x86/host/x86_64-w64-mingw3Garbage collecting: 98% [15 jobs] (1093/1107) finished android_vendor_qcom_opensource_bluetooth-commonsys-intGarbage collecting: 100% (1107/1107), done in 2.607s\n\u6b63\u5728\u66f4\u65b0\u6587\u4ef6: 100% (7979/7979), \u5b8c\u6210.xternal/rust/crates/arbitrary\u6b63\u5728\u66f4\u65b0\u6587\u4ef6: 100% (7979/7979)\n\u6b63\u5728\u66f4\u65b0\u6587\u4ef6: 100% (11068/11068), \u5b8c\u6210.ternal/rust/crates/either\u6b63\u5728\u66f4\u65b0\u6587\u4ef6: 100% (11068/11068)\n\u6b63\u5728\u66f4\u65b0\u6587\u4ef6: 100% (12660/12660), \u5b8c\u6210.ternal/rust/crates/macaddr\u6b63\u5728\u66f4\u65b0\u6587\u4ef6: 100% (12660/12660)\nChecking out:  8% (99/1107) platform/external/rust/crates/fallible-streaming-iterator\u6b63\u5728\u66f4\u65b0\u6587\u4ef6:  52% (1193Checking out: 17% (189/1107) platform/external/rust/crates/unicode-normalization\u6b63\u5728\u66f4\u65b0\u6587\u4ef6:  98% (4713/4809Checking out: 17% (190/1107) platform/external/rust/crates/unicode-segmentation\u6b63\u5728\u66f4\u65b0\u6587\u4ef6:  36% (3934/10926\u6b63\u5728\u66f4\u65b0\u6587\u4ef6: 100% (4809/4809), \u5b8c\u6210./external/rust/crates/unicode-xid\u6b63\u5728\u66f4\u65b0\u6587\u4ef6:  37% (4043/10926)\n\u6b63\u5728\u66f4\u65b0\u6587\u4ef6: 100% (2294/2294), \u5b8c\u6210.\n\u6b63\u5728\u66f4\u65b0\u6587\u4ef6: 100% (4620/4620), \u5b8c\u6210.\n\u6b63\u5728\u66f4\u65b0\u6587\u4ef6: 100% (8054/8054), \u5b8c\u6210./external/gflags\u6b63\u5728\u66f4\u65b0\u6587\u4ef6:  51% (4107/8052)\n\u6b63\u5728\u66f4\u65b0\u6587\u4ef6: 100% (10926/10926), \u5b8c\u6210.xternal/glide\u6b63\u5728\u66f4\u65b0\u6587\u4ef6:  99% (10817/10926)\n\u6b63\u5728\u66f4\u65b0\u6587\u4ef6: 100% (8917/8917), \u5b8c\u6210./external/objenesis\u6b63\u5728\u66f4\u65b0\u6587\u4ef6:  74% (5959/8052)\n\u6b63\u5728\u66f4\u65b0\u6587\u4ef6: 100% (8052/8052), \u5b8c\u6210.\n\u6b63\u5728\u66f4\u65b0\u6587\u4ef6: 100% (6102/6102), \u5b8c\u6210./hardware/google/graphics/common\u6b63\u5728\u66f4\u65b0\u6587\u4ef6:  31% (4992/16102)\n\u6b63\u5728\u66f4\u65b0\u6587\u4ef6: 100% (1504/1504), \u5b8c\u6210.\n\u6b63\u5728\u66f4\u65b0\u6587\u4ef6: 100% (4561/4561), \u5b8c\u6210./hardware/qcom/sdm845/thermal\u6b63\u5728\u66f4\u65b0\u6587\u4ef6:  76% (3467/4561)\n\u6b63\u5728\u66f4\u65b0\u6587\u4ef6: 100% (6810/6810), \u5b8c\u6210.\n\u6b63\u5728\u66f4\u65b0\u6587\u4ef6: 100% (21683/21683), \u5b8c\u6210.\n\u6b63\u5728\u66f4\u65b0\u6587\u4ef6: 100% (5859/5859), \u5b8c\u6210.\n\u6b63\u5728\u66f4\u65b0\u6587\u4ef6: 100% (14/14), \u5b8c\u6210.\n\u6b63\u5728\u66f4\u65b0\u6587\u4ef6: 100% (7888/7888), \u5b8c\u6210.\n\u6b63\u5728\u66f4\u65b0\u6587\u4ef6: 100% (9142/9142), \u5b8c\u6210.\n\u6b63\u5728\u66f4\u65b0\u6587\u4ef6: 100% (16102/16102), \u5b8c\u6210.\n\u6b63\u5728\u66f4\u65b0\u6587\u4ef6: 100% (2238/2238), \u5b8c\u6210.external_setupcompat\u6b63\u5728\u66f4\u65b0\u6587\u4ef6:  98% (2194/2238)\n\u6b63\u5728\u66f4\u65b0\u6587\u4ef6: 100% (3209/3209), \u5b8c\u6210./external/sqlite\u6b63\u5728\u66f4\u65b0\u6587\u4ef6: 100% (3209/3209)\n\u6b63\u5728\u66f4\u65b0\u6587\u4ef6: 100% (24361/24361), \u5b8c\u6210.xternal/protobuf\u6b63\u5728\u66f4\u65b0\u6587\u4ef6: 100% (24361/24361)\n\u6b63\u5728\u66f4\u65b0\u6587\u4ef6: 100% (5477/5477), \u5b8c\u6210./external/python/dateutil\u6b63\u5728\u66f4\u65b0\u6587\u4ef6:  23% (22647/98465)\n\u6b63\u5728\u66f4\u65b0\u6587\u4ef6: 100% (14/14), \u5b8c\u6210.form/external/arm-optimized-routines\u6b63\u5728\u66f4\u65b0\u6587\u4ef6: 100% (14/14)\nChecking out: 49% (545/1107) kernel/prebuilts/common-modules/virtual-device/mainline/x86-64\u6b63\u5728\u66f4\u65b0\u6587\u4ef6:  82%Checking out: 50% (558/1107) platform/packages/apps/Car/DebuggingRestrictionController\u6b63\u5728\u66f4\u65b0\u6587\u4ef6:  93% (377\u6b63\u5728\u66f4\u65b0\u6587\u4ef6: 100% (4055/4055), \u5b8c\u6210./packages/apps/Car/LocalMediaPlayer\u6b63\u5728\u66f4\u65b0\u6587\u4ef6: 100% (4055/4055)\n\u6b63\u5728\u66f4\u65b0\u6587\u4ef6: 100% (193/193), \u5b8c\u6210.rm/packages/apps/QuickAccessWallet\u6b63\u5728\u66f4\u65b0\u6587\u4ef6:  69% (110/159)\n\u6b63\u5728\u66f4\u65b0\u6587\u4ef6: 100% (22/22), \u5b8c\u6210.form/packages/services/AlternativeNetworkAccess\u6b63\u5728\u66f4\u65b0\u6587\u4ef6:  72% (115/159)\n\u6b63\u5728\u66f4\u65b0\u6587\u4ef6: 100% (600/600), \u5b8c\u6210.\n\u6b63\u5728\u66f4\u65b0\u6587\u4ef6: 100% (159/159), \u5b8c\u6210.\n\u6b63\u5728\u66f4\u65b0\u6587\u4ef6: 100% (1619/1619), \u5b8c\u6210._vendor_support\u6b63\u5728\u66f4\u65b0\u6587\u4ef6:  98% (1587/1619)\n\u6b63\u5728\u66f4\u65b0\u6587\u4ef6: 100% (425/425), \u5b8c\u6210.\n\u6b63\u5728\u66f4\u65b0\u6587\u4ef6: 100% (1787/1787), \u5b8c\u6210./external/dynamic_depth\u6b63\u5728\u66f4\u65b0\u6587\u4ef6: 100% (1787/1787)\n\u6b63\u5728\u66f4\u65b0\u6587\u4ef6: 100% (3613/3613), \u5b8c\u6210./system/unwinding\u6b63\u5728\u66f4\u65b0\u6587\u4ef6:  58% (57110/98465)\nChecking out: 71% (787/1107) kernel/prebuilts/common-modules/virtual-device/mainline/arm64\u6b63\u5728\u66f4\u65b0\u6587\u4ef6:  55% \u6b63\u5728\u66f4\u65b0\u6587\u4ef6: 100% (1577/1577), \u5b8c\u6210.\n\u6b63\u5728\u66f4\u65b0\u6587\u4ef6: 100% (525/525), \u5b8c\u6210.\n\u6b63\u5728\u66f4\u65b0\u6587\u4ef6: 100% (4003/4003), \u5b8c\u6210.\n\u6b63\u5728\u66f4\u65b0\u6587\u4ef6: 100% (10/10), \u5b8c\u6210.\n\u6b63\u5728\u66f4\u65b0\u6587\u4ef6: 100% (68/68), \u5b8c\u6210.\n\u6b63\u5728\u66f4\u65b0\u6587\u4ef6: 100% (98465/98465), \u5b8c\u6210.\n\u6b63\u5728\u66f4\u65b0\u6587\u4ef6: 100% (3146/3146), \u5b8c\u6210.\n\u6b63\u5728\u66f4\u65b0\u6587\u4ef6: 100% (23012/23012), \u5b8c\u6210.xternal/vixl\u6b63\u5728\u66f4\u65b0\u6587\u4ef6:  71% (16339/23012)\n\u6b63\u5728\u66f4\u65b0\u6587\u4ef6: 100% (199/199), \u5b8c\u6210.rm/external/ltp\u6b63\u5728\u66f4\u65b0\u6587\u4ef6:  68% (29743/43739)\n\u6b63\u5728\u66f4\u65b0\u6587\u4ef6: 100% (164/164), \u5b8c\u6210.rm/packages/modules/GeoTZ\u6b63\u5728\u66f4\u65b0\u6587\u4ef6:  92% (40240/43739)\n\u6b63\u5728\u66f4\u65b0\u6587\u4ef6: 100% (8198/8198), \u5b8c\u6210.\n\u6b63\u5728\u66f4\u65b0\u6587\u4ef6: 100% (9781/9781), \u5b8c\u6210.\n\u6b63\u5728\u66f4\u65b0\u6587\u4ef6: 100% (43739/43739), \u5b8c\u6210.\n\u6b63\u5728\u66f4\u65b0\u6587\u4ef6: 100% (6999/6999), \u5b8c\u6210./frameworks/libs/systemui\u6b63\u5728\u66f4\u65b0\u6587\u4ef6:  47% (3290/6999)\n\u6b63\u5728\u66f4\u65b0\u6587\u4ef6: 100% (9777/9777), \u5b8c\u6210.\n\u6b63\u5728\u66f4\u65b0\u6587\u4ef6: 100% (9655/9655), \u5b8c\u6210.\n\u6b63\u5728\u66f4\u65b0\u6587\u4ef6: 100% (301/301), \u5b8c\u6210./generic/trusty\u6b63\u5728\u66f4\u65b0\u6587\u4ef6:  98% (7343/7492)\n\u6b63\u5728\u66f4\u65b0\u6587\u4ef6: 100% (7492/7492), \u5b8c\u6210.\n\u6b63\u5728\u66f4\u65b0\u6587\u4ef6: 100% (1558/1558), \u5b8c\u6210.\n\u6b63\u5728\u66f4\u65b0\u6587\u4ef6: 100% (8959/8959), \u5b8c\u6210._vendor_qcom_opensource_audio-hal_st-hal\u6b63\u5728\u66f4\u65b0\u6587\u4ef6:  29% (10413/34731)\n\u6b63\u5728\u66f4\u65b0\u6587\u4ef6: 100% (422/422), \u5b8c\u6210.\n\u6b63\u5728\u66f4\u65b0\u6587\u4ef6: 100% (948/948), \u5b8c\u6210.\n\u6b63\u5728\u66f4\u65b0\u6587\u4ef6: 100% (398/398), \u5b8c\u6210.\n\u6b63\u5728\u66f4\u65b0\u6587\u4ef6: 100% (34731/34731), \u5b8c\u6210.\n\u6b63\u5728\u66f4\u65b0\u6587\u4ef6: 100% (953/953), \u5b8c\u6210.\n\u6b63\u5728\u66f4\u65b0\u6587\u4ef6: 100% (683/683), \u5b8c\u6210.\n\u6b63\u5728\u66f4\u65b0\u6587\u4ef6: 100% (15434/15434), \u5b8c\u6210.\n\u6b63\u5728\u66f4\u65b0\u6587\u4ef6: 100% (763/763), \u5b8c\u6210.\n\u6b63\u5728\u66f4\u65b0\u6587\u4ef6: 100% (16294/16294), \u5b8c\u6210.\n\u6b63\u5728\u66f4\u65b0\u6587\u4ef6: 100% (8515/8515), \u5b8c\u6210.\n\u6b63\u5728\u66f4\u65b0\u6587\u4ef6: 100% (733/733), \u5b8c\u6210.\n\u6b63\u5728\u66f4\u65b0\u6587\u4ef6: 100% (16578/16578), \u5b8c\u6210.\n\u6b63\u5728\u66f4\u65b0\u6587\u4ef6: 100% (6380/6380), \u5b8c\u6210.\nChecking out: 94% (1043/1107) platform/prebuilts/gcc/darwin-x86/host/i686-apple-darwin-4.2.1\u6b63\u5728\u66f4\u65b0\u6587\u4ef6:  36\u6b63\u5728\u66f4\u65b0\u6587\u4ef6: 100% (8414/8414), \u5b8c\u6210.\n\u6b63\u5728\u66f4\u65b0\u6587\u4ef6: 100% (1904/1904), \u5b8c\u6210.\n\u6b63\u5728\u66f4\u65b0\u6587\u4ef6: 100% (1229/1229), \u5b8c\u6210.\nChecking out: 94% (1046/1107) android_prebuilts_gcc_linux-x86_arm_arm-linux-androideabi-4.9\u6b63\u5728\u66f4\u65b0\u6587\u4ef6:  80%\u6b63\u5728\u66f4\u65b0\u6587\u4ef6: 100% (2102/2102), \u5b8c\u6210.m/prebuilts/python/darwin-x86/2.7.5\u6b63\u5728\u66f4\u65b0\u6587\u4ef6:  83% (1745/2102)\n\u6b63\u5728\u66f4\u65b0\u6587\u4ef6: 100% (21250/21250), \u5b8c\u6210.\n\u6b63\u5728\u66f4\u65b0\u6587\u4ef6: 100% (18247/18247), \u5b8c\u6210.\n\u6b63\u5728\u66f4\u65b0\u6587\u4ef6: 100% (1090/1090), \u5b8c\u6210.\nChecking out: 100% (1107/1107), done in 1m53.836s\nrepo sync has finished successfully.\n")),(0,i.kt)("h2",{id:"\u7f16\u8bd1"},"\u7f16\u8bd1"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"}," . build/envsetup.sh\n blissify options deviceCodename\n")),(0,i.kt)("h3",{id:"options"},"options:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"-h | --help: Shows the help dialog\n-c | --clean: Clean up before running the build\n-d | --devclean: Clean up device only before running the build\n-v | --vanilla: Build with no added app store solution **default option**\n-g | --gapps: Build with Google Play Services added\n-f | --foss: build with FOSS (arm64-v8a) app store solutions added **requires vendor/foss**\n")),(0,i.kt)("h2",{id:"\u5b8c\u6210"},"\u5b8c\u6210"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"[0529/172427.179235:INFO:delta_diff_generator.cc(254)] All done. Successfully created delta file with metadata size = 207347\nDone generating full update.\n2022-05-29 17:24:27 - ota_from_target_files.py - INFO    : delta_generator outputs the maximum signature size: 256\n[0529/172427.933920:INFO:generate_delta_main.cc(82)] Calculating hash for signing.\n[0529/172427.933967:INFO:payload_signer.cc(78)] Signature blob size: 267\n[0529/172430.147487:INFO:payload_signer.cc(120)] Metadata signature size: 267\n[0529/172430.148505:INFO:payload_signer.cc(242)] Making room for signature in file\n[0529/172430.148875:INFO:payload_signer.cc(149)] Updated protobuf size: 207332\n[0529/172430.474502:INFO:payload_signer.cc(161)] Updated payload size: 1989411446\n[0529/172430.474522:INFO:payload_signer.cc(162)] Updated metadata size: 207356\n[0529/172430.474525:INFO:payload_signer.cc(166)] Signature Blob Offset: 1989411446\n[0529/172434.093097:INFO:generate_delta_main.cc(98)] Done calculating hash for signing.\nDone generating hash.\n[0529/172434.197093:INFO:generate_delta_main.cc(118)] Signing payload.\n[0529/172434.197156:INFO:payload_signer.cc(78)] Signature blob size: 267\n[0529/172434.197162:INFO:payload_signer.cc(78)] Signature blob size: 267\n[0529/172435.961072:INFO:payload_signer.cc(120)] Metadata signature size: 267\n[0529/172435.962048:INFO:payload_signer.cc(242)] Making room for signature in file\n[0529/172435.962397:INFO:payload_signer.cc(149)] Updated protobuf size: 207332\n[0529/172436.304980:INFO:payload_signer.cc(161)] Updated payload size: 1989411446\n[0529/172436.305003:INFO:payload_signer.cc(162)] Updated metadata size: 207356\n[0529/172436.305006:INFO:payload_signer.cc(166)] Signature Blob Offset: 1989411446\n[0529/172436.305175:INFO:payload_signer.cc(473)] Signed payload size: 1989411713\n[0529/172438.179402:INFO:generate_delta_main.cc(133)] Done signing payload. Final metadata size = 207356\nDone signing payload.\n[0529/172441.869745:INFO:generate_delta_main.cc(268)] Generated properties file at /home/baizhi958216/blissroms/out/soong/.temp/payload-properties-pMpt0q.txt\n2022-05-29 17:24:55 - ota_from_target_files.py - INFO    : done.\n[100% 52660/52660] -e \n      ___           ___                   ___           ___      \n     /\\  \\         /\\__\\      ___        /\\  \\         /\\  \\     \n    /::\\  \\       /:/  /     /\\  \\      /::\\  \\       /::\\  \\    \n   /:/\\:\\  \\     /:/  /      \\:\\  \\    /:/\\ \\  \\     /:/\\ \\  \\   \n  /::\\~\\:\\__\\   /:/  /       /::\\__\\  _\\:\\~\\ \\  \\   _\\:\\~\\ \\  \\  \n /:/\\:\\ \\:\\__\\ /:/__/     __/:/\\/__/ /\\ \\:\\ \\ \\__\\ /\\ \\:\\ \\ \\__\\ \n \\:\\~\\:\\/:/  / \\:\\  \\    /\\/:/  /    \\:\\ \\:\\ \\/__/ \\:\\ \\:\\ \\/__/ \n  \\:\\ \\::/  /   \\:\\  \\   \\::/__/      \\:\\ \\:\\__\\    \\:\\ \\:\\__\\   \n   \\:\\/:/  /     \\:\\  \\   \\:\\__\\       \\:\\/:/  /     \\:\\/:/  /   \n    \\::/__/       \\:\\__\\   \\/__/        \\::/  /       \\::/  /    \n     ~~            \\/__/                 \\/__/         \\/__/     \n\n===========-Bliss Package Complete-===========\nZip:  /home/baizhi958216/blissroms/out/target/product/haydn/Bliss-v15.5-haydn-OFFICIAL-gapps-20220529.zip\nSHA256:  6d761dfbe179bed0fd86422364b2f109de37405f9a7b5e272859bea54b9deab5\nSize: 1.8G\n===============================================\nHave A Truly Blissful Experience\n===============================================\n\n\n#### build completed successfully (01:27:34 (hh:mm:ss)) ####\n\n[baizhi958216@TianXuan blissroms]$\n")),(0,i.kt)("p",null,"\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"$OUT"),"\u91cc\u9762"),(0,i.kt)("h2",{id:"\u5e38\u89c1\u95ee\u9898"},"\u5e38\u89c1\u95ee\u9898"))}u.isMDXComponent=!0}}]);