<script setup>
import { ElButton } from 'element-plus'
import 'element-plus/es/components/button/style/css'

const uploadFile = async () => {
  const fileInput = document.querySelector("#file");
  const loaded = document.querySelector("#loaded");
  const progress = document.querySelector("#progress");
  const file = fileInput.files[0];
  const chunkSize = 1024 * 1024;

  let start = 0;
  document.querySelector("#total").innerHTML = file.size

  while (start < file.size) {
    const end = Math.min(start + chunkSize, file.size);
    const chunk = file.slice(start, end);
    const formData = new FormData();
    formData.append("file", chunk)
    formData.append('totalCount', file.size)
    formData.append('currentCount', end)
    formData.append('fileName', file.name)

    try {
      const response = await fetch("http://localhost:3000/chunkupload", {
        method: "POST",
        body: formData,
      });

      const { percent, currentCount } = await response.json()

      progress.innerHTML = percent
      loaded.innerHTML = end

      if (!response.ok) {
        throw new Error("文件上传失败。");
      }

      start = end;
    } catch (error) {
      console.error(error.message);
      break; // 停止上传并处理错误
    }
  }
  if(file.size===start){
    console.log("文件上传完成！");
  }
};
</script>

# 大文件分片上传

在网络环境不稳定或上传过程中出现错误的情况下，大文件上传失败需要重新上传一整份大文件，而文件分片则可以在上传失败时只重新上传受影响的部分。

通过前端将大文件拆分成小块，然后逐个上传到后端服务器，再由后端服务器将这些小块组合成完整的文件。

## 文件分片上传

:::tip 测试:

总大小: <span id="total">0</span>

已上传: <span id="loaded">0</span>

进度: <span id="progress">0</span>%

<input type="file" id="file" />
<el-button type="primary" @click="uploadFile">开始上传</el-button>

:::

前端代码:

:::details 使用 XHR

```vue
<template>
  总大小: <span id="total">0</span>

  已上传: <span id="loaded">0</span>

  进度: <span id="progress">0</span>%
  <input type="file" id="file" />
  <el-button type="primary" @click="uploadFile">开始上传</el-button>
</template>

<script setup>
import { ElButton } from "element-plus";
import "element-plus/es/components/button/style/css";

const uploadFile = async () => {
  const fileInput = document.querySelector("#file");
  const file = fileInput.files[0];
  const chunkSize = 1024 * 1024;
  let start = 0;

  const uploadChunk = async () => {
    const end = Math.min(start + chunkSize, file.size);
    const chunk = file.slice(start, end);
    const formData = new FormData();
    formData.append("file", chunk);

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:3000/chunkupload", true);

    const uploadPromise = new Promise((resolve, reject) => {
      xhr.onload = function () {
        resolve();
      };

      xhr.onerror = function () {
        reject(new Error("文件上传过程中发生错误。"));
      };
    });

    xhr.send(formData);

    // 等待上传完成再进行下一个块的上传
    await uploadPromise;

    start = end;

    // 继续上传下一个块
    if (start < file.size) {
      await uploadChunk();
    } else {
      console.log("文件上传完成！");
    }
  };

  try {
    await uploadChunk();
  } catch (error) {
    console.error(error.message);
  }
};
</script>
```

:::

```vue
<template>
  总大小: <span id="total">0</span>

  已上传: <span id="loaded">0</span>

  进度: <span id="progress">0</span>%
  <input type="file" id="file" />
  <el-button type="primary" @click="uploadFile">开始上传</el-button>
</template>

<script setup>
import { ElButton } from 'element-plus'
import 'element-plus/es/components/button/style/css'

const uploadFile = async () => {
  const fileInput = document.querySelector("#file");
  const loaded = document.querySelector("#loaded");
  const progress = document.querySelector("#progress");
  const file = fileInput.files[0];
  const chunkSize = 1024 * 1024;

  let start = 0;
  document.querySelector("#total").innerHTML = file.size

  while (start < file.size) {
    const end = Math.min(start + chunkSize, file.size);
    const chunk = file.slice(start, end);
    const formData = new FormData();
    formData.append("file", chunk)
    formData.append('totalCount', file.size)
    formData.append('currentCount', end)
    formData.append('fileName', file.name)

    try {
      const response = await fetch("http://localhost:3000/chunkupload", {
        method: "POST",
        body: formData,
      });

      const { percent, currentCount } = await response.json()

      progress.innerHTML = percent
      loaded.innerHTML = end

      if (!response.ok) {
        throw new Error("文件上传失败。");
      }

      start = end;
    } catch (error) {
      console.error(error.message);
      break; // 停止上传并处理错误
    }
  }
  if(file.size===start){
    console.log("文件上传完成！");
  }
};
</script>
```

后端代码:

:::code-group

```js [index.js]

import { createServer } from "http";
import { ChunkUpload } from "./chunkUpload.js";

const server = createServer((req, res) => {
  const { method, url } = req;
  if (method === "OPTIONS") {
    res.writeHead(200, {
      "Content-Type": "text/plain",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": 'GET, POST, PUT, DELETE, OPTIONS'
    });

    res.end();
  }
  if (url === "/" && method === "GET") {
    res.writeHead(200, {
      "content-type": "application/json",
      // 处理浏览器跨域
      "Access-Control-Allow-Origin": "*",
    });

    res.end(
      JSON.stringify({
        message: "GET AJAX",
      })
    );
  } else if (url === "/chunkupload" && method === "POST") {
    ChunkUpload(req, res);
  }
});

server.listen(3000, "localhost", () => {
  console.log("服务已启动: http://localhost:3000");
});

```

```js [chunkUpload.js]
import { createWriteStream,createReadStream, existsSync, mkdirSync } from "fs";
import formidable from "formidable";

const ChunkUpload = (req, res) => {
  const form = formidable();

  if (!existsSync('./uploads')) {
    mkdirSync('./uploads');
  }

  form.parse(req, (err, fields, files) => {
    if (err) {
      sendResponse(res, 500, { message: "上传失败" });
      return;
    }

    const { totalCount, currentCount, fileName } = fields;
    const filePath = `./uploads/${fileName[0]}`;
    const writeStream = createWriteStream(filePath, { flags: "a" });

    const readStream = createReadStream(files.file[0].filepath);
    readStream.pipe(writeStream);

    readStream.on('error', (err) => {
      sendResponse(res, 500, { message: "上传失败" });
    });

    readStream.on('end', () => {
      if (+currentCount[0] === +totalCount[0]) {
        sendResponse(res, 200, { message: "文件上传完成", percent: 100 });
      } else {
        sendResponse(res, 200, {
          message: "已成功接收分片",
          percent: Math.floor((+currentCount[0] / +totalCount[0]) * 100),
          currentCount: currentCount[0],
        });
      }
    });
  });
};

const sendResponse = (res, statusCode, data) => {
  res.writeHead(statusCode, {
    "content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
  });
  res.end(JSON.stringify(data));
};

export { ChunkUpload };
```

```json [package.json]
{
  "name": "study_backend",
  "version": "1.0.0",
  "description": "",
  "type": "module",
  "main": "index.js",
  "scripts": {
    "d": "nodemon index.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "formidable": "^3.5.0",
    "nodemon": "^3.0.1"
  }
}
```

:::
