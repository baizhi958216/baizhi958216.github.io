# 卡片 YCard

## 示例:

```html
<template>
  <y-card>卡片标题</y-card>// [!code focus]
</template>
<script setup lang='ts'>
import YCard from "@/components/YunBase/YCard/YCard.vue";// [!code focus]
</script>
```

## 参数说明:

| 参数   | 可选 |  类型   | 默认值 |            额外说明            | 单位 |
| ------ | :--: | :-----: | :----: | :----------------------------: | ---: |
| link   |  √   | string  |   ""   |          点击跳转链接          |      |
| imgSrc |  √   | string  |   ""   | 背景, 外部图片地址需 url()包围 |      |
| inner  |  √   | boolean | false  |           开启内边距           |      |
| width  |  √   | string  |   ""   |            图片长度            | 自定 |
| height |  √   | string  |   ""   |            图片高度            | 自定 |
| round  |  √   | boolean | false  |            圆角效果            |      |
| left   |  √   | boolean | false  |   true:左对齐 false:垂直居中   |      |
