# ElementPlus 组件按需导入

## 安装两个插件包

```bash
pnpm i unplugin-vue-components unplugin-auto-import -D
```

## 修改 vite.config.js

```js
//vite.config.js
import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// ElementPlus按需导入
import AutoImport from "unplugin-auto-import/vite"; //[!code focus]
import Components from "unplugin-vue-components/vite"; //[!code focus]
import { ElementPlusResolver } from "unplugin-vue-components/resolvers"; //[!code focus]

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({//[!code focus]
      resolvers: [ElementPlusResolver()],//[!code focus]
    }),//[!code focus]
    Components({//[!code focus]
      resolvers: [ElementPlusResolver()],//[!code focus]
    }),//[!code focus]
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
```
