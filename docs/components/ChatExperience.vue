<template>
  <div class="container">
    <div class="result">
      <div
        class="chat"
        v-for="(ri, index) in result"
        :key="index"
        :class="ri.role == 'a' ? 'chat_a' : 'chat_b'"
      >
        <div>
          <div v-html="ri.message"></div>
        </div>
      </div>
    </div>
    <div class="ipt">
      <input
        :disabled="disable"
        class="c_ipt"
        type="text"
        v-model="chatipt"
        @keyup.enter="submit"
      />
      <button @click="submit" :disabled="disable" class="submit">✈</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import MarkdownIt from "markdown-it";
const mdi = new MarkdownIt();
const chatipt = ref();
let result = reactive([
  {
    role: "a",
    message: "喵喵喵?",
  },
]);

const disable = ref(false);

fetch(
  "https://baizhi958216-literate-goggles-qp4p6v44g55f6697-3000.preview.app.github.dev"
)
  .then((res) => {
    if (res.status !== 200) {
      disable.value = true;
    }
  })
  .catch((err) => {
    if (err) {
      disable.value = true;
      result[0].message = "当阁下看到这条消息的时候说明咱的服务器关机了(●ˇ∀ˇ●)";
    }
  });

const submit = async () => {
  result.push({
    role: "b",
    message: chatipt.value,
  });
  const ipttmp = chatipt.value;
  chatipt.value = "";
  disable.value = true;
  await fetch(
    "https://baizhi958216-literate-goggles-qp4p6v44g55f6697-3000.preview.app.github.dev/api/chat/chatgpt",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        inMessage: ipttmp,
      }),
    }
  )
    .then((res) => res.text())
    .then((data) => {
      result.push({
        role: "a",
        message: mdi.render(data),
      });
      disable.value = false;
    });
};
</script>

<style scoped>
.container {
  border: 1px solid gray;
  border-radius: 20px;
}
.result {
  padding: 20px;
  line-height: 26px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  max-height: 70vh;
}
.chat {
  width: fit-content;
  padding: 10px;
  margin: 10px;
  color: white;
  border-radius: 10px;
  max-width: 60%;
  overflow: scroll;
}
.chat_a {
  background-color: #b288d6;
}
.chat_b {
  background-color: #7075df;
  align-self: flex-end;
}
.ipt {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 20px;
}
.c_ipt {
  border: 1px solid gray;
  height: 40px;
  width: 80%;
  border-radius: 10px;
  padding: 0 20px;
}
.submit {
  border: none;
  font-size: 20px;
}
</style>
