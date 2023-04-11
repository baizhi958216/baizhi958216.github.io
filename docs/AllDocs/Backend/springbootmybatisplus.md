# SpringBoot 配置 MyBatis-Plus 并连接 MySQL

## 1. 新建 user 表用于示例

```sql
USE shop;

CREATE TABLE user (
    id BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    create_time DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    update_time DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
```

## 2. 引入依赖

在 pom.xml 文件中添加 MyBatis-Plus 和 MySQL 驱动的依赖：

```xml
<dependency>
    <groupId>com.baomidou</groupId>
    <artifactId>mybatis-plus-boot-starter</artifactId>
    <version>3.4.3.1</version>
</dependency>
<dependency>
    <groupId>mysql</groupId>
    <artifactId>mysql-connector-java</artifactId>
    <version>8.0.26</version>
</dependency>
```

## 3. 配置数据源

在 application.properties 文件中添加 MySQL 数据库的连接信息：

```properties
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.datasource.url=jdbc:mysql://localhost:3306/shop?useUnicode=true&characterEncoding=utf8&serverTimezone=Asia/Shanghai
spring.datasource.username=root
spring.datasource.password=123456
```

其中

`spring.datasource.driver-class-name` 是 JDBC 驱动类的名称，

`spring.datasource.url` 是数据库的连接字符串，

`spring.datasource.username` 和 `spring.datasource.password` 是数据库的登录信息。

## 4. 配置 MyBatis-Plus

`config`包下创建 MyBatis-Plus 的配置类，并添加 `@Configuration` 和 `@MapperScan` 注解：

```java
@Configuration
@MapperScan("com.example.shop.mapper")
public class MybatisPlusConfig {
}
```

其中，`@MapperScan` 注解指定了 MyBatis-Plus Mapper 接口所在的包名。

## 5. 创建实体类

在 `com.example.shop.entity` 包下创建实体类：

```java
@Data
public class User {
    private Long id;
    private String username;
    private String password;
    private String email;
    private LocalDateTime createTime;
    private LocalDateTime updateTime;
}
```

注意要在类上添加 `@TableName` 注解，指定实体类对应的表名：

```java
@Data
@TableName("user")
public class User {
    // ...
}
```

:::tip
@Data 注解需要 lombok

在 pom.xml 导入依赖

```xml
<dependency>
	<groupId>org.projectlombok</groupId>
	<artifactId>lombok</artifactId>
	<version>1.18.26</version>
</dependency>
```

:::

## 6. 创建 Mapper 接口

在 `com.example.shop.mapper` 包下创建 Mapper 接口：

```java
public interface UserMapper extends BaseMapper<User> {
}
```

`UserMapper` 接口继承了 `BaseMapper` 接口，该接口提供了一些基础的 CRUD 操作。

## 7. 测试

编写一个测试类，测试 MyBatis-Plus 是否能够正常工作：

```java
@SpringBootTest
class MybatisPlusDemoApplicationTests {

    @Autowired
    private UserMapper userMapper;

    @Test
    void testInsert() {
        User user = new User();
        user.setUsername("admin");
        user.setPassword("123456");
        user.setEmail("admin@example.com");
        user.setCreateTime(LocalDateTime.now());
        user.setUpdateTime(LocalDateTime.now());
        userMapper.insert(user);
        System.out.println(user);
    }

    @Test
    void testSelectById() {
        User user = userMapper.selectById(1L);
        System.out.println(user);
    }

    @Test
    void testSelectList() {
        List<User> userList = userMapper.selectList(null);
        System.out.println(userList);
    }

}
```

运行测试类，测试插入、查询和列表查询是否正常工作。
