---
sidebar_position: 1
---

# Docusaurus入门

## 1、初始化项目
```bash
yarn create docusaurus
```  
### 1.1、配置项目信息
```bash
# 这是你的网站名称
√ What should we name this site? ... 
# 网站使用的模板，默认推荐classic
√ Select a template below... 
# 是否使用TypeScript
√ This template is available in TypeScript. Do you want to use the TS variant? ... 
```

### 1.2、配置成功
```bash
  `yarn start`
    Starts the development server.

  `yarn build`
    Bundles your website into static files for production.

  `yarn serve`
    Serves the built website locally.

  `yarn deploy`
    Publishes the website to GitHub pages.

We recommend that you begin by typing:

  `cd 网站名称`
  `yarn start`

```  

## 2、运行项目
```bash
# 首先进入项目目录
cd 项目名称
# 然后运行项目
yarn start
# 编译版本
yarn build
``` 

## 3、发布到github page
### 3.1、在```docusaurus.config.js```进行配置
```javascript
url: 'https://baizhi958216.github.io',//顶级域名
//如果网站使用顶级域名访问这里不需要配置，这里是的意思是https://baizhi958216.github.io/baizhi958216
baseUrl: '/baizhi958216/',
organizationName: 'baizhi958216', // github用户名
projectName: 'baizhi958216', // 仓库名称
```

### 3.2、发布
```bash
yarn deploy
```

### 3.3、配置页面
GitHub Pages下面Source选择分支为gh-pages，然后保存即可