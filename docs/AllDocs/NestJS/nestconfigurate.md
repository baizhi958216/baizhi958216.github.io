# NestJS环境变量使用
应用程序通常在不同的环境中运行, 根据环境的不同使用不同的环境变量:`env`,`development.env`,`production.env`

## 安装依赖

```bash
pnpm i --save @nestjs/config
```

## 使用Config模块
```ts
// app.module.ts
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

@Module({
    imports:{
        ConfigModule.forRoot()
    }
})

export class AppModule {}
```

## 读取环境变量信息

env文件:

```txt
AppID=123456789
```

模块导入ConfigModule

```ts
// pay.module.ts
import { Module } from '@nestjs/common';
import { PayService } from './service/pay.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule],
  providers: [PayService],
  //...
})
export class PayModule {}
```

读取环境变量信息

```ts
// pay.service.ts
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class PayService {
  constructor(private configService: ConfigService) {}

  read():string {
    return this.configService.get<string>('AppID');
  }
}
```

## 全局Config

声明全局使用

```ts
// app.module.ts
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

@Module({
    imports:{
        ConfigModule.forRoot({
            isGlobal: true
        })
    }
})

export class AppModule {}
```

一旦声明了全局使用, 任何模块读取环境变量信息不再需要在模块导入ConfigModule