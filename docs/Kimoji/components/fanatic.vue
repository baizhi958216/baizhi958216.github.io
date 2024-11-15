<template>
  <div class="flex gap-2">
    <el-input
      v-model="inputVal"
      style="width: 240px"
      placeholder="MuseDash"
    />
    <el-button type="primary" @click="genImg">看看什么情况</el-button>
  </div>

  <el-image
    v-if="ImgResList.length"
    style="width: 480px; height: 400px"
    :src="ImgResList[0]"
    :zoom-rate="1.2"
    :max-scale="7"
    :min-scale="0.2"
    :preview-src-list="ImgResList"
    :initial-index="4"
    fit="fill"
  />
</template>

<script setup lang="ts">
import { ref } from "vue";
import { ElInput, ElButton, ElImage } from "element-plus";

// dontpress
const inputVal = ref("MuseDash");
const ImgResList = ref<any>([]);

const genImg = () => {
  const url = "https://www.baizhi958216.com:2233/memes/fanatic/";
  const formData = new FormData();
  formData.append("texts", inputVal.value);
  fetch(url, {
    method: "POST",
    body: formData,
  })
    .then((resp) => resp.blob())
    .then((blob) => {
        ImgResList.value[0] = URL.createObjectURL(blob);
    });
};
</script>
