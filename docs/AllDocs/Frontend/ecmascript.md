# ECMAScript

## 关于 ECMAScript

ECMAScript (/ˈɛkməskrɪpt/; ES) 是一种 JavaScript 标准，旨在确保不同 web 浏览器之间的网页互操作性。

ECMAScript 规范是 Netscape 的 Brendan Eich 开发的脚本语言的标准化规范；最初命名为 Mocha，然后是 LiveScript，最后是 JavaScript。

Ecma International 在 Ecma-262 文件中对其进行了标准化(ECMA 第 262 号标准) 。

“ECMA”在 1994 年之前一直代表“欧洲计算机制造商协会(European Computer Manufacturers Association)”。

ECMAScript 通常用于网站上的客户端脚本，并且越来越多地用于使用 Node.js 和其他运行时环境编写服务器端应用程序和服务。

:::tip Ecma-262
ECMA-262，或 ECMAScript 语言规范，定义 ECMAScript 语言，或仅定义 ECMASscript。

ECMA-262 仅指定了核心应用程序编程接口（API）的语言语法和语义，如 Array、Function 和 globalThis
:::

## 关于 TC39

TC39 是 `Technical Committee 39` 的简称，是制定 ECMAScript 标准的委员会，由各个主流浏览器厂商的代表构成，主席团三人分别来自 PayPal、Bloomberg 和 Microsoft。

:::tip TC39 的两个工作组(Task Group)

TC39-TG1: 工作组主要工作是通用 ECMAScript® 语言， 包括语法、语义、类库以及支持该语言的技术。

TC39-TG2: 工作组 ECMAScript® 国际化 API 标准。
:::

[ECMA 成员](https://www.ecma-international.org/about-ecma/members/)出席 TC39 会议

## 标准化流程

ECMAScript 版本由每年的 ECMA 大会批准并作为标准发布。所有的进展都在 [Ecma TC39 GitHub 组织](https://github.com/tc39)上公开，该组织托管提案、官方规范文本和会议记录。

:::tip ES 版本
在 ECMAScript 第 6 版（称为 ES6）之前，规范是几年发布一次，通常用它们的主要版本号来指代（ES3、ES5 等）。

在 ES6 之后，规范以发布年份命名（ES2017、ES2018 等）。ES6 是 ES2015 的代名词。

ESNext 是一个动态名称，指的是撰写本文时的下一个版本。ESNext 中的特性更准确地称为提案，因为根据定义，规范尚未最终确定。
:::

目前委员会批准的 ECMA-262 的快照有 [PDF 版本](https://www.ecma-international.org/publications/files/ECMA-ST/ECMA-262.pdf)和 [HTML 版本](https://262.ecma-international.org/13.0/)。ECMA-262 和 ECMA-402 正处于维护状态，仍在由规范编辑者更新；TC39 网站托管了最新版本的 ECMA-262 和 ECMA-402。

新的语言特性，包括新的语法和 API 的引入以及现有行为的修订，都以提案的形式进行讨论。每个提案都需要经过 [4 个阶段的过程](https://tc39.es/process-document/)，通常在第 3 或 第 4 阶段时，JavaScript 引擎会实现这些提案，以供公众使用。

:::warning 随着 ECMAScript 6 的发布，当时的发布流程出现了两个明显的问题：

- 如果在两个 release 之间多次通过早已准备好的功能，势必在其 release 之前等待很长一段时间。而且功能准备如果很晚，会增加 deadline 之前匆忙赶工的风险。
- 很多功能在其实现和使用之前就花了很长时间在设计上，发现与实现和使用相关的设计缺陷会非常晚。

:::

为了解决上述问题， TC39 建立了新的 TC39 进程：

:::tip 5 个 Stage 阶段

- Stage 0：代号“稻草人（strawman）”，草案阶段
- Stage 1：代号“提案（proposal）”， TC39 帮助阶段
- Stage 2：代号“草案（draft）”， 本阶段很有可能成为标准
- Stage 3：代号“候选（candidate）”， 已完成，需要从实现中获得反馈
- Stage 4：代号“结束（finished）”， 准备成为标准

:::

## ECMAScript 版本历史

:::tip

- 1995 年 12 月，`Sun Microsystems`公司和`Netscape`公司在一份新闻稿中宣布了 JavaScript。

- 1996 年 11 月，`Netscape`公司宣布召开 Ecma 国际标准组织会议，以推进 JavaScript 的标准化。

- 1997 年 6 月，`Ecma委员会(Ecma General Assembly)`大会通过了 ECMA-262 的第一版(es1)。

:::

- [es1](https://www.ecma-international.org/wp-content/uploads/ECMA-262_1st_edition_june_1997.pdf): 1997
- [es2](https://www.ecma-international.org/wp-content/uploads/ECMA-262_2nd_edition_august_1998.pdf): 1998
- [es3](https://www.ecma-international.org/wp-content/uploads/ECMA-262_3rd_edition_december_1999.pdf): 1999
- es4: 2003

:::warning es4
草案未通过 TC39 成员(Microsoft)审议, Abandoned
:::

- [es5](https://www.ecma-international.org/wp-content/uploads/ECMA-262_5th_edition_december_2009.pdf): 2009
- [es5.1](https://www.ecma-international.org/wp-content/uploads/ECMA-262_5.1_edition_june_2011.pdf): 2011
- [es6(ES2015)](https://262.ecma-international.org/6.0/): 2015
- [es7(ES2016)](https://262.ecma-international.org/7.0/): 2016
- [es8(ES2017)](https://262.ecma-international.org/8.0/): 2017
- [es9(ES2018)](https://262.ecma-international.org/9.0/): 2018
- [es10(ES2019)](https://262.ecma-international.org/10.0/): 2019
- [es11(ES2020)](https://262.ecma-international.org/11.0/): 2020
- [es12(ES2021)](https://262.ecma-international.org/12.0/): 2021
- [es13(ES2022)](https://262.ecma-international.org/13.0/): 2022
- [es14(ES2023)](https://262.ecma-international.org/14.0/): 2023
- [es15(ES2024)](https://tc39.es/ecma262/): 2024