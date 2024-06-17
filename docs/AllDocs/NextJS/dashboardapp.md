# NextJS入门案例

## 前提条件

- 知道TypeScript

- 友好的国际联网

- 不低于18的nodejs版本

- 良好的心态

## 启动示例项目

新建示例项目，执行：

```bash
npx create-next-app@latest nextjs-dashboard --example "https://github.com/vercel/next-learn/tree/main/dashboard/starter-example"
```

执行后会拉取官方提供的示例项目，项目内文件夹解释：

- `/app`: 包含项目所有的路由、组件和逻辑，我们的代码主要是写在这里面。

- `/app/lib`: 项目需要的一些可复用的函数或者说是一些工具类。

- `/app/ui`: UI组件，可以是手搓的公共组件也可以是像shadcn/ui生成的。

- `/public`: 静态资源目录。

- `/scripts`: 数据库初始化脚本。

- `next.config.js`: NextJS的配置文件。

安装依赖及启动项目：

```bash
pnpm install;pnpm dev
```

浏览器打开`http://localhost:3000`

## CSS样式

项目使用tailwindcss，对于css糕手而言这是非常方便的东西，示例项目已经在`/app/ui/global.css`和`/tailwind.config.ts`进行了相应的安装配置。

:::tip

TailwindCSS 是一个 CSS 框架，可以在标签里面写类名直接实现样式定制，从而加快开发过程。

TailwindCSS 的每个类都单独应用于那个元素，不再需要去维护单独的样式表，不需要再去关心样式污染以及随着项目迭代导致css文件越来越大。

当你用 `create-next-app` 来创建新项目时，NextJS会询问是否要使用 TailwindCSS。如果选择 yes ，NextJS将自动安装并配置 TailwindCSS。

:::

### 全局样式

但是进入页面后项目样式会非常奇怪，是因为全局样式没有引入，在`/app/layout.tsx`引入全局样式：

::: code-group
```tsx:line-numbers{1} [/app/layout.tsx]
import '@/app/ui/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```
:::


尝试用tailwindcss画一个三角形

::: info

复制下面的代码并将其粘贴到`/app/page.tsx` `<p>`标签的上方

::: code-group

```tsx:line-numbers [/app/page.tsx]
<div
  className="h-0 w-0 border-b-[30px] border-l-[20px] border-r-[20px] border-b-black border-l-transparent border-r-transparent"
/>
```

:::

### CSS模块

如果不喜欢TailwindCSS，也可以写CSS样式作为模块进行导入，CSS模块可以将CSS类限定为组件，降低样式冲突的风险：

在`/app/ui`新建一个`home.module.css`文件：

::: code-group

```css:line-numbers [/app/ui/home.module.css]
.shape {
  height: 0;
  width: 0;
  border-bottom: 30px solid black;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
}
```
:::

导入`/app/page.tsx`并替换原有的TailwindCSS类名：

::: code-group
```tsx:line-numbers{4,9} [/app/page.tsx]
import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css';
 
export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className={styles.shape} />
    // ...
  )
}
```
:::

### 使用 `clsx` 切换类名

假设用户未付款是灰色提示<span class="inline-flex items-center rounded-full px-2 py-1 text-sm bg-gray-100 text-gray-500"></span>，用户已付款是绿色提示<span class="inline-flex items-center rounded-full px-2 py-1 text-sm bg-green-500 text-white"></span>，这时候需要使用clsx来动态切换类名：

::: code-group

```tsx:line-numbers{9,10} [/app/ui/invoices/status.tsx]
import clsx from 'clsx';
 
export default function InvoiceStatus({ status }: { status: string }) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full px-2 py-1 text-sm',
        {
          'bg-gray-100 text-gray-500': status === 'pending',
          'bg-green-500 text-white': status === 'paid',
        },
      )}
    >
    // ...
)}
```
:::

## 优化字体和图像

在异步Web设计中，对于字体，浏览器最初以系统默认字体呈现文本，然后在页面逐步加载完成后将其换成自定义字体时，就会发生布局偏移。这可能会导致文本大小、间距或布局发生变化，从而移动其周围的元素。

想象一下，在一个价值百万的订单场景下，点击取消的时候由于字体样式和布局的调整，导致确定按钮进行了位移，你幸运的点到了确定按钮~

使用 `next/font` 模块时，NextJS会在构建的时候下载字体文件，然后放到静态资源里面，当用户访问页面时，不会有额外的第三方网站字体资源请求。

### 添加自定义 Google 字体

在`/app/ui`下新建一个`fonts.ts`文件：

::: code-group

```ts:line-numbers{1,3} [/app/ui/fonts.ts]
import { Inter } from 'next/font/google';
 
export const inter = Inter({ subsets: ['latin'] });
```

:::

将字体添加到`/app/layout.tsx`的 `<body>`中：

::: code-group

```tsx:line-numbers{2,11} [/app/layout.tsx]
import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
```

:::