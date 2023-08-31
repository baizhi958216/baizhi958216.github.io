<script setup>
import { ElButton } from 'element-plus'
import 'element-plus/es/components/button/style/css'

const testProgress=()=>{
  const xhr = new XMLHttpRequest();
  document.querySelector('#progress').innerHTML=0
  const file = document.querySelector("#file").files;
  const formData = new FormData();
  formData.append("file", file[0]);
  xhr.open("POST", "http://localhost:3000/upload", true);
  xhr.upload.onprogress = (progress)=> { 
    document.querySelector('#total').innerHTML=progress.total
    if (progress.lengthComputable) {
      const percent = Math.floor(progress.loaded / progress.total * 100);
      document.querySelector('#loaded').innerHTML=progress.loaded
      document.querySelector('#progress').innerHTML=percent
    }
  };
  xhr.send(formData);
}

const testProgress1=()=>{
  const xhr = new XMLHttpRequest();
  document.querySelector('#progress1').innerHTML=0
  const file = document.querySelector("#file1").files;
  const formData = new FormData();
  formData.append("file", file[0]);
  xhr.open("POST", "http://localhost:3000/upload", true);
  xhr.upload.onprogress = (progress)=> { 
    document.querySelector('#total1').innerHTML=progress.total
    if (progress.lengthComputable) {
      const percent = Math.floor(progress.loaded / progress.total * 100);
      document.querySelector('#loaded1').innerHTML=progress.loaded
      document.querySelector('#progress1').innerHTML=percent
    }
  };
  xhr.send(formData);
}
</script>

# 监听 AJAX 请求进度

[AJAX](/AllDocs/Frontend/AJAX.md)已经对 AJAX 有了初步的了解。

通过监听 XHR(XMLHttpRequest)的 progress 事件，可以获取请求的`已发送数据量`和`总数据量`。

## progress 事件

:::tip 测试:

总大小: <span id="total">0</span>

已上传: <span id="loaded">0</span>

进度: <span id="progress">0</span>%

<input type="file" id="file" />
<el-button type="primary" id="upload" @click="testProgress">开始上传</el-button>

:::

代码:

```vue
<template>
总大小: <span id="total">0</span>

已上传: <span id="loaded">0</span>

进度: <span id="progress">0</span>%

<input type="file" id="file" />
<el-button type="primary" id="upload" @click="testProgress">开始上传</el-button>
</template>

<script setup>
import { ElButton } from 'element-plus'
import 'element-plus/es/components/button/style/css'

const xhr = new XMLHttpRequest();

const testProgress=()=>{
  document.querySelector('#progress').innerHTML=0
  const file = document.querySelector("#file").files;
  const formData = new FormData();
  formData.append("file", file[0]);
  xhr.open("POST", "http://localhost:3000/upload", true);
  xhr.upload.onprogress = (progress)=> { 
    document.querySelector('#total').innerHTML=progress.total
    if (progress.lengthComputable) {
      const percent = Math.floor(progress.loaded / progress.total * 100);
      document.querySelector('#loaded').innerHTML=progress.loaded
      document.querySelector('#progress').innerHTML=percent
    }
  };
  xhr.send(formData);
}
</script>
```

## abort中止请求

调用XHR实例的abort方法可以中止当前实例的请求，然后readyState会重置为0(UNSENT)。

:::tip 测试:

总大小: <span id="total1">0</span>

已上传: <span id="loaded1">0</span>

进度: <span id="progress1">0</span>%

<input type="file" id="file1" />
<el-button type="primary" id="upload1" @click="testProgress1">开始上传</el-button>
<el-button type="primary" @click="xhr.abort()">停止上传</el-button>
:::

代码:

```vue
<template>
总大小: <span id="total">0</span>

已上传: <span id="loaded">0</span>

进度: <span id="progress">0</span>%

<input type="file" id="file" />
<el-button type="primary" id="upload" @click="testProgress">开始上传</el-button>
<el-button type="primary" @click="xhr.abort()">停止上传</el-button>
</template>

<script setup>
import { ElButton } from 'element-plus'
import 'element-plus/es/components/button/style/css'

const xhr = new XMLHttpRequest();

const testProgress=()=>{
  document.querySelector('#progress').innerHTML=0
  const file = document.querySelector("#file").files;
  const formData = new FormData();
  formData.append("file", file[0]);
  xhr.open("POST", "http://localhost:3000/upload", true);
  xhr.upload.onprogress = (progress)=> { 
    document.querySelector('#total').innerHTML=progress.total
    if (progress.lengthComputable) {
      const percent = Math.floor(progress.loaded / progress.total * 100);
      document.querySelector('#loaded').innerHTML=progress.loaded
      document.querySelector('#progress').innerHTML=percent
    }
  };
  xhr.send(formData);
}
</script>
```