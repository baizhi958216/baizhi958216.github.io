<template>
  <div class="mainf">
    <div class="menuf">
      <span style="font-size: small;color: #ccc;">{{ `${pageNum}/3` }}</span>
      <div @click="pageClick(1)">第一页</div>
      <div @click="pageClick(2)">第二页</div>
      <div @click="pageClick(3)">第三页</div>
    </div>
    <Flipbook
      class="flipbook"
      :startPage="pageNum"
      single-page
      :pages="pages"
      @flip-right-end="onFlipRightEnd"
      @flip-left-end="onFlipLeftEnd"
    />
  </div>
</template>

<script setup lang="ts">
import Flipbook from "flipbook-vue";
import { ref } from "vue";
const pages = ["images/1.jpg", "images/2.png", "images/3.jpg"];
const pageNum = ref(1);
const pageClick = (currentpageNum) => {
  pageNum.value = currentpageNum; // 更新当前页数
};
const onFlipRightEnd = (page) => {
    pageNum.value = page
}
const onFlipLeftEnd = (page) => {
    pageNum.value = page
}
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
}
.click-to-flip {
    display: none;
}
.mainf {
  display: flex;
  width: 100%;
  margin: 5rem;
}
.menuf {
  width: 120px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
}
.menuf div {
  cursor: pointer;
}
.menuf div:hover {
  font-weight: bold;
  font-size: 20px;
  text-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  transition: all 0.1s;
}
.flipbook {
  width: 50vw;
  height: 50vh;
  display: flex;
}
</style>
