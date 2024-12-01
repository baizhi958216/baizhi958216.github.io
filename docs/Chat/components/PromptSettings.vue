<template>
  <el-dialog v-model="settings" class="w-[calc(100vw-20px)]! md:w-[calc(50vw)]!">
    <div class="flex flex-col gap-3 my-5">
      <OllamaApi v-model:api="settingsForm.api" @refreshAPI="$emit('refreshAPI')" />
      <ModelSelect v-model:tags="settingsForm.tags" v-model:requestModel="settingsForm.model"
        @removeModel="$emit('removeModel', $event)" />
      <SystemPrompt v-model:systemPrompt="settingsForm.systemPrompt" />
    </div>
  </el-dialog>
</template>

<script setup lang="ts">
import { ElDialog } from "element-plus";
import SystemPrompt from "./SystemPrompt.vue";
import ModelSelect from "./ModelSelect.vue";
import OllamaApi from "./OllamaApi.vue";
import ISettings from "../types/ISettings";

const settings = defineModel<any>("settings");
const settingsForm = defineModel<ISettings>("settingsForm", {
  required: true,
});

defineEmits(["refreshAPI", "removeModel"]);
</script>

<style scoped></style>
