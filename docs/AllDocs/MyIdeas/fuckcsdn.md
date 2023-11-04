# 不要让某些网站强奸你(登录复制)

我不点名某个网站了，强奸用户很爽？

进入网页之后打开控制台直接粘贴下面代码

```js
document.querySelector("main").querySelectorAll("*").forEach(e => {
  const listeners = getEventListeners(e)
  if (listeners && listeners.copy) {
    listeners.copy.forEach(l => e.removeEventListener("copy", l.listener))
  }
})
```

就可以复制页面的内容了
