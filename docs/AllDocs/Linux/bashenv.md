# Linux 配置 bash 环境变量

假设有一堆可执行文件(例如: pnpm)在`~/.local/usr/bin`目录下

在`.bashrc` 追加`export PATH=$PATH:~/.local/usr/bin`

```bash
[baizhi958216@TianXuan ~]$ echo $PATH
/usr/local/bin:/usr/bin:/usr/local/sbin:/usr/bin/site_perl:/usr/bin/vendor_perl:/usr/bin/core_perl:/home/baizhi958216/.local/usr/bin
[baizhi958216@TianXuan ~]$

```
