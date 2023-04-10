# TypeScript 5 正式发布

## 开发者博客链接

[5.0 Beta](https://devblogs.microsoft.com/typescript/announcing-typescript-5-0-beta/)  
[5.0 RC](https://devblogs.microsoft.com/typescript/announcing-typescript-5-0-rc/)  
[5.0 Release](https://devblogs.microsoft.com/typescript/announcing-typescript-5-0)

## 装饰器(Decorators)

:::tip 也就是 JAVA 人常说的`注解`

:::
:::tip 需要在`tsconfig.json`打开`experimentalDecorators`

:::
装饰器以非侵入方式增强`类`、`方法`、`访问器`、`属性`、`参数`的能力, 将业务/服务/工具等代码进行分割, 是一个即将到来的 ECMAScript 新特性。

:::details ECMAScript 新特性的产生

[The TC39 Process](https://tc39.es/process-document/)

- 稻草人（Strawpersion），由 TC39 成员发起，通常是提出新想法或是对未纳入正式的提案进行修改。
- 提案（Proposal），提出一些具体的问题和解决方案。
- 草稿（Draft），用 ES 语法尽可能精确地描述提案的语法、语义和 API，并提供实验性的实现。意味着提案会有很大概率出现在正式版本的中。
- 候选人（Candidate），到了该阶段，提案基本已经定型，仅根据外部反馈针对关键问题进行更改。
- 完成（Finish），该提案会出现在正式的规范文档中，并在下一个版本的 ES 中正式支持。

:::

简单的方法装饰器

```ts
class Chat {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  @Login // [!code focus]
  apply() {
    console.log(`${this.name}申请进入聊天`);
  }
}

function Login(originalMethod: any, context: ClassMethodDecoratorContext) {
  return function replacementMethod(this: any, ...args: any[]) {
    return originalMethod.call(this, ...args);
  };
}
new Chat("baizhi958216").apply();
```

带上参数(也叫做装饰器工厂)

```ts
class Chat {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  @Login("不准") // [!code focus]
  apply() {
    console.log(`${this.name}申请进入聊天`);
  }
}

function Login(message: string) {
  return (originalMethod: any, context: ClassMethodDecoratorContext) => {
    return function replacementMethod(this: any, ...args: any[]) {
      this.name = message;
      return originalMethod.call(this, ...args);
    };
  };
}
new Chat("baizhi958216").apply();
```

类装饰器

```ts
const Base: ClassDecorator = (target: Function) => {
  target.prototype.a = "param a";
  target.prototype.b = () => {
    console.log("function b");
  };
};
@Base // [!code focus]
class Http {}
const http = new Http() as any;
http.b();
console.log(http.a);
```

访问器装饰器(get/set)

```ts
function uppercase(target: any, name: any, desc: any) {
  return {
    enumerable: false,
    configurable: false,
    get: function () {
      return desc.get.call(this).toUpperCase(); // [!code focus]
    },
    set: function (name: string) {
      desc.set.call(this, name);
    },
  };
}

class Message {
  constructor(public message: string) {}

  // 获取消息时进行uppercase // [!code focus]
  @uppercase
  get fullname(): string {
    return this.message;
  }

  set fullname(message: string) {
    this.message = message;
  }
}

var m = new Message("message");
console.log(m.message);
console.log(m.fullname);
```

属性装饰器
