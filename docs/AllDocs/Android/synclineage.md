# LineageOS 编译环境搭建

:::danger 注意

基于 ArchLinux 环境下编写

:::

:::details 我的电脑配置

|              |                                                           |
| ------------ | --------------------------------------------------------: |
| 硬件型号     | ASUSTeK COMPUTER INC. ASUS TUF Gaming A15 FA507RM_FA507RM |
| 固件版本     |                                               FA507RM.315 |
| 内存         |                                                  32.0 GiB |
| 处理器       |             AMD Ryzen™ 7 6800H with Radeon™ Graphics × 16 |
| 显卡         |                       NVIDIA GeForce RTX™ 3060 Laptop GPU |
| 磁盘容量     |                                                     1.5TB |
| 操作系统名称 |                                                Arch Linux |
| 系统构建标识 |                                                   rolling |
| 操作系统类型 |                                                     64 位 |
| GNOME 版本   |                                                      44.2 |
| 窗口系统     |                                                       X11 |
| 内核版本     |                                       Linux 6.3.9-arch1-1 |

:::

## 配置要求

### 内存:

lineage-17.1 以及以往版本需要大于 16GB

lineage-18.1 以及更高版本需要大于 32GB

:::tip 提示

RAM 越少，构建所需的时间就越长，可以考虑使用`ZRAM`

:::

### 硬盘空间:

lineage-17.1 以及以往版本需要大于 200GB

lineage-18.1 以及更高版本需要大于 300GB

:::tip 提示

如果需要编译多个设备，可以启用`ccache`加快编译，但是会占用更多的硬盘空间。

使用固态硬盘(SSD)会比机械硬盘更快

:::

## 安装`platform-tools`和`repo`

:::details platform-tools

可以在包管理器安装`adb`和`fastboot`，也可以从谷歌下载 `platform-tools` 自行配置环境。

获取 `platform-tools-latest-linux.zip`，注意提前安装`wget`和`unzip`:

```bash
wget https://dl.google.com/android/repository/platform-tools-latest-linux.zip
```

解压`platform-tools-latest-linux.zip`:

```bash
unzip platform-tools-latest-linux.zip -d ~
```

在`~/.profile`追加:

```bash
if [ -d "$HOME/platform-tools" ] ; then
    PATH="$HOME/platform-tools:$PATH"
fi
```

:::

:::details repo

新建`~/bin`目录

```bash
mkdir ~/bin
```

下载 `repo`

```bash
curl https://storage.googleapis.com/git-repo-downloads/repo > ~/bin/repo
```

分配权限

```bash
chmod a+x ~/bin/repo
```

在`~/.profile`追加:

```bash
if [ -d "$HOME/bin" ] ; then
    PATH="$HOME/bin:$PATH"
fi
```

:::

更新环境

```bash
source ~/.profile
```

## 安装编译依赖

lineageos-devel 包含了编译基本 lineageos 所需要的依赖

:::tip 提示

