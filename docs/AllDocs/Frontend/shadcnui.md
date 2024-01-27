# 使用shadcn-ui进行开发

shadcn-ui是一款设计十分简洁漂亮的组件方案，它并不像elementui、antdesign那样提供一套完整的组件库整合方案。

shadcn-ui仅仅将你需要的组件初始化在项目代码中，你完全可以根据需求去定制每一个组件，组件样式的定制不再那么困难，简洁党的福音来了~

## 安装tailwindcss以及它的依赖

```bash
pnpm install -D tailwindcss postcss autoprefixer
```

## 初始化tailwincsss

```bash
npx tailwindcss init -p
```

## tsconfig.json新增路径解析规则

```json
{
  "compilerOptions": {
    // ...
    "baseUrl": ".",
    "paths": {
      "@/*": [
        "./src/*"
      ]
    }
    // ...
  }
}
```

## vite配置路径别名

安装`@types/node`:

```bash
pnpm i -D @types/node
```

编辑`vite.config.ts`:

```ts
import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
 
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
```

## 初始化shadcn-ui

```bash
npx shadcn-ui@latest init
```

一些引导配置:

```
Would you like to use TypeScript (recommended)? 

yes

Which style would you like to use? › 

Default

Which color would you like to use as base color? › 

Slate

Where is your global CSS file? › › 

src/index.css

Do you want to use CSS variables for colors? › 

yes

Where is your tailwind.config.js located? › 

tailwind.config.js

Configure the import alias for components: › 

@/components

Configure the import alias for utils: › 

@/lib/utils

Are you using React Server Components? › 

no

```

## 添加一个按钮进行测试

```bash
npx shadcn-ui@latest add button
```

```tsx
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div>
      <Button>你好！</Button>
    </div>
  )
}
```

## 一些坑

在执行`npx shadcn-ui@latest add xxx`添加组件的时候要确保能够有较好的网络连接~