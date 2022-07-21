# Docker 上手

## 安装`docker`

```bash
$ sudo pacman -S docker
```

检查一遍

```bash
$ docker version
Client:
 Version:           20.10.17
 API version:       1.41
 Go version:        go1.18.3
 Git commit:        100c70180f
 Built:             Sat Jun 11 23:27:28 2022
 OS/Arch:           linux/amd64
 Context:           default
 Experimental:      true
Cannot connect to the Docker daemon at unix:///var/run/docker.sock. Is the docker daemon running?
```

出问题!: `Cannot connect to the Docker daemon at unix:///var/run/docker.sock. Is the docker daemon running?`

## 启动`docker`服务

```bash
$ sudo systemctl start docker
```

## 配置权限

服务启动好后发现依然报错

```bash
docker: Got permission denied while trying to connect to the Docker daemon socket at unix:///var/run/docker.sock: Post "http://%2Fvar%2Frun%2Fdocker.sock/v1.24/containers/create": dial unix /var/run/docker.sock: connect: permission denied.
See 'docker run --help'.
```

`/var/run/docker`看样子需要把当前用户加入 docker 组

```bash
# baizhi958216是我的用户名, 添加到docker组中
$ sudo gpasswd -a baizhi958216 docker
# 登入docker组
$ newgrp docker
```
