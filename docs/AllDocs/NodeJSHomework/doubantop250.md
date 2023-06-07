# 爬取豆瓣 TOP250 电影

框架使用 NestJS

## 安装依赖

```bash
pnpm i node-html-parser
```

## 爬取

```ts
import { Controller, Get, Header } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { AppService } from "./app.service";
import { parse } from "node-html-parser";
import { writeFileSync } from "fs";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/pachong")
  @Header("content-type", "application/json")
  @ApiOperation({ summary: "返回豆瓣排行前255" })
  @ApiResponse({
    status: 200,
    description: "返回豆瓣排行前255",
  })
  async PaChong(): Promise<string> {
    const movies = [];
    for (let index = 0; index <= 225; index += 25) {
      await fetch(`https://movie.douban.com/top250?start=${index}&filter=`)
        .then((res) => res.text())
        .then((data) => {
          const root = parse(data);
          const gv = root.querySelectorAll(".item");
          gv.forEach((el) => {
            const 评分评价 = el
              .querySelector(".star")
              .childNodes.filter((e) => e.rawText);
            const 评分 = 评分评价[2].textContent;
            const 评论数 = 评分评价[5].textContent.match(/\d+/g)[0];
            const 影片标题 = el.querySelector(".title").textContent;
            const 影片导演年份等 = el.querySelector("p").textContent;
            const 剧情 = el
              .querySelector("p")
              .textContent.split("/")
              .at(-1)
              .replace("\n", " ")
              .trim();
            const 年份 = 影片导演年份等.match(/\d+/g)[0];
            movies.push({
              影片标题: 影片标题,
              年份: 年份,
              评分: 评分,
              评论数: 评论数,
              剧情: 剧情,
            });
          });
        });
    }
    movies.sort((a, b) => a.评分 - b.评分);
    return JSON.stringify(movies);
  }
}
```

## 输出 CSV 文件

安装依赖

```bash
pnpm i json-2-csv
```

```ts
import { Controller, Get, Header } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { AppService } from "./app.service";
import { parse } from "node-html-parser";
import { json2csv } from "json-2-csv";
import { writeFileSync } from "fs";

@ApiTags("后端首页")
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/pachong")
  @Header("content-type", "application/json")
  @ApiOperation({ summary: "返回豆瓣排行前255" })
  @ApiResponse({
    status: 200,
    description: "返回豆瓣排行前255",
  })
  async PaChong(): Promise<string> {
    const movies = [];
    for (let index = 0; index <= 225; index += 25) {
      await fetch(`https://movie.douban.com/top250?start=${index}&filter=`)
        .then((res) => res.text())
        .then((data) => {
          const root = parse(data);
          const gv = root.querySelectorAll(".item");
          gv.forEach((el) => {
            const 评分评价 = el
              .querySelector(".star")
              .childNodes.filter((e) => e.rawText);
            const 评分 = 评分评价[2].textContent;
            const 评论数 = 评分评价[5].textContent.match(/\d+/g)[0];
            const 影片标题 = el.querySelector(".title").textContent;
            const 影片导演年份等 = el.querySelector("p").textContent;
            const 剧情 = el
              .querySelector("p")
              .textContent.split("/")
              .at(-1)
              .replace("\n", " ")
              .trim();
            const 年份 = 影片导演年份等.match(/\d+/g)[0];
            movies.push({
              影片标题: 影片标题,
              年份: 年份,
              评分: 评分,
              评论数: 评论数,
              剧情: 剧情,
            });
          });
        });
    }
    movies.sort((a, b) => a.评分 - b.评分);
    json2csv(movies).then((csv) => {
      writeFileSync("./data.csv", csv);
    });
    return JSON.stringify(movies);
  }
}
```
