# 轮播图 YCarousel

## 示例

```html
<template>
  <y-carousel />// [!code focus]
</template>
<script setup lang='ts'>
import YCarousel from "@/components/YunBase/YCarousel/YCarousel.vue";// [!code focus]
</script>
```

## 参数说明:

| 参数                | 可选 |                            类型                             |          默认值          |                       额外说明                       | 单位 |
| ------------------- | :--: | :---------------------------------------------------------: | :----------------------: | :--------------------------------------------------: | ---: |
| info                |  √   |            { sid: string; background: string }[]            |                          |                      轮播图数据                      |      |
| dotstyle            |  √   | "dot"&#124;"round"&#124;"nav"&#124;"indexes"&#124;"default" |          "dot"           |                      指示点样式                      |      |
| width               |  √   |                           number                            |           100            |                      轮播图长度                      |    % |
| height              |  √   |                           number                            |            30            |                      轮播图高度                      |   vh |
| dotSize             |  √   |                           number                            |            0             |                      指示点大小                      |  rpx |
| dotBackground       |  √   |                           string                            | "rgba(83, 200, 249,0.3)" |                 未选择指示点边框样式                 |      |
| selectDotBackground |  √   |                           string                            | "rgba(83, 200, 249,0.9)" |        指示点边框样式，在 mode = nav 时不生效        |      |
| shadow              |  √   |                           boolean                           |          false           |                       阴影效果                       |      |
| autoplay            |  √   |                           boolean                           |          false           |                       自动轮播                       |      |
| circular            |  √   |                           boolean                           |          false           |                       衔接滑动                       |      |
| onlyimg             |  √   |                           boolean                           |          false           |                仅图片轮播, 无点击事件                |      |
| jump                |  √   |                           string                            |                          |           跳转子页面`/subs/${props.jump}`            |      |
| page                |  √   |                           string                            |                          | 跳转子子页面`/subs/${props.jump}/subs/${props.page}` |      |
| radius              |  √   |                           number                            |            20            |                       圆角效果                       |      |
| round               |  √   |                           boolean                           |          false           |                       圆角大小                       |  rpx |
| border              |  √   |                           string                            |          'none'          |                         边框                         |      |