[`lineageos-devel`](https://aur.archlinux.org/packages/lineageos-devel)将会从 aur 获取

包含以下依赖:

```
bc bison ccache curl flex gcc-multilib git gnupg  gperf inetutils java-environment lib32-ncurses lib32-ncurses5-compat-libs lib32-readline lib32-zlib libxcrypt-compat libxslt ncurses ncurses5-compat-libs perl-switch repo rsync schedtool sdl squashfs-tools unzip vim zip zlib
ffmpeg git-lfs imagemagick lzop ninja pngcrush xml2
```

:::

```bash
yay lineageos-devel
```

:::details 安装日志

```bash
[baizhi958216@TianXuan dev]$ yay lineageos-devel
1 aur/lineageos-devel 0.2-1 (+38 0.00)
    Metapackage to pull all dependencies required to build LineageOS
==> 要安装的包 (示例: 1 2 3, 1-3 或 ^4)
==> 1
:: 有 7 个提供者可用于 java-environment:
:: 软件库 extra
    1) jdk-openjdk 2) jdk11-openjdk 3) jdk17-openjdk 4) jdk8-openjdk
:: 软件库 archlinuxcn
    5) jdk 6) jdk11-graalvm-bin 7) liberica-jdk-11-full-bin

输入数字 (默认=1):
==>
AUR Explicit (1): lineageos-devel-0.2-1
AUR Dependency (2): xml2-0.5-1, aosp-devel-0.9-1
Sync Dependency (21): git-lfs-3.3.0-1, ninja-1.11.1-3, pngcrush-1.8.13-3, ccache-4.8.2-1, repo-2.34.1-1, schedtool-1.3.0-7, lib32-ncurses-6.4_20230520-1, ncurses5-compat-libs-6.4-2, libxcrypt-compat-4.4.35-1, inetutils-2.4-1, jdk-openjdk-20.0.1.u9-3, bc-1.07.1-4, squashfs-tools-4.6.1-1, perl-switch-2.17-8, lib32-readline-8.2.001-2, lib32-zlib-1.2.13-2, gperf-3.1-4, zip-3.0-10, rsync-3.2.7-4, lib32-ncurses5-compat-libs-6.4-1, sdl12-compat-1.2.64-1

:: (1/3) 下载了 PKGBUILD: xml2
:: (2/3) 下载了 PKGBUILD: lineageos-devel
:: (3/3) 下载了 PKGBUILD: aosp-devel
  3 lineageos-devel                          (构建文件已存在)
  2 xml2                                     (构建文件已存在)
  1 aosp-devel                               (构建文件已存在)
==> 清理哪些软件包的构建文件？
==> [N]没有 [A]全部 [Ab]中止 [I]已安装 [No]未安装 或 (1 2 3, 1-3, ^4)
==>   3 lineageos-devel                          (构建文件已存在)
  2 xml2                                     (构建文件已存在)
  1 aosp-devel                               (构建文件已存在)
==> 显示哪些差异？
==> [N]没有 [A]全部 [Ab]中止 [I]已安装 [No]未安装 或 (1 2 3, 1-3, ^4)
==>
==> 正在创建软件包：xml2 0.5-1 (2023年06月29日 星期四 15时17分20秒)
==> 获取源代码...
==> 正在创建软件包：lineageos-devel 0.2-1 (2023年06月29日 星期四 15时17分20秒)
==> 获取源代码...
==> 正在创建软件包：aosp-devel 0.9-1 (2023年06月29日 星期四 15时17分20秒)
  -> 正在下载 xml2_0.5.orig.tar.gz...
==> 获取源代码...
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100   326  100   326    0     0    381      0 --:--:-- --:--:-- --:--:--   381
100 86318  100 86318    0     0  44913      0  0:00:01  0:00:01 --:--:--  189k
==> 正在验证 source 文件，使用md5sums...
    xml2_0.5.orig.tar.gz ... 通过
:: (1/3) 正在解析 SRCINFO: lineageos-devel
:: (2/3) 正在解析 SRCINFO: xml2
:: (3/3) 正在解析 SRCINFO: aosp-devel
[sudo] baizhi958216 的密码：
正在解析依赖关系...
正在查找软件包冲突...

软件包 (27) hiredis-1.1.0-1  java-environment-common-3-5  java-runtime-common-3-5  jre-openjdk-20.0.1.u9-3  jre-openjdk-headless-20.0.1.u9-3
            lib32-gcc-libs-13.1.1-1  lib32-glibc-2.37-3  libnet-1:1.1.6-1  xxhash-0.8.1-4  bc-1.07.1-4  ccache-4.8.2-1  gperf-3.1-4  inetutils-2.4-1
            jdk-openjdk-20.0.1.u9-3  lib32-ncurses-6.4_20230520-1  lib32-ncurses5-compat-libs-6.4-1  lib32-readline-8.2.001-2  lib32-zlib-1.2.13-2
            libxcrypt-compat-4.4.35-1  ncurses5-compat-libs-6.4-2  perl-switch-2.17-8  repo-2.34.1-1  rsync-3.2.7-4  schedtool-1.3.0-7
            sdl12-compat-1.2.64-1  squashfs-tools-4.6.1-1  zip-3.0-10

下载大小：      354.13 MiB
全部安装大小：  622.97 MiB

:: 进行安装吗？ [Y/n] y
:: 正在获取软件包......
 jdk-openjdk-20.0.1.u9-3-x86_64                                  276.5 MiB  13.0 MiB/s 00:21 [######################################################] 100%
 jre-openjdk-headless-20.0.1.u9-3-x86_64                          39.8 MiB  11.3 MiB/s 00:04 [######################################################] 100%
 lib32-gcc-libs-13.1.1-1-x86_64                                   31.2 MiB  11.7 MiB/s 00:03 [######################################################] 100%
 lib32-glibc-2.37-3-x86_64                                         3.4 MiB  9.18 MiB/s 00:00 [######################################################] 100%
 ccache-4.8.2-1-x86_64                                           540.9 KiB  2.93 MiB/s 00:00 [######################################################] 100%
 rsync-3.2.7-4-x86_64                                            338.4 KiB  3.09 MiB/s 00:00 [######################################################] 100%
 inetutils-2.4-1-x86_64                                          309.4 KiB  2.38 MiB/s 00:00 [######################################################] 100%
 ncurses5-compat-libs-6.4-2-x86_64                               306.0 KiB  1150 KiB/s 00:00 [######################################################] 100%
 lib32-ncurses-6.4_20230520-1-x86_64                             231.1 KiB  2.19 MiB/s 00:00 [######################################################] 100%
 squashfs-tools-4.6.1-1-x86_64                                   218.2 KiB  3.81 MiB/s 00:00 [######################################################] 100%
 lib32-ncurses5-compat-libs-6.4-1-x86_64                         184.8 KiB   943 KiB/s 00:00 [######################################################] 100%
 jre-openjdk-20.0.1.u9-3-x86_64                                  183.2 KiB  2.08 MiB/s 00:00 [######################################################] 100%
 zip-3.0-10-x86_64                                               166.4 KiB  1716 KiB/s 00:00 [######################################################] 100%
 lib32-readline-8.2.001-2-x86_64                                 141.1 KiB  1357 KiB/s 00:00 [######################################################] 100%
 sdl12-compat-1.2.64-1-x86_64                                    129.3 KiB   808 KiB/s 00:00 [######################################################] 100%
 gperf-3.1-4-x86_64                                               98.0 KiB   980 KiB/s 00:00 [######################################################] 100%
 libnet-1:1.1.6-1-x86_64                                          96.3 KiB   802 KiB/s 00:00 [######################################################] 100%
 xxhash-0.8.1-4-x86_64                                            94.8 KiB  1247 KiB/s 00:00 [######################################################] 100%
 bc-1.07.1-4-x86_64                                               87.8 KiB  1156 KiB/s 00:00 [######################################################] 100%
 libxcrypt-compat-4.4.35-1-x86_64                                 68.0 KiB  1447 KiB/s 00:00 [######################################################] 100%
 repo-2.34.1-1-any                                                62.5 KiB   644 KiB/s 00:00 [######################################################] 100%
 hiredis-1.1.0-1-x86_64                                           50.6 KiB   562 KiB/s 00:00 [######################################################] 100%
 lib32-zlib-1.2.13-2-x86_64                                       47.3 KiB   430 KiB/s 00:00 [######################################################] 100%
 schedtool-1.3.0-7-x86_64                                         26.3 KiB   292 KiB/s 00:00 [######################################################] 100%
 perl-switch-2.17-8-any                                           17.4 KiB   174 KiB/s 00:00 [######################################################] 100%
 java-runtime-common-3-5-any                                       5.0 KiB  93.5 KiB/s 00:00 [######################################################] 100%
 java-environment-common-3-5-any                                   2.6 KiB  19.7 KiB/s 00:00 [######################################################] 100%
 全部 (27/27)                                                    354.1 MiB  11.0 MiB/s 00:32 [######################################################] 100%
(27/27) 正在检查密钥环里的密钥                                                               [######################################################] 100%
(27/27) 正在检查软件包完整性                                                                 [######################################################] 100%
(27/27) 正在加载软件包文件                                                                   [######################################################] 100%
(27/27) 正在检查文件冲突                                                                     [######################################################] 100%
(27/27) 正在检查可用存储空间                                                                 [######################################################] 100%
:: 正在处理软件包的变化...
( 1/27) 正在安装 repo                                                                        [######################################################] 100%
( 2/27) 正在安装 lib32-glibc                                                                 [######################################################] 100%
( 3/27) 正在安装 lib32-zlib                                                                  [######################################################] 100%
( 4/27) 正在安装 gperf                                                                       [######################################################] 100%
( 5/27) 正在安装 lib32-gcc-libs                                                              [######################################################] 100%
( 6/27) 正在安装 lib32-ncurses                                                               [######################################################] 100%
( 7/27) 正在安装 lib32-ncurses5-compat-libs                                                  [######################################################] 100%
( 8/27) 正在安装 java-runtime-common                                                         [######################################################] 100%
For the complete set of Java binaries to be available in your PATH,
you need to re-login or source /etc/profile.d/jre.sh
Please note that this package does not support forcing JAVA_HOME as former package java-common did
( 9/27) 正在安装 libnet                                                                      [######################################################] 100%
(10/27) 正在安装 jre-openjdk-headless                                                        [######################################################] 100%
jre-openjdk-headless 的可选依赖
    java-rhino: for some JavaScript support
(11/27) 正在安装 jre-openjdk                                                                 [######################################################] 100%
when you use a non-reparenting window manager,
set _JAVA_AWT_WM_NONREPARENTING=1 in /etc/profile.d/jre.sh
jre-openjdk 的可选依赖
    alsa-lib: for basic sound support [已安装]
    gtk2: for the Gtk+ 2 look and feel - desktop usage
    gtk3: for the Gtk+ 3 look and feel - desktop usage [已安装]
(12/27) 正在安装 java-environment-common                                                     [######################################################] 100%
(13/27) 正在安装 jdk-openjdk                                                                 [######################################################] 100%
(14/27) 正在安装 libxcrypt-compat                                                            [######################################################] 100%
(15/27) 正在安装 squashfs-tools                                                              [######################################################] 100%
(16/27) 正在安装 inetutils                                                                   [######################################################] 100%
(17/27) 正在安装 ncurses5-compat-libs                                                        [######################################################] 100%
(18/27) 正在安装 xxhash                                                                      [######################################################] 100%
(19/27) 正在安装 rsync                                                                       [######################################################] 100%
rsync 的可选依赖
    python: for rrsync [已安装]
(20/27) 正在安装 schedtool                                                                   [######################################################] 100%
(21/27) 正在安装 zip                                                                         [######################################################] 100%
(22/27) 正在安装 sdl12-compat                                                                [######################################################] 100%
(23/27) 正在安装 perl-switch                                                                 [######################################################] 100%
(24/27) 正在安装 lib32-readline                                                              [######################################################] 100%
(25/27) 正在安装 bc                                                                          [######################################################] 100%
(26/27) 正在安装 hiredis                                                                     [######################################################] 100%
(27/27) 正在安装 ccache                                                                      [######################################################] 100%
:: 正在运行事务后钩子函数...
(1/6) Reloading system manager configuration...
(2/6) Arming ConditionNeedsUpdate...
(3/6) Warn about old perl modules
(4/6) Updating icon theme caches...
(5/6) Updating the info directory file...
(6/6) Updating the desktop file MIME type cache...
正在解析依赖关系...
正在查找软件包冲突...

软件包 (3) git-lfs-3.3.0-1  ninja-1.11.1-3  pngcrush-1.8.13-3

下载大小：       3.88 MiB
全部安装大小：  12.01 MiB

:: 进行安装吗？ [Y/n] y
:: 正在获取软件包......
 git-lfs-3.3.0-1-x86_64                                            3.7 MiB  5.22 MiB/s 00:01 [######################################################] 100%
 ninja-1.11.1-3-x86_64                                           145.4 KiB  1322 KiB/s 00:00 [######################################################] 100%
 pngcrush-1.8.13-3-x86_64                                         45.6 KiB   343 KiB/s 00:00 [######################################################] 100%
 全部 (3/3)                                                        3.9 MiB  3.22 MiB/s 00:01 [######################################################] 100%
(3/3) 正在检查密钥环里的密钥                                                                 [######################################################] 100%
(3/3) 正在检查软件包完整性                                                                   [######################################################] 100%
(3/3) 正在加载软件包文件                                                                     [######################################################] 100%
(3/3) 正在检查文件冲突                                                                       [######################################################] 100%
(3/3) 正在检查可用存储空间                                                                   [######################################################] 100%
:: 正在处理软件包的变化...
(1/3) 正在安装 pngcrush                                                                      [######################################################] 100%
(2/3) 正在安装 git-lfs                                                                       [######################################################] 100%
(3/3) 正在安装 ninja                                                                         [######################################################] 100%
:: 正在运行事务后钩子函数...
(1/1) Arming ConditionNeedsUpdate...
==> 正在创建软件包：aosp-devel 0.9-1 (2023年06月29日 星期四 15时19分12秒)
==> 正在检查运行时依赖关系...
==> 正在检查编译时依赖关系
==> 获取源代码...
==> 正在删除现存的 $srcdir/ 目录...
==> 正在释放源码...
==> 源代码已就绪。
==> 正在创建软件包：aosp-devel 0.9-1 (2023年06月29日 星期四 15时19分13秒)
==> 正在检查运行时依赖关系...
==> 正在检查编译时依赖关系
==> 警告： 使用现存的 $srcdir/ 树
==> 正在进入 fakeroot 环境...
==> 正在清理安装...
  -> 正在删除 libtool 文件...
  -> 正在清除不打算要的文件...
  -> 正在移除静态库文件...
  -> 正在从二进制文件和库中清除不需要的系统符号...
  -> 正在压缩 man 及 info 文档...
==> 正在检查打包问题...
==> 正在构建软件包"aosp-devel"...
  -> 正在生成 .PKGINFO 文件...
  -> 正在生成 .BUILDINFO 文件...
  -> 正在生成 .MTREE 文件...
  -> 正在压缩软件包...
==> 正在离开 fakeroot 环境。
==> 完成创建：aosp-devel 0.9-1 (2023年06月29日 星期四 15时19分14秒)
==> 清理中...
==> 正在创建软件包：xml2 0.5-1 (2023年06月29日 星期四 15时19分15秒)
==> 正在检查运行时依赖关系...
==> 正在检查编译时依赖关系
==> 获取源代码...
  -> 找到 xml2_0.5.orig.tar.gz
==> 正在验证 source 文件，使用md5sums...
    xml2_0.5.orig.tar.gz ... 通过
==> 正在删除现存的 $srcdir/ 目录...
==> 正在释放源码...
  -> 正在解压缩 xml2_0.5.orig.tar.gz，使用 bsdtar
==> 源代码已就绪。
==> 正在创建软件包：xml2 0.5-1 (2023年06月29日 星期四 15时19分16秒)
==> 正在检查运行时依赖关系...
==> 正在检查编译时依赖关系
==> 警告： 使用现存的 $srcdir/ 树
==> 正在开始 build()...
checking for a BSD-compatible install... /usr/bin/install -c
checking whether build environment is sane... yes
checking for gawk... gawk
checking whether make sets $(MAKE)... yes
checking for gcc... gcc
checking whether the C compiler works... yes
checking for C compiler default output file name... a.out
checking for suffix of executables...
checking whether we are cross compiling... no
checking for suffix of object files... o
checking whether we are using the GNU C compiler... yes
checking whether gcc accepts -g... yes
checking for gcc option to accept ISO C89... none needed
checking for style of include used by make... GNU
checking dependency style of gcc... gcc3
checking for pkg-config... /usr/bin/pkg-config
checking pkg-config is at least version 0.9.0... yes
checking for XML... yes
checking how to run the C preprocessor... gcc -E
checking for grep that handles long lines and -e... /usr/bin/grep
checking for egrep... /usr/bin/grep -E
checking for ANSI C header files... yes
checking for sys/types.h... yes
checking for sys/stat.h... yes
checking for stdlib.h... yes
checking for string.h... yes
checking for memory.h... yes
checking for strings.h... yes
checking for inttypes.h... yes
checking for stdint.h... yes
checking for unistd.h... yes
checking for stdlib.h... (cached) yes
checking for string.h... (cached) yes
checking for unistd.h... (cached) yes
checking for an ANSI C-conforming const... yes
checking for size_t... yes
checking for stdlib.h... (cached) yes
checking for GNU libc compatible malloc... yes
checking for stdlib.h... (cached) yes
checking for GNU libc compatible realloc... yes
checking for vprintf... yes
checking for _doprnt... no
checking for memchr... yes
checking for memmove... yes
checking for memset... yes
checking for strchr... yes
checking for strcspn... yes
checking for strdup... yes
checking for strrchr... yes
checking for strstr... yes
configure: creating ./config.status
config.status: creating Makefile
config.status: creating config.h
config.status: executing depfiles commands
make  all-am
make[1]: 进入目录“/home/baizhi958216/.cache/yay/xml2/src/xml2-0.5”
if gcc -DHAVE_CONFIG_H -I. -I. -I.    -I/usr/include/libxml2  -march=x86-64 -mtune=generic -O2 -pipe -fno-plt -fexceptions         -Wp,-D_FORTIFY_SOURCE=2 -Wformat -Werror=format-security         -fstack-clash-protection -fcf-protection -MT xml2.o -MD -MP -MF ".deps/xml2.Tpo" -c -o xml2.o xml2.c; \
then mv -f ".deps/xml2.Tpo" ".deps/xml2.Po"; else rm -f ".deps/xml2.Tpo"; exit 1; fi
gcc -I/usr/include/libxml2  -march=x86-64 -mtune=generic -O2 -pipe -fno-plt -fexceptions         -Wp,-D_FORTIFY_SOURCE=2 -Wformat -Werror=format-security         -fstack-clash-protection -fcf-protection  -Wl,-O1,--sort-common,--as-needed,-z,relro,-z,now -o xml2  xml2.o -lxml2
if gcc -DHAVE_CONFIG_H -I. -I. -I.    -I/usr/include/libxml2  -march=x86-64 -mtune=generic -O2 -pipe -fno-plt -fexceptions         -Wp,-D_FORTIFY_SOURCE=2 -Wformat -Werror=format-security         -fstack-clash-protection -fcf-protection -MT 2xml.o -MD -MP -MF ".deps/2xml.Tpo" -c -o 2xml.o 2xml.c; \
then mv -f ".deps/2xml.Tpo" ".deps/2xml.Po"; else rm -f ".deps/2xml.Tpo"; exit 1; fi
gcc -I/usr/include/libxml2  -march=x86-64 -mtune=generic -O2 -pipe -fno-plt -fexceptions         -Wp,-D_FORTIFY_SOURCE=2 -Wformat -Werror=format-security         -fstack-clash-protection -fcf-protection  -Wl,-O1,--sort-common,--as-needed,-z,relro,-z,now -o 2xml  2xml.o -lxml2
if gcc -DHAVE_CONFIG_H -I. -I. -I.    -I/usr/include/libxml2  -march=x86-64 -mtune=generic -O2 -pipe -fno-plt -fexceptions         -Wp,-D_FORTIFY_SOURCE=2 -Wformat -Werror=format-security         -fstack-clash-protection -fcf-protection -MT csv2.o -MD -MP -MF ".deps/csv2.Tpo" -c -o csv2.o csv2.c; \
then mv -f ".deps/csv2.Tpo" ".deps/csv2.Po"; else rm -f ".deps/csv2.Tpo"; exit 1; fi
csv2.c: 在函数‘field’中:
csv2.c:61:28: 警告：字段精度限定 ‘.*’ expects argument of type ‘int’, but argument 2 has type ‘long int’ [-Wformat=]
   61 |                 printf("=%.*s\n",end - begin,begin);
      |                          ~~^~    ~~~~~~~~~~~
      |                            |         |
      |                            int       long int
gcc -I/usr/include/libxml2  -march=x86-64 -mtune=generic -O2 -pipe -fno-plt -fexceptions         -Wp,-D_FORTIFY_SOURCE=2 -Wformat -Werror=format-security         -fstack-clash-protection -fcf-protection  -Wl,-O1,--sort-common,--as-needed,-z,relro,-z,now -o csv2  csv2.o
if gcc -DHAVE_CONFIG_H -I. -I. -I.    -I/usr/include/libxml2  -march=x86-64 -mtune=generic -O2 -pipe -fno-plt -fexceptions         -Wp,-D_FORTIFY_SOURCE=2 -Wformat -Werror=format-security         -fstack-clash-protection -fcf-protection -MT 2csv.o -MD -MP -MF ".deps/2csv.Tpo" -c -o 2csv.o 2csv.c; \
then mv -f ".deps/2csv.Tpo" ".deps/2csv.Po"; else rm -f ".deps/2csv.Tpo"; exit 1; fi
gcc -I/usr/include/libxml2  -march=x86-64 -mtune=generic -O2 -pipe -fno-plt -fexceptions         -Wp,-D_FORTIFY_SOURCE=2 -Wformat -Werror=format-security         -fstack-clash-protection -fcf-protection  -Wl,-O1,--sort-common,--as-needed,-z,relro,-z,now -o 2csv  2csv.o
make[1]: 离开目录“/home/baizhi958216/.cache/yay/xml2/src/xml2-0.5”
==> 正在进入 fakeroot 环境...
==> 正在开始 package()...
make[1]: 进入目录“/home/baizhi958216/.cache/yay/xml2/src/xml2-0.5”
test -z "/usr/bin" || mkdir -p -- "/home/baizhi958216/.cache/yay/xml2/pkg/xml2/usr/bin"
  /usr/bin/install -c 'xml2' '/home/baizhi958216/.cache/yay/xml2/pkg/xml2/usr/bin/xml2'
  /usr/bin/install -c '2xml' '/home/baizhi958216/.cache/yay/xml2/pkg/xml2/usr/bin/2xml'
  /usr/bin/install -c 'csv2' '/home/baizhi958216/.cache/yay/xml2/pkg/xml2/usr/bin/csv2'
  /usr/bin/install -c '2csv' '/home/baizhi958216/.cache/yay/xml2/pkg/xml2/usr/bin/2csv'
make  install-exec-hook
make[2]: 进入目录“/home/baizhi958216/.cache/yay/xml2/src/xml2-0.5”
ln -sf /home/baizhi958216/.cache/yay/xml2/pkg/xml2/usr/bin/xml2 /home/baizhi958216/.cache/yay/xml2/pkg/xml2/usr/bin/html2
ln -sf /home/baizhi958216/.cache/yay/xml2/pkg/xml2/usr/bin/2xml /home/baizhi958216/.cache/yay/xml2/pkg/xml2/usr/bin/2html
make[2]: 离开目录“/home/baizhi958216/.cache/yay/xml2/src/xml2-0.5”
make[1]: 对“install-data-am”无需做任何事。
make[1]: 离开目录“/home/baizhi958216/.cache/yay/xml2/src/xml2-0.5”
==> 正在清理安装...
  -> 正在删除 libtool 文件...
  -> 正在清除不打算要的文件...
  -> 正在移除静态库文件...
  -> 正在从二进制文件和库中清除不需要的系统符号...
  -> 正在压缩 man 及 info 文档...
==> 正在检查打包问题...
==> 正在构建软件包"xml2"...
  -> 正在生成 .PKGINFO 文件...
  -> 正在生成 .BUILDINFO 文件...
  -> 正在生成 .MTREE 文件...
  -> 正在压缩软件包...
==> 正在离开 fakeroot 环境。
==> 完成创建：xml2 0.5-1 (2023年06月29日 星期四 15时19分19秒)
==> 清理中...
正在加载软件包...
正在解析依赖关系...
正在查找软件包冲突...

软件包 (2) aosp-devel-0.9-1  xml2-0.5-1

全部安装大小：  0.05 MiB

:: 进行安装吗？ [Y/n] y
(2/2) 正在检查密钥环里的密钥                                                                 [######################################################] 100%
(2/2) 正在检查软件包完整性                                                                   [######################################################] 100%
(2/2) 正在加载软件包文件                                                                     [######################################################] 100%
(2/2) 正在检查文件冲突                                                                       [######################################################] 100%
(2/2) 正在检查可用存储空间                                                                   [######################################################] 100%
:: 正在处理软件包的变化...
(1/2) 正在安装 aosp-devel                                                                    [######################################################] 100%
aosp-devel 的可选依赖
    wxgtk2: may be required on older versions
    python2-virtualenv: required on older versions to make python2 the default
(2/2) 正在安装 xml2                                                                          [######################################################] 100%
:: 正在运行事务后钩子函数...
(1/1) Arming ConditionNeedsUpdate...
==> 正在创建软件包：lineageos-devel 0.2-1 (2023年06月29日 星期四 15时19分22秒)
==> 正在检查运行时依赖关系...
==> 正在检查编译时依赖关系
==> 获取源代码...
==> 正在删除现存的 $srcdir/ 目录...
==> 正在释放源码...
==> 源代码已就绪。
==> 正在创建软件包：lineageos-devel 0.2-1 (2023年06月29日 星期四 15时19分23秒)
==> 正在检查运行时依赖关系...
==> 正在检查编译时依赖关系
==> 警告： 使用现存的 $srcdir/ 树
==> 正在进入 fakeroot 环境...
==> 正在清理安装...
  -> 正在删除 libtool 文件...
  -> 正在清除不打算要的文件...
  -> 正在移除静态库文件...
  -> 正在从二进制文件和库中清除不需要的系统符号...
  -> 正在压缩 man 及 info 文档...
==> 正在检查打包问题...
==> 正在构建软件包"lineageos-devel"...
  -> 正在生成 .PKGINFO 文件...
  -> 正在生成 .BUILDINFO 文件...
  -> 正在生成 .MTREE 文件...
  -> 正在压缩软件包...
==> 正在离开 fakeroot 环境。
==> 完成创建：lineageos-devel 0.2-1 (2023年06月29日 星期四 15时19分24秒)
==> 清理中...
正在加载软件包...
正在解析依赖关系...
正在查找软件包冲突...

软件包 (1) lineageos-devel-0.2-1


:: 进行安装吗？ [Y/n] y
(1/1) 正在检查密钥环里的密钥                                                                 [######################################################] 100%
(1/1) 正在检查软件包完整性                                                                   [######################################################] 100%
(1/1) 正在加载软件包文件                                                                     [######################################################] 100%
(1/1) 正在检查文件冲突                                                                       [######################################################] 100%
(1/1) 正在检查可用存储空间                                                                   [######################################################] 100%
:: 正在处理软件包的变化...
(1/1) 正在安装 lineageos-devel                                                               [######################################################] 100%
lineageos-devel 的可选依赖
    maven
    gradle
[baizhi958216@TianXuan dev]$
```

:::

## 配置 git

需要有一个自己的 git 用户名和邮箱

```bash
git config --global user.name 用户名
git config --global user.email 邮箱
```

## 获取 LineageOS 源码

### 建立源码存放目录:

```bash
mkdir -p ~/android/lineage
cd ~/android/lineage
```

### 初始化源码仓库:

```bash
repo init --depth=1 -u https://github.com/LineageOS/android.git -b lineage-20.0 --git-lfs
```

:::details init 日志

```bash
[baizhi958216@TianXuan lineage]$ repo init --depth=1 -u https://github.com/LineageOS/android.git -b lineage-20.0 --git-lfs
Downloading Repo source from https://gerrit.googlesource.com/git-repo
repo: Updating release signing keys to keyset ver 2.3

Your identity is: baizhi958216 <1475289190@qq.com>
If you want to change this, please re-run 'repo init' with --config-name

Testing colorized output (for 'repo diff', 'repo status'):
  black    red      green    yellow   blue     magenta   cyan     white
  bold     dim      ul       reverse
Enable color display in this user account (y/N)? y

repo has been initialized in /home/baizhi958216/android/lineage
[baizhi958216@TianXuan lineage]$
```

:::

### 同步源码

```bash
repo sync -c -j$(nproc --all) --force-sync --no-clone-bundle --no-tags
```
