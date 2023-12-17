# 对象冒充

"对象冒充" 用于在一个对象上调用另一个对象的方法。这通常通过使用 `call` 或 `apply` 方法来实现。主要目的是让一个对象借用另一个对象的方法，以便在当前上下文中执行这些方法。

```javascript
const wife = {
  name: "纳西妲",
  sayHello: function() {
    console.log("你的老婆是" + this.name);
  }
};

const fakewife = {
  name: "我"
};

// 使用对象冒充调用 wife 的 sayHello 方法，并将当前对象设置为 fakewife
wife.sayHello.call(fakewife);
```

调用 `wife` 对象的 `sayHello` 方法，但是在方法内部，`this` 指向了 `fakewife`。这样就可以在 `sayHello` 方法中访问 `fakewife` 对象的属性，实现了方法的借用。
