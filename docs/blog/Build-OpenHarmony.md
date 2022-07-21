# OpenHarmony 折腾记

## 环境配置

参考[OpenHarmony](https://docs.openharmony.cn/pages/v3.1/zh-cn/device-dev/subsystems/subsys-build-standard-large.md)编译构建

### 但由于咱用的 ArchLinux, 快说<span style={{fontSize:60}}>谢谢 AUR</span> :)

```bash
# 安装依赖
yay -S lfs lineageos-devel mtools uboot-tools python-pip
# pip安装ohos-build构建工具
python3 -m pip install --user ohos-build
```

## 配置 git

参考我曾经的文档  
[配置 git](https://baizhi958216.github.io/docs/github%E5%85%A5%E9%97%A8#%E9%85%8D%E7%BD%AEgit)  
[在 github 上使用 ssh](https://baizhi958216.github.io/docs/%E5%9C%A8github%E4%B8%8A%E4%BD%BF%E7%94%A8ssh)

## 源码准备

参考[OpenHarmony](https://docs.openharmony.cn/pages/v3.1/zh-cn/device-dev/get-code/sourcecode-acquire.md/)获取源码

```bash
repo init --depth=1 -u git@gitee.com:openharmony/manifest.git -b master --no-repo-verify
repo sync -c
repo forall -c 'git lfs pull'
./build/prebuilts_download.sh
```

## 编译目标设备

```bash
hb set
# 键盘上下键挑选目标设备，回车确认
# 我用的bearpi_hm_micro
# OHOS Which product do you need?  bearpi_hm_micro
hb build --tee -f
# 编译并输出详细日志到终端
```

## 编译完成

```bash
[OHOS INFO] [5601/5601] STAMP obj/build/core/gn/make_test.stamp
[OHOS INFO] 输入了 22878+0 块记录
[OHOS INFO] 输出了 22878+0 块记录
[OHOS INFO] 11713536 字节 (12 MB, 11 MiB) 已复制，0.023104 s，507 MB/s
[OHOS INFO] 输入了 40960+0 块记录
[OHOS INFO] 输出了 40960+0 块记录
[OHOS INFO] 20971520 字节 (21 MB, 20 MiB) 已复制，0.0412411 s，509 MB/s
[OHOS INFO] 输入了 204800+0 块记录
[OHOS INFO] 输出了 204800+0 块记录
[OHOS INFO] 104857600 字节 (105 MB, 100 MiB) 已复制，0.202747 s，517 MB/s
[OHOS INFO] ---------------------------------------------
[OHOS INFO] ccache summary:
[OHOS INFO] cache hit (direct)  : 0
[OHOS INFO] cache hit (preprocessed)  : 0
[OHOS INFO] cache miss  : 0
[OHOS INFO] hit rate:  0.00%
[OHOS INFO] mis rate: 0.00%
[OHOS INFO] ---------------------------------------------
[OHOS INFO] c targets overlap rate statistics
[OHOS INFO] subsystem           files NO.       percentage      builds NO.      percentage      overlap rate
[OHOS INFO] aafwk                     60        1.1%          60        1.1%    1.00
[OHOS INFO] ability                   60        1.1%          60        1.1%    1.00
[OHOS INFO] ai                        62        1.1%          62        1.1%    1.00
[OHOS INFO] arkui                    699        12.3%        699        12.3%   1.00
[OHOS INFO] bundlemanager             38        0.7%          38        0.7%    1.00
[OHOS INFO] communication            110        1.9%         110        1.9%    1.00
[OHOS INFO] distributeddatamgr         2        0.0%           2        0.0%    1.00
[OHOS INFO] distributedschedule       45        0.8%          45        0.8%    1.00
[OHOS INFO] global                    38        0.7%          38        0.7%    1.00
[OHOS INFO] graphic                  341        6.0%         341        6.0%    1.00
[OHOS INFO] hdf                      309        5.4%         309        5.4%    1.00
[OHOS INFO] hiviewdfx                  9        0.2%           9        0.2%    1.00
[OHOS INFO] kernel                  2182        38.4%       2182        38.4%   1.00
[OHOS INFO] multimedia                19        0.3%          19        0.3%    1.00
[OHOS INFO] powermgr                  25        0.4%          25        0.4%    1.00
[OHOS INFO] securec                  117        2.1%         117        2.1%    1.00
[OHOS INFO] security                 289        5.1%         289        5.1%    1.00
[OHOS INFO] startup                  108        1.9%         108        1.9%    1.00
[OHOS INFO] third_party             1276        22.5%       1276        22.5%   1.00
[OHOS INFO] thirdparty              1276        22.5%       1276        22.5%   1.00
[OHOS INFO] utils                      8        0.1%           8        0.1%    1.00
[OHOS INFO]
[OHOS INFO] c overall build overlap rate: 1.00
[OHOS INFO]
[OHOS INFO]
[OHOS INFO] bearpi_hm_micro build success
[OHOS INFO] cost time: 0:01:20
[baizhi958216@TianXuan openharmony]$

```

## 编译完成的固件

```bash
# 系统镜像文件:
./openharmony/out/bearpi_hm_micro/bearpi_hm_micro/OHOS_Image.stm32
# 根文件系统
./openharmony/out/bearpi_hm_micro/bearpi_hm_micro/rootfs_vfat.img
# 用户文件系统
./openharmony/out/bearpi_hm_micro/bearpi_hm_micro/userfs_vfat.img
```
