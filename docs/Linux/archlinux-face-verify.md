# ArchLinux 添加人脸识别

前段时间浅尝了一下某国产 OS, 意外的发现带有人脸识别, 咱 Arch 必须也整一个 : )

## howdy 简介

[howdy](https://github.com/boltgolt/howdy)  
Windows Hello 风格的 Linux 鉴权工具(OpenCV, V4L2)

## 从 AUR 安装 howdy

如果你不知[AUR](https://wiki.archlinux.org/title/Arch_User_Repository)是什么, 百度一下。

```bash
yay -S howdy
```

## 获取传感器数据

```bash
v4l2-ctl --list-devices
```

如下

```bash
[baizhi958216@TianXuan ~]$ v4l2-ctl --list-devices
USB2.0 HD UVC WebCam: USB2.0 HD (usb-0000:06:00.3-4):
        /dev/video0
        /dev/video1
        /dev/media0

HP Full-HD Camera: HP Full-HD C (usb-0000:06:00.4-1.2):
        /dev/video2
        /dev/video3
        /dev/video4
        /dev/video5
        /dev/media1
        /dev/media2
```

## 添加设备

```bash
sudo howdy config
```

找到 `device_path` 指定设备

```bash
device_path = /dev/设备
```

如:

```bash
device_path = /dev/video2
```

## 测试传感器

```bash
sudo howdy test
```

## 为 SDDM/GDM 启动 howdy 验证

```bash
sudo nano /etc/pam.d/system-local-login
```

加入`auth sufficient pam_python.so /lib/security/howdy/pam.py`

```bash
#%PAM-1.0
auth      sufficient   pam_python.so /lib/security/howdy/pam.py
auth      include   system-login
account   include   system-login
password  include   system-login
session   include   system-login
```

## 为 sudo 启动 howdy 验证(危险)

```bash
sudo nano /etc/pam.d/sudo
```

加入`auth sufficient pam_python.so /lib/security/howdy/pam.py`

```bash
#%PAM-1.0
auth    sufficient pam_python.so /lib/security/howdy/pam.py
auth            include         system-auth
account         include         system-auth
session         include         system-auth
```

## 新增面部

```bash
sudo howdy add
```

此处 howdy cli 会提示输入当前用户标签, 简单就好(类似于手机添加指纹对指纹命名)

## 完成
