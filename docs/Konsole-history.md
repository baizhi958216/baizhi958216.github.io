# 运行终端历史命令
很多很多时候，在终端里面有些很长的命令要运行，但是之前运行过了，只要拿出来重复用就行了，动手再敲一次多麻烦啊。

## 1. ```history``` 历史记录
是终端命令的历史记录，它可以列出曾经输入的命令。
```bash
[cyan@TianXuan ~]$ history
    1  . build/envsetup.sh
    2  ./device/meizu/m2181/extract-files.sh /home/cyan/LineageOS/out/target/product/m2181
    3  brunch lineage_m2181-eng
```

## 2. ```|``` 管道(pipe)
用```|```连接两个命令，左边命令的输出就是右边命令的输入
```bash
[cyan@TianXuan ~]$ ls -al /etc | less
总计 1216
drwxr-xr-x 83 root root   4096 2022年 5月 8日 .
drwxr-xr-x 18 root root   4096  2月27日 13:44 ..
-rw-r--r--  1 root root     44  2月14日 19:02 adjtime
drwxr-xr-x  3 root root   4096  2月14日 19:07 alsa
-rw-r--r--  1 root root    769  4月17日 04:47 appstream.conf
-rw-r--r--  1 root root      0 12月 7日 10:41 arch-release
```

## 3. ```grep``` 内容查找
查找符合条件的字符串
```bash
[cyan@TianXuan ~]$ ls|grep txt
log1.txt
log2.txt
log.txt
```

## 4. 综合使用
```history | grep cat```
```bash
[cyan@TianXuan ~]$ history|grep cat
    6  adb logcat
    7  adb logcat|tee log.txt
   65  adb logcat|tee log.txt
   69  adb logcat|tee log.txt
```
上面列出了曾经使用过包含```cat```的命令，要想使用只需要在记录号前加```!```
```bash
[cyan@TianXuan ~]$ !6
adb logcat
* daemon not running; starting now at tcp:5037
* daemon started successfully
- waiting for device -
```