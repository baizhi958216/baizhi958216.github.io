<template>
    <el-upload
      class="ml-[-20px]"
      v-model:file-list="imgList"
      action="#"
      :auto-upload="false"
      list-type="picture-card"
      :limit="1"
    >
      <el-icon><Plus /></el-icon>
    </el-upload>
  
    <el-button type="primary" @click="genImg">看看什么情况</el-button>
  
    <br />
  
    <el-image
      v-if="ImgResList.length"
      style="width: 256px; height: 343px"
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
  import { Plus } from "@element-plus/icons-vue";
  import { ElIcon, ElButton, ElUpload, ElImage } from "element-plus";
  
  const imgList = ref<any>([]);
  const ImgResList = ref<any>([]);
  const genImg = () => {
    const url = "https://www.baizhi958216.com:2233/memes/divorce/";
    const formData = new FormData();
    formData.append("images", imgList.value[0].raw);
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
  