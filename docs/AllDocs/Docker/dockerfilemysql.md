# 编写 Dockerfile，创建一个 MySQL 数据库

## 编写 docker 脚本

编写如下的 docker 脚本，来创建一个 MySQL 数据库并设置对应的数据库连接信息：

```dockerfile
# 使用MySQL 最新镜像作为基础镜像
FROM mysql:latest

# 设置MySQL的root账号密码为123456
ENV MYSQL_ROOT_PASSWORD=123456

# 创建名为shop的数据库
ENV MYSQL_DATABASE=shop

# 设置MySQL的时区为Asia/Shanghai
ENV TZ=Asia/Shanghai

# 将本地的my.cnf配置文件复制到容器内的/etc/mysql/目录下
COPY my.cnf /etc/mysql/my.cnf

# 将本地的init.sql脚本文件复制到容器内的/docker-entrypoint-initdb.d/目录下
# MySQL容器在启动时会自动执行该目录下的脚本文件
COPY init.sql /docker-entrypoint-initdb.d/

# 修改init.sql文件的权限为可执行
RUN chmod +x /docker-entrypoint-initdb.d/init.sql

# 暴露MySQL的默认端口3306
EXPOSE 3306
```

其中

- `my.cnf` 文件是 MySQL 的配置文件，可以设置一些 MySQL 的参数；

- `init.sql` 文件是 MySQL 的初始化脚本，可以在创建数据库后执行一些 SQL 语句，如创建表、插入数据等。

## 添加`my.cnf`配置信息

新建 `my.cnf` 文件, 添加以下配置信息：

```
[mysqld]
character-set-server=utf8mb4
collation-server=utf8mb4_unicode_ci
default-time-zone='+8:00'
```

这些配置信息可以设置 MySQL 的字符集、排序规则、时区等参数。

## 添加初始脚本

新建 `init.sql` 文件, 添加以下内容：

```sql
USE shop;

-- 创建一个名为user的表
CREATE TABLE `user` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 向user表中插入一条数据
INSERT INTO `user` (`username`, `password`) VALUES ('admin', '123456');
```

这些 SQL 语句可以在创建数据库后自动执行，创建一个名为 user 的表并向该表中插入一条数据。

## 构建镜像并启动容器

编写完 docker 脚本后，可以使用以下命令构建镜像并启动容器：

```bash
# 构建镜像
docker build -t mysql-shop .

# 启动容器
docker run -d -p 3306:3306 --name mysql-shop mysql-shop
```

其中

`-t` 选项指定了镜像的名称和标签

`.`表示 Dockerfile 文件在当前目录下

`-d` 选项表示在后台运行容器

`-p` 选项将容器的 3306 端口映射到宿主机的 3306 端口上

`--name` 选项指定了容器的名称。
