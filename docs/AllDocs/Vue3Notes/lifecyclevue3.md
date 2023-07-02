# Vue3 生命周期(组合式 API)

相比选项式 API(Options API)简化了`beforeCreate`, `created`过程。

![Vue3LifeCycleHook](./imgs/vue3lifecycle.png)

## 生命周期钩子

:::details [Composition API: Lifecycle Hooks](https://vuejs.org/api/composition-api-lifecycle.html)

onMounted()

onUpdated()

onUnmounted()

onBeforeMount()

onBeforeUpdate()

onBeforeUnmount()

onErrorCaptured()

onRenderTracked()

onRenderTriggered()

onActivated()

onDeactivated()

onServerPrefetch()

:::

## 页面组件渲染

:::tip 渲染过程

父组件`onBeforeMount`过程

            ↓

子组件`onBeforeMount`过程

            ↓

子组件`onRenderTracked`过程

            ↓

子组件`onMounted`过程

            ↓

父组件`onMounted`过程
:::

在 `Mounted` 过程之前无法获取 模板中将要`render`的 节点

`beforeMounted`与`Mounted`过程间 `Initial render, create & insert DOM nodes`

```vue
<script setup>
import { onBeforeMount, onMounted } from "vue";

document.querySelector(".mnode"); // null

onBeforeMount(() => {
  document.querySelector(".mnode"); // null
});

onMounted(() => {
  document.querySelector(".mnode"); // <div class="mnode">
});
</script>

<template>
  <div class="mnode"></div>
</template>
```

:::tip 确实想要在`setup`和`onBeforeMount`里拿到节点怎么办?

使用`nextTick`, 等待页面渲染完成后获取

```vue
<script setup>
import { onBeforeMount, nextTick } from "vue";

nextTick(() => {
  document.querySelector(".mnode"); // <div class="mnode">
});

onBeforeMount(async () => {
  await nextTick();
  document.querySelector(".mnode"); // <div class="mnode">
});
</script>

<template>
  <div class="mnode"></div>
</template>
```

:::

## 页面组件更新

:::tip 更新过程

父组件`onBeforeUpdate`过程

                ↓

父组件`onBeforeUnmount`过程

                ↓

子组件`onBeforeMount`过程

                ↓

父组件`onUnmounted`过程

                ↓

子组件`onMounted`过程

                ↓

父组件`onUpdated`过程

:::

## DOM 数据更新

响应式数据(`ref`, `reactive`...)触发页面`re-render`, `patch`函数进行增量更新

:::tip 更新过程

组件`onBeforeUpdate`过程

            ↓

组件`updated`过程

:::

```vue
<script setup>
import { ref, onBeforeUpdate, onUpdated } from "vue";

const v = ref(0);

const plusv = () => {
  v.value++;
};

onBeforeUpdate(() => {
  console.log(document.querySelector(".v").textContent); // 0
});

onUpdated(() => {
  console.log(document.querySelector(".v").textContent); // 1
});
</script>

<template>
  <div @click="plusv" class="v">{{ v }}</div>
</template>
```

## 页面新旧组件切换

:::tip 切换过程

父组件`onBeforeUpdate`过程

            ↓

旧组件`onBeforeUnmount`过程

            ↓

新组件`onBeforeMount`过程

            ↓

旧组件`onUnmounted`过程

            ↓

新组件`onMounted`过程

            ↓

父组件`onUpdated`过程

:::

App.vue

```vue
<script setup>
import { onBeforeUpdate, onUpdated, shallowRef } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import ByeWorld from "./components/ByeWorld.vue";

const world = shallowRef(HelloWorld);

const switchWorld = () => {
  world.value = ByeWorld;
};

onBeforeUpdate(() => {
  console.log("App onBeforeUpdate");
});

onUpdated(() => {
  console.log("App onUpdated");
});
</script>

<template>
  <component :is="world" />
  <br />
  <div @click="switchWorld">switchWorld</div>
</template>
```

HelloWorld.vue

```vue
<script setup>
import { onBeforeUnmount, onUnmounted, ref } from "vue";
const HelloWorld = ref("HelloWorld");

onBeforeUnmount(() => {
  console.log("HelloWorld onBeforeUnmount");
});

onUnmounted(() => {
  console.log("HelloWorld onUnmounted");
});
</script>

<template>
  <div>{{ HelloWorld }}</div>
</template>
```

ByeWorld.vue

```vue
<script setup>
import { onBeforeMount, onMounted, ref } from "vue";
const ByeWorld = ref("ByeWorld");

onBeforeMount(() => {
  console.log("ByeWorld onBeforeMount");
});

onMounted(() => {
  console.log("ByeWorld onMounted");
});
</script>

<template>
  <div>{{ ByeWorld }}</div>
</template>
```
