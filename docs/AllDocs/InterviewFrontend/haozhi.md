# 广州好智前端

1.  在 css 中，下面（ ）不是 css 选择器
    A、文本选择器  
    B、ID 选择器  
    C、类选择器  
    D、标签选择器

2.  什么是线程？什么是进程？线程和进程有什么区别？

3.  求值 sin260°+cos260°= ?

4.  声明一个对象，给它加上 name 属性和 show 方法显示其 name 值，以下代码中正确的是（ ）

    A、`var obj = {name:"zhangsan",show:function(){alert(name);}};`

    B、`var obj = {name:"zhangsan",show:function(){alert(this.name);}};`

    C、`var obj = {name:"zhangsan",show:”alert(this.name)”};`

    D、`var obj = [name:"zhangsan",show:function(){alert(name);}];`

5.  What is the order of values alerted?

    ```js
    var x = 3;

    var foo = {
      x: 2,
      baz: {
        x: 1,
        bar: function () {
          return this.x;
        },
      },
    };

    var go = foo.baz.bar;

    alert(go());
    alert(foo.baz.bar());
    ```

    A、3，2  
    B、2，1  
    C、1，3  
    D、3，1  
    E、2，3  
    F、1，2

6.  用一个字节最多能编出( )不同的码

    A、8  
    B、128  
    C、16  
    D、256

7.  "1" + 2 + "3" + 4;

    What does the above statement evaluate to?

    A、1234  
    B、10  
    C、46  
    D、37

8.  以下关于 HTTP 状态码描述错误的是（）

    A、503 Service Unavailable：服务器处于超负载或正在停机维护，暂时无法处理请求  
    B、403 Forbidden：请求资源的访问被服务器拒绝  
    C、206 Partial Content：客户端进行了范围请求，服务器成功执行这部分 GET 请求  
    D、301 Found：临时性重定向，表明该资源暂时被分配了新的 URL

9.  下面的代码输出的内容是？

    ```js
    var A = function () {};
    A.prototype.n = 1;
    var b = new A();
    A.prototype = {
      n: 2,
      m: 3,
    };
    var c = new A();
    console.log(b.n, b.m, c.n, c.m);
    ```

    A、2, 3, 2, 3  
    B、2, undefined, 2, undefined  
    C、1,3, 2, 3  
    D、1,undefined,2,3

10. If you have a page of search results and want to highlight the search term, what HTML tag would you use?

    A、`<highlight>`  
     B、`<mark>`  
     C、`<em>`  
     D、`<strong>`

11. 在 jquery 中，想要给第一个指定的元素添加样式，下面哪一个是正确的? ( )

    A、`css(name)`  
    B、`eq(1)`  
    C、`css(name,value)`  
    D、`first`

12. 下列 css 代码，（ ）能控制鼠标悬浮其上的超链接样式

    A、

    ```css
    a:hover {
      color: #ff7300;
    }
    ```

    B、

    ```css
    a:link {
      color: #ff7300;
    }
    ```

    C、

    ```css
    a:visited {
      color: #ff7300;
    }
    ```

    D、

    ```css
    a:active {
      color: #ff7300;
    }
    ```

13. 计算机系统的组成部分

    A、硬件，软件，用户  
    B、软件 用户  
    C、硬件，软件  
    D、硬件，用户

14. 使用 Git 从当前分支创建一个新分支，　新分支名为：nb, 则创建命令是_____.

15. What's the output?

    ```js
    const KEY = "white_rabbit";
    if (true) {
      const KEY = "ginger_rabbit";
    }
    ```

16. What does the scoped attribute do?

    ```html
    <article>
      <h1>Hello World</h1>
      <style scoped>
        p {
          color: #ff0;
        }
      </style>
      <p>This is my text</p>
    </article>

    <article>
      <h1>This is awesome</h1>
      <p>I am some other text</p>
    </article>
    ```

    A、Applies style rules to elements succeeding it, but with the same parent element  
    B、Applies style rules to IE browsers only  
    C、None of the above  
    D、Applies style rules to all children of the scoped parent element

