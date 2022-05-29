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
## 编译
## 常见问题