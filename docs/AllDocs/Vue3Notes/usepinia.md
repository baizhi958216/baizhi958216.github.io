# 使用 Pinia

[Pinia](https://pinia.vuejs.org):新一代状态管理工具, 以前是[vuex](https://vuex.vuejs.org)

## 安装

```bash
pnpm i pinia
```

## 创建 createPinia 实例

```js
//main.js

import { createApp } from "vue";
import App from "./App.vue";

import { createPinia } from "pinia"; //[!code focus]

const pinia = createPinia(); //[!code focus]

createApp(App).use(pinia).mount("#app"); //[!code focus]
```

## 创建 Store

组合式 Store(Setup Store)

只需要将变量, 函数等 return 出去即可使用

```js
// stores/counter.js
import { defineStore } from "pinia";
import { ref } from "vue";

export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);
  function increment() {
    count.value++;
  }

  return { count, increment };
});
```

:::tip 选项式 Store(Option Store)


```js
// stores/counter.js
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => ({ count: 0 }),
  getters: {
    double: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++;
    },
  },
});
```

:::

## 使用 Store

```vue
// App.vue
<script setup>
import { useCounterStore } from "@/stores/counter";
const store = useCounterStore();
</script>

<template>
  <div @click="store.increment">{{ store.count }}</div>
</template>
```

## 实现 getters

调用 computed()

```js
// stores/counter.js
import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);
  function increment() {
    count.value++;
  }

  const doubleCount = computed(() => count.value * 2); //[!code focus]

  return { count, increment, doubleCount }; //[!code focus]
});
```

```vue
<script setup>
import { useCounterStore } from "@/stores/counter";
const store = useCounterStore();
</script>

<template>
  <div @click="store.increment">{{ store.count }}</div>
  <div>{{ store.doubleCount }}</div>
</template>
```

## 异步 action

Pinia支持异步action

```js
// stores/counter.js
import { defineStore } from "pinia";
import { ref } from "vue";

export const useCounterStore = defineStore("counter", () => {

  const list = ref([]); //[!code focus]
  const getList = async () => {//[!code focus]
    const res = await fetch("URL").then((res) => res.json()); //[!code focus]
    list.value = res.data.channels; //[!code focus]
  }; //[!code focus]

  return { list, getList }; //[!code focus]
});
```

```vue
<script setup>
import { useCounterStore } from "@/stores/counter";
import { onMounted } from "vue";
const store = useCounterStore();

onMounted(() => {
  store.getList();
});
</script>

<template>
  <ul>
    <li v-for="item in store.list" :key="item.id">{{ item.name }}</li>
  </ul>
</template>

```

## 响应式数据丢失问题

对Store直接进行解构赋值会导致响应式数据丢失:

```js
const { count, doubleCount } = store
```

方法可以直接解构:
```js
const { increment } = store
```

可以使用`storeToRefs()`对Store进行包裹保持数据的响应式:

```js
import { storeToRefs } from 'pinia'

const { count, doubleCount } = storeToRefs(store)
```

:::tip storeToRefs原理

接收到store后会转换成原始对象

```js
export function storeToRefs(store){
    // ...
    store = toRaw(store)
    // ...
}
```

对原始对象进行响应式处理

```js
export function storeToRefs(store){
    // ...
    const refs = {}

    for (const key in store){
        // ...
        refs[key] = toRef(store,key)
        // ...
    }

    return refs
}
```


:::