# 酒店住宿

## 预览

![JiuDian](./imgs/jiudian.png)

## 后端返回参数

```json
{
  "jd_recom": { "jd_id": 1234567, "imgsrc": "..." },
  "jd_local": [
    {
      "jd_id": 123,
      "imgsrc": "abcdefg.jpg",
      "title": "酒店标题",
      "rate": 1,
      "expense": "89"
    },
    {
      "jd_id": 234,
      "imgsrc": "bcdefgh.jpg",
      "title": "酒店标题",
      "rate": 1,
      "expense": "89"
    },
    {
      "jd_id": 345,
      "imgsrc": "cdefgh.jpg",
      "title": "酒店标题",
      "rate": 1,
      "expense": "89"
    }
  ]
}
```

## 本地推荐酒店

说明: 顶部图片展示, 点击跳转详情页

类型: `对象`

使用示例:

```ts
this.jd_recom = {
  jd_id: 1234567,
  imgsrc: `...`,
};
```

参数说明:

| 参数   |  类型  | 额外说明 |
| ------ | :----: | -------: |
| jd_id  | number |  酒店 ID |
| jd_src | string | 酒店封面 |

## 本地所有酒店

说明: 所有酒店, 点击跳转详情页

类型: `数组`

使用示例:

```ts
this.jd_local = [
  {
    jd_id: 123,
    imgsrc: "abcdefg.jpg",
    title: "酒店标题",
    rate: 1,
    expense: "89",
  },
  {
    jd_id: 234,
    imgsrc: "bcdefgh.jpg",
    title: "酒店标题",
    rate: 5,
    expense: "299",
  },
  {
    jd_id: 345,
    imgsrc: "cdefghi.jpg",
    title: "酒店标题",
    rate: 5,
    expense: "599",
  },
];
```

参数说明:

| 参数    |  类型  |     额外说明 |
| ------- | :----: | -----------: |
| jd_id   | number |      酒店 ID |
| imgsrc  | string |     酒店封面 |
| title   | string |     酒店标题 |
| rate    | number |     酒店评分 |
| expense | string | 酒店收费标准 |
