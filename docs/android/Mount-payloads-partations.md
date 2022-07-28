# 挂载 payload.bin 里的几个分区

A/B, vA/B 机型的系统更新包里面不再是传统的`system.img`, `vendor.img`, `product,img`...,  
取而代之的是`payload.bin`, 里面包含了所有在设备树中定义`AB_OTA_PARTITIONS`分区  
[实现 A/B 更新 ](https://source.android.com/devices/tech/ota/ab/ab_implement)

```makefile
AB_OTA_PARTITIONS := \
  boot \
  system \
  bootloader
```

因为出于某些情况, 我们需要把他们解出来.

## 使用`payload-dumper-go`

这里可以用一个叫[payload-dumper-go](https://github.com/ssut/payload-dumper-go)的工具
如果在用 ArchLinux, 恭喜你可以在 [AUR](https://aur.archlinux.org/packages/payload-dumper-go) 找到, 如果不是:

### 克隆[payload-dumper-go](https://github.com/ssut/payload-dumper-go)

```bash
[baizhi958216@Lenovo ~]$  git clone https://github.com/ssut/payload-dumper-go.git
[baizhi958216@Lenovo ~]$ cd payload-dumper-go
[baizhi958216@Lenovo payload-dumper-go]$
```

### 安装 go

```bash
[baizhi958216@Lenovo payload-dumper-go]$ sudo pacman -S go
```

### 编译 payload-dumper-go

- 确保已经在 `payload-dumper-go` 的文件夹内
- 确保已经安装`go`
- 确保终端连接`github`速度正常

```bash
[baizhi958216@Lenovo payload-dumper-go]$  go mod tidy
[baizhi958216@Lenovo payload-dumper-go]$  CGO_ENABLE=0 go build -trimpath -o ./payload-dumper-go
```

可执行文件生成在`./payload-dumper-go`

## 分离 payload.bin

```bash
[baizhi958216@Lenovo payload-dumper-go]$ ./payload-dumper-go ../payload.bin
payload.bin: ../payload.bin
Payload Version: 2
Payload Manifest Length: 163495
Payload Manifest Signature Length: 267
Found partitions:
boot (101 MB), dtbo (25 MB), odm (1.0 MB), product (374 MB), system (3.2 GB), system_ext (472 MB), vbmeta (8.2 kB), vbmeta_system (4.1 kB), vendor (1.4 GB), vendor_boot (101 MB), cpucp (106 kB), aop (246 kB), hyp (3.6 MB), uefisecapp (127 kB), tz (3.8 MB), bluetooth (1.1 MB), keymaster (283 kB), qupfw (57 kB), shrm (49 kB), modem (183 MB), xbl (3.7 MB), logo (45 MB), abl (168 kB), featenabler (90 kB), xbl_config (221 kB), dsp (67 MB), devcfg (53 kB)
Number of workers: 4
boot (101 MB)           [===========================================================================================================================] 100 %
odm (1.0 MB)            [===========================================================================================================================] 100 %
dtbo (25 MB)            [===========================================================================================================================] 100 %
product (374 MB)        [===========================================================================================================================] 100 %
system (3.2 GB)         [===========================================================================================================================] 100 %
system_ext (472 MB)     [===========================================================================================================================] 100 %
vbmeta (8.2 kB)         [===========================================================================================================================] 100 %
vbmeta_system (4.1 kB)  [===========================================================================================================================] 100 %
vendor (1.4 GB)         [===========================================================================================================================] 100 %
vendor_boot (101 MB)    [===========================================================================================================================] 100 %
cpucp (106 kB)          [===========================================================================================================================] 100 %
aop (246 kB)            [===========================================================================================================================] 100 %
hyp (3.6 MB)            [===========================================================================================================================] 100 %
uefisecapp (127 kB)     [===========================================================================================================================] 100 %
tz (3.8 MB)             [===========================================================================================================================] 100 %
bluetooth (1.1 MB)      [===========================================================================================================================] 100 %
keymaster (283 kB)      [===========================================================================================================================] 100 %
qupfw (57 kB)           [===========================================================================================================================] 100 %
shrm (49 kB)            [===========================================================================================================================] 100 %
modem (183 MB)          [===========================================================================================================================] 100 %
xbl (3.7 MB)            [===========================================================================================================================] 100 %
logo (45 MB)            [===========================================================================================================================] 100 %
abl (168 kB)            [===========================================================================================================================] 100 %
featenabler (90 kB)     [===========================================================================================================================] 100 %
xbl_config (221 kB)     [===========================================================================================================================] 100 %
dsp (67 MB)             [===========================================================================================================================] 100 %
devcfg (53 kB)          [===========================================================================================================================] 100 %
[baizhi958216@Lenovo payload-dumper-go]$

```

分离出来的分区会在当前`extracted_***_***`目录下

## 挂载分区

这里我只需要`system.img`, `vendor.img`, `product.img`, `system_ext.img`, `odm.img`

```bash
[baizhi958216@Lenovo extracted_payload]$ mkdir system/
[baizhi958216@Lenovo extracted_payload]$ sudo mount -o ro system.img system/
[baizhi958216@Lenovo extracted_payload]$ sudo mount -o ro vendor.img system/vendor/
[baizhi958216@Lenovo extracted_payload]$ sudo mount -o ro product.img system/product/
[baizhi958216@Lenovo extracted_payload]$ sudo mount -o ro system_ext.img system/system_ext/
[baizhi958216@Lenovo extracted_payload]$ sudo mount -o ro odm.img system/odm/
```

可以用`df`查看挂载情况

```bash
[baizhi958216@Lenovo extracted_payload]$ df
文件系统          1K的块      已用      可用 已用% 挂载点
dev              7858236         0   7858236    0% /dev
run              7866360      1660   7864700    1% /run
/dev/nvme0n1p2 490617784 297320884 168301420   64% /
tmpfs            7866360     95508   7770852    2% /dev/shm
tmpfs            7866360     12828   7853532    1% /tmp
/dev/nvme0n1p1    523248     69140    454108   14% /boot
tmpfs            1573272        64   1573208    1% /run/user/1000
/dev/loop0       3057476   3048196         0  100% /home/baizhi958216/dev/meizu/extracted_payload/system
/dev/loop1       1330920   1326932         0  100% /home/baizhi958216/dev/meizu/extracted_payload/system/vendor
/dev/loop2        359020    357932         0  100% /home/baizhi958216/dev/meizu/extracted_payload/system/product
/dev/loop3        453424    452048         0  100% /home/baizhi958216/dev/meizu/extracted_payload/system/system_ext
/dev/loop4           896       892         0  100% /home/baizhi958216/dev/meizu/extracted_payload/system/odm
```
