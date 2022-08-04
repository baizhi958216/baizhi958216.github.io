# 本地搭建CrepeSR
## 一、资源下载
- `VisualStudio`: [地址](https://visualstudio.microsoft.com/zh-hans/thank-you-downloading-visual-studio/?sku=Community&channel=Release&version=VS2022&source=VSLandingPage&cid=2030&passive=false)  
- `NodeJS`: [地址](https://nodejs.org/dist/v16.16.0/node-v16.16.0-x64.msi)  
- `MongoDB`: [地址](https://fastdl.mongodb.org/windows/mongodb-windows-x86_64-6.0.0-signed.msi)  
- `Fiddler`: [地址](https://telerik-fiddler.s3.amazonaws.com/fiddler/FiddlerSetup.exe)  
- `CrepeSR`: [地址](https://github.com/Crepe-Inc/CrepeSR)  
```bash
# 聪明的你应该使用git进行克隆, 方便将来更新
git clone https://github.com/Crepe-Inc/CrepeSR.git
```  
[![j8aOw.png](https://s1.328888.xyz/2022/08/04/j8aOw.png)](https://imgloc.com/i/j8aOw)  
- `客户端`: 待补充  
- `CrepeSR-Resources`: [地址](https://github.com/memetrollsXD/CrepeSR-Resources)  
```bash
# 聪明的你应该使用git进行克隆, 方便将来更新
git clone https://github.com/memetrollsXD/CrepeSR-Resources.git
```  
[![j8k9i.png](https://s1.328888.xyz/2022/08/04/j8k9i.png)](https://imgloc.com/i/j8k9i)
以上全部内容如下:  
[![j8bTk.png](https://s1.328888.xyz/2022/08/04/j8bTk.png)](https://imgloc.com/i/j8bTk)
## 二、环境配置
### 1. `VisualStudio`
安装即可  
[![j8KGn.png](https://s1.328888.xyz/2022/08/04/j8KGn.png)](https://imgloc.com/i/j8KGn)
### 2. `NodeJS`
安装即可
### 3. `MongoDB`
安装即可
### 4. `Fiddler`
- 完成安装  
- 依次点击 Tools -> Options  
[![jUSBs.png](https://s1.328888.xyz/2022/08/04/jUSBs.png)](https://imgloc.com/i/jUSBs)  
- 在弹出窗口中点击 `HTTPS`, 勾选`Decrypt HTTPS traffic`  
- 依次点击 `Actions` -> `Trust Root Certificate`  
[![jUef0.png](https://s1.328888.xyz/2022/08/04/jUef0.png)](https://imgloc.com/i/jUef0)  
- 弹出窗口中选中 `Yes` -> `是` -> `确定`  
[![jUWBd.png](https://s1.328888.xyz/2022/08/04/jUWBd.png)](https://imgloc.com/i/jUWBd)  
[![jUrYp.png](https://s1.328888.xyz/2022/08/04/jUrYp.png)](https://imgloc.com/i/jUrYp)  
[![jUp0o.png](https://s1.328888.xyz/2022/08/04/jUp0o.png)](https://imgloc.com/i/jUp0o)  
- 最后点击 `OK`  
[![jUq2F.png](https://s1.328888.xyz/2022/08/04/jUq2F.png)](https://imgloc.com/i/jUq2F)  
### 5. `客户端`
安装后等待下载完成资源文件  
[![j8cUs.png](https://s1.328888.xyz/2022/08/04/j8cUs.png)](https://imgloc.com/i/j8cUs)
### 6. `CrepeSR-Resources`
- 将 `StarRail_Data` 复制到游戏安装目录的 `Games` 目录  
[![j8GpJ.png](https://s1.328888.xyz/2022/08/04/j8GpJ.png)](https://imgloc.com/i/j8GpJ)  
- 全部替换  
[![j817g.png](https://s1.328888.xyz/2022/08/04/j817g.png)](https://imgloc.com/i/j817g)  
- 自行新建 `data` 文件夹到 `CrepeSR` 的 `src`目录下
- 将 `proto ` 和 `excel` 复制进去  
[![j8wsE.png](https://s1.328888.xyz/2022/08/04/j8wsE.png)](https://imgloc.com/i/j8wsE)
## 三、启动服务
### MongoDB
- 打开终端  
[![jUbJC.png](https://s1.328888.xyz/2022/08/04/jUbJC.png)](https://imgloc.com/i/jUbJC)  
- 新建一个 `db` 文件夹
```bash
mkdir db
```  
[![jU3lN.png](https://s1.328888.xyz/2022/08/04/jU3lN.png)](https://imgloc.com/i/jU3lN)  
- 进入MongoDB服务目录
```bash
cd "C:\Program Files\MongoDB\Server\6.0\bin"
```  
[![jUuXo.png](https://s1.328888.xyz/2022/08/04/jUuXo.png)](https://imgloc.com/i/jUuXo)  
- 启动MongoDB服务并将数据库挂载
```bash
.\mongod.exe --dbpath $HOME/db
```  
[![jU4uF.png](https://s1.328888.xyz/2022/08/04/jU4uF.png)](https://imgloc.com/i/jU4uF)  
### CrepeSR
- 打开终端  
在 `CrepeSR` 目录右键打开终端  
[![jU6cS.png](https://s1.328888.xyz/2022/08/04/jU6cS.png)](https://imgloc.com/i/jU6cS)  
- 下载依赖  
运行 `npm install`  
[![jUTS5.png](https://s1.328888.xyz/2022/08/04/jUTS5.png)](https://imgloc.com/i/jUTS5)  
- 运行服务端  
运行 `npm run start`  
[![jUBay.png](https://s1.328888.xyz/2022/08/04/jUBay.png)](https://imgloc.com/i/jUBay)  
- 创建一个账号  
格式: `account create 用户名 uid`  
```bash
# 比如
account create starrails 114514
```  
[![jxlr6.png](https://s1.328888.xyz/2022/08/04/jxlr6.png)](https://imgloc.com/i/jxlr6)  
## 四、设置代理
- Fiddler依次点击 `Rules` -> `Customize Rules...`  
[![jUXeS.png](https://s1.328888.xyz/2022/08/04/jUXeS.png)](https://imgloc.com/i/jUXeS)  
- 将弹出的窗口内的代码全部替换成以下代码  
```cs
import System;
import System.Windows.Forms;
import Fiddler;
import System.Text.RegularExpressions;
class Handlers
{
static function OnBeforeRequest(oS: Session) {
      if(oS.host.EndsWith(".yuanshen.com") || oS.host.EndsWith(".hoyoverse.com") || oS.host.EndsWith(".mihoyo.com") || oS.host.EndsWith(".starrails.com")) {
      oS.host = "localhost";
      }
  }
};
```  
[![jUnm5.png](https://s1.328888.xyz/2022/08/04/jUnm5.png)](https://imgloc.com/i/jUnm5)  
- 按下键盘 `Ctrl + s` 保存, 变绿  
[![jUA1N.png](https://s1.328888.xyz/2022/08/04/jUA1N.png)](https://imgloc.com/i/jUA1N)  
## 五、开始游戏
- 运行 `崩坏 星穹铁道`  
- 开始游戏  
- 所有的弹出窗口均点击 `yes`  
[![jURty.png](https://s1.328888.xyz/2022/08/04/jURty.png)](https://imgloc.com/i/jURty)  
- 密码为任意字符  
[![jxavh.png](https://s1.328888.xyz/2022/08/04/jxavh.png)](https://imgloc.com/i/jxavh)  
[![jx1bn.png](https://s1.328888.xyz/2022/08/04/jx1bn.png)](https://imgloc.com/i/jx1bn)

## 参考链接
[Moeyy - 崩坏星穹铁道私服搭建](https://moeyy.cn/2209)  
[CrepeSR-Resources](https://github.com/memetrollsXD/CrepeSR-Resources)