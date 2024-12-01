<template>
  <div class="flex items-center">
    <div class="min-w-[120px]">Ollama API：</div>
    <el-input
      class="mr-2"
      v-model="api"
      placeholder="比如：http://localhost:11434"
    />
    <el-button :icon="Search" circle @click="$emit('refreshAPI')" />
  </div>
</template>

<script setup lang="ts">
import { ElButton, ElInput } from "element-plus";
import { Search } from "@element-plus/icons-vue";

const api = defineModel<any>("api");

defineEmits(["refreshAPI"]);
</script>

<style scoped lang="scss"></style>
