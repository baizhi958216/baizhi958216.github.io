# 通过WebSocket搭建一个简易的即时聊天平台

使用Vue3 + socket.io + Pinia

仓库: websocket-nest-vue/vue-websocket

[后端](/AllDocs/NestJS/websocket)

## 创建Vue3项目

```bash
pnpm create vite@latest
```

## 安装依赖

```bash
pnpm i socket.io-client pinia pinia-plugin-persistedstate 
```

组件库

```bash
pnpm i element-plus @element-plus/icons-vue
```

## 配置后端接口

:::code-group

```bash [.env]
VITE_NEST_PORT=http://localhost:3000
VITE_SOCKET_PORT=http://localhost:3001
```

:::

## 载入ElementPlus和Pinia

:::code-group

```ts [src/main.ts]
import { createApp } from "vue";
import "./style.css";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import App from "./App.vue";

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
const app = createApp(App);

app.use(pinia);
app.use(ElementPlus);
app.mount("#app");
```

:::

## Socket.io

:::code-group

```ts [src/libs/socket.io.ts]
import { io } from "socket.io-client";

const client = io(`${import.meta.env.VITE_SOCKET_PORT}`, {
  autoConnect: true,
});

export { client };
```
:::

## 用户信息和聊天记录持久化

:::code-group

```ts [src/stores/message.store.ts]
import { defineStore } from "pinia";
import { ref } from "vue";
import { IMessage } from "../types/message.interface";

export const useMessageStore = defineStore(
  "messagestore",
  () => {
    const messageList = ref<Partial<IMessage>[]>([]);

    const cleanLocalHistory = () => (messageList.value = []);

    return { messageList, cleanLocalHistory };
  },
  {
    persist: true,
  }
);
```

```ts [src/stores/user.store.ts]
import { defineStore } from "pinia";
import { ref } from "vue";

interface IUser {
  username: string;
  id: string;
}

export const useUserStore = defineStore(
  "userstore",
  () => {
    const user = ref<IUser>();
    const saveuser = (user1: IUser) => {
      user.value = user1;
    };
    const logOut = () => {
      user.value = undefined;
    };

    return { user, saveuser, logOut };
  },
  {
    persist: true,
  }
);
```

:::


聊天信息会在聊天组件使用，所以将类型独立一份出来:

```ts [src/types/message.interface.ts]
interface IMessage {
  id: string;
  userId: string;
  username: string;
  content: string;
  createTime: string;
}

export type { IMessage };
```

## 页面和组件的编写

:::code-group

```vue [src/App.vue]
<template>
  <div class="container">
    <div
      v-if="!userStore.user"
      class="createuser"
      @click="createUserVisible = true"
    >
      Create User
    </div>
    <div v-else class="user">
      <div style="display: flex; align-items: center">
        <el-icon :size="20"><Avatar /></el-icon>
        <div>{{ userStore.user.username }}</div>
      </div>
    </div>

    <ChatBox />

    <div class="tools">
      <el-icon :size="20" @click="logOut"><BottomLeft /></el-icon>
      <el-icon :size="20" @click="cleanHistory">
        <Delete />
      </el-icon>
    </div>

    <CreateUser
      v-if="createUserVisible"
      :visable="createUserVisible"
      @close="createUserVisible = false"
    />
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { useUserStore } from "./stores/user.store";
import { useMessageStore } from "./stores/message.store";
import { Delete, Avatar, BottomLeft } from "@element-plus/icons-vue";
import { ElMessageBox } from "element-plus";
import CreateUser from "./components/CreateUser.vue";
import ChatBox from "./components/ChatBox.vue";

const userStore = useUserStore();
const messageStore = useMessageStore();

const createUserVisible = ref(false);

const logOut = () => {
  ElMessageBox.confirm("Are you sure to logout this user?")
    .then(() => {
      userStore.logOut();
    })
    .catch(() => {
      // catch error
    });
};
const cleanHistory = () => {
  ElMessageBox.confirm("Are you sure to clean all messages locally?")
    .then(() => {
      messageStore.cleanLocalHistory();
    })
    .catch(() => {
      // catch error
    });
};
</script>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(#c2c1c1, #7e7e7e);
}

.createuser {
  color: white;
  margin: 20px;
  user-select: none;
  cursor: pointer;
  width: fit-content;
}
.user {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
  gap: 20px;
}
.tools {
  display: flex;
  justify-content: flex-end;
  margin: 15px;
  gap: 20px;
  padding-right: 30px;
}
.tools > .el-icon {
  cursor: pointer;
}
</style>
```

