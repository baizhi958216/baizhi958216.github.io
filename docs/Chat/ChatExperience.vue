<template>
  <div class="flex gap-2">
    <ElIcon class="tabicon hover:rotate-180" size="24" @click="settings = !settings">
      <Setting />
    </ElIcon>
    <el-dropdown>
      <ElIcon class="tabicon hover:rotate-10" size="24">
        <Collection />
      </ElIcon>
      <template #dropdown>
        <HistoryList v-model:historyList="historyList" v-model:currentChatID="currentChatID"
          @removeChat="historyStore.removeChat" />
      </template>
    </el-dropdown>
  </div>
  <PromptSettings v-model:settings="settings" v-model:settingsForm="settingsForm" @refreshAPI="settingsStore.refreshAPI"
    @removeModel="settingsStore.removeModel" />
  <ElScrollbar view-class="flex flex-col">
    <AnswerLab v-for="i in historyList[currentChatIndex]?.chatList.filter((e) => e.role != 'system')"
      v-model:message="i.content" v-model:role="i.role" />
  </ElScrollbar>
  <div class="flex gap-2">
    <ElInput v-model="messageInput" @keyup.enter="submit" :disabled="inputDisabled" />
    <ElButton circle size="large" :icon="Position" @click="submit" :disabled="inputDisabled || !messageInput" />
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { storeToRefs } from "pinia";
import { ElScrollbar, ElButton, ElInput, ElIcon, ElDropdown } from "element-plus";
import { Position, Setting, Collection } from "@element-plus/icons-vue";
import { useSettingsStore } from "./store/SettingsStore";

import AnswerLab from "./components/AnswerLab.vue";
import HistoryList from "./components/HistoryList.vue";
import PromptSettings from "./components/PromptSettings.vue";

import "element-plus/theme-chalk/index.css";
import { useHistoryStore } from "./store/HistoryStore";

const settingsStore = useSettingsStore();
const historyStore = useHistoryStore();
const { settingsForm, inputDisabled } = storeToRefs(settingsStore);
const { historyList } = storeToRefs(historyStore);

const settings = ref(false);
const messageInput = ref("");
const currentChatID = ref("");

const currentChatIndex = computed(() => historyList.value.findIndex((e) => e.chatId === currentChatID.value))

const submit = async () => {
  // 当前聊天记录id不对 或者 无输入直接返回
  if (!messageInput.value || currentChatIndex.value == -1) return
  // 当前聊天记录没有title
  if (!historyList.value[currentChatIndex.value].chatTitle) {
    historyList.value[currentChatIndex.value].chatTitle = messageInput.value
  }
  historyList.value[currentChatIndex.value].chatList.push({
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
      messages: historyList.value[currentChatIndex.value].chatList,
    }),
  });
  if (!resp.ok) {
    return;
  }
  historyList.value[currentChatIndex.value].chatList.push({
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
    historyList.value[currentChatIndex.value].chatList.at(-1)!.content =
      historyList.value[currentChatIndex.value].chatList.at(-1)!.content +
      JSON.parse(decoder.decode(value)).message.content;
  }
};


onMounted(() => {
  currentChatID.value = Math.random().toString(36).substring(2, 15) + Math.floor(Math.random() * 1000).toString();
  historyList.value.push({
    chatModel: settingsForm.value.model,
    chatTitle: messageInput.value,
    chatTimestamp: new Date().toLocaleString(),
    chatId: currentChatID.value,
    chatList: [
      {
        role: "system",
        content: settingsForm.value.systemPrompt,
      },
    ],
  });
  settingsStore.refreshAPI();
});
</script>

<style scoped lang="scss">
.tabicon {
  @apply my-5 cursor-pointer hover:color-blue hover:scale-130 transition-all outline-none !;
}
</style>