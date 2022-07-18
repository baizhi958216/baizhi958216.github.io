# 在github上使用ssh
# 摘要
Gtihub不再支持通过http/https提交的密码检验[Github Blog](https://github.blog/2020-12-15-token-authentication-requirements-for-git-operations/)  
原文
```
Beginning August 13, 2021, we will no longer accept account passwords when authenticating Git operations and will require the use of token-based authentication
```
所以，开始使用ssh吧 :) 
### 开始生成ssh密钥
```bash
ssh-keygen -t ed25519 -C "你的邮箱"
# 例如
# [baizhi958216@TianXuan ~]$ ssh-keygen -t ed25519 -C "1475289190@qq.com"
```
ed25519是基于Edwards曲线的数字签名算法（EdDSA），结合 SHA-512/256哈希算法，采用扭曲爱德华曲线： 系数a = -1, d=−121656121655​. 比现有的数字签名方案更快,且不损失安全性。
### 配置ssh
```bash
# 提示保存ssh密钥的目录，回车即可(即使用默认路径)
Enter file in which to save the key (/home/baizhi958216/.ssh/id_rsa): 
Created directory '/home/baizhi958216/.ssh'.
# 提示输入ssh密钥保护密码，回车即可(默认为空)
Enter passphrase (empty for no passphrase): 
# 提示重复输入ssh密钥保护密码，回车即可(默认为空)
Enter same passphrase again: 
# 私钥路径
Your identification has been saved in /home/baizhi958216/.ssh/id_ed25519
# 公钥路径
Your public key has been saved in /home/baizhi958216/.ssh/id_ed25519.pub
```
### 复制公钥
```cat /home/baizhi958216/.ssh/id_ed25519.pub```查看公钥，把```ssh-ed25519```开头到```邮箱```结束的数据复制下来  
```bash
[baizhi958216@TianXuan ~]$ cat /home/baizhi958216/.ssh/id_ed25519.pub
ssh-ed25519 ***************************************** 1475289190@qq.com
```

## 给仓库添加公钥(github)
### 登录github后点击头像进入用户设置  
![lAv4q.png](https://s1.328888.xyz/2022/05/24/lAv4q.png)  
### SSH and GPG keys --> New SSH key  
![lABVR.png](https://s1.328888.xyz/2022/05/24/lABVR.png)  
### 粘贴SSH公钥  
![l4cR7.png](https://s1.328888.xyz/2022/05/24/l4cR7.png)
### 添加成功  
点击下面的 ```Add SSH key```