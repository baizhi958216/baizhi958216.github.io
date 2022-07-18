# github入门
## 创建一个新的仓库
登录github后点击右上角的加号```+```-->```New repository```  
![lh9ik.png](https://s1.328888.xyz/2022/05/24/lh9ik.png)  
## 配置你的仓库  
![lhLZQ.png](https://s1.328888.xyz/2022/05/24/lhLZQ.png)  
1. 是仓库名字(字面意思)
2. 是仓库描述(字面意思)
3. 是仓库状态(Public面向全网公开 Private只有自己看到)
## 配置git
这将影响你后续的提交历史
```bash
git config --global user.email "你的邮箱"
git config --global user.name "你的名字"
# 例如：
# [baizhi958216@TianXuan myproject]$ git config --global user.email "1475289190@qq.com"
# [baizhi958216@TianXuan myproject]$ git config --global user.name "baizhi958216"
```
## 给本地项目初始化git
### ```git init```
```bash
[baizhi958216@TianXuan myproject]$ git init
提示：使用 'master' 作为初始分支的名称。这个默认分支名称可能会更改。要在新仓库中
提示：配置使用初始分支名，并消除这条警告，请执行：
提示：
提示：  git config --global init.defaultBranch <名称>
提示：
提示：除了 'master' 之外，通常选定的名字有 'main'、'trunk' 和 'development'。
提示：可以通过以下命令重命名刚创建的分支：
提示：
提示：  git branch -m <name>
已初始化空的 Git 仓库于 /home/baizhi958216/myproject/.git/
```
## 配置本地仓库
### 1.添加文件
```bash
git add .
```
```add```即添加文件 ```.```即目录下所有文件  
!```注意```不能添加空文件夹
### 2.添加提交历史记录
```bash
git commit -m "hi: Add a new hi file"
```
提交规范请详阅：https://www.conventionalcommits.org/zh-hans/v1.0.0/#约定式提交规范
### 3.为仓库添加一个分支
```bash
git branch -M 分支名
```
### 4.映射远端仓库
```bash
git remote add origin git@github.com:用户名/仓库名.git
```
### 5.推送到远端
推送并关联本地分支
```bash
git push --set-upstream origin 分支名

# 如果遇到下面的输出 输入yes回车同意
The authenticity of host 'github.com (28.0.0.81)' can't be established.
ED25519 key fingerprint is SHA256:+***************************.
This key is not known by any other names
Are you sure you want to continue connecting (yes/no/[fingerprint])?
```
### 6.推送成功输出
![ldCN2.png](https://s1.328888.xyz/2022/05/25/ldCN2.png)