import { defineStore } from "pinia";
import { ref } from "vue";
import IHistory from "../types/IHistory";

export const useHistoryStore = defineStore("history", () => {
    const historyList = ref<IHistory[]>([]);

    return { historyList };
}, {
  persist: true,
});
