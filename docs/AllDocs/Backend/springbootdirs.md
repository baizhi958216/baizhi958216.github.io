# SpringBoot 项目子文件夹简介

这些子文件夹(包)在 Spring Boot 项目中通常用于组织和管理不同的功能和组件

## `config`

包含应用程序的配置类，例如数据库、安全性、缓存等等。这些配置类可通过 `@Configuration` 注释进行标识。

```java
@Configuration
public class DatabaseConfig {
    @Bean
    public DataSource dataSource() {
        // 配置数据源
        return new DataSource();
    }
}
```

## `constant`

包含常量定义，例如错误代码、HTTP 状态码、应用程序配置等。这些常量通常由静态常量或枚举类定义。

```java
public final class ErrorCode {
    public static final int INTERNAL_SERVER_ERROR = 500;
    public static final int BAD_REQUEST = 400;
    // ...
}
```

## `controller`

包含控制器类，处理来自客户端的 HTTP 请求，并将响应发送回客户端。这些控制器类通常由 `@Controller` 或 `@RestController` 注释进行标识。

```java
@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping("/{id}")
    public UserDTO getUserById(@PathVariable Long id) {
        User user = userService.getUserById(id);
        return UserDTO.from(user);
    }
}
```

## `dto`

包含数据传输对象（Data Transfer Object）类，用于在控制器和服务层之间传递数据。这些类通常用于请求和响应的数据传输和转换。

```java
public class UserDTO {
    private Long id;
    private String username;
    private String email;
    // ...
    public static UserDTO from(User user) {
        UserDTO dto = new UserDTO();
        dto.setId(user.getId());
        dto.setUsername(user.getUsername());
        dto.setEmail(user.getEmail());
        // ...
        return dto;
    }
    // ...
}
```

## `entity`

包含实体类，表示应用程序中的数据模型，并与数据库表进行映射。这些实体类通常用于持久化数据，并使用 ORM 框架进行映射，例如 Hibernate 或 MyBatis。

```java
@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String username;
    private String email;
    // ...
    // Getter and setter methods
}
```

## `enum`

包含枚举类，用于定义应用程序中的常量或状态。这些枚举类通常用于状态机或常量定义。

```java
public enum UserRole {
    ADMIN,
    USER,
    GUEST
}
```

## `exception`

包含异常类，用于处理应用程序中的异常情况。这些异常类通常用于自定义异常类型和异常处理。

```java
public class UserNotFoundException extends RuntimeException {
    public UserNotFoundException(Long id) {
        super("User with id " + id + " not found");
    }
}
```

## `interceptor`

包含拦截器类，用于拦截和处理请求和响应。这些拦截器类通常用于权限验证、日志记录、性能监控等方面。

```java
public class AuthorizationInterceptor implements HandlerInterceptor {
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) {
        // 鉴权逻辑
        return true;
    }
}
```

## `mapper`

包含 Mapper 类，用于将实体类与数据访问层（例如数据库表）进行映射。这些 Mapper 类通常用于使用 MyBatis 或其他 ORM 框架进行数据访问。

```java
@Mapper
public interface UserMapper {
    UserDTO toDTO(User user);
    User toEntity(UserDTO dto);
}
```

## `model`

包含模型类，通常用于与视图层进行交互，例如表单数据。这些模型类通常用于前端视图的数据绑定和展示。

```java
public class LoginForm {
    private String username;
    private String password;
    // ...
    // Getter and setter methods
}
```

## `repository`

包含数据访问对象（Data Access Object）类，用于与数据库进行交互。这些 DAO 类通常使用 Spring Data JPA 或其他 ORM 框架进行数据访问。

```java
@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);
}
```

## `service`

包含服务层类，实现应用程序的业务逻辑。这些服务类通常使用 `@Service` 注释进行标识，用于封装和实现业务逻辑。

```java
@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;
    @Override
    public User getUserById(Long id) {
        return userRepository.findById(id)
            .orElseThrow(() -> new UserNotFoundException(id));
    }
    // ...
}
```

## `task`

包含定时任务类，用于在后台执行定期或延迟的任务。这些定时任务类通常使用 Spring 的 `@Scheduled` 注释进行标识。

```java
@Component
public class DataCleanupTask {
    @Scheduled(fixedRate = 60000)
    public void cleanup() {
        // 数据清理逻辑
    }
}
```

## `util`

包含实用工具类，例如日期时间处理、字符串处理、加密算法等。这些工具类通常用于实现公共或通用的功能。

```java
public class DateUtils {
    public static Date addDays(Date date, int days) {
        // ...
    }
}
```
