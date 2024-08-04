# Wine的一些坑

有个工具叫`winetricks`的，那个也很不错，建议试试`winetricks --gui`

## 修改dpi

装个网易云听听歌，没想到我2.5k屏实在太大了，别说点首歌，看都看不清

查看当前x的dpi:

```bash
xrdb -query | grep dpi
```

查到的dpi是192

winecfg设置dpi:

```bash
winecfg
```

显示 -> 屏幕分辨率

## 无法启动wine

提示什么`wine: could not load kernel32.dll, status c0000135`这些

直接把`~/.wine`删了来过