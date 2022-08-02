# 米游社原神自动签到

扬哥说: 蚊子虽小，但也是肉  
![O5Ysd.jpg](https://s1.328888.xyz/2022/08/02/O5Ysd.jpg)  
因为腾讯云函数收费好贵好贵的，我实在撑不住了，于是我想到了阿里云  
为什么是阿里云呢?原因如下

```txt
记性差: 经常忘记打开米游社签到, 错过蚊子腿, 挂着让它天天自动签到就好
免费额度: 每月前100万次函数调用和前400000(CU-秒)费用免费
```

阿里！我来白嫖你辣~ (手动狗头:>)

# 浏览器我用的是 `edge`

(只要你是 Windows10/11, 系统自带)

## 1. 白嫖阿里云函数

### 登录阿里云

点击[登录阿里云](https://account.aliyun.com/login/login.htm?)，我用淘宝登录，随你喜欢

## 2. 获取米游社 cookie

### 新建隐私窗口

- edge 浏览器右上角点击`新建 InPrivate 窗口`  
  ![O5aEX.png](https://s1.328888.xyz/2022/08/02/O5aEX.png)

### 打开米游社

- 在隐私窗口打开 https://bbs.mihoyo.com/ys  
  ![O5csm.png](https://s1.328888.xyz/2022/08/02/O5csm.png)

### 登录米游社

- 点击头像处登录米游社  
  ![O5kGI.png](https://s1.328888.xyz/2022/08/02/O5kGI.png)

### 打开控制台

- 按下键盘`F12`打开开发者工具, 点击控制台  
  ![O51Uj.png](https://s1.328888.xyz/2022/08/02/O51Uj.png)

### 获取 cookie

- 在控制台运行下面的函数就可以获取 cookie

```txt
(function(){(function(){let cookie = document.cookie.split(';'); prompt('Cookie',cookie[5]+';'+cookie[6])})()})()
```

![O55Rr.png](https://s1.328888.xyz/2022/08/02/O55Rr.png)

### 复制 cookie

- 复制弹出的对话框信息  
  ![O5KTK.png](https://s1.328888.xyz/2022/08/02/O5KTK.png)

### 关闭隐私模式窗口

(不关也行)

## 3. 创建云函数

- [进入函数计算 FC](https://fcnext.console.aliyun.com/overview)

- 点击左侧[服务及函数](https://fcnext.console.aliyun.com/cn-hangzhou/services)  
  ![OkXtN.png](https://s1.328888.xyz/2022/08/02/OkXtN.png)
- 点击创建服务  
  ![Okqk5.png](https://s1.328888.xyz/2022/08/02/Okqk5.png)
- 输入名称 描述后点击确定  
  ![OkYWy.png](https://s1.328888.xyz/2022/08/02/OkYWy.png)
- 点击创建函数  
  ![OkABC.png](https://s1.328888.xyz/2022/08/02/OkABC.png)
- 函数配置如下, 配置好后记得点击页面后面的创建

```txt
请选择一种创建函数的方式: 使用标准 Runtime 从零创建
函数名称: mygenshinbbs(自定义)
请求处理程序类型: 处理事件请求
运行环境: 选择Python3.6
代码上传方式: 通过 ZIP 包上传代码
代码包: (选择刚刚下载的文件)

请求处理程序: index.main_handler
```

![O9VXd.png](https://s1.328888.xyz/2022/08/02/O9VXd.png)
![O9IPC.png](https://s1.328888.xyz/2022/08/02/O9IPC.png)

## 4. 配置自动签到

### 编辑环境变量

- 点击编辑环境变量
  ![O9acp.png](https://s1.328888.xyz/2022/08/02/O9acp.png)

### 添加变量

- 点击添加变量(2 个)
  一个是 COOKIE_MIHOYOBBS, 一个是 RANDOM_SLEEP_SECS_RANGE  
  `COOKIE_MIHOYOBBS` 的值填入刚才复制好的 cookie  
  `RANDOM_SLEEP_SECS_RANGE` 的值填入 `0-0`

```txt
说明:
RANDOM_SLEEP_SECS_RANGE是等待时间, 0-0是函数运行后直接签到.
如果值太大可能会出现环境内存不足，函数就崩掉了.
```

![O9Cu0.png](https://s1.328888.xyz/2022/08/02/O9Cu0.png)  
最后点确定

## 5. 测试

- 点击测试函数  
  ![O9S0m.png](https://s1.328888.xyz/2022/08/02/O9S0m.png)
- 签到成功  
  ![O9zPr.png](https://s1.328888.xyz/2022/08/02/O9zPr.png)

## 6. 配置定时任务

### 创建触发器

点击触发器管理 -> 创建触发器  
![OK00d.png](https://s1.328888.xyz/2022/08/02/OK00d.png)

```txt
触发器类型: 定时触发器
名称: (自定义)
触发方式: 自定义
CRON表达式: 0 0 22 * * *
(秒 分 时)
```

![OK42U.png](https://s1.328888.xyz/2022/08/02/OK42U.png)  
点击确定, 大功告成, 每 22 小时函数会自动执行一次
