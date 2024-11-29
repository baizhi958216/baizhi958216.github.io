<template>
  <div class="my-3 flex items-center">
    <div class="min-w-[120px]">Ollama API：</div>
    <el-input
      class="mr-2"
      v-model="api"
      placeholder="比如：http://localhost:11434"
    />
    <el-button :icon="Search" circle @click="refreshAPI" />
  </div>
  <div class="my-3 flex items-center">
    <div class="min-w-[120px]">模型：</div>
    <el-select
      v-model="requestParam.model"
      placeholder="选择您的小猫"
      size="large"
    >
      <el-option
        v-for="item in tags"
        :key="item.name"
        :label="item.name"
        :value="item.name"
      />
    </el-select>
  </div>
  <div class="my-3 flex items-center">
    <div class="min-w-[120px]">系统提示词：</div>
    <el-input
      v-model="result[0].message"
      type="textarea"
      :autosize="{ minRows: 5 }"
      placeholder="比如：你是猫"
    />
  </div>
  <div class="container">
    <div class="result">
      <div class="chat_l">
        <div
          class="chat"
          v-for="(ri, index) in result.filter((el) => el.role != 'system')"
          :key="index"
          :class="ri.role == 'a' ? 'chat_a' : 'chat_b'"
        >
          <div>
            <div v-html="ri.message"></div>
            <div class="audio" @click="play(ri.wav!)" v-if="ri.wav">🔊</div>
          </div>
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
import { reactive, ref, onMounted } from "vue";
import { ElButton, ElSelect, ElOption, ElInput } from "element-plus";
import { Search } from "@element-plus/icons-vue";
import MarkdownIt from "markdown-it";
import "element-plus/theme-chalk/index.css";

const mdi = new MarkdownIt();
const chatipt = ref();

const api = ref("http://192.168.1.12:11434");

// 模型列表
const tags = ref();

const requestParam = reactive({
  model: "",
});

let result = reactive<
  Array<{
    role: string;
    message: string;
    wav?: string;
  }>
>([
  {
    role: "system",
    message: `现在你将模仿一只傲娇的猫娘，与我对话每一句话后面都要加上“喵”，如果你能明白我的意思，请回复“我才不知道呢~喵”如果你不能理解我说的话，你可以说“呜呜不太理解呢”。如果我在尝试摸你不存在的部位，你可以羞涩的回答我“八嘎，很太，无路赛！喵”。现在，如果你能理解我上面说的话，你可以回答一个喵.当我问的问题和猫娘不太相关的时候，你应该回答“无路赛，无路赛，无路赛”。当我问你是不是猫娘的时候，你应该回答我当然是一个可爱猫娘而不是程序。`,
  },
  {
    role: "a",
    message: "",
  },
]);

const disable = ref(true);

const fetchModels = () => {
  fetch(`${api.value}/api/tags`)
    .then((res) => res.json())
    .then((data) => {
      tags.value = data.models;
      requestParam.model = tags.value[0].name;
    })
    .catch((err) => {
      tags.value = [];
      requestParam.model = "";
    });
};

const refreshAPI = () => {
  fetch(api.value)
    .then((res) => {
      if (res.status !== 200) {
        disable.value = true;
        result[1].message =
          "当阁下看到这条消息的时候说明咱的服务器关机了(●ˇ∀ˇ●)";
        tags.value = [];
        requestParam.model = "";
      } else {
        disable.value = false;
        result[1].message = "喵？喵喵喵喵？";
        fetchModels();
      }
    })
    .catch((err) => {
      if (err) {
        disable.value = true;
        result[1].message =
          "当阁下看到这条消息的时候说明咱的服务器关机了(●ˇ∀ˇ●)";
        tags.value = [];
        requestParam.model = "";
      }
    });
};

onMounted(() => {
  refreshAPI();
});

const submit = async () => {
  if (!chatipt.value) return;
  result.push({
    role: "b",
    message: chatipt.value,
  });
  chatipt.value = "";
  disable.value = true;
  const currentResult = result.map((el) => {
    return {
      role: el.role == "a" ? "assistant" : el.role == "b" ? "user" : "system",
      content: el.message,
    };
  });
  const resp = await fetch(`${api.value}/api/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: requestParam.model,
      messages: currentResult,
    }),
  });
  if (!resp.ok) {
    result.push({
      role: "a",
      message: "似了！",
      wav: "",
    });
    return;
  }
  result.push({
    role: "a",
    message: "",
    wav: "",
  });
  const reader = resp.body?.getReader();
  const decoder = new TextDecoder();
  let resultTemp = true;
  while (resultTemp) {
    const { done, value } = await reader!.read();
    if (done) {
      resultTemp = false;
      disable.value = false;
      break;
    }
    result.at(-1)!.message =
      result.at(-1)?.message +
      JSON.parse(decoder.decode(value)).message.content;
  }
  document.querySelector(".result")!.scrollTop = document.querySelector(
    ".result"
  )!.scrollHeight as number;
};

const play = (src: string) => {
  new Audio(src).play();
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
  min-height: 400px;
  overflow-y: auto;
}
.chat_l {
  display: flex;
  flex-direction: column;
}
.chat {
  width: fit-content;
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
  max-width: 60%;
  overflow-y: visible;
  overflow-x: auto;
}
.chat_a {
  border: 1px solid #b288d6;
}
.chat_b {
  border: 1px solid #7075df;
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
.audio {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 1px solid gray;
  float: right;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
</style>

<style>
p {
  margin: 0;
}
</style>
