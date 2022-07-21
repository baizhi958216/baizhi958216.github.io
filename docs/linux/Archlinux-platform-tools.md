# Arch 连接安卓设备遇到的问题

## 按照正常做法安装 platform-tools

```bash
$ sudo pacman -S android-sdk-platform-tools
```

## 出现问题

在调试设备的时候发现总是需要在 root 下运行才可以正常显示设备

```bash
# 提示无权限
$ fastboot devices
no permissions; see [http://developer.android.com/tools/device.html]    fastboot

# 正常了
$ sudo fastboot devices
1c744062        fastboot

```

## 查 wiki

[ArchWiki: Android Debug Bridge](https://wiki.archlinux.org/title/Android_Debug_Bridge)  
找到需要注意的地方是`udev rules`, 众所周知, 外部设备连接到本机都会在`/dev`列出, 而`udev`则是对这些设备节点进行管理。  
编写安卓`udev`规则在 wiki 也给出了, 修改`/etc/udev/rules.d/51-android.rules`

```bash
SUBSYSTEM=="usb", ATTR{idVendor}=="[VENDOR ID]", MODE="0660", GROUP="adbusers", TAG+="uaccess"
SUBSYSTEM=="usb", ATTR{idVendor}=="[VENDOR ID]", ATTR{idProduct}=="[PRODUCT ID]", SYMLINK+="android_adb"
SUBSYSTEM=="usb", ATTR{idVendor}=="[VENDOR ID]", ATTR{idProduct}=="[PRODUCT ID]", SYMLINK+="android_fastboot"
```

## 解决问题

`lsusb`查看接入的 usb 设备, 如果运行不了这条命令的话先要安装`usbutils`。

```bash
$ sudo pacman -S usbutils
```

找到一条`Bus 003 Device 025: ID 18d1:d00d Google Inc. Xiaomi Mi/Redmi 2 (fastboot)`  
这是我的红米 K40Pro, 其中`18d1`是`[VENDOR ID]`, `d00d`是`[PRODUCT ID]`

```bash
$ lsusb
Bus 004 Device 001: ID 1d6b:0003 Linux Foundation 3.0 root hub
Bus 003 Device 003: ID 8087:0029 Intel Corp. AX200 Bluetooth
Bus 003 Device 002: ID 30fa:0400  USB OPTICAL MOUSE
Bus 003 Device 025: ID 18d1:d00d Google Inc. Xiaomi Mi/Redmi 2 (fastboot)
Bus 003 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
Bus 002 Device 001: ID 1d6b:0003 Linux Foundation 3.0 root hub
Bus 001 Device 005: ID 13d3:56a2 IMC Networks USB2.0 HD UVC WebCam
Bus 001 Device 003: ID 0461:4002 Primax Electronics, Ltd ROYUAN Gaming Keyboard
Bus 001 Device 009: ID 1d5c:7102 Fresco Logic Generic Billboard Device
Bus 001 Device 008: ID 1a40:0101 Terminus Technology Inc. Hub
Bus 001 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
```

所以在`/etc/udev/rules.d/51-android.rules`里面这样写:

```bash
SUBSYSTEM=="usb", ATTR{idVendor}=="18d1", MODE="0660", GROUP="adbusers", TAG+="uaccess"
SUBSYSTEM=="usb", ATTR{idVendor}=="18d1", ATTR{idProduct}=="d00d", SYMLINK+="android_adb"
SUBSYSTEM=="usb", ATTR{idVendor}=="18d1", ATTR{idProduct}=="d00d", SYMLINK+="android_fastboot"
```

保存之后拔出设备, 重新加载 udev 规则

```bash
$ sudo udevadm control --reload
```

## 检查

现在可以正常使用了

```bash
$ fastboot devices
1c744062        fastboot
```
