# 顶部菜单 Header

## 示例:

```html
<template>
    <header-view />// [!code focus]
</template>
<script setup lang="ts">
import HeaderView from "@/components/HeaderView.vue"; // [!code focus]
</script>
```

## 参数说明:

| 参数            | 可选 |  类型   | 默认值  |     额外说明 |
| --------------- | :--: | :-----: | :-----: | -----------: |
| title           |  √   | string  |   ""    |         标题 |
| background      |  √   | string  | "white" |       背景色 |
| has_item        |  √   | boolean |  false  |         内容 |
| custom          |  √   | boolean |  false  |   自定义插槽 |
| has_back        |  √   | boolean |  true   |     包含返回 |
| left            |  √   | boolean |  false  |     标题居左 |
| back_background |  √   | boolean |  true   | 返回按钮背景 |
