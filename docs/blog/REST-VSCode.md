# 优雅地在VSCode调试接口
利用 `REST Client`
## 1. 安装插件
- 方式一: 商店搜REST Client
- 方式二: [marketplace](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)
## 2. 调试
### 创建一个拓展名 `http` 的文件
### 变量
- 声明  
@变量名 = 变量值
```bash
@host = https://bingjs.com:8003
```
- 引用  
{{变量名}}
### GET
```bash
GET {{host}}/Role/List HTTP/1.1
```
### POST
```bash
@name = '20220803623'
POST {{host}}/Role/Add HTTP/1.1
content-type: application/json

{
    "roleName": {{name}}
}
```
![Oi7RB.png](https://s1.328888.xyz/2022/08/03/Oi7RB.png)