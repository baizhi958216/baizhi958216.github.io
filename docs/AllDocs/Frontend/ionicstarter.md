# 浅尝跨平台开发框架Ionic

[官网](https://ionicframework.com/)

## 安装

:::tip 设置`sharp`国内的镜像源

npm版本在8以及以下可以使用npm cli直接设置

```bash
npm config set sharp_binary_host "https://npmmirror.com/mirrors/sharp"
npm config set sharp_libvips_binary_host "https://npmmirror.com/mirrors/sharp-libvips"
```

npm版本大于8需要手动添加config

```bash
npm config edit
```

追加以下内容：

```txt
; sharp_binary_host=https://npmmirror.com/mirrors/sharp
; sharp_libvips_binary_host=https://npmmirror.com/mirrors/sharp-libvips
```

:::

安装ionic cli：

```bash
npm install -g @ionic/cli @capacitor/assets
```

## 新建模板项目

```bash
ionic start myApp tabs --type vue
```

:::details 记录

```cmd
PS C:\Users\14752\dev> ionic start tab1 tabs --type vue
√ Preparing directory .\tab1 in 1.43ms
√ Downloading and extracting tabs starter in 12.15s
> ionic integrations enable capacitor --quiet -- tab1 io.ionic.starter
> npm.cmd i --save -E @capacitor/core@latest

added 637 packages in 33s
> npm.cmd i -D -E @capacitor/cli@latest

added 61 packages in 2s
> npm.cmd i --save -E @capacitor/haptics @capacitor/app @capacitor/keyboard @capacitor/status-bar

added 4 packages in 1s
> capacitor.cmd init tab1 io.ionic.starter --web-dir dist
√ Creating capacitor.config.ts in C:\Users\14752\dev\tab1 in 2.84ms
[success] capacitor.config.ts created!

Next steps:
https://capacitorjs.com/docs/getting-started#where-to-go-next
[OK] Integration capacitor added!

Installing dependencies may take several minutes.

  ──────────────────────────────────────────────────────────────────────────────

         Ionic Advisory, tailored solutions and expert services by Ionic

                             Go to market faster
                    Real-time troubleshooting and guidance
        Custom training, best practices, code and architecture reviews
      Customized strategies for every phase of the development lifecycle

               Learn more: https://ion.link/advisory

  ──────────────────────────────────────────────────────────────────────────────


> npm.cmd i

up to date in 1s
> git.exe init
Initialized empty Git repository in C:/Users/14752/dev/tab1/.git/

Join the Ionic Community! 💙

Connect with millions of developers on the Ionic Forum and get access to live events, news updates, and more.

? Create free Ionic account? No
> git.exe add -A
warning: in the working copy of '.browserslistrc', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of '.eslintrc.js', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of '.gitignore', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of '.vscode/extensions.json', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'capacitor.config.ts', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'cypress.config.ts', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'index.html', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'ionic.config.json', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'package-lock.json', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'package.json', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'src/App.vue', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'src/components/ExploreContainer.vue', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'src/main.ts', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'src/router/index.ts', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'src/theme/variables.css', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'src/views/Tab1Page.vue', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'src/views/Tab2Page.vue', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'src/views/Tab3Page.vue', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'src/views/TabsPage.vue', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'src/vite-env.d.ts', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'tests/e2e/fixtures/example.json', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'tests/e2e/specs/test.cy.ts', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'tests/e2e/support/commands.ts', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'tests/e2e/support/e2e.ts', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'tests/unit/example.spec.ts', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'tsconfig.json', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'tsconfig.node.json', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'vite.config.ts', LF will be replaced by CRLF the next time Git touches it
> git.exe commit -m "Initial commit" --no-gpg-sign
[main (root-commit) d5f08d2] Initial commit
 29 files changed, 9233 insertions(+)
 create mode 100644 .browserslistrc
 create mode 100644 .eslintrc.js
 create mode 100644 .gitignore
 create mode 100644 .vscode/extensions.json
 create mode 100644 capacitor.config.ts
 create mode 100644 cypress.config.ts
 create mode 100644 index.html
 create mode 100644 ionic.config.json
 create mode 100644 package-lock.json
 create mode 100644 package.json
 create mode 100644 public/favicon.png
 create mode 100644 src/App.vue
 create mode 100644 src/components/ExploreContainer.vue
 create mode 100644 src/main.ts
 create mode 100644 src/router/index.ts
 create mode 100644 src/theme/variables.css
 create mode 100644 src/views/Tab1Page.vue
 create mode 100644 src/views/Tab2Page.vue
 create mode 100644 src/views/Tab3Page.vue
 create mode 100644 src/views/TabsPage.vue
 create mode 100644 src/vite-env.d.ts
 create mode 100644 tests/e2e/fixtures/example.json
 create mode 100644 tests/e2e/specs/test.cy.ts
 create mode 100644 tests/e2e/support/commands.ts
 create mode 100644 tests/e2e/support/e2e.ts
 create mode 100644 tests/unit/example.spec.ts
 create mode 100644 tsconfig.json
 create mode 100644 tsconfig.node.json
 create mode 100644 vite.config.ts

Your Ionic app is ready! Follow these next steps:

- Go to your new project: cd .\tab1
- Run ionic serve within the app directory to see your app in the browser
- Run ionic capacitor add to add a native iOS or Android project using Capacitor
- Generate your app icon and splash screens using cordova-res --skip-config --copy
- Explore the Ionic docs for components, tutorials, and more: https://ion.link/docs
- Building an enterprise app? Ionic has Enterprise Support and Features: https://ion.link/enterprise-edition
PS C:\Users\14752\dev>
```

:::

## 添加安卓平台配置

```bash
ionic capacitor add
```

:::details 记录

```cmd
PS C:\Users\14752\dev\tab1> ionic capacitor add
? What platform would you like to add? android
> npm.cmd i -E @capacitor/android@5.1.0

added 1 package in 13s
> capacitor.cmd add android
[capacitor] √ Adding native android project in android in 79.13ms
[capacitor] √ add in 79.87ms
[capacitor] [warn] sync could not run--missing dist directory.
[capacitor] [success] android platform added!
[capacitor] Follow the Developer Workflow guide to get building:
[capacitor] https://capacitorjs.com/docs/basics/workflow
PS C:\Users\14752\dev\tab1>
```

:::

编译静态资源：

```bash
pnpm build
```

:::details 记录

```cmd
PS C:\Users\14752\dev\tab1> p build

> tab1@0.0.1 build C:\Users\14752\dev\tab1
> vue-tsc && vite build

vite v4.3.9 building for production...
✓ 198 modules transformed.
dist/assets/status-tap-legacy-063c6e15.js              0.59 kB │ gzip:  0.40 kB
dist/assets/Tab2Page-legacy-f68334e7.js                0.72 kB │ gzip:  0.36 kB
dist/assets/Tab1Page-legacy-6f08236c.js                0.72 kB │ gzip:  0.36 kB
dist/assets/Tab3Page-legacy-1e7643ac.js                0.72 kB │ gzip:  0.36 kB
dist/assets/hardware-back-button-legacy-7391e573.js    0.89 kB │ gzip:  0.54 kB
dist/assets/ExploreContainer-legacy-c1262ef6.js        1.04 kB │ gzip:  0.64 kB
dist/assets/focus-visible-legacy-b3e947fe.js           1.08 kB │ gzip:  0.55 kB
dist/assets/md.transition-legacy-9855044f.js           1.16 kB │ gzip:  0.63 kB
dist/assets/keyboard2-legacy-3e17d739.js               1.39 kB │ gzip:  0.71 kB
dist/assets/index9-legacy-50b36975.js                  1.95 kB │ gzip:  0.95 kB
dist/assets/input-shims-legacy-b008dda3.js             4.33 kB │ gzip:  1.98 kB
dist/assets/swipe-back-legacy-5abe3c66.js              6.60 kB │ gzip:  2.67 kB
dist/assets/animation-legacy-c2d1076e.js               8.35 kB │ gzip:  3.25 kB
dist/assets/ios.transition-legacy-6066cb33.js          9.60 kB │ gzip:  2.65 kB
dist/assets/polyfills-legacy-c9380ee4.js              40.64 kB │ gzip: 16.32 kB
dist/assets/index-legacy-e50aacad.js                 272.93 kB │ gzip: 78.38 kB
dist/index.html                                 2.25 kB │ gzip:  1.00 kB
dist/assets/ExploreContainer-6df160a9.css       0.32 kB │ gzip:  0.20 kB
dist/assets/index-d82ef91d.css                 27.13 kB │ gzip:  5.11 kB
dist/assets/status-tap-1a4a31c5.js              0.48 kB │ gzip:  0.34 kB
dist/assets/ExploreContainer-520a7bf7.js        0.57 kB │ gzip:  0.41 kB
dist/assets/Tab3Page-0c1bb7ea.js                0.62 kB │ gzip:  0.31 kB
dist/assets/Tab2Page-85457f51.js                0.62 kB │ gzip:  0.31 kB
dist/assets/Tab1Page-20bdf2bf.js                0.62 kB │ gzip:  0.31 kB
dist/assets/hardware-back-button-77fd2980.js    0.80 kB │ gzip:  0.51 kB
dist/assets/focus-visible-9c13edeb.js           0.99 kB │ gzip:  0.51 kB
dist/assets/md.transition-78ae7ed6.js           1.07 kB │ gzip:  0.58 kB
dist/assets/keyboard2-c2075d12.js               1.28 kB │ gzip:  0.65 kB
dist/assets/index9-bcb0f5fb.js                  1.85 kB │ gzip:  0.91 kB
dist/assets/input-shims-4e6dd738.js             4.35 kB │ gzip:  1.99 kB
dist/assets/swipe-back-c39db370.js              6.68 kB │ gzip:  2.70 kB
dist/assets/animation-90c518f9.js               8.41 kB │ gzip:  3.38 kB
dist/assets/ios.transition-1f3df81a.js          9.50 kB │ gzip:  2.70 kB
dist/assets/index-de321e29.js                 253.28 kB │ gzip: 77.66 kB
✓ built in 14.06s
PS C:\Users\14752\dev\tab1>
```

:::

## 编译启动APK

通过Android Studio启动项目拉取Gradle依赖

```bash
npx cap open android
```

运行项目

```bash
npx cap run android
```

:::details 记录

```cmd
PS C:\Users\14752\dev\tab1> npx cap run android
√ Copying web assets from dist to android\app\src\main\assets\public in 47.13ms
√ Creating capacitor.config.json in android\app\src\main\assets in 1.38ms
[info] Inlining sourcemaps
√ copy android in 72.03ms
√ Updating Android plugins in 3.39ms
[info] Found 4 Capacitor plugins for android:
       @capacitor/app@5.0.5
       @capacitor/haptics@5.0.5
       @capacitor/keyboard@5.0.5
       @capacitor/status-bar@5.0.5
√ update android in 58.23ms
√ Please choose a target device: » Pixel 3a XL API 33 (emulator) (Pixel_3a_XL_API_33)
√ Running Gradle build in 14.83s
√ Deploying app-debug.apk to Pixel_3a_XL_API_33 in 6.78s
PS C:\Users\14752\dev\tab1>
```

:::