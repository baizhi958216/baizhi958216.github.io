# SpringBoot 添加 RESTful 服务

## 添加 spring-web 依赖

确保项目中已经添加了 spring-web 依赖项。在项目的 pom.xml 文件中添加以下依赖项：

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
</dependency>
```

## 添加一个 RESTful Web 服务的控制器

1. 导入`RestController`包:

```java
import org.springframework.web.bind.annotation.RestController;
```

2. 导入`GetMapping`包

```java
import org.springframework.web.bind.annotation.GetMapping;
```

3. 创建一个带有@RestController 注释的类，并在该类中添加适当的请求处理方法。

例如，创建一个 HelloWorldController 控制器类，该类包含一个简单的 hello()方法，该方法返回一个“Hello World！”消息：

```java
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloWorldController {

    @GetMapping("/hello")
    public String hello() {
        return "Hello World!";
    }
}
```

使用`@GetMapping`注解将 `hello()`方法映射到`/hello` 路径，并将其用作处理 HTTP `GET` 请求的方法。

当客户端请求该路径时，该方法将返回一个字符串“Hello World！”作为响应。
