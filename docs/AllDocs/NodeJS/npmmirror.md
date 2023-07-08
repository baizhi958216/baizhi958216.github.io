# NPM 镜像站

有时候 npm 拉依赖很慢很慢，需要配置国内镜像才可以快速安装项目依赖。

:::tip 国内镜像站同步

配置国内镜像站后拉取依赖出现版本不存在的错误提示，这是由于镜像站没有同步主站的更新。

需要切换镜像站或者切换回 npm 主站仓库。

:::

## 获取当前 registry

命令:

```bash
npm config get registry
```

## 切换 registry 地址

命令:

```bash
npm config set registry 镜像仓库地址
```

:::tip 默认 npm 主站仓库

```bash
npm config set registry https://registry.npmjs.org
```

:::

## 国内镜像站

中国科技大学镜像站: https://npmreg.proxy.ustclug.org/

南京大学镜像站: https://repo.nju.edu.cn/repository/npm/

浙江大学镜像站: https://mirrors.zju.edu.cn/npm/

上海交通大学镜像站: https://mirrors.sjtug.sjtu.edu.cn/npm-registry/

华为云镜像站: https://repo.huaweicloud.com/repository/npm/

腾讯云镜像站: http://mirrors.cloud.tencent.com/npm/

阿里云镜像站: https://registry.npmmirror.com/
