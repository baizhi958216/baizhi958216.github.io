<template>
  <ElIcon
    class="my-5 cursor-pointer hover:color-blue hover:rotate-180 hover:scale-130 transition-all"
    size="24"
    @click="settings = !settings"
  >
    <Setting />
  </ElIcon>
  <PromptSettings
    v-model:settings="settings"
    v-model:settingsForm="settingsForm"
    @refreshAPI="settingsStore.refreshAPI"
  />
  <ElScrollbar view-class="flex flex-col">
    <AnswerLab
      v-for="i in requestParam.chatList.filter((e) => e.role != 'system')"
      v-model:message="i.content"
      v-model:role="i.role"
    />
  </ElScrollbar>
  <div class="flex gap-2">
    <ElInput
      v-model="messageInput"
      @keyup.enter="submit"
      :disabled="inputDisabled"
    />
    <ElButton
      circle
      size="large"
      :icon="Position"
      @click="submit"
      :disabled="inputDisabled || !messageInput"
    />
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { storeToRefs } from "pinia";
import { ElScrollbar, ElButton, ElInput, ElIcon } from "element-plus";
import { Position, Setting } from "@element-plus/icons-vue";
import { useSettingsStore } from "./store/SettingsStore";

import AnswerLab from "./components/AnswerLab.vue";
import PromptSettings from "./components/PromptSettings.vue";

import "element-plus/theme-chalk/index.css";

const settingsStore = useSettingsStore();
const { settingsForm, inputDisabled } = storeToRefs(settingsStore);

const settings = ref(false);
const messageInput = ref("");

const requestParam = reactive({
  chatList: [
    {
      role: "system",
      content: settingsForm.value.systemPrompt,
    },
  ],
});

const submit = async () => {
  requestParam.chatList.push({
    role: "user",
    content: messageInput.value,
  });
  messageInput.value = "";
  inputDisabled.value = true;
  const resp = await fetch(`${settingsForm.value.api}/api/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: settingsForm.value.model,
      messages: requestParam.chatList,
    }),
  });
  if (!resp.ok) {
    return;
  }
  requestParam.chatList.push({
    role: "assistant",
    content: "",
  });
  const reader = resp.body!.getReader();
  const decoder = new TextDecoder();
  let resultTemp = true;
  while (resultTemp) {
    const { done, value } = await reader.read();
    if (done) {
      resultTemp = false;
      inputDisabled.value = false;
      break;
    }
    requestParam.chatList.at(-1)!.content =
      requestParam.chatList.at(-1)!.content +
      JSON.parse(decoder.decode(value)).message.content;
  }
};

settingsStore.refreshAPI();
</script>