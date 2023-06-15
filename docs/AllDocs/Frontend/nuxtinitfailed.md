# nuxt 初始化项目失败

## 背景

使用`pnpm dlx nuxi init`初始化项目报模板拉取失败

```bash
Error: Failed to download template from registry: fetch failed
```

## 分析

定位到 nuxi init:

```bash
Command failed with exit code 1: nuxi init
```

去看看 nuxi 是在哪里拉取的模板，这个是[nuxi cli](https://github.com/nuxt/nuxt/tree/main/packages/nuxi)

进到[init 命令位置](https://github.com/nuxt/nuxt/blob/main/packages/nuxi/src/commands/init.ts)

`nuxi init`定义了默认的模板仓库

```ts
// ...
const DEFAULT_REGISTRY =
  "https://raw.githubusercontent.com/nuxt/starter/templates/templates";
// ...
```

由于 DNS 污染，没有代理的情况下一般访问不了`raw.githubusercontent.com`，所以导致项目初始化失败。

## 解决办法

1. 配置`process.env.NUXI_INIT_REGISTRY`, 可以自己搭建 gitea 或者别的代码管理仓库

   :::tip

   在下载模板的时候会读取`process.env.NUXI_INIT_REGISTRY`用来读取自定 义模板仓库

   ```ts
   // ...
   await downloadTemplate(template, {
     dir: args._[0] as string,
     force: args.force,
     offline: args.offline,
     preferOffline: args["prefer-offline"],
     registry: process.env.NUXI_INIT_REGISTRY || DEFAULT_REGISTRY,
   });
   // ...
   ```

   :::

2. 修改 host

   位于`C:\Windows\System32\drivers\etc`目录下的 host 文件, 追加

   ```txt
   185.199.111.133 raw.githubusercontent.com
   ```
