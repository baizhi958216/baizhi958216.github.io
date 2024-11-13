# Archlinux本地pgp签名

先上问题，你一定遇到过：

```bash
[baizhi958216@TianXuan ~]$ sudo pacman -S fcitx5-pinyin-moegirl

正在解析依赖关系...
正在查找软件包冲突...

软件包 (1) fcitx5-pinyin-moegirl-20241109-1

下载大小：      2.30 MiB
全部安装大小：  2.30 MiB

:: 进行安装吗？ [Y/n] y
:: 正在获取软件包......
 fcitx5-pinyin-moegirl-20241109-1-any                    2.3 MiB  5.03 MiB/s 00:00 [-----------------------------------------------] 100%
(1/1) 正在检查密钥环里的密钥                                                       [-----------------------------------------------] 100%
正在下载所需的密钥......
:: 是否导入 PGP 公钥 F9F9FA97A403F63E ，"lilac (on behalf of imlonghao) <imlonghao@archlinuxcn.org>"？ [Y/n] y
(1/1) 正在检查软件包完整性                                                         [-----------------------------------------------] 100%
错误：fcitx5-pinyin-moegirl: 来自 "lilac (build machine) <lilac@build.archlinuxcn.org>" 的签名是未知信任的
:: 文件 /var/cache/pacman/pkg/fcitx5-pinyin-moegirl-20241109-1-any.pkg.tar.zst 已损坏 (无效或已损坏的软件包 (PGP 签名)).
打算删除吗？ [Y/n] y
错误：无法提交处理 (无效或已损坏的软件包 (PGP 签名))
发生错误，没有软件包被更新。
```

👴的萌娘百科词库装不了🥵！！！

## 解决办法

```bash
sudo pacman-key --lsign-key "lilac@build.archlinuxcn.org"
```