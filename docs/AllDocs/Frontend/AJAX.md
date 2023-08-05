<script setup>
import { ElButton } from 'element-plus'
import 'element-plus/es/components/button/style/css'
const testXHR = () => {
    const xhr = new XMLHttpRequest()
    xhr.open('get','http://localhost:3000',true)
    xhr.onreadystatechange = () => {
        if(xhr.readyState===XMLHttpRequest.DONE && xhr.status===200){
            const { message } = JSON.parse(xhr.responseText)
            alert(message)
        }
    }
    xhr.send()
}
</script>

# AJAX

[Ajax](https://developer.mozilla.org/zh-CN/docs/Web/Guide/AJAX): 异步 JavaScript 和 XML(Asynchronous JavaScript and XML)

它是一种方法，一种将网页技术结合使用的方法，XHR(XMLHttpRequest)、Fetch 则是 Ajax 的具体实现，前端通过网络连接与服务器进行通信，对消息进行发送和接收，该过程可作用于网页的内容上。

使用 Ajax，网页的能够进行'增量更新'，而不再需要对整个网页进行刷新。

## XHR(XMLHttpRequest)

:::tip 虽然 X 的意思是 XML，但是在现代网络编程中更倾向于使用 JSON 进行数据传输。
:::

XHR 的使用方法一般是:

**实例化 XHR 对象** -> **初始化 HTTP 请求** -> **配置 readyState 处理函数** -> **发送 HTTP 请求**

:::tip readyState 有 5 种状态

|      状态名      |       状态值        |                                     说明                                      |
| :--------------: | :-----------------: | :---------------------------------------------------------------------------: |
|      unsent      |      0(UNSENT)      |                               对象已被实例化。                                |
|      opened      |      1(OPENED)      | open 方法调用。可以使用 setRequestHeader 设置请求标头，并且可以使用 send 方法 |
| headers received | 2(HEADERS_RECEIVED) |                 已完成所有重定向，并已接收到响应的全部标头。                  |
|     loading      |     3(LOADING)      |                                正在接收响应。                                 |
|       done       |       4(DONE)       |               数据传输已完成或传输过程中出现问题(无限重定向)。                |

:::

例如创建一个 GET 请求:

测试:

<el-button type="primary" @click="testXHR">发送请求</el-button>

前端代码:

```ts
const xhr = new XMLHttpRequest();
xhr.open("get", "http://localhost:3000", true);
xhr.onreadystatechange = () => {
  if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
    const { message } = JSON.parse(xhr.responseText);
    alert(message);
  }
};
xhr.send();
```

后端代码:

:::code-group

```js [index.js]
import { createServer } from "http";

const server = createServer((req, res) => {
  res.writeHead(200, {
    "content-type": "application/json",
    // 处理浏览器跨域
    "Access-Control-Allow-Origin": "*",
  });

  res.end(
    JSON.stringify({
      message: "Hello AJAX",
    })
  );
});

server.listen(3000, "localhost", () => {
  console.log("服务已启动: http://localhost:3000");
});
```

```json [package.json]
{
  "name": "study_backend",
  "version": "1.0.0",
  "description": "",
  "type": "module",
  "main": "index.js",
  "scripts": {
    "d": "nodemon index.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "nodemon": "^3.0.1"
  }
}
```
