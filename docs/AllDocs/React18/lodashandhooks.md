# React函数钩子的用法

记录一下今天在用lodash做防抖的时候出现的问题，

其实也算是React知识的查漏补缺了，主要是对useCallback和useMemo的回顾，以及Github REST api的一些使用。

因为github的api对接口进行限流，所以在输入文字的时候查询的同时要做防抖。

一开始是这样写的：
```ts
const getRepo = useCallback(
  debounce((val) => {
    SetRepo([]);
    new Octokit()
      .request("GET /search/repositories", {
        q: val,
        per_page: 50,
        headers: {
          "X-GitHub-Api-Version": "2022-11-28",
        },
      })
      .then((res) => {
        SetRepo(res.data.items as Repo[]);
      });
  }, 1000),
  []
);
useEffect(() => getRepo(inputval), [getRepo, inputval]);
```

ESLint就报警告了:
:::warning
React Hook useCallback received a function whose dependencies are unknown. Pass an inline function instead.eslint(react-hooks/exhaustive-deps)
:::

意思就是说useCallback希望你在里面写内联函数，你把debounce写给它是不够的，ESLint就无法确定他们的依赖关系。

那就写成内联吧，这样？

```ts
const getRepo = useCallback(
  (inputval:string) =>
    debounce((inputval) => {
      SetRepo([]);
      new Octokit()
        .request("GET /search/repositories", {
          q: inputval,
          per_page: 50,
          headers: {
            "X-GitHub-Api-Version": "2022-11-28",
          },
        })
        .then((res) => {
          SetRepo(res.data.items as Repo[]);
        });
    }, 1000)(inputval),
  []
);
useEffect(() => getRepo(inputval), [getRepo, inputval]);
```

但是这样就不对了呀，inputval的改变导致getRepo重新生成，getRepo每次都是一个新的函数，防抖做了个寂寞。

useCallback内联就不能放参数了，如果把debounce看作一个值，只有在依赖项发生变化时才需要重新计算，那是不是还有个useMemo是不是可以用？

那再改一下：

```ts
const getRepo = useMemo(
  () =>
    debounce((val) => {
      SetRepo([]);
      new Octokit()
        .request("GET /search/repositories", {
          q: val,
          per_page: 50,
          headers: {
            "X-GitHub-Api-Version": "2022-11-28",
          },
        })
        .then((res) => {
          SetRepo(res.data.items as Repo[]);
        });
    }, 1000),
  []
);
useEffect(() => getRepo(inputval), [getRepo, inputval]);
```

问题解决，再去github上面搜一下发现也有人遇到这个问题：https://github.com/facebook/react/issues/19240

这就是useMemo好用的地方了。