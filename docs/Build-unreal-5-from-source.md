# 拉源码编译UE5

## Sync Project
同步最新源码  
请确保你是```EpicGames```组织的成员并且拥有访问```UnrealEngine```项目的权限
```bash
git clone git@github.com:baizhi958216/UnrealEngine.git -b ue5-main --depth=1
```
## Setup.sh
注意：该步骤会向Github拉取约```20G```的资源，请确保网络畅通
```bash
cd UnrealEngine;./Setup.sh
```
![zdhGM.png](https://s1.328888.xyz/2022/06/07/zdhGM.png)
## GenerateProjectFiles.sh
生成项目编译配置文件
```bash
./GenerateProjectFiles.sh
```
![zdfN4.png](https://s1.328888.xyz/2022/06/07/zdfN4.png)
## make
开始编译，编译时长取决于设备性能
```bash
make
```
![zdXT3.png](https://s1.328888.xyz/2022/06/07/zdXT3.png)
## UnrealEditor
```bash
./Engine/Binaries/Linux/UnrealEditor
```
稍等片刻
![zdL4Q.png](https://s1.328888.xyz/2022/06/07/zdL4Q.png)
![zdtN1.png](https://s1.328888.xyz/2022/06/07/zdtN1.png)