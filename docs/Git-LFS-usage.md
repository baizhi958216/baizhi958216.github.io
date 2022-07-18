# Git LFS使用
推送大文件到Github发现它报错，原因是文件超过Github文件大小限制100MB
```
remote: error: Trace: *****************************
remote: error: See http://git.io/iEPt8g for more information.
remote: error: File *** is *** MB; this exceeds GitHub's file size limit of 100.00 MB
remote: error: GH001: Large files detected. You may want to try Git Large File Storage - https://git-lfs.github.com.
```
要解决这个问题需要用到 [LFS(Git大文件储存)](https://git-lfs.github.com)  
## 安装LFS
```bash
# ArchLinux
pacman -S lfs
```
运行 ```git lfs env```有输出就是安装好了:
```
git-lfs/3.1.2 (GitHub; linux amd64; go 1.17.6)
git version 2.36.0

LocalWorkingDir=
LocalGitDir=
LocalGitStorageDir=
LocalMediaDir=lfs/objects
LocalReferenceDirs=
TempDir=lfs/tmp
ConcurrentTransfers=8
TusTransfers=false
BasicTransfersOnly=false
SkipDownloadErrors=false
FetchRecentAlways=false
FetchRecentRefsDays=7
FetchRecentCommitsDays=0
FetchRecentRefsIncludeRemotes=true
PruneOffsetDays=3
PruneVerifyRemoteAlways=false
PruneRemoteName=origin
LfsStorageDir=lfs
AccessDownload=none
AccessUpload=none
DownloadTransfers=basic,lfs-standalone-file,ssh
UploadTransfers=basic,lfs-standalone-file,ssh
GIT_EXEC_PATH=/usr/lib/git-core
git config filter.lfs.process = "git-lfs filter-process"
git config filter.lfs.smudge = "git-lfs smudge -- %f"
git config filter.lfs.clean = "git-lfs clean -- %f"
```
运行 ```git lfs install``` 为账户安装LFS服务:
```
Git LFS initialized.
```
## 跟踪文件
告诉LFS需要跟踪的文件，例如 ```modem.img```
```bash
git lfs track "modem.img"
```
LFS会在项目目录生成 ```.gitattributes``` 文件: 
```
modem.img filter=lfs diff=lfs merge=lfs -text
```
然后就可以进行正常的提交了
```bash
git add modem.img
git commit -s -S -m "Add modem.img"
git push
```
由LFS管理的文件会上传到Github的LFS服务器上
## 关于clone由LFS储存的文件
同样需要安装LFS，否则clone下来的是一份文本