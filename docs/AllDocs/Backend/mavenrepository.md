# 配置国内 Maven 镜像源

在 pom.xml 文件中配置 Maven 的镜像源，以加快 Maven 项目构建和依赖项下载速度。

## 修改`pom.xml`

```xml
<project>
  ...
  <repositories>
    <repository>
      <id>aliyun</id>
      <url>https://maven.aliyun.com/repository/public</url>
      <releases>
        <enabled>true</enabled>
      </releases>
      <snapshots>
        <enabled>false</enabled>
      </snapshots>
    </repository>
  </repositories>
  <pluginRepositories>
    <pluginRepository>
      <id>aliyun</id>
      <url>https://maven.aliyun.com/repository/public</url>
      <releases>
        <enabled>true</enabled>
      </releases>
      <snapshots>
        <enabled>false</enabled>
      </snapshots>
    </pluginRepository>
  </pluginRepositories>
  ...
</project>
```

## 说明

将`<repositories>`和`<pluginRepositories>`元素添加到`pom.xml`文件中，并将阿里云的 Maven 镜像源配置为`<repository>`和`<pluginRepository>`元素的子元素。

在配置镜像源时，需要指定该镜像源的`id`、`url`、`releases`和`snapshots`属性。

`releases`和`snapshots`属性用于指定 Maven 是否应该从镜像源下载发布版或快照版的依赖项。

注意，如果在构建 Maven 项目时遇到了下载依赖项速度慢的问题，可以尝试配置其他的 Maven 镜像源。

常见的国内镜像源包括阿里云、华为云、清华大学、中科大等。

- 阿里云：https://maven.aliyun.com/repository/public
- 华为云：https://repo.huaweicloud.com/repository/maven/
- 清华大学：https://mirrors.tuna.tsinghua.edu.cn/maven/repository/maven-public/
- 中科大：https://mirrors.ustc.edu.cn/maven/maven-3/
