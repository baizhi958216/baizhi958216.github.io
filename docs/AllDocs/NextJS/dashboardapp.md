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

使用 `next/image` 模块可以避免图片在加载前后导致的页面布局变动，可以响应式调整图片大小，默认情况下是懒加载(视口出现才加载)，通过WebP和AVIF加载图片。

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

再添加其它字体：

::: code-group

```ts:line-numbers{1,5,6,7,8} [/app/ui/fonts.ts]
import { Inter, Lusitana } from 'next/font/google';
 
export const inter = Inter({ subsets: ['latin'] });

export const lusitana = Lusitana({
    weight: ['400','700'],
    subsets: ['latin']
});
```

:::

应用字体到`/app/page.tsx`的 `<p>`标签，取消掉`<AcmeLogo />`的注释：

::: code-group

```tsx:line-numbers{5,11,16,17,18} [/app/page.tsx]
import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css';
import { lusitana } from '@/app/ui/fonts';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        <AcmeLogo />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <div className={styles.shape} />
          <p
            className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}
          >
            <strong>Welcome to Acme.</strong> This is the example for the{' '}
            <a href="https://nextjs.org/learn/" className="text-blue-500">
              Next.js Learn Course
            </a>
            , brought to you by Vercel.
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
        </div>
      </div>
    </main>
  );
}
```

:::

### 添加图片

NextJS可以直接引用在顶级 `/public` 文件夹下静态资产：

```html
<img
  src="/hero.png"
  alt="Screenshots of the dashboard project showing desktop version"
/>
```

但是需要额外去考虑以下问题：

- 确保您的图像在不同的屏幕尺寸上具有响应性。

- 为不同设备指定图像大小。

- 防止在图像加载时出现布局偏移。

- 懒加载用户视口之外的图像。

NextJS提供了`<Image/>`组件来解决以上问题，同时默认会将图片编码成WebP。

如果需要使用`avif`格式，在 `/next.config.js` 配置图片编码：

::: code-group

```js:line-numbers{2-6} [/next.config.js]
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif'],
  },
};

module.exports = nextConfig;
```

:::

:::tip
AVIF 跟 WebP 相比会多用 20% 的时间来编码，但文件小了20%。第一次请求图片可能会较慢，然后缓存的后续请求会更快。

如果NextJS自行部署在代理/CDN，必须将代理转发 Accept 标头。
:::

在`/app/page.tsx`导入`next/image`然后添加桌面端和移动端首页图片：

::: code-group

```tsx:line-numbers{6,35-48} [/app/page.tsx]
import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        <AcmeLogo />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <div className={styles.shape} />
          <p
            className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}
          >
            <strong>Welcome to Acme.</strong> This is the example for the{' '}
            <a href="https://nextjs.org/learn/" className="text-blue-500">
              Next.js Learn Course
            </a>
            , brought to you by Vercel.
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
          <Image
            src="/hero-desktop.png"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
          />
          <Image
            src="/hero-mobile.png"
            width={560}
            height={620}
            className="block md:hidden"
            alt="Screenshots of the dashboard project showing mobile version"
          />
        </div>
      </div>
    </main>
  );
}
```
:::