<template>
  <el-upload
    class="ml-[-20px]"
    v-model:file-list="nearList"
    action="#"
    :auto-upload="false"
    list-type="picture-card"
    :limit="1"
  >
    <el-icon><Plus /></el-icon>
  </el-upload>

  <el-button type="primary" @click="genNear">看看什么情况</el-button>

  <br />

  <el-image
    v-if="nearResList.length"
    style="width: 300px; height: 300px"
    :src="nearResList[0]"
    :zoom-rate="1.2"
    :max-scale="7"
    :min-scale="0.2"
    :preview-src-list="nearResList"
    :initial-index="4"
    fit="fill"
  />
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Plus } from "@element-plus/icons-vue";
import { ElIcon, ElButton, ElUpload, ElImage } from "element-plus";

const nearList = ref<any>([]);
const nearResList = ref<any>([]);
const genNear = () => {
  const url = "https://www.baizhi958216.com:2233/memes/dont_go_near/";
  const formData = new FormData();
  formData.append("images", nearList.value[0].raw);
  fetch(url, {
    method: "POST",
    body: formData,
  })
    .then((resp) => resp.blob())
    .then((blob) => {
      nearResList.value[0] = URL.createObjectURL(blob);
    });
};
</script>
