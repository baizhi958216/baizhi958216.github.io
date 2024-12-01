import { defineStore } from "pinia";
import { ref } from "vue";
import IHistory from "../types/IHistory";

export const useHistoryStore = defineStore(
  "history",
  () => {
    const historyList = ref<IHistory[]>([]);

    const removeChat = (chatId: string) => {
      historyList.value = historyList.value.filter((e) => e.chatId !== chatId);
    };

    return { historyList, removeChat };
  },
  {
    persist: true,
  }
);
