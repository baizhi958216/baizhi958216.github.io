# ArchLinux Swap 配置
某二次元笔记本只上了32G内存, 编译[AOSP](https://source.android.com/)到99%喜迎Failed  
不得不说, 编译[AOSP](https://source.android.com/)设备要求也越来越高了  
先上[Wiki](https://wiki.archlinux.org/title/Swap)  
## 创建交换文件
因为我安装Arch的时候没有分配[交换分区](https://wiki.archlinux.org/title/Swap#Swap_partition), 只好使用交换文件。
```bash
# dd一个8G大小的swapfile
$ sudo dd if=/dev/zero of=/swapfile bs=1M count=8192 status=progress
```
## 分配权限
```bash
# 仅拥有者可读写
$ sudo chmod 0600 /swapfile
```
## 格式化
```bash
# mkswap将磁盘分区或文件设为交换区(swap area)
$ sudo mkswap /swapfile
```
## 启用交换文件
```bash
# swapon激活交换区
$ sudo swapon /swapfile
```
## 在fstab添加交换文件条目
```bash
$ sudo nano /etc/fstab
```
在最底下加上```/swapfile none swap defaults 0 0```  

# 笔者在写这篇记录的时候重新brunch居然完成编译了, 但是设置好交换区对以后编译都是有好处的!