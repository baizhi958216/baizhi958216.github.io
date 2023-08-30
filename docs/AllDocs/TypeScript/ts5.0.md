# TypeScript 5.0 正式发布

## 开发者博客链接

[5.0 Beta](https://devblogs.microsoft.com/typescript/announcing-typescript-5-0-beta/)  
[5.0 RC](https://devblogs.microsoft.com/typescript/announcing-typescript-5-0-rc/)  
[5.0 Release](https://devblogs.microsoft.com/typescript/announcing-typescript-5-0)

## 装饰器(Decorators)

:::tip 也就是 JAVA 人常说的`注解`

:::
:::tip 需要在`tsconfig.json`打开`experimentalDecorators`

:::
装饰器以非侵入方式增强`类`、`方法`、`访问器`、`属性`、`参数`的能力, 将业务/服务/工具等代码进行分割, 是一个即将到来的 ECMAScript 新特性。

:::details ECMAScript 新特性的产生

[The TC39 Process](https://tc39.es/process-document/)

- 稻草人（Strawpersion），由 TC39 成员发起，通常是提出新想法或是对未纳入正式的提案进行修改。
- 提案（Proposal），提出一些具体的问题和解决方案。
- 草稿（Draft），用 ES 语法尽可能精确地描述提案的语法、语义和 API，并提供实验性的实现。意味着提案会有很大概率出现在正式版本的中。
- 候选人（Candidate），到了该阶段，提案基本已经定型，仅根据外部反馈针对关键问题进行更改。
- 完成（Finish），该提案会出现在正式的规范文档中，并在下一个版本的 ES 中正式支持。

:::

简单的方法装饰器

```ts
class Chat {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  @Login // [!code focus]
  apply() {
    console.log(`${this.name}申请进入聊天`);
  }
}

function Login(originalMethod: any, context: ClassMethodDecoratorContext) {
  return function replacementMethod(this: any, ...args: any[]) {
    return originalMethod.call(this, ...args);
  };
}
new Chat("baizhi958216").apply();
```

带上参数(也叫做装饰器工厂)

```ts
class Chat {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  @Login("不准") // [!code focus]
  apply() {
    console.log(`${this.name}申请进入聊天`);
  }
}

function Login(message: string) {
  return (originalMethod: any, context: ClassMethodDecoratorContext) => {
    return function replacementMethod(this: any, ...args: any[]) {
      this.name = message;
      return originalMethod.call(this, ...args);
    };
  };
}
new Chat("baizhi958216").apply();
```

类装饰器

```ts
const Base: ClassDecorator = (target: Function) => {
  target.prototype.a = "param a";
  target.prototype.b = () => {
    console.log("function b");
  };
};
@Base // [!code focus]
class Http {}
const http = new Http() as any;
http.b();
console.log(http.a);
```

访问器装饰器(get/set)

```ts
function uppercase(target: any, name: any, desc: any) {
  return {
    enumerable: false,
    configurable: false,
    get: function () {
      return desc.get.call(this).toUpperCase(); // [!code focus]
    },
    set: function (name: string) {
      desc.set.call(this, name);
    },
  };
}

class Message {
  constructor(public message: string) {}

  // 获取消息时进行uppercase // [!code focus]
  @uppercase
  get fullname(): string {
    return this.message;
  }

  set fullname(message: string) {
    this.message = message;
  }
}

var m = new Message("message");
console.log(m.message);
console.log(m.fullname);
```

属性装饰器

## `const`类型参数

TS5.0 以前需要在函数参数加上`as const`进行类型推断，否则将会推断成通用的类型

```ts
type HasNames = { readonly names: string[] };
function getNamesExactly<T extends HasNames>(arg: T): T["names"] {
  return arg.names;
}

// names会推断成string[]
const names = getNamesExactly({ names: ["Alice", "Bob", "Eve"] });

// names会推断成readonly ["Alice", "Bob", "Eve"]
const names = getNamesExactly({ names: ["Alice", "Bob", "Eve"] } as const); //[!code focus]
```

在 TS5.0，可以通过在函数类型声明添加`const`来帮助类型推断

```ts
type HasNames = { names: readonly string[] };
function getNamesExactly<const T extends HasNames>(arg: T): T["names"] {
  //[!code focus]
  return arg.names;
}

// names会推断成: readonly ["Alice", "Bob", "Eve"]
const names = getNamesExactly({ names: ["Alice", "Bob", "Eve"] });
```

## tsconfig 支持拓展多个配置文件

```json
// tsconfig1.json
{
    "compilerOptions": {
        "strictNullChecks": true
    }
}

// tsconfig2.json
{
    "compilerOptions": {
        "noImplicitAny": true
    }
}

// tsconfig.json
{
    "extends": ["./tsconfig1.json", "./tsconfig2.json"],
    "files": ["./index.ts"]
}
```

## 联合枚举

最初引入枚举是为了表示一组具有相同类型的数字常量，它们主要用于将数字值赋予标识符。随着 TypeScript 2.0 引入了枚举字面类型，枚举的功能得到了扩展。

枚举字面类型为每个枚举成员赋予了各自独特的数据类型，并将整个枚举转变成了这些成员类型的联合。这为类型检查提供了更精确的工具，也能在处理枚举时实现类型的精准缩小。枚举字面类型使得我们能够引用枚举值的特定子集，并进行类型逐步缩小。

举例来说，看看 Color 枚举：

```ts
enum Color {
  Red,
  Orange,
  Yellow,
  Green,
  Blue,
  Violet,
}
```

利用枚举字面类型，每个枚举成员（如 Red、Orange 等）都有其自己独特的类型。你可以创造新的类型，这些类型是特定枚举成员的联合，例如 `PrimaryColor` 类型：

```ts
type PrimaryColor = Color.Red | Color.Green | Color.Blue;
```

此外，枚举字面类型使得类型逐步缩小，有助于捕捉代码中的错误。然而，当枚举成员的值是通过计算或函数初始化时，存在一些限制，TypeScript 会回退到旧有的枚举方式，失去了枚举字面类型的优势。

在 TypeScript 5.0 中，通过将所有枚举转化为“联合枚举”。这意味着即使枚举成员的值是通过计算得到的，现在也可以将其看作是联合类型，每个计算成员都会有独特的数据类型。

这个变化确保了所有枚举都可以逐渐缩小类型范围，并且可以将它们的成员作为各自不同的类型进行引用。

## moduleResolution 新增 bundler 选项

NodeJS 的 ESM 解析策略要求使用相对路径引入模块时需要添加文件的拓展名，否则直接报错。

```js
// entry.mjs
import * as utils from "./utils"; // ❌ wrong - we need to include the file extension.

import * as utils from "./utils.mjs"; // ✅ works
```

TS5.0 提供 bundler 模式，同时支持了 ESM 和 CommonJS 的模块解析策略。

## tsconfig 其它有关 bundler 选项

[allowImportingTsExtensions](https://www.typescriptlang.org/zh/tsconfig#allowImportingTsExtensions)

--allowImportingTsExtensions 允许 TypeScript 文件互相作为拓展导入，支持`.ts`, `.mts`, `.tsx`

:::warning

因为这些导入路径在 JavaScript 输出文件中无法在运行时解析，所以此选项仅当`--noEmit`和`--emitDeclarationOnly`存在时生效。

:::

[resolvePackageJsonExports](https://www.typescriptlang.org/zh/tsconfig#resolvePackageJsonExports)

--resolvePackageJsonExports 编译器读取位于 node_modules 中的包时，是否强制它查阅这些包的 package.json 文件中的 exports 字段，以便正确地了解模块的导出方式。确保 TypeScript 在编译时能够准确地确定模块的导入和导出方式，以便产生正确的类型检查和编译结果。

:::tip

在`node16`, `nodenext`, bundler 使用`--moduleResolution`时默认开启。

:::

[resolvePackageJsonImports](https://www.typescriptlang.org/zh/tsconfig#resolvePackageJsonImports)

--resolvePackageJsonImports 编译器在查找以 # 开头的导入时，是否要查阅包含有 package.json 文件的祖先目录中的 imports 字段

:::tip

在`node16`, `nodenext`, bundler 使用`--moduleResolution`时默认开启。

:::

[allowArbitraryExtensions](https://www.typescriptlang.org/zh/tsconfig#allowArbitraryExtensions)

在 TypeScript 5.0 中，当导入路径以非已知的 JavaScript 或 TypeScript 文件扩展名结尾时，编译器将会在形如`{文件基名}.d.{扩展名}.ts`的路径中寻找相应的声明文件。

例如，在一个打包项目中使用 CSS 加载器时为这些样式表编写（或生成）声明文件：

```css
/* app.css */
.cookie-banner {
  display: none;
}
```

```ts
// app.d.css.ts
declare const css: {
  cookieBanner: string;
};
export default css;
```

```tsx
// App.tsx
import styles from "./app.css";
styles.cookieBanner; // string
```

默认情况下，这种导入会引发错误，提示 TypeScript 无法解析这种文件类型，而你的运行时可能不支持对其进行导入。但是，如果你已经配置了运行时或打包工具来处理它，你可以通过新的--allowArbitraryExtensions 编译器选项来抑制错误。

在以前，通过添加名为 app.css.d.ts 的声明文件，而不是 app.d.css.ts，通常可以实现类似的效果，但这只是依靠了 Node 的 CommonJS 的 require 解析规则。

严格来说，前者被解析为 JavaScript 文件 app.css.js 的声明文件。

由于在 Node 的 ESM 支持下，相对文件导入需要包含扩展名，所以在--moduleResolution node16 或 nodenext 下，TypeScript 会在我们的示例中引发错误。

[customConditions](https://www.typescriptlang.org/zh/tsconfig#customConditions)

--customConditions 用于指定在解析 package.json 中的 exports 或 imports 字段时，需要满足的额外条件。

举个例子，在 tsconfig.json 中这样设置:

```json
{
  "compilerOptions": {
    "target": "es2022",
    "moduleResolution": "bundler",
    "customConditions": ["my-condition"]
  }
}
```

每当在 package.json 中引用 exports 或 imports 字段时，TypeScript 将检查名为 my-condition 的条件。

因此，当从一个具有以下 package.json 的包进行导入时：

```json
{
  // ...
  "exports": {
    ".": {
      "my-condition": "./foo.mjs",
      "node": "./bar.mjs",
      "import": "./baz.mjs",
      "require": "./biz.mjs"
    }
  }
}
```

TypeScript 将尝试查找与 foo.mjs 相对应的文件。

这个字段仅在 --moduleResolution 的选项中为 node16、nodenext 和 bundler 时有效。

## 简化导入导出

[-- verbatimModuleSyntax](https://www.typescriptlang.org/zh/tsconfig#verbatimModuleSyntax)

TS 有个导入缺省机制，仅作为类型使用的导入会在编译后被移除:

```ts
import { Car } from "./car";
export function drive(car: Car) {
  // ...
}
```

```ts
export function drive(car) {
  // ...
}
```

如果`Car`不是从`./car`导出的值，按道理 TypeScript 抛出运行时错误是对的，但是这对一些特定场景带来了一些复杂性。

:::tip

比如说`import './car'`，这种写法会让导入语句无效，实际上对于一些模块会造成影响(不论是否有副作用)。

:::

TypeScript 在编译成 JavaScript 代码时的策略也有一些复杂性，"import elision"（导入省略）并不仅仅由导入的使用方式驱动，它通常还会考虑值是如何声明的。

因此，对于像下面这样的代码，是否进行代码优化（要不要删掉）并不总是清晰的。

```ts
export { Car } from "./car";
```

如果 Car 是用类之类的东西声明的，那么它可以保留在生成的 JavaScript 文件中。但是，如果 Car 只是声明为类型别名或接口，那么 JavaScript 文件根本不应该导出 Car。

TypeScript Compiler 能够基于跨文件的信息做出这些决策，这并不是每个编译器都能做到的。

导入和导出的类型修饰符对这些情况有一些帮助。我们可以明确表示导入或导出是否仅用于类型分析，并且可以通过使用类型修饰符提示编译器是否在生成的 JavaScript 文件中完全删除该模块。

```ts
// This statement can be dropped entirely in JS output
import type * as car from "./car";
// The named import/export 'Car' can be dropped in JS output
import { type Car } from "./car";
export { type Car } from "./car";
```

类型修饰符本身并不是特别有用的 —— 默认情况下，模块消除（module elision）仍然会删除导入项，并且没有任何强制性规定让你区分类型导入（type imports）和普通导入（plain imports）以及导出。

因此，TypeScript 引入了

- `--importsNotUsedAsValues` 选项确保你使用类型修饰符，
- `--preserveValueImports` 选项阻止某些模块消除行为
- `--isolatedModules` 选项确保你的 TypeScript 代码可以在不同的编译器之间正常工作。

不幸的是，理解这三个标志的细节是困难的，而且仍然存在一些意外行为的复杂情况(比如循环依赖、条件编译等)。

TypeScript 5.0 引入了一个名为`——verbatimModuleSyntax`的新选项来简化这种情况。

规则要简单得多: 任何没有类型修饰符的导入或导出都会被保留。任何使用类型修饰符的内容都将被完全删除。

```ts
// Erased away entirely.
import type { A } from "a";
// Rewritten to 'import { b } from "bcd";'
import { b, type c, type d } from "bcd";
// Rewritten to 'import {} from "xyz";'
import { type xyz } from "xyz";
```

有了这个新选项，当设置或文件扩展名暗示不同的模块系统时，ECMAScript 的导入和导出将不会被重写为 require 调用。

相反，会得到一个错误。如果需要生成使用 require 和 module.exports 的代码，需要使用早于 ES2015 的 TypeScript 模块语法。

```ts
// input.ts
import foo = require("foo");
function foo() {}
function bar() {}
function baz() {}
export = {
  foo,
  bar,
  baz,
};
```

```js
// output.js
const foo = require("foo");
function foo() {}
function bar() {}
function baz() {}
module.exports = {
  foo,
  bar,
  baz,
};
```

虽然这会带来一些限制，但它实际上有助于更加明确地呈现一些问题。例如，在使用 `--module node16` 时，经常会忘记在 `package.json` 中设置 type 字段。

结果，开发人员可能会开始编写 CommonJS 模块，而不自知地使用了 ES 模块，这会导致意外的查找规则和 JavaScript 输出结果。

这个选项确保在选择文件类型时能够更加有意识，因为在语法上故意进行了区分。

`--verbatimModuleSyntax` 提供了比 `--importsNotUsedAsValues` 和 `--preserveValueImports` 更加一致的方案，所以这两个现有选项将逐渐被废弃。

## 将整个类作为类型导出

export type \* as xxx

:::code-group

```ts [models/vehicles.ts]
export class Spaceship {
  // ...
}
```

```ts [models/index.ts]
export type * as vehicles from "./vehicles";
```

```ts [main.ts]
// main.ts
import { vehicles } from "./models";

// ⭕作为类型
function takeASpaceship(s: vehicles.Spaceship) {}

function makeASpaceship() {
  // ❌作为值
  return new vehicles.Spaceship();
}
```

:::

## @satisfies 的 JSDoc 支持

TypeScript 4.9 引入了 `@satisfies` 运算符，以支持在 JSDoc 注释中进行类型验证。这个运算符确保表达式的类型兼容性，同时不会修改原始类型。例如：

```ts
interface CompilerOptions {
  strict?: boolean;
  outDir?: string;
  // ...
}

interface ConfigSettings {
  compilerOptions?: CompilerOptions;
  extends?: string | string[];
  // ...
}

let myConfigSettings = {
  compilerOptions: {
    strict: true,
    outDir: "../lib",
    // ...
  },
  extends: ["@tsconfig/strictest/tsconfig.json", "../../../tsconfig.base.json"],
} satisfies ConfigSettings;
```

这里，TypeScript 识别出 `extends` 中的数组声明，而不会修改类型，从而允许后续的操作，比如映射：

```ts
declare function resolveConfig(configPath: string): CompilerOptions;

let inheritedConfigs = myConfigSettings.extends.map(resolveConfig);
```

在 TypeScript 5.0 中，这个支持通过 `@satisfies` 标签扩展到 JSDoc 注释中。它保留了原始类型，并捕获了类型不匹配：

```ts
/**
 * @typedef CompilerOptions
 * @prop {boolean} [strict]
 * @prop {string} [outDir]
 */

/**
 * @satisfies {CompilerOptions}
 */
let myCompilerOptions = {
  outdir: "../lib",
  //  ~~~~~~ 哎呀！我们本来是想写 outDir
};
```

此外，它还可以在括号表达式中内联使用，适用于函数或其他复杂表达式：

```ts
let myConfigSettings = /** @satisfies {ConfigSettings} */ {
  compilerOptions: {
    strict: true,
    outDir: "../lib",
  },
  extends: ["@tsconfig/strictest/tsconfig.json", "../../../tsconfig.base.json"],
};

compileCode(
  /** @satisfies {ConfigSettings} */ {
    // ...
  }
);
```

## @overload 的 JSDoc 支持

在 TypeScript 中，使用 JSDoc 中的"overloads"（重载）来指定一个函数可以使用不同的参数方式进行调用，从而可能产生不同的结果。

重载有助于强制规定函数在不同情况下应该如何被调用，并且可以精确定义预期的结果。

以下是一个使用 TypeScript 中"overloads"的示例：

```ts
// 重载：
function printValue(str: string): void;
function printValue(num: number, maxFractionDigits?: number): void;

// 实现：
function printValue(value: string | number, maximumFractionDigits?: number) {
  if (typeof value === "number") {
    const formatter = Intl.NumberFormat("en-US", {
      maximumFractionDigits,
    });
    value = formatter.format(value);
  }

  console.log(value);
}
```

在 TypeScript 5.0 中，可以使用 JSDoc 注释并使用`@overload`标签来声明重载。每个带有`@overload`标签的 JSDoc 注释都会被视为后续函数声明的一个不同重载：

```ts
// @ts-check

/**
 * @overload
 * @param {string} value
 * @return {void}
 */

/**
 * @overload
 * @param {number} value
 * @param {number} [maximumFractionDigits]
 * @return {void}
 */

/**
 * @param {string | number} value
 * @param {number} [maximumFractionDigits]
 */
function printValue(value, maximumFractionDigits) {
  if (typeof value === "number") {
    const formatter = Intl.NumberFormat("en-US", {
      maximumFractionDigits,
    });
    value = formatter.format(value);
  }

  console.log(value);
}
```

这种方法确保无论你是在 TypeScript 还是 JavaScript 中编写代码，TypeScript 都会在调用函数时提供反馈，如果调用不正确，会进行提示。例如：

```ts
// 所有的调用都是合法的
printValue("hello!");
printValue(123.45);
printValue(123.45, 2);

printValue("hello!", 123); // 错误！
```

## --build 后续选项

TypeScript 现在允许在 `--build` 传递以下选项

- --declaration
- --emitDeclarationOnly
- --declarationMap
- --sourceMap
- --inlineSourceMap

这极大地方便了你在构建过程中定制某些部分，特别是在可能存在不同开发和生产构建的情况下。

例如，一个库的开发构建可能不需要生成声明文件，但生产构建需要。

一个项目可以将声明的生成默认设置为关闭，并且只需使用以下命令构建：

```bash
tsc --build -p ./my-project-dir
```

完成内部测试迭代后，一个“生产”构建只需传递 --declaration 选项即可。

```bash
tsc --build -p ./my-project-dir --declaration
```

## IDE 中的不区分大小写的导入排序

在诸如 Visual Studio 和 VS Code 之类的编辑器中，TypeScript 提供了组织和排序导入和导出的功能。然而，通常对于何时认为一个列表是“排序”的有不同的解释。

例如，下面的导入列表是否被排序了？

```ts
import { Toggle, freeze, toBoolean } from "./utils";
```

令人惊讶的答案可能是“取决于情况”。如果我们不考虑大小写敏感性，那么这个列表显然没有被排序。大写字母在 Toggle 和 freeze 之前，而小写字母 t 则在.之前。

但在大多数编程语言中，排序默认是比较字符串的字节值。JavaScript 比较字符串的方式意味着 Toggle 总是在 freeze 之前，因为根据 ASCII 字符编码，大写字母在小写字母之前。从这个角度来看，导入列表是排序过的。

TypeScript 以前会认为导入列表是排序过的，因为它执行的是基本的大小写敏感排序。对于喜欢不区分大小写顺序的开发人员，或者使用需要默认进行不区分大小写排序的工具（如 ESLint）的开发人员来说，这可能是一个令人沮丧的问题。

TypeScript 现在默认会检测大小写敏感性。这意味着 TypeScript 和类似 ESLint 的工具通常不会在如何最佳排序导入方面“争斗”。

我们的团队还在尝试进一步的排序策略，您可以在这里阅读相关内容。这些选项可能最终可以由编辑器进行配置。目前，它们仍然是不稳定和实验性的，您可以通过在您的 JSON 选项中使用以下条目，从而在 VS Code 中选择使用它们。以下是您可以尝试的所有选项（设置为默认值）：

```json
{
  "typescript.unstable": {
    // 排序是否区分大小写？可以是：
    // - true
    // - false
    // - "auto"（自动检测）
    "organizeImportsIgnoreCase": "auto",

    // 排序是否“ordinal”，即使用代码点或考虑Unicode规则？可以是：
    // - "ordinal"
    // - "unicode"
    "organizeImportsCollation": "ordinal",

    // 在"organizeImportsCollation": "unicode"下，
    // 当前的区域设置是什么？可以是：
    // - [任何其他区域设置代码]
    // - "auto"（使用编辑器的区域设置）
    "organizeImportsLocale": "en",

    // 在"organizeImportsCollation": "unicode"下，
    // 大写字母或小写字母应该先出现？可以是：
    // - false（特定于区域设置）
    // - "upper"
    // - "lower"
    "organizeImportsCaseFirst": false,

    // 在"organizeImportsCollation": "unicode"下，
    // 数字的运行是否按数值进行比较（即"a1" < "a2" < "a100"）？可以是：
    // - true
    // - false
    "organizeImportsNumericCollation": true,

    // 在"organizeImportsCollation": "unicode"下，
    // 带重音符号/变音符号的字母是否与其“基本”字母分开排序
    // （即é与e是否不同）？可以是：
    // - true
    // - false
    "organizeImportsAccentCollation": true
  },
  "javascript.unstable": {
    // 同样的选项在这里也有效...
  }
}
```

## switch/case框架优化

编写语句时，TypeScript现在会检测传入switch的值是否为可迭代。如果是，编辑器将提供一份完整的(`case`)帮助编写代码

```ts

type Fruit = 
  | { kind: "apple" }
  | { kind: "orange" }
  | { kind: "banana" }

function num(fruit: Fruit){
  switch(fruit){
    //以下为编辑器生成
    case "apple":
    case "orange":
    case "banana":
  }
}
```