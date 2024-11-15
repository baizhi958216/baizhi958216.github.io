<template>
  <div class="flex gap-2">
    <el-input
      v-model="dontPressInput"
      style="width: 240px"
      placeholder="下班"
    />
    <el-button type="primary" @click="genDontPress">看看什么情况</el-button>
  </div>

  <el-image
    v-if="dontPressResList.length"
    style="width: 350px; height: 350px"
    :src="dontPressResList[0]"
    :zoom-rate="1.2"
    :max-scale="7"
    :min-scale="0.2"
    :preview-src-list="dontPressResList"
    :initial-index="4"
    fit="fill"
  />
</template>

<script setup lang="ts">
import { ref } from "vue";
import { ElInput, ElButton, ElImage } from "element-plus";

// dontpress
const dontPressInput = ref("下班");
const dontPressResList = ref<any>([]);

const genDontPress = () => {
  const url = "https://www.baizhi958216.com:2233/memes/dont_press/";
  const formData = new FormData();
  formData.append("texts", dontPressInput.value);
  fetch(url, {
    method: "POST",
    body: formData,
  })
    .then((resp) => resp.blob())
    .then((blob) => {
      dontPressResList.value[0] = URL.createObjectURL(blob);
    });
};
</script>
