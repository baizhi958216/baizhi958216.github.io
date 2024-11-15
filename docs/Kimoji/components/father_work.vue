<template>
  <el-input v-model="inputVal" style="width: 240px" placeholder="我将，扭转万象" />

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
    style="width: 250px; height: 241px"
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
import { Plus } from "@element-plus/icons-vue";
import { ElIcon, ElUpload } from "element-plus";

const inputVal = ref("我将，扭转万象");
const imgList = ref<any>([]);
const ImgResList = ref<any>([]);

const genImg = () => {
  const url = "https://www.baizhi958216.com:2233/memes/father_work/";
  const formData = new FormData();
  formData.append("texts", inputVal.value);
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
