# ElementUI

基于VueCLI创建的Vue2项目，使用ElementUI组件库。

## 安装

```bash
pnpm i element-ui
```

## 引入ElementUI

:::details 完整引入

::: code-group

```js [main.js]
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(ElementUI)

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
```

```vue [App.vue]
<template>
  <div>
    <el-button type="primary">主要按钮</el-button>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>
```

:::

:::details 按需引入

安装插件：

```bash
pnpm i core-js @vue/cli-plugin-babel babel-plugin-component
```

项目根目录新建`.babelrc`：

:::code-group

```json [.babelrc]
{
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
```

```vue [App.vue]
<template>
  <div>
    <el-button type="primary">主要按钮</el-button>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>
```

:::