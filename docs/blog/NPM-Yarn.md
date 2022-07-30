# NodeJs 配置 NPM 和 Yarn(Windows)

请注意, npm `-g`已不再适用, 请使用`--global`

```bash
npm WARN config global `--global`, `--local`are deprecated. Use`--location=global` instead.
```

## 安装 NodeJs

下载地址: https://nodejs.org/en/download/

## 配置目录

![FO9tS.png](https://s1.328888.xyz/2022/07/30/FO9tS.png)

### 配置全局模块路径

```bash
npm config set prefix "C:\Users\14752\.node\node_global" --location=global
```

### 配置缓存路径

```bash
npm config set cache "C:\Users\14752\.node\node_cache" --location=global
```

### 配置 npm 环境变量

![FOInC.png](https://s1.328888.xyz/2022/07/30/FOInC.png)

## 配置 npm 国内镜像源

```bash
npm config set registry=https://registry.npmmirror.com --location=global
```

## Yarn

### 安装 yarn

```bash
npm install yarn --location=global
```

### 配置 yarn 国内镜像源

```bash
yarn config set registry https://registry.npmmirror.com --location=global
```
