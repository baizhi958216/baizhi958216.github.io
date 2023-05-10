# 腾讯云搭建 httpd 服务

## 购买云服务器

[购买地址](https://buy.cloud.tencent.com/cvm)
![select0](./tencentcloud/select0.png)

1. 选择`按量计费`
2. 寻找价格合适的服务器
   ![select](./tencentcloud/select.png)
3. 镜像选择`CentOS 8.0 64位`
4. 存储使用`20GB`
   ![select1](./tencentcloud/select2.png)

## 设置网络和主机

1. 带宽选择`1MBPS`
   ![set](./tencentcloud/set.png)
2. 登录方式选择`设置密码`
   ![set1](./tencentcloud/set2.png)

## 确认配置信息

![confirm](./tencentcloud/confirm.png)

## 等待实例创建

![wait](./tencentcloud/wait.png)

## 得到公网 IP

复制公网 IP

![getip](./tencentcloud/getip.png)

## ssh 连接服务器

1. 打开终端

   ![terminal](./tencentcloud/openterminal.png)

2. 运行`ssh root@服务器IP`

   ![terminal](./tencentcloud/terminalssh.png)

3. 输入`yes`回车\

   ![yes](./tencentcloud/yes.png)

4. 输入设置的密码

   ![password](./tencentcloud/password.png)

5. 回车
6. 进入服务器

   ![ssh](./tencentcloud/ssh.png)

## 安装 httpd

```bash
yum -y install httpd
```

![installhttpd](./tencentcloud/install.png)

## 检查 httpd 服务

```bash
rpm -qa | grep httpd
```

![gethttpd](./tencentcloud/gethttpd.png)

## 部署 html 文件

```bash
nano /var/www/html/index.html
```

![html](./tencentcloud/html.png)

## 重启 httpd 服务

```bash
service httpd restart
```

![restart](./tencentcloud/restart.png)

## 验证

![validate](./tencentcloud/validate.png)

## html 模板

```html
<!DOCTYPE html>
<html lang="zh">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>白云白金瀚!</title>
  </head>
  <body>
    <h1>整个**一半姓高</h1>
    <ul>
      <li><a href="">高启辉</a></li>
      <li><a href="">高启生</a></li>
      <li><a href="">高启萌</a></li>
      <li><a href="">高启聪</a></li>
      <li><a href="">高启扬</a></li>
      <li><a href="">高启静</a></li>
    </ul>
  </body>
</html>
```
