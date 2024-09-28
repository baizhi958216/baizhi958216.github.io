# 关于在ArchLinux使用数位板

是高漫的1060Pro，心血来潮想要学一下板绘(我要画涩图！)，可是高漫并没有发布Linux的驱动，借助Google找到了个叫[OpenTabletDriver](https://opentabletdriver.net)的开源数位板驱动，刚好适配有高漫。


## 直接装了

其实官网有文档，不仅限于ArchLinux： https://opentabletdriver.net/Wiki/Install/Linux

```bash
yay opentabletdriver
```

装完还要稍微配置一下才能用

```
Welcome to OpenTabletDriver!
In order to start using this driver, there are certain things that have to be configured manually.

Replug your tablet if it is connected. This will re-trigger the udev rules accordingly.

The daemon can be started with:
  $ otd
You can fork it to the background and use output redirection to a log file if desired.
A systemd user service is also provided and can be used instead, assuming you have a correct systemd user graphical-session.target set up:
  $ systemctl --user enable --now opentabletdriver.service

You will have to manually unload built-in kernel modules (or reboot) in order for this driver to work properly.
To unload the module immediately, run:
  # rmmod <module>
Where <module> is 'wacom' if you own a wacom tablet, and 'hid_uclogic' otherwise.

As of version 0.6.2.0, having the package installed will block any modules related to drawing tablets
In the case that you still have issues after following these instructions, the FAQ at https://opentabletdriver.net/Wiki/FAQ/Linux may help.
```


精简版：

```bash
systemctl --user enable --now opentabletdriver.service
```