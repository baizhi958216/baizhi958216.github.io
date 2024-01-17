# ssh服务端验证错误

由于一些不可描述的缘故，有时提交或者推送到远端的时候会出现网络问题，比如：

```bash
kex_exchange_identification: Connection closed by remote host
```

```bash
ssh: connect to host github.com port 22: Connection refused
```

等等。

但是在前几天明明是没有问题的，是ssh过期了吗？还是说微软出问题了？

## 尝试解决

- 1. 删除`knwon_hosts`重新提交，错误依旧

- 2. 重新将ssh密钥添加到ssh-agent，错误依旧

- 3. 重新生成ssh密钥，错误依旧

- 4. 手动将github的ssh密钥指纹添加到known_host，错误依旧

- 5. 切换到https端口，成功

在`.ssh/config`写入：

```
Host github.com
    Hostname ssh.github.com
    Port 443
    User git
```

更多解决办法： https://docs.github.com/zh/authentication/troubleshooting-ssh