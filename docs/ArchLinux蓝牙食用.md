
# ArchLinux 蓝牙食用手册

## 打开KDE蓝牙, Shit 它居然是空的，都不知道怎么开 :)
### 需要安装的依赖
安装 ```bluez```，这个软件包提供蓝牙的协议栈。  
安装 ```bluez-utils```， 其提供 ```bluetoothctl``` 工具。  
要使用蓝牙耳机或音响的话要先安装 ```pulseaudio-bluetooth```  
如果你的耳机使用 Aptx 或者 LDAC 你还需要安装 ```gst-plugins-bad```

### 开启服务
```bash
sudo systemctl enable bluetooth.service
sudo systemctl start bluetooth.service
```

## 重新登录

### 连接蓝牙设备
连不上的话关掉蓝牙再开再连，多试几次