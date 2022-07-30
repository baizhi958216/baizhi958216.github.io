# 在 WSL2 安装 ArchLinux

当前系统信息

[![Fh0VI.png](https://s1.328888.xyz/2022/07/30/Fh0VI.png)](https://imgloc.com/image/Fh0VI)

## 1. 启用适用于 Linux 的 Windows 子系统

- Powershell 管理员模式运行

```bash
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
```

## 2. 启用虚拟机功能

- Powershell 管理员模式运行

```bash
dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
```

## 3. 重启

- 重启才可完成以上步骤

## 4. 安装 Linux 内核更新包

- 下载 [适用于 x64 计算机的 WSL2 Linux 内核更新包](https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi)
- 下载完成后双击安装即可

## 5. 安装 ArchLinux (Online)

### 5.1 下载`Arch_Online.zip`

- Github releases: [Arch_Online.zip](https://github.com/yuk7/ArchWSL/releases/latest)

### 5.2 解压`Arch_Online.zip`

[![FhKOh.png](https://s1.328888.xyz/2022/07/30/FhKOh.png)](https://imgloc.com/image/FhKOh)

### 5.3 运行`Arch.exe`

`Arch.exe`会下载一个`rootfs.tar.gz`, 在当前路径下生成`ext4.vhdx`这样一个虚拟磁盘。
[![FhsUo.png](https://s1.328888.xyz/2022/07/30/FhsUo.png)](https://imgloc.com/image/FhsUo)
[![FhfTS.png](https://s1.328888.xyz/2022/07/30/FhfTS.png)](https://imgloc.com/image/FhfTS)  
完成后在终端运行`wsl -l`可以看到 Arch 已经添加上了

```bash
PS C:\Users\14752\dev\wsl> wsl -l
适用于 Linux 的 Windows 子系统分发版:
Arch (默认)
```

## 6. 将 Arch 切换到 WSL2

运行`wsl --set-version Arch 2`

```bash
PS C:\Users\14752\dev\wsl> wsl --set-version Arch 2
正在进行转换，这可能需要几分钟时间...
有关与 WSL 2 的主要区别的信息，请访问 https://aka.ms/wsl2
转换完成。
```

## 7. 配置用户

运行`wsl -d Arch`进入子系统

- `passwd` 为 root 设置密码
- `echo "%wheel ALL=(ALL) ALL" > /etc/sudoers.d/wheel` 给予 wheel 用户组用户超级用户权限
- `useradd -m -G wheel -s /bin/bash 用户名` 新增一个用户
- `passwd 用户名` 为新增的用户添加账户密码
- `exit`退出子系统
- 在`Arch.exe` 所在目录下运行 `./Arch.exe config --default-user 用户名` 设置默认 wsl 登录用户

## 8. 为 Arch 配置国内镜像源

`wsl -d Arch`进入子系统

### 8.1 配置`mirrorlist`

```bash
sudo nano /etc/pacman.d/mirrorlist
```

将

```bash
Server = https://mirrors.ustc.edu.cn/archlinux/$repo/os/$arch
```

添加到最顶端

### 8.2 配置`pacman.conf`

```bash
sudo nano /etc/pacman.conf
```

有需要的话可以取消`multilib`的注释

```bash
[multilib]
Include = /etc/pacman.d/mirrorlist
```

将

```bash
[archlinuxcn]
Server = https://mirrors.ustc.edu.cn/archlinuxcn/$arch
```

添加到最底部

## 9. 配置 pacman

```bash
sudo pacman-key --init

sudo pacman-key --populate

sudo pacman -Syy archlinux-keyring

sudo pacman -Syy archlinuxcn-keyring
```

## 10. 完成

[![FhRNm.png](https://s1.328888.xyz/2022/07/30/FhRNm.png)](https://imgloc.com/image/FhRNm)
