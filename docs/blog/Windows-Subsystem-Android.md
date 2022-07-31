# Windows11 安装安卓子系统

## 1. 准备

前往 https://store.rg-adguard.net 搜索 ProductID: `9P3395VX91NR`  
下载图示两个应用包
![F9bAK.png](https://s1.328888.xyz/2022/07/31/F9bAK.png)

## 2. 安装

获取 Windows 应用包路径  
![F91FE.png](https://s1.328888.xyz/2022/07/31/F91FE.png)

以管理员身份运行 Windows 终端

- 安装 `Microsoft.UI.Xaml`

```bash
Add-AppxPackage "C:\Users\14752\dev\wsa\Microsoft.UI.Xaml.2.6_2.62112.3002.0_x64__8wekyb3d8bbwe.Appx"
```

- 安装 `MicrosoftCorporationII.WindowsSubsystemForAndroid`

```bash
Add-AppxPackage "C:\Users\14752\dev\wsa\MicrosoftCorporationII.WindowsSubsystemForAndroid_2205.40000.21.0_neutral___8wekyb3d8bbwe.Msixbundle"
```

### 注意

如果未安装 `Microsoft.UI.Xaml`, 会出现无法安装 `MicrosoftCorporationII.WindowsSubsystemForAndroid`  
![F9aHk.png](https://s1.328888.xyz/2022/07/31/F9aHk.png)

## 3. 使用

### 配置 platform-tools 环境变量

- 前往 https://developer.android.google.cn/studio/releases/platform-tools 下载 platform-tools 并解压
- 将 `platform-tools` 文件夹添加到环境变量  
  ![FcuJX.png](https://s1.328888.xyz/2022/07/31/FcuJX.png)

### 连接 ADB

打开开始菜单中 `适用于 Android™ 的 Windows 子系统设置`
![F9Kvi.png](https://s1.328888.xyz/2022/07/31/F9Kvi.png)
切换到 `开发人员` 选项卡, 开启 `开发人员模式` 后点击 `管理开发人员设置`  
![FchYK.png](https://s1.328888.xyz/2022/07/31/FchYK.png)
打开的 `开发者选项` 窗口不需要进行设置  
在 `适用于 Android™ 的 Windows 子系统设置` 窗口中切换选项卡后切换回`开发人员`  
![FcakJ.png](https://s1.328888.xyz/2022/07/31/FcakJ.png)

- 在 Windows 终端运行`adb connect 127.0.0.1:58526`连接 WSA  
  需要在弹出的窗口允许 ADB 调试  
  ![F93wj.png](https://s1.328888.xyz/2022/07/31/F93wj.png)
- 在 Windows 终端运行`adb devices`检查已连接的设备

```bash
PS C:\Users\14752> adb connect 127.0.0.1:58526
connected to 127.0.0.1:58526
PS C:\Users\14752> adb devices
List of devices attached
127.0.0.1:58526 device
```

### 安装 APK

- 在 Windows 终端运行 `adb install 应用路径` 安装 Apk

```bash
PS C:\Users\14752> adb install .\dev\android\taobao.apk
Performing Streamed Install
Success
```

安装的 APK 会在开始菜单显示, 点击即可运行  
![F9Bgr.png](https://s1.328888.xyz/2022/07/31/F9Bgr.png)
