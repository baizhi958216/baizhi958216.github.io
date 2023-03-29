# 按钮 YButton

## 示例:

```html
<template>
  <y-button>按钮内容</y-button>// [!code focus]
</template>
<script setup lang='ts'>
import YButton from "@/components/YunBase/YButton/YButton.vue";// [!code focus]
</script>
```

## 参数说明:

| 参数       | 可选 |  类型   |  默认值   |   额外说明   | 单位 |
| ---------- | :--: | :-----: | :-------: | :----------: | ---: |
| width      |  √   | number  |    350    |   按钮长度   |  rpx |
| height     |  √   | number  |    100    |   按钮高度   |  rpx |
| background |  √   | string  | "#2779f7" |   按钮背景   |      |
| fontcolor  |  √   | string  |  "white"  | 按钮文字颜色 |      |
| radius     |  √   | boolean |   false   |   圆角效果   |      |
| fontsize   |  √   | number  |    35     |   字体大小   |  rpx |
| shadow     |  √   | boolean |   false   |   阴影效果   |      |
