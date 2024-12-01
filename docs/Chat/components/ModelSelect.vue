<template>
  <div class="flex items-center">
    <div class="min-w-[120px]">模型：</div>
    <el-select v-model="requestModel" placeholder="选择您的小猫" size="large">
      <el-option
        v-for="item in tags"
        :key="item.name"
        :label="item.name"
        :value="item.name"
      />
    </el-select>
  </div>
</template>

<script setup lang="ts">
import { ElSelect, ElOption } from "element-plus";
const requestModel = defineModel<any>("requestModel");

const tags = defineModel<{ name: string }[]>("tags");
</script>

<style scoped lang="scss"></style>
