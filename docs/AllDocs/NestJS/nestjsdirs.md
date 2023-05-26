# NestJS 项目结构

在实现企业级 nestjs 项目时，可以采用以下结构：

```
src/
|-- config/                   # 配置文件夹
|   |-- database.ts           # 数据库配置
|   |-- index.ts              # 统一导出配置
|   |-- logger.ts             # 日志配置
|-- constants/                # 常量文件夹
|   |-- index.ts              # 统一导出常量
|   |-- roles.ts              # 角色常量
|   |-- status.ts             # 状态常量
|-- controllers/              # 控制器文件夹
|   |-- auth.controller.ts    # 认证控制器
|   |-- user.controller.ts    # 用户控制器
|   |-- ...                   # 其他控制器
|-- dto/                      # 数据传输对象文件夹
|   |-- auth.dto.ts           # 认证数据传输对象
|   |-- user.dto.ts           # 用户数据传输对象
|   |-- ...                   # 其他数据传输对象
|-- entities/                 # 实体文件夹
|   |-- user.entity.ts        # 用户实体
|   |-- ...                   # 其他实体
|-- exceptions/               # 异常文件夹
|   |-- http.exception.ts     # HTTP异常
|   |-- ...                   # 其他异常
|-- interfaces/               # 接口文件夹
|   |-- user.interface.ts     # 用户接口
|   |-- ...                   # 其他接口
|-- middleware/               # 中间件文件夹
|   |-- auth.middleware.ts    # 认证中间件
|   |-- ...                   # 其他中间件
|-- modules/                  # 模块文件夹
|   |-- auth/                 # 认证模块文件夹
|   |   |-- auth.module.ts    # 认证模块
|   |   |-- auth.service.ts   # 认证服务
|   |   |-- auth.controller.ts# 认证控制器
|   |   |-- ...               # 其他认证模块相关文件
|   |-- user/                 # 用户模块文件夹
|   |   |-- user.module.ts    # 用户模块
|   |   |-- user.service.ts   # 用户服务
|   |   |-- user.controller.ts# 用户控制器
|   |   |-- ...               # 其他用户模块相关文件
|   |-- ...                   # 其他模块文件夹
|-- providers/                # 提供者文件夹
|   |-- database.provider.ts  # 数据库提供者
|   |-- logger.provider.ts    # 日志提供者
|   |-- ...                   # 其他提供者
|-- services/                 # 服务文件夹
|   |-- auth.service.ts       # 认证服务
|   |-- user.service.ts       # 用户服务
|   |-- ...                   # 其他服务
|-- utils/                    # 工具文件夹
|   |-- index.ts              # 统一导出工具
|   |-- auth.util.ts          # 认证工具
|   |-- ...                   # 其他工具
|-- app.module.ts             # 根模块
|-- main.ts                   # 应用入口文件
```

上述结构将代码分为不同的模块，使得代码更加清晰、模块化，易于维护和扩展。下面是一些常用模块的详细解释：

- `config`：存放应用程序的配置文件，如数据库配置、日志配置等。
- `constants`：存放常量，如状态码、错误码、角色等。
- `controllers`：存放控制器，处理用户请求并返回响应。
- `dto`：存放数据传输对象（DTO），用于传递数据。
- `entities`：存放实体，表示数据库中的表。
- `exceptions`：存放异常类。
- `interfaces`：存放接口，用于定义对象的属性和方法。
- `middleware`：存放中间件，用于在请求处理前后执行一些逻辑。
- `modules`：将应用程序分解成可重用、可扩展的模块。
- `providers`：存放提供者，用于实现依赖注入。
- `services`：存放服务，处理业务逻辑。

此外，`utils` 文件夹用于存放一些通用的工具函数，例如常用的函数、日期处理函数等。`app.module.ts` 是应用程序的根模块，负责引导应用程序。`main.ts` 是应用程序的入口文件，用于启动应用程序。
