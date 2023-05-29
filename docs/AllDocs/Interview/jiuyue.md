# 九悦

## 做题

- CSS 实现一个三角形
- 该函数的作用以及应用场景(貌似是关于一个验证码的节流?)
- for 循环 实现九九乘法表
- 从输入 URL 到页面渲染的过程
- TCP/IP 三次握手四次挥手
- TypeScript 中接口和类型别名的区别
- TypeScript 中 const 和 readonly 的区别
- TypeScript 中枚举和常量枚举的区别
- cookie, sessionStorage, localStorage
- 什么是 BFC, 如何触发 BFC
- 作用域和闭包
- 输出顺序

```js
setTimeout(() => {
  console.log(1);
});

new Promise((resolve) => {
  resolve(() => {});
  console.log(2);
}).then(() => {
  new Promise((resolve) => {
    resolve(() => {});
    console.log(3);
  }).then(() => {
    console.log(4);
  });
  console.log(5);
});

console.log(6);
```

## 技术面

- 防抖和节流
- 聊聊 TypeScript
- element-ui
- 原型链
- 如何理解渐进式
- Vue2/3 生命周期
- Vue 响应式原理
- 组件传参
- 祖孙组件传参
- es6 新特性
- Proxy
- 宏任务和微任务
