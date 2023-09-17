# 关于Vue的传参

最近在项目里看到有同学独爱使用props传参，然后绑定了\<input/>或者直接对props进行修改，不得不吐槽一下hhh。

类似这样：

父组件

```vue
<!-- Parent.vue -->
<template>
  <div>
    <Child :message="messageFromParent" />
  </div>
</template>

<script>
import Child from './Child.vue';

export default {
  components: {
    Child,
  },
  data() {
    return {
      messageFromParent: 'Hello from Parent!',
    };
  },
};
</script>

```

子组件

```vue
<!-- Child.vue -->
<template>
  <div>
    <button @click="changeMessage">Change Message</button>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  props: {
    message: String,
  },
  methods: {
    changeMessage() {
      // 不应该直接修改 props
      this.message = 'New Message';
    },
  },
};
</script>
```


在vue的世界里，props理应是只读的单向数据流，一个正确的修改方式应该是传递一个emit事件于父组件，然后修改传进去的props。

## 触发剧情

那对于这种情况，将来需要进行修改的参数，先在父组件使用refs去给子组件的data赋值会不会更好呢？

那些不需要修改的，子组件渲染后这辈子都不会变的数据是不是应该使用props传递？

我认为应该如此，一个组件也许需要向外暴露非常多的参数，在父组件引入的时候可能会出现这样的一个情况：

```html
<Child :a="a" :b="b" :c="c" :d="d" :e="e" :f="f" :g="g" :h="h" :i="i" :j="j" :k="k" :l="l" @changeA="changeA" @changeB="changeB"/>
```

这种情况很少发生，但是这种写法却是正确的，遵循了vue的数据流原则，只是让代码变得比较难看，我更倾向于下面的这种写法：

```html
<Child refs="child" @changeA="changeA" @changeB="changeB"/>
```

使用refs去修改子组件的数据，但是refs这个对象是不被vue所监听的，使用refs修改dom是官方所不推荐的，你需要在子组件渲染完成后才可以使用，所以在封装组件的时候，这种情况尽量避免才对。

考虑到我们项目基本上都是表格、表单，这些组件在页面上是完成渲染的，通过`visible`变量去控制弹窗的渲染，因此直接使用refs就可以。

在提升代码的美观性和逻辑性均有很大的帮助，也方便定位业务的走向，前提是需要非常清楚组件的生命周期以及所写的逻辑是非常精细化的。
