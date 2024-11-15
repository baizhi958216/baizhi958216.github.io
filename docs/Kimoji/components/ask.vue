<template>
  <el-input
    v-model="askinput"
    style="width: 240px"
    placeholder="让***告诉你吧的***"
  />

  <el-upload
    class="ml-[-20px]"
    v-model:file-list="askList"
    action="#"
    :auto-upload="false"
    list-type="picture-card"
    :limit="1"
  >
    <el-icon><Plus /></el-icon>
  </el-upload>

  <el-button type="primary" @click="genAsk">看看什么情况</el-button>

  <br />

  <el-image
    v-if="askResList.length"
    style="width: 350px; height: 400px"
    :src="askResList[0]"
    :zoom-rate="1.2"
    :max-scale="7"
    :min-scale="0.2"
    :preview-src-list="askResList"
    :initial-index="4"
    fit="fill"
  />
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Plus } from "@element-plus/icons-vue";
import { ElInput, ElIcon, ElButton, ElUpload, ElImage } from "element-plus";

// ask
const askinput = ref("阿纸");
const askList = ref<any>([]);
const askResList = ref<any>([]);
const genAsk = () => {
  const url = "https://www.baizhi958216.com:2233/memes/ask/";
  const formData = new FormData();
  formData.append("texts", askinput.value);
  formData.append("images", askList.value[0].raw);
  fetch(url, {
    method: "POST",
    body: formData,
  })
    .then((resp) => resp.blob())
    .then((blob) => {
      askResList.value[0] = URL.createObjectURL(blob);
    });
};
</script>
