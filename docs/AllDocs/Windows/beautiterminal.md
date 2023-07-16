# 美化 Windows Terminal(终端)

[微软文档](https://learn.microsoft.com/zh-cn/windows/terminal/)

这是默认的终端

![1](./terminal/1.png)

打开`setting.json`
![2](./terminal/2.png)

需要修改的地方是**profiles**下的**defaults**, 配置每一个窗口的默认样式

```json
{
    // ...
    "profiles": 
    {
        "defaults": {},
    // ...
    }
}
```

常用的一些配置项:
```json
{
   "useAcrylic": true, // 亚克力效果
   "acrylicOpacity": 0.8, // 亚克力透明度
   "backgroundImage": "C:\\Users\\14752\\Pictures\\75941497_p0.png", // 终端背景图片
   "backgroundImageOpacity": 0.3, // 终端背景图片透明度
   "font": {
    "face": "Fira Code", // 字体
    "size": 14 // 字体大小
   }
}
```

![3](./terminal/3.png)