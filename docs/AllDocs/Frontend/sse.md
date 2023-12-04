# 通过SSE实现消息推送

想要实现的功能: 前端展示服务端推送的数据

SpringBoot的后端实现: [sse](/AllDocs/SpringBoot/sse.html)

```vue
<template>
  <div class="container">
    <ul class="messageslist">
      <li v-for="message in messages">{{ message }}</li>
    </ul>
    <div class="counterwarp">
      🔔
      <div class="counter">
        {{ messageCount }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
const messages = ref<string[]>([]);
const messageCount = ref<number>(0);
onMounted(() => {
  setupSSE();
});
const setupSSE = () => {
  // 连接 SSE 服务器
  const eventSource = new EventSource("http://localhost:8080/sse");
  // 监听服务器发送的事件
  eventSource.addEventListener("elysia", function (message) {
    messages.value.push(message.data);
    messageCount.value++;
  });

  eventSource.onerror = function (error) {
    // 处理连接错误
    console.error("Error occurred:", error);
  };

  // 在页面关闭或不需要连接时，记得关闭EventSource
  window.onbeforeunload = function () {
    eventSource.close();
  };
};
</script>
<style>
.container {
  display: flex;
  justify-content: center;
  align-items: center
}

.messageslist {
  height: 600px;
  overflow-y: auto
}

.counterwarp {
  font-size: 200px;
  position: relative
}

.counter {
  position: absolute;
  right: 60px;
  top: 60px;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: red;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  color: white;
}
</style>
```