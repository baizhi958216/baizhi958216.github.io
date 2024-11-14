# 自行搭建 RustDesk 远程控制

**_安全的远程桌面访问_**

RustDesk 是一款可以平替 TeamViewer 的开源软件，旨在提供安全便捷的自建方案。

- 支持 Windows、macOS、Linux、iOS、Android、Web 等多个平台。

- 支持 VP8 / VP9 / AV1 软件编解码器和 H264 / H265 硬件编解码器。

- 完全掌控数据，轻松自建。

- P2P 连接，端到端加密。

- 在 Windows 上可以非管理员不安装运行，根据需要在本地或远程提升权限。

某些远程控制软件吃相真的难看，还难用<span class="bg-[#000] text-[#000] hover:text-[#fff] px-2 transition-duration-100">向日葵</span>

## 必要条件

- 服务器

:::warning 为什么我没有公共服务器用
由于不少非人类使用该方法进行诈骗，国内已经关掉公共服务器了，因此你需要自己搭建。
:::

:::details 白嫖一手华为 Flexus-L 服务器
找了好久服务器发现都好贵，于是发现华为可以白嫖~ 太好了，以后请叫我花粉 😽

https://activity.huaweicloud.com/free_test/index.html

服务器实例配置好之后记得去安全组放行入站规则`tcp: 21115 21116 21117 21118`，`udp: 21116`，以及常用的端口`20 21 22 80...`
:::

笔者使用 Ubuntu + Docker 进行搭建，其它教程请移步[自建服务器](https://rustdesk.com/docs/zh-cn/self-host/)

- 安全组放行入站规则`tcp: 21115 21116 21117 21118`，`udp: 21116`。

## 安装 Docker

1. 配置 docker 下载镜像地址：

```bash
export DOWNLOAD_URL="https://mirrors.tuna.tsinghua.edu.cn/docker-ce"
```

2. 安装 docker

```bash
curl -fsSL https://get.docker.com/ | sh
```

:::tip dockerhub 镜像源

因为一些不可描述的原因，docker 在国内无法拉取镜像，待 docker 安装完成后配置镜像源：

1. 编辑`/etc/docker/daemon.json`:

```bash
nano /etc/docker/daemon.json
```

2. 将以下内容写入文件:

```json
{
  "registry-mirrors": ["https://docker.m.daocloud.io"]
}
```

按`ctrl + x`按 y 保存

3. 重启 docker 服务

```bash
systemctl restart docker
```

:::

## 启动 rustdesk 服务

如果没有`rustdesk-server`，docker 会自动拉取镜像，能跑就行:D

- hbbs

```bash
docker run --name hbbs -p 21115:21115 -p 21116:21116 -p 21116:21116/udp -p 21118:21118 -v ./data:/root -td --net=host rustdesk/rustdesk-server hbbs
```

- hbbr

```bash
docker run --name hbbr -p 21117:21117 -p 21119:21119 -v ./data:/root -td --net=host rustdesk/rustdesk-server hbbr
```

运行`ls data`有 5 个文件多出来就可以了：

```bash
root@hcss-ecs-4e91:~/rustdesk# ls -l data
total 88
-rw-r--r-- 1 root root  4096 Nov 14 15:33 db_v2.sqlite3
-rw-r--r-- 1 root root 32768 Nov 14 15:33 db_v2.sqlite3-shm
-rw-r--r-- 1 root root 41232 Nov 14 15:33 db_v2.sqlite3-wal
-rw-r--r-- 1 root root    88 Nov 14 15:33 id_ed25519
-rw-r--r-- 1 root root    44 Nov 14 15:33 id_ed25519.pub
root@hcss-ecs-4e91:~/rustdesk#
```

继续`cat data/id_ed25519.pub`拿到公钥，记下要用到。

## 防火墙放行端口

1. 启动 ufw

默认情况下 ufw 是未运行的，需要开启

```bash
ufw enable
```

2. 添加规则

```bash
ufw allow 21115/tcp
ufw allow 21116/tcp
ufw allow 21117/tcp
ufw allow 21118/tcp
ufw allow 21119/tcp
ufw allow 21116/udp
```

3. 重启 ufw

```bash
ufw reload
```

## 客户端连接

网络 -> ID/中继服务器 -> ID服务器填入***服务器的公网IP***

网络 -> ID/中继服务器 -> Key填入***公钥***

回到常规，启动服务