```vue [src/components/ChatBox.vue]
<template>
  <div class="chat">
    <MessageList :messageList="messageStore.messageList" />

    <div class="editor">
      <textarea
        v-model="editor_input"
        type="text"
        @keydown.enter.prevent="sendMessage"
        class="editor_input"
      />
      <span class="editor_send" @click="sendMessage">Send</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { nextTick, onMounted, ref } from "vue";
import MessageList from "../components/MessageList.vue";
import { ElMessage } from "element-plus";
import { useUserStore } from "../stores/user.store";
import { useMessageStore } from "../stores/message.store";
import { client } from "../libs/socket.io";

onMounted(() => {
  client.connect();
  scroll();
});

const userStore = useUserStore();
const messageStore = useMessageStore();

const scroll = () => {
  const messageBox = document.querySelector(".messages");
  if (messageBox) {
    messageBox.scrollTop = messageBox.scrollHeight;
  }
};

const editor_input = ref<string>();

client.on("connect", () => {
  ElMessage.success("Socket connected.");
});

client.on("message", (message) => {
  messageStore.messageList.push(message);
  nextTick(() => {
    scroll();
  });
});

const sendMessage = () => {
  if (!editor_input.value) {
    ElMessage.error("Please input message.");
    return;
  }
  if (!userStore.user) {
    ElMessage.error("Please create user first.");
    localStorage.removeItem("user");
  } else {
    client.emit("createMessage", {
      userId: userStore.user.id,
      content: editor_input.value,
    });
    editor_input.value = "";
  }
};
</script>
<style scoped>
.chat {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 60vw;
  height: 60vh;
  background: #eeeeee;
  border-radius: 5px;
  margin: 0 auto;
}
.editor {
  display: flex;
  flex-direction: column;
  background: white;
  margin: 5px;
  border-radius: 5px;
}
.editor_input {
  resize: none;
  border: none;
  border-radius: 2px;
  outline: none;
  padding: 10px;
}
.editor_send {
  width: fit-content;
  padding: 3px 6px;
  border-radius: 3px;
  cursor: pointer;
  margin-left: auto;
  user-select: none;
  transition: all 0.3s ease-in-out;
  color: rgb(0, 132, 255);
}
.editor_send:hover {
  text-shadow: rgb(0, 153, 255) 1px 0 10px;
}
</style>
```

```vue [src/CreateUser.vue]
<template>
  <el-dialog
    v-model="props.visable"
    title="Create User: "
    :before-close="handleClose"
  >
    <div style="display: flex; align-items: center; flex-wrap: wrap">
      <span style="margin: 0 5px">UserName: </span>
      <el-input v-model.trim="username" @keyup.enter="createUser" />
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="handleClose">Cancel</el-button>
        <el-button type="primary" @click="createUser"> Confirm </el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script setup lang="ts">
import { ElMessage } from "element-plus";
import { useUserStore } from "../stores/user.store";
import { ref } from "vue";

const props = defineProps({
  visable: {
    type: Boolean,
  },
});

const user = useUserStore();

const emit = defineEmits(["close"]);

const username = ref<string>();

const handleClose = () => {
  emit("close");
};

const createUser = () => {
  fetch(`${import.meta.env.VITE_NEST_PORT}/user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username.value,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.id) {
        ElMessage.success("Create user success.");
        user.saveuser(data);
        emit("close");
      }
    })
    .catch(() => {
      ElMessage.error("Oops, Failed to create user.");
    });
};
</script>
<style scoped>
.dialog-footer {
  display: flex;
  justify-content: flex-end;
}
</style>
```

```vue [src/MessageList.vue]
<template>
  <div class="messages">
    <div
      class="messages_container"
      v-for="message in messageList"
      :key="message.id"
      :style="{
        flexDirection: message.userId === user.user?.id ? 'row-reverse' : 'row',
      }"
    >
      <div
        class="messages_avatar"
        :style="{
          backgroundColor:
            message.userId === user.user?.id ? '#409EFF' : '#f56c6c',
        }"
      >
        {{ message.username?.charAt(0).toUpperCase() }}
      </div>
      <div class="message_content">
        {{ message.content }}
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useUserStore } from "../stores/user.store";
import { IMessage } from "../types/message.interface";

defineProps({
  messageList: {
    type: Array<Partial<IMessage>>,
  },
});

const user = useUserStore();
</script>
<style scoped>
.messages {
  width: 100%;
  height: 100%;
  overflow: auto;
}
.messages::-webkit-scrollbar {
  width: 8px;
}

.messages::-webkit-scrollbar-thumb {
  background: #ccc;
  border-radius: 5px;
}

.messages::-webkit-scrollbar-thumb:hover {
  background: #aeaeae;
}

.messages::-webkit-scrollbar-track {
  border-radius: 10px;
}
.messages_container {
  display: flex;
  align-items: center;
  margin: 15px 10px;
}
.messages_avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: larger;
}
.message_content {
  background-color: white;
  padding: 8px 15px;
  border-radius: 5px;
  margin: 0 10px;
  max-width: 50%;
}
</style>
```

:::

## 启动测试

```bash
pnpm dev
```