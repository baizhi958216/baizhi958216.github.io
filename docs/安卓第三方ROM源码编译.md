#
# 以BlissROMs安卓12为例
笔者用的是```ArchLinux```
## 配置环境
```bash
yay lineageos_devel
```
## 同步源码
### 初始化repo
```bash
mkdir blissroms;cd blissroms;repo init --depth=1 -u https://github.com/BlissRoms/platform_manifest.git -b arcadia-next
```
输出
```bash
Downloading Repo source from https://gerrit.googlesource.com/git-repo
repo: Updating release signing keys to keyset ver 2.3
Downloading manifest from https://github.com/BlissRoms/platform_manifest.git
remote: Enumerating objects: 7102, done.
remote: Counting objects: 100% (694/694), done.
remote: Compressing objects: 100% (312/312), done.
remote: Total 7102 (delta 437), reused 623 (delta 382), pack-reused 6408

Your identity is: baizhi958216 <1475289190@qq.com>
If you want to change this, please re-run 'repo init' with --config-name
# 询问是否在commit显示颜色 (y/n)
Testing colorized output (for 'repo diff', 'repo status'):
  black    red      green    yellow   blue     magenta   cyan     white 
  bold     dim      ul       reverse 
Enable color display in this user account (y/N)? y

repo has been initialized in /home/baizhi958216/blissroms/
If this is not the directory in which you want to initialize repo, please run:
   rm -r /home/baizhi958216/blissroms//.repo
and try again
```
### 开始同步
```bash
repo sync -c --force-sync --no-tags --no-clone-bundle -j$(nproc --all) --optimized-fetch --prune
```
输出
```bash
remote: Total 0 (delta 0), reused 0 (delta 0), pack-reused 0
Fetching: 100% (1107/1107), done in 28m5.487s
hardware/qcom-caf/msm8953/audio: Shared project android_hardware_qcom_audio found, disabling pruning.
hardware/qcom-caf/msm8953/display: Shared project android_hardware_qcom_display found, disabling pruning.
hardware/qcom-caf/msm8953/media: Shared project android_hardware_qcom_media found, disabling pruning.
hardware/qcom-caf/msm8996/audio: Shared project android_hardware_qcom_audio found, disabling pruning.
hardware/qcom-caf/msm8996/display: Shared project android_hardware_qcom_display found, disabling pruning.
hardware/qcom-caf/msm8996/media: Shared project android_hardware_qcom_media found, disabling pruning.
hardware/qcom-caf/msm8998/audio: Shared project android_hardware_qcom_audio found, disabling pruning.
hardware/qcom-caf/msm8998/display: Shared project android_hardware_qcom_display found, disabling pruning.
hardware/qcom-caf/msm8998/media: Shared project android_hardware_qcom_media found, disabling pruning.
hardware/qcom-caf/sdm660/display: Shared project platform_hardware_qcom_display found, disabling pruning.
hardware/qcom-caf/sdm845/audio: Shared project android_hardware_qcom_audio found, disabling pruning.
hardware/qcom-caf/sdm845/display: Shared project android_hardware_qcom_display found, disabling pruning.
hardware/qcom-caf/sdm845/media: Shared project android_hardware_qcom_media found, disabling pruning.
hardware/qcom-caf/sm8150/audio: Shared project android_hardware_qcom_audio found, disabling pruning.
hardware/qcom-caf/sm8150/display: Shared project android_hardware_qcom_display found, disabling pruning.
hardware/qcom-caf/sm8150/media: Shared project android_hardware_qcom_media found, disabling pruning.
hardware/qcom-caf/sm8250/audio: Shared project android_hardware_qcom_audio found, disabling pruning.
hardware/qcom-caf/sm8250/display: Shared project platform_hardware_qcom_display found, disabling pruning.
hardware/qcom-caf/sm8250/media: Shared project android_hardware_qcom_media found, disabling pruning.
hardware/qcom-caf/sm8350/audio: Shared project android_hardware_qcom_audio found, disabling pruning.
hardware/qcom-caf/sm8350/display: Shared project android_hardware_qcom_display found, disabling pruning.
hardware/qcom-caf/sm8350/media: Shared project android_hardware_qcom_media found, disabling pruning.
hardware/qcom-caf/wlan: Shared project android_hardware_qcom_wlan found, disabling pruning.
hardware/qcom/audio: Shared project android_hardware_qcom_audio found, disabling pruning.
hardware/qcom/wlan: Shared project android_hardware_qcom_wlan found, disabling pruning.
vendor/nxp/opensource/pn5xx/halimpl: Shared project android_vendor_nxp_opensource_halimpl found, disabling pruning.
vendor/nxp/opensource/pn5xx/hidlimpl: Shared project android_vendor_nxp_opensource_hidlimpl found, disabling pruning.
vendor/nxp/opensource/sn100x/halimpl: Shared project android_vendor_nxp_opensource_halimpl found, disabling pruning.
vendor/nxp/opensource/sn100x/hidlimpl: Shared project android_vendor_nxp_opensource_hidlimpl found, disabling pruning.
Garbage collecting: 37% [16 jobs] (411/1107) started platform/external/rust/crates/fallible-streaming-iteratoGarbage collecting: 37% [14 jobs] (420/1107) finished platform/external/rust/crates/fallible-streaming-iteratGarbage collecting: 68% [16 jobs] (756/1107) started kernel/prebuilts/common-modules/virtual-device/5.10/x86-Garbage collecting: 68% [16 jobs] (756/1107) started kernel/prebuilts/common-modules/virtual-device/5.10/arm6Garbage collecting: 68% [16 jobs] (757/1107) started kernel/prebuilts/common-modules/virtual-device/5.4/x86-6Garbage collecting: 68% [16 jobs] (758/1107) started kernel/prebuilts/common-modules/virtual-device/mainline/Garbage collecting: 68% [16 jobs] (755/1107) started kernel/prebuilts/common-modules/virtual-device/4.19/arm6Garbage collecting: 68% [16 jobs] (758/1107) started kernel/prebuilts/common-modules/virtual-device/mainline/Garbage collecting: 68% [15 jobs] (763/1107) finished kernel/prebuilts/common-modules/virtual-device/mainlineGarbage collecting: 68% [16 jobs] (755/1107) started kernel/prebuilts/common-modules/virtual-device/4.19/x86-Garbage collecting: 69% [15 jobs] (766/1107) finished kernel/prebuilts/common-modules/virtual-device/4.19/armGarbage collecting: 69% [16 jobs] (768/1107) finished kernel/prebuilts/common-modules/virtual-device/5.4/arm6Garbage collecting: 68% [15 jobs] (762/1107) finished kernel/prebuilts/common-modules/virtual-device/5.10/armGarbage collecting: 69% [16 jobs] (770/1107) finished kernel/prebuilts/common-modules/virtual-device/4.19/x86Garbage collecting: 69% [14 jobs] (764/1107) finished kernel/prebuilts/common-modules/virtual-device/5.4/x86-Garbage collecting: 69% [16 jobs] (771/1107) finished kernel/prebuilts/common-modules/virtual-device/mainlineGarbage collecting: 70% [16 jobs] (775/1107) started platform/packages/apps/Car/DebuggingRestrictionControlleGarbage collecting: 71% [16 jobs] (786/1107) finished platform/packages/apps/Car/DebuggingRestrictionControllGarbage collecting: 69% [15 jobs] (765/1107) finished kernel/prebuilts/common-modules/virtual-device/5.10/x86Garbage collecting: 82% [15 jobs] (916/1107) started android_prebuilts_gcc_darwin-x86_arm_arm-linux-androideaGarbage collecting: 82% [16 jobs] (916/1107) started android_prebuilts_gcc_darwin-x86_aarch64_aarch64-linux-aGarbage collecting: 82% [15 jobs] (918/1107) started android_prebuilts_gcc_darwin-x86_x86_x86_64-linux-androiGarbage collecting: 83% [16 jobs] (920/1107) started android_prebuilts_gcc_linux-x86_arm_arm-linux-androideabGarbage collecting: 83% [15 jobs] (923/1107) finished android_prebuilts_gcc_darwin-x86_aarch64_aarch64-linux-Garbage collecting: 83% [16 jobs] (924/1107) finished android_prebuilts_gcc_darwin-x86_x86_x86_64-linux-androGarbage collecting: 83% [16 jobs] (923/1107) started android_prebuilts_gcc_linux-x86_x86_x86_64-linux-androidGarbage collecting: 83% [16 jobs] (926/1107) finished android_prebuilts_gcc_darwin-x86_arm_arm-linux-androideGarbage collecting: 82% [15 jobs] (918/1107) started platform/prebuilts/gcc/darwin-x86/host/i686-apple-darwinGarbage collecting: 82% [16 jobs] (918/1107) started android_prebuilts_gcc_linux-x86_aarch64_aarch64-linux-anGarbage collecting: 83% [16 jobs] (921/1107) started platform/prebuilts/gcc/linux-x86/host/x86_64-w64-mingw32Garbage collecting: 83% [16 jobs] (920/1107) started platform/prebuilts/gcc/linux-x86/host/x86_64-linux-glibcGarbage collecting: 84% [16 jobs] (932/1107) finished platform/prebuilts/gcc/darwin-x86/host/i686-apple-darwiGarbage collecting: 84% [16 jobs] (933/1107) finished android_prebuilts_gcc_linux-x86_x86_x86_64-linux-androiGarbage collecting: 84% [15 jobs] (935/1107) finished android_prebuilts_gcc_linux-x86_aarch64_aarch64-linux-aGarbage collecting: 84% [15 jobs] (938/1107) finished platform/prebuilts/gcc/linux-x86/host/x86_64-linux-glibGarbage collecting: 83% [15 jobs] (925/1107) finished android_prebuilts_gcc_linux-x86_arm_arm-linux-androideaGarbage collecting: 84% [16 jobs] (939/1107) finished platform/prebuilts/gcc/linux-x86/host/x86_64-w64-mingw3Garbage collecting: 98% [15 jobs] (1093/1107) finished android_vendor_qcom_opensource_bluetooth-commonsys-intGarbage collecting: 100% (1107/1107), done in 2.607s
正在更新文件: 100% (7979/7979), 完成.xternal/rust/crates/arbitrary正在更新文件: 100% (7979/7979)
正在更新文件: 100% (11068/11068), 完成.ternal/rust/crates/either正在更新文件: 100% (11068/11068)
正在更新文件: 100% (12660/12660), 完成.ternal/rust/crates/macaddr正在更新文件: 100% (12660/12660)
Checking out:  8% (99/1107) platform/external/rust/crates/fallible-streaming-iterator正在更新文件:  52% (1193Checking out: 17% (189/1107) platform/external/rust/crates/unicode-normalization正在更新文件:  98% (4713/4809Checking out: 17% (190/1107) platform/external/rust/crates/unicode-segmentation正在更新文件:  36% (3934/10926正在更新文件: 100% (4809/4809), 完成./external/rust/crates/unicode-xid正在更新文件:  37% (4043/10926)
正在更新文件: 100% (2294/2294), 完成.
正在更新文件: 100% (4620/4620), 完成.
正在更新文件: 100% (8054/8054), 完成./external/gflags正在更新文件:  51% (4107/8052)
正在更新文件: 100% (10926/10926), 完成.xternal/glide正在更新文件:  99% (10817/10926)
正在更新文件: 100% (8917/8917), 完成./external/objenesis正在更新文件:  74% (5959/8052)
正在更新文件: 100% (8052/8052), 完成.
正在更新文件: 100% (6102/6102), 完成./hardware/google/graphics/common正在更新文件:  31% (4992/16102)
正在更新文件: 100% (1504/1504), 完成.
正在更新文件: 100% (4561/4561), 完成./hardware/qcom/sdm845/thermal正在更新文件:  76% (3467/4561)
正在更新文件: 100% (6810/6810), 完成.
正在更新文件: 100% (21683/21683), 完成.
正在更新文件: 100% (5859/5859), 完成.
正在更新文件: 100% (14/14), 完成.
正在更新文件: 100% (7888/7888), 完成.
正在更新文件: 100% (9142/9142), 完成.
正在更新文件: 100% (16102/16102), 完成.
正在更新文件: 100% (2238/2238), 完成.external_setupcompat正在更新文件:  98% (2194/2238)
正在更新文件: 100% (3209/3209), 完成./external/sqlite正在更新文件: 100% (3209/3209)
正在更新文件: 100% (24361/24361), 完成.xternal/protobuf正在更新文件: 100% (24361/24361)
正在更新文件: 100% (5477/5477), 完成./external/python/dateutil正在更新文件:  23% (22647/98465)
正在更新文件: 100% (14/14), 完成.form/external/arm-optimized-routines正在更新文件: 100% (14/14)
Checking out: 49% (545/1107) kernel/prebuilts/common-modules/virtual-device/mainline/x86-64正在更新文件:  82%Checking out: 50% (558/1107) platform/packages/apps/Car/DebuggingRestrictionController正在更新文件:  93% (377正在更新文件: 100% (4055/4055), 完成./packages/apps/Car/LocalMediaPlayer正在更新文件: 100% (4055/4055)
正在更新文件: 100% (193/193), 完成.rm/packages/apps/QuickAccessWallet正在更新文件:  69% (110/159)
正在更新文件: 100% (22/22), 完成.form/packages/services/AlternativeNetworkAccess正在更新文件:  72% (115/159)
正在更新文件: 100% (600/600), 完成.
正在更新文件: 100% (159/159), 完成.
正在更新文件: 100% (1619/1619), 完成._vendor_support正在更新文件:  98% (1587/1619)
正在更新文件: 100% (425/425), 完成.
正在更新文件: 100% (1787/1787), 完成./external/dynamic_depth正在更新文件: 100% (1787/1787)
正在更新文件: 100% (3613/3613), 完成./system/unwinding正在更新文件:  58% (57110/98465)
Checking out: 71% (787/1107) kernel/prebuilts/common-modules/virtual-device/mainline/arm64正在更新文件:  55% 正在更新文件: 100% (1577/1577), 完成.
正在更新文件: 100% (525/525), 完成.
正在更新文件: 100% (4003/4003), 完成.
正在更新文件: 100% (10/10), 完成.
正在更新文件: 100% (68/68), 完成.
正在更新文件: 100% (98465/98465), 完成.
正在更新文件: 100% (3146/3146), 完成.
正在更新文件: 100% (23012/23012), 完成.xternal/vixl正在更新文件:  71% (16339/23012)
正在更新文件: 100% (199/199), 完成.rm/external/ltp正在更新文件:  68% (29743/43739)
正在更新文件: 100% (164/164), 完成.rm/packages/modules/GeoTZ正在更新文件:  92% (40240/43739)
正在更新文件: 100% (8198/8198), 完成.
正在更新文件: 100% (9781/9781), 完成.
正在更新文件: 100% (43739/43739), 完成.
正在更新文件: 100% (6999/6999), 完成./frameworks/libs/systemui正在更新文件:  47% (3290/6999)
正在更新文件: 100% (9777/9777), 完成.
正在更新文件: 100% (9655/9655), 完成.
正在更新文件: 100% (301/301), 完成./generic/trusty正在更新文件:  98% (7343/7492)
正在更新文件: 100% (7492/7492), 完成.
正在更新文件: 100% (1558/1558), 完成.
正在更新文件: 100% (8959/8959), 完成._vendor_qcom_opensource_audio-hal_st-hal正在更新文件:  29% (10413/34731)
正在更新文件: 100% (422/422), 完成.
正在更新文件: 100% (948/948), 完成.
正在更新文件: 100% (398/398), 完成.
正在更新文件: 100% (34731/34731), 完成.
正在更新文件: 100% (953/953), 完成.
正在更新文件: 100% (683/683), 完成.
正在更新文件: 100% (15434/15434), 完成.
正在更新文件: 100% (763/763), 完成.
正在更新文件: 100% (16294/16294), 完成.
正在更新文件: 100% (8515/8515), 完成.
正在更新文件: 100% (733/733), 完成.
正在更新文件: 100% (16578/16578), 完成.
正在更新文件: 100% (6380/6380), 完成.
Checking out: 94% (1043/1107) platform/prebuilts/gcc/darwin-x86/host/i686-apple-darwin-4.2.1正在更新文件:  36正在更新文件: 100% (8414/8414), 完成.
正在更新文件: 100% (1904/1904), 完成.
正在更新文件: 100% (1229/1229), 完成.
Checking out: 94% (1046/1107) android_prebuilts_gcc_linux-x86_arm_arm-linux-androideabi-4.9正在更新文件:  80%正在更新文件: 100% (2102/2102), 完成.m/prebuilts/python/darwin-x86/2.7.5正在更新文件:  83% (1745/2102)
正在更新文件: 100% (21250/21250), 完成.
正在更新文件: 100% (18247/18247), 完成.
正在更新文件: 100% (1090/1090), 完成.
Checking out: 100% (1107/1107), done in 1m53.836s
repo sync has finished successfully.
```
## 编译
```bash
 . build/envsetup.sh
 blissify options deviceCodename
```
### options:
```bash
-h | --help: Shows the help dialog
-c | --clean: Clean up before running the build
-d | --devclean: Clean up device only before running the build
-v | --vanilla: Build with no added app store solution **default option**
-g | --gapps: Build with Google Play Services added
-f | --foss: build with FOSS (arm64-v8a) app store solutions added **requires vendor/foss**
```
## 输出
在```$OUT```里面
## 常见问题