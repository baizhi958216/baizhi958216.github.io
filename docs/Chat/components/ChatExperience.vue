<!-- <template>
  <div class="container">
    <div class="result">
      <div class="chat_l">
        <div
          class="chat"
          v-for="(ri, index) in result"
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
import MarkdownIt from "markdown-it";
const mdi = new MarkdownIt();
const chatipt = ref();

let result = reactive<
  Array<{
    role: string;
    message: string;
    wav?: string;
  }>
>([
  {
    role: "a",
    message: "",
  },
]);

const disable = ref(true);

onMounted(()=>{
  fetch("http://localhost:3000")
  .then((res) => {
    if (res.status !== 200) {
      disable.value = true;
      result[0].message = "当阁下看到这条消息的时候说明咱的服务器关机了(●ˇ∀ˇ●)";
    } else {
      disable.value = false;
      result[0].message = "喵喵喵？";
    }
  })
  .catch((err) => {
    if (err) {
      disable.value = true;
      result[0].message = "当阁下看到这条消息的时候说明咱的服务器关机了(●ˇ∀ˇ●)";
    }
  });
})


const submit = async () => {
  result.push({
    role: "b",
    message: chatipt.value,
  });
  const ipttmp = chatipt.value;
  chatipt.value = "";
  disable.value = true;
  await fetch("http://localhost:3000/api/chat/chatgpt", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      inMessage: ipttmp,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      result.push({
        role: "a",
        message: mdi.render(data.message),
        wav: `http://localhost:3000/${data.wav}`,
      });
      disable.value = false;
    });
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
  max-height: 70vh;
  overflow-y: scroll;
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
  overflow-x: scroll;
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
 -->