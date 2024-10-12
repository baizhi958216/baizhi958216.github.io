# 发起桌面通知

:::tip IOS注意

要在苹果设备请求 [Notification API](https://developer.mozilla.org/zh-CN/docs/Web/API/Notification) 的权限，必须告知用户首先将网页添加到主屏幕。用户才可以在系统的通知设置中 [管理这个web应用程序的通知权限](https://support.apple.com/zh-cn/108781) 。

:::

## Notification API

MDN文档: https://developer.mozilla.org/zh-CN/docs/Web/API/Notification

eg: 

<div v-if="hasapi">
<div style="margin:0 0 10px 0">
通知内容：<input class="inputstyle" v-model="inputVal"/>
</div>
<div>
<button class="buttonstyle" @click="getPermission">申请 Notification 权限</button> 
<div>当前权限：{{ notificationPermission }}</div>
<button class="buttonstyle" v-show="notificationPermission=='granted'" @click="sendNotification">发送通知</button> 
</div>
</div>
<div v-else>浏览器不支持 Notification API</div>



## 移动端(安卓)

在安卓中无法使用`new Notification`发起通知，需要额外调用Service Worker。

:::tip 

Service Worker必须要在https环境下才能注册

Vite可以使用mkcert启动https服务器: 

1. npm 安装 `vite-plugin-mkcert`

```bash
npm i vite-plugin-mkcert
```

2. 配置mkcert插件

```ts
import { defineConfig } from 'vite'
import mkcert from 'vite-plugin-mkcert'

export default defineConfig({
  plugins: [
    mkcert()
  ],
})
```



:::danger 如果使用Chrome浏览器(安卓)进行调试则无法使用自签名证书。
:::

eg: 

<div v-if="hasapi">
<div style="margin:0 0 10px 0">
通知内容：<input class="inputstyle" v-model="inputVal2"/>
</div>
<div>
<button class="buttonstyle" @click="getPermission">申请 Notification 权限</button> 
<div>当前权限：{{ notificationPermission }}</div>

<div>浏览器是否支持Service Worker: {{ Boolean(supportServiceWorker)?'支持':'不支持' }}</div> 

<button v-show="Boolean(supportServiceWorker)"  class="buttonstyle" @click="activeWorker">激活 Service worker</button> 
<div v-show="Boolean(supportServiceWorker)" >Service Worker状态: {{ workerStatus }}</div>
<button class="buttonstyle" v-show="notificationPermission=='granted'&&workerStatus=='Service worker已激活'" @click="sendNotification2">发送通知</button> 
</div>
</div>
<div v-else>浏览器不支持 Notification API</div>

<script setup>
import { ref, onMounted } from 'vue'
const inputVal = ref('Message')
const inputVal2 = ref('Message')

const hasapi = ()=>"Notification" in window

const getPermission=()=> {
    Notification.requestPermission().then(permission=>{
        notificationPermission.value=permission
    })
}

const sendNotification=()=>{
    new Notification("阿纸",{
        body: inputVal.value,
        image: 'https://baizhi958216.github.io/baizhi958216.png',
        icon: 'https://baizhi958216.github.io/baizhi958216.png',
        lang: 'zh-cn',
        requireInteraction: true
    })
}

const activeWorker = async ()=>{
    navigator.serviceWorker.register("/sw.js",{
      scope: "./"
    }).then(registration=>{
      workerStatus.value = "Service worker已激活"
    }).catch(err=>{
      workerStatus.value = err
    });
}

const sendNotification2= async ()=>{
  navigator.serviceWorker.ready.then(function(registration) {
    registration.showNotification("阿纸",{
      body: inputVal2.value,
      image: 'https://baizhi958216.github.io/baizhi958216.png',
      icon: 'https://baizhi958216.github.io/baizhi958216.png',
      lang: 'zh-cn',
      requireInteraction: true
    });
  });
}

const notificationPermission = ref('none')
const supportServiceWorker = ()=>"serviceWorker" in navigator
const workerStatus = ref('none')

onMounted(()=>{
    notificationPermission.value = Notification.permission
})
</script>

<style>
.flex{
    display:flex;
}
.items-center{
    align-items:center;
}
.inputstyle{
    border: 1px solid rgba(253, 121, 168,1.0);
    padding: 2px 8px;
    border-radius: 5px;
}
.buttonstyle{
    background: rgba(253, 121, 168,1.0);
    color:#fff;
    width: fit-content;
    padding: 5px 16px;
    border-radius: 10px;
    cursor: pointer;
    user-select:none
}
</style>