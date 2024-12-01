<template>
  <div class="flex items-center">
    <div class="min-w-[120px]">系统提示词：</div>
    <el-input
      v-model="systemPrompt"
      type="textarea"
      :autosize="{ minRows: 3, maxRows: 5 }"
      placeholder="比如：你是猫"
    />
  </div>
</template>

<script setup lang="ts">
import { ElInput } from "element-plus";

const systemPrompt = defineModel<any>("systemPrompt");
</script>

<style scoped lang="scss">
:deep(.el-textarea__inner) {
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(88, 88, 88, 0.612);
    border-radius: 5px;
    cursor: pointer;
    &:hover {
      background-color: #40a0ff8f;
    }
  }
}
</style>
