# 大小写敏感问题

Linux用习惯了，使用·git add·对工作区进行缓存的时候没有注意到文件名的变更，在Windows环境下，文件名的大小写变更默认不会被git跟踪。

## 解决办法

```bash
git config core.ignorecase false
```