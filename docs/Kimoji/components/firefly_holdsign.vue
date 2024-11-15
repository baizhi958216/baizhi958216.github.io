<template>
  <div class="flex gap-2 items-center mb-2">
    <div class="w-[80px] text-right">随机图片:</div>
    <el-input
      v-model="numberVal"
      style="width: 100px"
      placeholder="范围1-21, 0为随机"
    />
  </div>
  <div class="flex gap-2 items-center mb-2">
    <div class="w-[80px] text-right">文字:</div>
    <el-input v-model="InputVal" style="width: 240px" placeholder="我超爱你" />
  </div>

  <el-button type="primary" @click="genImg">看看什么情况</el-button>

  <br />

  <el-image
    v-if="ImgResList.length"
    style="width: 180px; height: 180px"
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

const numberVal = ref(0);
const InputVal = ref("我超爱你");
const ImgResList = ref<any>([]);
const genImg = () => {
  const url = "https://www.baizhi958216.com:2233/memes/firefly_holdsign/";
  const formData = new FormData();
  formData.append("texts", InputVal.value);
  formData.append("args", JSON.stringify({ number: numberVal.value }));
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
