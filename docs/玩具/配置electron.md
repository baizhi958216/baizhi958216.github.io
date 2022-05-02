# 准备工作（ArchLinux）
## 安装node.js
``` sudo pacman -S nodejs```

## 全局安装cnpm，换taobao源
``` sudo npm install -g cnpm --registry=https://registry.npm.taobao.org ```

## 安装wine、electron
``` sudo pacman -S wine electron``` 

# 建项
## 导入项目html,js文件
## 新建package.json main.js
```touch package.json main.js ```

### 编辑package.json

```json
{
  "name"    : "demo",
  "version" : "1.0.0",
  "main"    : "main.js"
}
```

### 编辑main.js

```javascript
const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')
 
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win
 
function createWindow () {
  // Create the browser window.
  const electron = require('electron')
  //创建常量electron
  const Menu = electron.Menu
  /*获取菜单栏*/
  Menu.setApplicationMenu(null)
  //隐藏菜单栏
  win = new BrowserWindow({width: 800, height: 600})
 
  // and load the index.html of the app.
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))
 
  // Open the DevTools.
  // win.webContents.openDevTools()
 
  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null
  })
}
 
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)
 
// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
 
app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow()
  }
})
 
// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
```

### 全局安装electron-packager
``` sudo cnpm install electron-packager -g```

### 打包
``` electron-packager . demo --platform=win32 --out demo --arch=x64 --electron-version xxxxx --overwrite --ignore=node_modules --icon=xxx.ico```

#### 命令详解
electron-packager . 项目名
--platform=win32 Win平台
--out 输出目录
--arch=x64 架构
--electron-version electron版本号
```electron -v获取版本号```
--overwrite 覆盖原有项目
--ignore=node_modules 忽略node_modules目录
--icon=xxx.ico 设置程序图标
#### 测试