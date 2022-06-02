#
## 生成GPG Key
```bash
gpg --full-generate-key
```
### 看提示操作
```bash
[baizhi958216@TianXuan ~]$ gpg --full-generate-key
gpg (GnuPG) 2.2.35; Copyright (C) 2022 g10 Code GmbH
This is free software: you are free to change and redistribute it.
There is NO WARRANTY, to the extent permitted by law.

请选择您要使用的密钥类型：
   (1) RSA 和 RSA （默认）
   (2) DSA 和 Elgamal
   (3) DSA（仅用于签名）
   (4) RSA（仅用于签名）
 （14）卡中现有密钥
您的选择是？ 
# 设置密钥类型，默认第一个
RSA 密钥的长度应在 1024 位与 4096 位之间。
您想要使用的密钥长度？(3072) 
# 设置密钥长度，默认3072
请求的密钥长度是 3072 位
请设定这个密钥的有效期限。
         0 = 密钥永不过期
      <n>  = 密钥在 n 天后过期
      <n>w = 密钥在 n 周后过期
      <n>m = 密钥在 n 月后过期
      <n>y = 密钥在 n 年后过期
密钥的有效期限是？(0) 
# 设置密钥有效期，默认永久
密钥永远不会过期
这些内容正确吗？ (y/N) y
# y

GnuPG 需要构建用户标识以辨认您的密钥。

真实姓名： baizhi958216
# 设置用户名
电子邮件地址： 1475289190@qq.com
# 设置邮箱
注释： 
# 可留空
您选定了此用户标识：
    “baizhi958216 <1475289190@qq.com>”

更改姓名（N）、注释（C）、电子邮件地址（E）或确定（O）/退出（Q）？ O
# O
# 接下来提示输入密码保护GPG Key，可以空着
我们需要生成大量的随机字节。在质数生成期间做些其他操作（敲打键盘
、移动鼠标、读写硬盘之类的）将会是一个不错的主意；这会让随机数
发生器有更好的机会获得足够的熵。
我们需要生成大量的随机字节。在质数生成期间做些其他操作（敲打键盘
、移动鼠标、读写硬盘之类的）将会是一个不错的主意；这会让随机数
发生器有更好的机会获得足够的熵。
gpg: /home/baizhi958216/.gnupg/trustdb.gpg：建立了信任度数据库
gpg: 目录‘/home/baizhi958216/.gnupg/openpgp-revocs.d’已创建
gpg: 吊销证书已被存储为‘/home/baizhi958216/.gnupg/openpgp-revocs.d/ 755323SAFCAMFASO75SDSC8797SDWFF8F24D.rev’
公钥和私钥已经生成并被签名。

pub   rsa3072 2022-06-02 [SC]
      755323SAFCAMFASO75SDSC8797SDWFF8F24D
uid                      baizhi958216 <1475289190@qq.com>
sub   rsa3072 2022-06-02 [E]

[baizhi958216@TianXuan ~]$ 
```
## 导出 GPG 公钥
```bash
gpg --armor --export 755323SAFCAMFASO75SDSC8797SDWFF8F24D
```
```bash
[baizhi958216@TianXuan ~]$ gpg --armor --export 755323SAFCAMFASO75SDSC8797SDWFF8F24D
-----BEGIN PGP PUBLIC KEY BLOCK-----

加密内容
-----END PGP PUBLIC KEY BLOCK-----
[baizhi958216@TianXuan ~]$ 
```
## 配置git
### 为git设置GPG签名密钥
```bash
git config --global user.signingkey 755323SAFCAMFASO75SDSC8797SDWFF8F24D
```
## 添加到Github
 ### 进入用户设置  
![lAv4q.png](https://s1.328888.xyz/2022/05/24/lAv4q.png)  
### SSH and GPG keys -> New GPG key
![W2h6m.png](https://s1.328888.xyz/2022/06/03/W2h6m.png)
### 上传GPG签名
输入GPG签名后点击 ```Add GPG key```
![W2HXA.png](https://s1.328888.xyz/2022/06/03/W2HXA.png)