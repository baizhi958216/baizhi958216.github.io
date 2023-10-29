# 通过WebSocket搭建一个简易的即时聊天平台

使用MySQL + Prisma + NestJS + socket.io

仓库: [websocket-nest-vue/nest-websocket](https://github.com/baizhi958216/websocket-nest-vue/tree/main/nest-websocket)

[前端](/AllDocs/Vue3Notes/websocket)

## MySQL环境配置

:::tip MySQL我跑在Docker上，使用本地MySQL可跳过本节
:::

- 1. 拉取MySQL镜像

```bash
docker pull mysql:latest
```

- 2. 运行容器
```bash
docker run -itd --name mysql-ws -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 mysql
```

- 3. 进入容器
```bash
docker exec -it mysql bash
```

- 4. 登录MySQL
```bash
mysql -uroot -p123456
```

- 5. 新建数据库
```sql
create database websocket;
```

## 数据库设计

:::tip 仅作展示，后续通过Prisma生成
:::

<img src="./websocket/db.png" width=260/>

## 初始化 NestJS 项目

先要安装nest cli
```bash
npm i -g @nestjs/cli
```

新建nest项目, 包管理器我个人偏向使用pnpm
```bash
nest new nest-websocket
```

:::details nest new nest-websocket
```bash
PS C:\Users\DELL\ws> nest new nest-websocket
⚡  We will scaffold your app in a few seconds..

? Which package manager would you ❤️  to use? pnpm
CREATE nest-websocket/.eslintrc.js (663 bytes)
CREATE nest-websocket/.prettierrc (51 bytes)
CREATE nest-websocket/nest-cli.json (171 bytes)
CREATE nest-websocket/package.json (1959 bytes)
CREATE nest-websocket/README.md (3347 bytes)
CREATE nest-websocket/tsconfig.build.json (97 bytes)
CREATE nest-websocket/tsconfig.json (546 bytes)
CREATE nest-websocket/src/app.controller.spec.ts (617 bytes)
CREATE nest-websocket/src/app.controller.ts (274 bytes)
CREATE nest-websocket/src/app.module.ts (249 bytes)
CREATE nest-websocket/src/app.service.ts (142 bytes)
CREATE nest-websocket/src/main.ts (208 bytes)
CREATE nest-websocket/test/app.e2e-spec.ts (630 bytes)
CREATE nest-websocket/test/jest-e2e.json (183 bytes)

✔ Installation in progress... ☕

🚀  Successfully created project nest-websocket
👉  Get started with the following commands:

$ cd nest-websocket
$ pnpm run start


                          Thanks for installing Nest 🙏
                 Please consider donating to our open collective
                        to help us maintain this package.


               🍷  Donate: https://opencollective.com/nest

PS C:\Users\DELL\ws>
```

:::

## 利用Prisma生成数据库表

- 初始化Prisma

```bash
npx prisma init
```

:::details npx prisma init

```bash
PS C:\Users\DELL\ws\nest-websocket> npx prisma init
Need to install the following packages:
prisma@5.4.2
Ok to proceed? (y) y

✔ Your Prisma schema was created at prisma/schema.prisma
  You can now open it in your favorite editor.

warn You already have a .gitignore file. Don't forget to add `.env` in it to not commit any private information.

Next steps:
1. Set the DATABASE_URL in the .env file to point to your existing database. If your database has no tables yet, read https://pris.ly/d/getting-started
2. Set the provider of the datasource block in schema.prisma to match your database: postgresql, mysql, sqlite, sqlserver, mongodb or cockroachdb.
3. Run npx prisma db pull to turn your database schema into a Prisma schema.
4. Run npx prisma generate to generate the Prisma Client. You can then start querying your database.

More information in our documentation:
https://pris.ly/d/getting-started

PS C:\Users\DELL\ws\nest-websocket>
```

:::

此时项目目录会生成`prisma/schema.prisma`, `.env`文件。

- 在`.env`配置数据库连接地址

```txt
# Environment variables declared in this file are automatically made available to Prisma.
# See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema

# Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB.
# See the documentation for all the connection string options: https://pris.ly/d/connection-strings

DATABASE_URL="mysql://root:123456@localhost:3306/websocket"
```

- 在`prisma/schema.prisma`编写数据库表结构
```prisma
// This is your Prisma schema file,
// learn more about it in the docs: https://pris.ly/d/prisma-schema

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}

model user {
  id       String @id() @default(uuid())
  username String
}

model message {
  id       String   @id() @default(uuid())
  content  String
  userId   String
  createAt DateTime @default(now())
}
```

- 向MySQL推送数据库变更

```bash
npx prisma db push
```

:::tip 注意
该操作会为项目生成Prisma Client，后续不需要手动执行`npx prisma generate`
:::

:::details npx prisma db push

```bash
PS C:\Users\DELL\ws\nest-websocket> npx prisma db push
Environment variables loaded from .env
Prisma schema loaded from prisma\schema.prisma
Datasource "db": MySQL database "websocket" at "localhost:3306"

Your database is now in sync with your Prisma schema. Done in 99ms

Running generate... (Use --skip-generate to skip the generators)
Packages: +2
++
Progress: resolved 648, reused 647, downloaded 0, added 2, done

devDependencies:
+ prisma 5.4.2

Done in 4.1s
Packages: +2
++
Progress: resolved 650, reused 649, downloaded 0, added 2, done

dependencies:
+ @prisma/client 5.4.2

Done in 3.1s

✔ Generated Prisma Client (v5.4.2) to .\node_modules\.pnpm\@prisma+client@5.4.2_prisma@5.4.2\node_modules\@prisma\client
 in 47ms

PS C:\Users\DELL\ws\nest-websocket>
```

:::

新建prismaclient单例
:::code-group

```ts [lib/db.ts]
import { PrismaClient } from '@prisma/client';

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  globalThis.prisma = db;
}
```

:::

## 新建用户注册接口

```bash
nest g res user --no-spec
```

:::details nest g res user --no-spec

```bash
PS C:\Users\DELL\ws\nest-websocket> nest g res user --no-spec
? What transport layer do you use? REST API
? Would you like to generate CRUD entry points? No
CREATE src/user/user.controller.ts (204 bytes)
CREATE src/user/user.module.ts (240 bytes)
CREATE src/user/user.service.ts (88 bytes)
UPDATE package.json (2046 bytes)
UPDATE src/app.module.ts (308 bytes)
✔ Packages installed successfully.
PS C:\Users\DELL\ws\nest-websocket>
```

:::

:::code-group

```ts [dto/create-user.dto.ts]
export class CreateUserDto {
  username: string;
}
```

```ts [user.controller.ts]
import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }
}
```

```ts [user.service.ts]
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { db } from 'lib/db';

@Injectable()
export class UserService {
  async create(createUserDto: CreateUserDto) {
    const user = await db.user.create({
      data: createUserDto,
    });
    return user;
  }
}
```

:::

## 新建消息websocket接口

```bash
nest g res message --no-spec
```

:::details nest g res message --no-spec

```bash
PS C:\Users\DELL\ws\nest-websocket> nest g res message --no-spec
? What transport layer do you use? WebSockets
? Would you like to generate CRUD entry points? No
CREATE src/message/message.gateway.ts (226 bytes)
CREATE src/message/message.module.ts (235 bytes)
CREATE src/message/message.service.ts (91 bytes)
UPDATE src/app.module.ts (381 bytes)
PS C:\Users\DELL\ws\nest-websocket>
```

:::

:::tip

在这里，`createMessage`接口订阅前端的发布，收到消息后向数据库存入数据，成功后向前端`message`广播消息，前端注意订阅`message`。

:::

:::code-group

```ts{11,17,22} [message.gateway.ts]
import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  WebSocketServer,
} from '@nestjs/websockets';
import { MessagesService } from './messages.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { Server } from 'socket.io';

@WebSocketGateway(3001, { cors: true })
export class MessagesGateway {
  constructor(private readonly messagesService: MessagesService) {}

  @WebSocketServer() server: Server;

  @SubscribeMessage('createMessage')
  async create(@MessageBody() createMessageDto: CreateMessageDto) {
    const message = await this.messagesService.create(createMessageDto);
    if (message) {
      this.server.emit('message', message);
    }
  }
}
```

```ts [message.service.ts]
import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { db } from 'lib/db';

@Injectable()
export class MessagesService {
  async create(createMessageDto: CreateMessageDto) {
    const message = await db.message.create({
      data: createMessageDto,
    });
    const username = await db.user.findUnique({
      where: {
        id: message.userId,
      },
      select: {
        username: true,
      },
    });
    return username ? Object.assign(message, username) : null;
  }
}
```

```ts [dto/create-message.dto.ts]
export class CreateMessageDto {
  content: string;
  userId: string;
}
```

:::

## 启动服务

:::warning 注意

websocket与http使用不同的端口，注意区分，以及确保在入口文件和消息的gateway均开启跨域

main.ts:
```ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();// [!code focus]
  await app.listen(3000);
}
bootstrap();
```

messages\messages.gateway.ts:
```ts
import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  WebSocketServer,
} from '@nestjs/websockets';
import { MessagesService } from './messages.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { Server } from 'socket.io';

@WebSocketGateway(3001, { cors: true }) //[!code focus]
export class MessagesGateway {
  constructor(private readonly messagesService: MessagesService) {}

  @WebSocketServer() server: Server;

  @SubscribeMessage('createMessage')
  async create(@MessageBody() createMessageDto: CreateMessageDto) {
    const message = await this.messagesService.create(createMessageDto);
    if (message) {
      this.server.emit('message', message);
    }
  }
}
```

:::

```bash
pnpm start:dev
```

:::details pnpm start:dev

```bash
[13:22:30] Starting compilation in watch mode...

[13:22:35] Found 0 errors. Watching for file changes.

[Nest] 19984  - 2023/10/20 13:22:41     LOG [NestFactory] Starting Nest application...
[Nest] 19984  - 2023/10/20 13:22:41     LOG [InstanceLoader] AppModule dependencies initialized +271ms
[Nest] 19984  - 2023/10/20 13:22:41     LOG [InstanceLoader] MessagesModule dependencies initialized +0ms
[Nest] 19984  - 2023/10/20 13:22:41     LOG [InstanceLoader] UserModule dependencies initialized +0ms
[Nest] 19984  - 2023/10/20 13:22:41     LOG [WebSocketsController] MessagesGateway subscribed to the "createMessage" message +100ms
[Nest] 19984  - 2023/10/20 13:22:41     LOG [RoutesResolver] UserController {/user}: +1ms
[Nest] 19984  - 2023/10/20 13:22:41     LOG [RouterExplorer] Mapped {/user, POST} route +1ms
[Nest] 19984  - 2023/10/20 13:22:41     LOG [NestApplication] Nest application successfully started +2ms
```

:::