17. 当 DOM 加载完成后要执行的函数，下面哪个是正确的?( )

    A、jQuery(html, [ownerDocument]);  
    B、jQuery(callback);  
    C、jQuery(elements);  
    D、jQuery(expression, [context]);

18. 向量 a⃗×b⃗a⃗×b⃗​ 与二向量 a⃗a⃗ 及 b⃗b⃗​ 的位置关系是( ).

    A、共面  
    B、垂直  
    C、共线  
    D、斜交

19. What will the following code output?

    ```js
    let x = 502;
    if (true) {
      console.log(x);
      let x = 5021;
    }
    ```

    A、502  
    B、5021  
    C、throw error  
    D、502-1

20. Are CSS property names case-sensitive?

    ```css
    ul {
      margin: 10px;
    }
    ```

    A、YES  
    B、NO

21. Does setting margin-top and margin-bottom have an affect on an inline element?

    A、YES  
    B、NO

22. Does main1.css have to be downloaded and parsed before main2.css can be fetched?

    ```html
    <head>
      <link href="main1.css" rel="stylesheet" />
      <link href="main2.css" rel="stylesheet" />
    </head>
    ```

    A、对  
    B、错

23. 请说出三种减少页面加载时间的方法

24. Is `<keygen>` a valid HTML5 tag?

    A、YES  
    B、NO

25. 以下的 CSS 中，可使所有`<p>`元素变为粗体的正确语法是? （  ）

    A、`p {text-size:bold}`  
    B、`<p style="font-size:bold">`  
    C、`<p style="text-size:bold">`  
    D、`p {font-weight:bold}`

26. What is the color of the text Sausage ?

    ```html
    <ul class="shopping-list" id="awesome">
      <li><span>Milk</span></li>
      <li class="favorite" id="must-buy">
        <span class="highlight">Sausage</span>
      </li>
    </ul>
    ```

    ```css
    ul {
      color: red;
    }
    li {
      color: blue;
    }
    ```

    A、Red  
    B、Blue  
    C、Unkonw

27. 将栈存区内容提交到代码区中（提交代码到本地仓库）的命令是:\_\_\_\_?

28. 阅读以下代码，代码运行后，alert 方法弹出的内容为

    ```js
    a1 = [1, 2, 12];
    a2 = [4, 23];
    a1.concat(a2);
    a1.sort();
    alert(a1.join(";"));
    ```

    A、1;12;2  
    B、1;12;2;23;4  
    C、1;2;4;12;23  
    D、1;2;12

29. 阅读下面 HTML 代码，段落标签`<p>`内文本最终显示的颜色是( )。

    ```html
    <style type="text/css">
      body {
        color: #333;
      }
      #text {
        color: #666;
      }
      .content {
        color: #00f;
      }
      .gray {
        color: #f00;
      }
    </style>
    ```

    ```html
    <p id="text" class="content gray">
      好智信息技术有限公司 - 构建在线 教育新基建
    </p>
    ```

    A、#333  
    B、#f00  
    C、#666  
    D、#00f

30. 下面的 JavaScript 语句中，（ ）实现检索当前页面中的表单元素中的所有文本框，并将它们全部清空

    A、

    ```js
        for(var j=0;j<document.forms[i].elements.length; j++){
               if(document.forms[i].elements[j].type=="text")
                   document.forms[i].elements[j].value="";
               }
         }
    ```

    B、

    ```js
    for (var i = 0; i < form1.elements.length; i++) {
      if (form1.elements[i].type == "text") form1.elements[i].value = "";
    }
    ```

    C、

    ```js
    for (var i = 0; i < document.forms.length; i++) {
      if (document.form.elements.type == "text") form.elements[i].value = "";
    }
    ```

    D、

    ```js
    for (var i = 0; i < document.forms.length; i++) {
      if (forms[0].elements[i].type == "text") forms[0].elements[i].value = "";
    }
    ```

31. 一本书的价格降低了 50%.现在,如果按原价出售,提高了百分之几？

    A、75%  
    B、50%  
    C、25%  
    D、100%

32. 4 + 3 + 2 + "1"

    What does the above statement evaluate to?

    A、不知道  
    B、4321  
    C、91  
    D、10
