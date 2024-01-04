<template>
  <div class="container">
    <div id="carousel">
      <div class="carousel-item">
        <img src="https://raw.githubusercontent.com/baizhi958216/baizhi958216.github.io/main/docs/AllDocs/Frontend/imgs/158CBC5441D07D719838E7C2CCFF6A47.jpg" />
      </div>
      <div class="carousel-item">
        <img src="https://raw.githubusercontent.com/baizhi958216/baizhi958216.github.io/main/docs/AllDocs/Frontend/imgs/C66C934923468677DC0BD7C6920BF0E8.jpg" />
      </div>
      <div class="carousel-item">
        <img src="https://raw.githubusercontent.com/baizhi958216/baizhi958216.github.io/main/docs/AllDocs/Frontend/imgs/158CBC5441D07D719838E7C2CCFF6A47.jpg" />
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
