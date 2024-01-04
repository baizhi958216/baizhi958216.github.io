# 3D 旋转木马

为实现一个异形 3D 轮播图(旋转木马)，找到个[cloud9carousel](https://github.com/specious/cloud9carousel)的JQuery实现可以达到想要的效果，但是目前项目使用Vue，引入JQuery不知道会不会对其它模块造成影响，因此参考[cloud9carousel](https://github.com/specious/cloud9carousel)写了个[carousalable](https://github.com/baizhi958216/3DCarousel)并且简化了使用，目前已发布至[npm](https://www.npmjs.com/package/carouselable)。

## 演示

<Carousel />

## 安装依赖

```bash
npm install carouselable
```

## 用法

```js
initCarousel({
  xRadius: 350,
  yRadius: 35,
  farScale: 0.7,
  speed: 4,
  itemClass: "carousel-item",
  handle: document.getElementById("carousel"),
});
```

## API 说明

`initCarousel` 函数接受一个包含各种配置选项的对象作为参数：

**farScale (可选):** 控制轮播项在远处时的缩放比例。默认值为 `0.5`。

**speed (可选):** 控制轮播图旋转的速度。默认值为 `4`。

**itemClass (可选):** 指定轮播项的类名。默认为 `.carousel-item`。

**handle (可选):** 指定轮播图渲染到的 DOM 元素。默认为`#carousel`。

**xOrigin (可选):** 控制轮播图的 x 轴旋转中心。默认为轮播图容器的宽度的一半。

**yOrigin (可选):** 控制轮播图的 y 轴旋转中心。默认为轮播图容器的高度的一定百分比。

**xRadius (可选):** 控制轮播图沿 x 轴的半径。默认为轮播图容器宽度的一半。

**yRadius (可选):** 控制轮播图沿 y 轴的半径。默认为轮播图容器高度的一定百分比。

## 示例代码

:::details 示例代码

```vue
<template>
  <div class="container">
    <div id="carousel">
      <div class="carousel-item">
        <img src="./imgs/158CBC5441D07D719838E7C2CCFF6A47.jpg" />
      </div>
      <div class="carousel-item">
        <img src="./imgs/C66C934923468677DC0BD7C6920BF0E8.jpg" />
      </div>
      <div class="carousel-item">
        <img src="./imgs/158CBC5441D07D719838E7C2CCFF6A47.jpg" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { initCarousel } from "carouselable";
onMounted(() => {
  const carousel = document.getElementById("carousel");
  if (carousel) {
    initCarousel({
      itemClass: "carousel-item",
      handle: carousel,
      xRadius: 350,
      yRadius: 55,
      farScale: 0.7,
      speed: 4,
    });
  }
});
</script>

<style scoped>
.container {
  width: 800px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
}

#carousel {
  width: 800px;
  height: 400px;
}

.carousel-item {
  border-radius: 14px;
  width: 400px;
  height: 260px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
}
</style>
```

:::

<script setup lang="ts">
import Carousel from './Carouselable.vue'
</script>

## 最后

cloud9carousel: [specious: cloud9carousel](https://github.com/specious/cloud9carousel)

演示图片: [Bilibili UP主: 小染](https://space.bilibili.com/441120370) 