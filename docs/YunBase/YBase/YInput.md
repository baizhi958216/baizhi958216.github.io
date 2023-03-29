# 输入 Input

## 示例:

```html
<template>
  <y-input />// [!code focus]
</template>
<script setup lang='ts'>
import YInput from "@/components/YunBase/YInput/YInput.vue";// [!code focus]
</script>
```

## 参数说明:

| 参数        | 可选 |        类型        |  默认值   |    额外说明    | 单位 |
| ----------- | :--: | :----------------: | :-------: | :------------: | ---: |
| width       |  √   |       number       |           |   输入框长度   |  rpx |
| height      |  √   |       number       |           |   输入框高度   |  rpx |
| placeholder |  √   |       string       |           | 输入框提示信息 |      |
| password    |  √   |      boolean       |   false   | 是否密码输入框 |      |
| value       |  √   | string&#124;number |    ""     |     预设值     |      |
| background  |  √   |       string       | "#f0f0f0" |     背景色     |      |

## 事件

`i_changeVal`: 监听输入内容
