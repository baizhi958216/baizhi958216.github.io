# 为Nuxt开发加入TypeScript支持

https://nuxt.com/docs/guide/concepts/typescript

出于性能考虑，在nuxi运行期间不会进行类型检查，也就是说需要额外安装`vue-tsc`, `typescript`。

## 安装相关依赖

```bash
pnpm i vue-tsc typescript
```

## 执行类型检查

```bash
npx nuxi typecheck
```

## 配置生成时类型检查
```js
export default defineNuxtConfig({
  typescript: {
    typeCheck: true,
    // 严格模式
    strict: true
  }
})
```