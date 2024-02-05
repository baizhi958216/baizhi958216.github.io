# GNOME的高分辨率屏幕非整数缩放

近期买了块2.5K的屏幕，高高兴兴的登录进去马上傻眼了，分辨率感人。

2560×1600的分辨率，整个世界变得好小，我需要缩放！

在gnmoe自带的设置里可以找到有3个挡位的缩放： 100%，200%，300%。

这几个挡位其实在笔记本屏幕上并不理想，跟1920×1080的100%缩放差不多才有比较好的体验。

## 开启非整数缩放功能

目前使用的gnome默认跑在Wayland上，这个会比较方便去设置，

终端执行：

```bash
gsettings set org.gnome.mutter experimental-features "['scale-monitor-framebuffer']"
```

然后重新登陆，在桌面设置会多出一堆缩放选项。