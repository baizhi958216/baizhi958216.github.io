# 前端 DNS 解析优化

前端从页面加载到渲染的时间很快，用户更能明显感知的是由于网络延时从而导致的页面元素的显示延迟。

造成这种情况的原因有一个是不同资源分配在不同的域名下，浏览器解析到该元素的时候再去请求资源就会出现延迟，而前端不可能在页面加载之前把所有资源都塞到页面内，这回造成巨大的性能浪费，因此，在网页加载之前，可以先将域名解析。

## 解决方法

一个没有优化的例子:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script src="https://www.abcd.com/js/d.js"></script>
    <style>
      .ba {
        background-image: url("https://www.abcc.com/image/s.jpg");
      }
    </style>
  </head>
  <body>
    <div>
      <img src="https://www.abc.com/public/ab.png" />
      <img src="https://www.abc.com/public/ab.png" />
    </div>
    <p>abaccacacacavavsadsadsacxasdsadsacsad</p>
    <p>abaccacacacavavsadsadsacxasdsadsacsad</p>
    <p>abaccacacacavavsadsadsacxasdsadsacsad</p>
    <p>abaccacacacavavsadsadsacxasdsadsacsad</p>
    <div class="ba"></div>
    <p>abaccacacacavavsadsadsacxasdsadsacsad</p>
    <p>abaccacacacavavsadsadsacxasdsadsacsad</p>
    <p>abaccacacacavavsadsadsacxasdsadsacsad</p>
    <script src="https://www.abcd.com/js/a.js"></script>
    <p>abaccacacacavavsadsadsacxasdsadsacsad</p>
    <p>abaccacacacavavsadsadsacxasdsadsacsad</p>
    <p>abaccacacacavavsadsadsacxasdsadsacsad</p>
    <p>abaccacacacavavsadsadsacxasdsadsacsad</p>
    <p>abaccacacacavavsadsadsacxasdsadsacsad</p>
    <script src="https://www.abcd.com/js/c.js"></script>
  </body>
</html>
```

我们需要做的是把域名提前一份到`dns-prefetch`上:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="dns-prefetch" href="https://www.abcd.com">
    <link rel="dns-prefetch" href="https://www.abc.com">
    <link rel="dns-prefetch" href="https://www.abcc.com">
    <script src="https://www.abcd.com/js/d.js"></script>
    <style>
      .ba {
        background-image: url("https://www.abcc.com/image/s.jpg");
      }
    </style>
  </head>
  <body>
    <div>
      <img src="https://www.abc.com/public/ab.png" />
      <img src="https://www.abc.com/public/ab.png" />
    </div>
    <p>abaccacacacavavsadsadsacxasdsadsacsad</p>
    <p>abaccacacacavavsadsadsacxasdsadsacsad</p>
    <p>abaccacacacavavsadsadsacxasdsadsacsad</p>
    <p>abaccacacacavavsadsadsacxasdsadsacsad</p>
    <div class="ba"></div>
    <p>abaccacacacavavsadsadsacxasdsadsacsad</p>
    <p>abaccacacacavavsadsadsacxasdsadsacsad</p>
    <p>abaccacacacavavsadsadsacxasdsadsacsad</p>
    <script src="https://www.abcd.com/js/a.js"></script>
    <p>abaccacacacavavsadsadsacxasdsadsacsad</p>
    <p>abaccacacacavavsadsadsacxasdsadsacsad</p>
    <p>abaccacacacavavsadsadsacxasdsadsacsad</p>
    <p>abaccacacacavavsadsadsacxasdsadsacsad</p>
    <p>abaccacacacavavsadsadsacxasdsadsacsad</p>
    <script src="https://www.abcd.com/js/c.js"></script>
  </body>
</html>
```

`dns-prefetch`这种方式会增加DNS的查询次数，虽然可以加快页面解析速度，但是对DNS服务器压力会增加。