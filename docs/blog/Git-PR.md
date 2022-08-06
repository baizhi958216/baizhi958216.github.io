# 提交一份Pull Request
不直接merge/rebase到主分支是项目开发的好习惯  
通过Pull Request可以让开发者们一起进行代码审核  
从而提高代码质量  
## 1、新建上游远端(upstream)
```bash
git remote add upstream git@gitee.com:lowcode_KIP/lowcode_kip.git
```
### fetch远端代码
```bash
git fetch upstream
```
## 2、检出远端分支
检出远端 `master` 分支在新的分支 `pr1` 上
```bash
git checkout -b pr1 upstream/master
```
[![uICCB.png](https://s1.328888.xyz/2022/08/06/uICCB.png)](https://imgloc.com/i/uICCB)
## 3、找到commit记录id
```bash
git log
``` 
[![uV0km.png](https://s1.328888.xyz/2022/08/06/uV0km.png)](https://imgloc.com/i/uV0km)  
## 4、尝试cherry-pick  
```bash
# 单个commit
git cheery-pick commit_id
# 多个commit
git cheery-pick commit_id1 commit_id2 commit_id3 ...
```
### 如果遇到冲突 需要解决冲突
[![uI5h6.png](https://s1.328888.xyz/2022/08/06/uI5h6.png)](https://imgloc.com/i/uI5h6)  
- 解决冲突  
- 冲突是当 `本地文件` 与 `commit记录` 存在commit记录以外的差异时出现  
VSCode打开项目, 找到存在冲突的文件  
`Current Change`: 本地内容  
`Incoming Change`: commit变更  
如果认为 `Incoming Change` 是正确的点击 `Accept Incoming Change`  
[![uIfiE.png](https://s1.328888.xyz/2022/08/06/uIfiE.png)](https://imgloc.com/i/uIfiE)  
- 手动添加冲突解决后的文件
```bash
git add .
```
- 继续进行cherry-pick
```bash
git cherry-pick --continue
```
[![uVwui.png](https://s1.328888.xyz/2022/08/06/uVwui.png)](https://imgloc.com/i/uVwui)  
## 5、推送分支到远端
```bash
git push upstream pr1
```
此时, 上游仓库会多出一个pr1分支用于合并
## 6、提交Pull Request(PR)
### 创建PR
1、源分支选择刚刚推送的 `pr1`, 目标分支 `master`  
2、填写PR标题和说明  
3、勾选 `合并后删除提交分支` `合并后关闭提到的Issue`  
4、点击 `创建Pull Request`
[![uIb7d.png](https://s1.328888.xyz/2022/08/06/uIb7d.png)](https://imgloc.com/i/uIb7d)  
### 添加审查/测试
[![uIBKC.png](https://s1.328888.xyz/2022/08/06/uIBKC.png)](https://imgloc.com/i/uIBKC)