# 更新带参路由

[响应路由参数的变化](https://router.vuejs.org/zh/guide/essentials/dynamic-matching.html)

在相同的组件实例内, 路由跳转后生命周期钩子函数不会触发

```js
// router.js
routes: [
    {
      path: "/",
      component: Layout,
      children: [
        {
          path: "",
          component: Home,
        },
        {
          path: "category/:id",
          component: Category,
        },
      ],
    },
  ],
```

这导致像导航切换后, 出现不同组件的内容不会更新这样的问题

## 解决

- 强制重建实例
  添加 key, 破坏复用机制, 强制销毁重建

  ```vue
  <RouterView :key="$route.fullPath" />
  ```

- onBeforeRouteUpdate
  使用 onBeforeRouteUpdate 导航守卫钩子, 在钩子内进行更新
  ```vue
  <script>
  import { onBeforeRouteUpdate } from "vue-router";
  onBeforeRouteUpdate((to) => {
    getCategory(to.params.id);
  });
  </script>
  ```
