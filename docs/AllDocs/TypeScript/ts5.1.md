# TypeScript 5.1 正式发布

## 开发者博客链接

[5.1 Beta](https://devblogs.microsoft.com/typescript/announcing-typescript-5-1-beta/)  
[5.1 RC](https://devblogs.microsoft.com/typescript/announcing-typescript-5-1-rc/)  
[5.1 Release](https://devblogs.microsoft.com/typescript/announcing-typescript-5-1)

## 简化未定义返回函数的隐式返回

JavaScript 中一个函数没有声明返回值将会隐式返回`undefined`

```js
function foo() {
  // no return
}

// x = undefined
let x = foo();
```

在以前的 TypeScript 中，唯一可以完全没有返回语句的函数是`void`和`any`。

```ts
// ✅ fine - we inferred that 'f1' returns 'void'
function f1() {
  // no returns
}

// ✅ fine - 'void' doesn't need a return statement
function f2(): void {
  // no returns
}

// ✅ fine - 'any' doesn't need a return statement
function f3(): any {
  // no returns
}

// ❌ error!
// A function whose declared type is neither 'void' nor 'any' must return a value.
function f4(): undefined {
  // no returns
}
```

如果某些 API 期望函数返回`undefined`，需要至少有一个`undefined`的显式返回，或者单写一个`return`。

```ts
declare function takesFunction(f: () => undefined): undefined;

// ❌ error!
// Argument of type '() => void' is not assignable to parameter of type '() => undefined'.
takesFunction(() => {
  // no returns
});

// ❌ error!
// A function whose declared type is neither 'void' nor 'any' must return a value.
takesFunction((): undefined => {
  // no returns
});

// ❌ error!
// Argument of type '() => void' is not assignable to parameter of type '() => undefined'.
takesFunction(() => {
  return;
});

// ✅ works
takesFunction(() => {
  return undefined;
});

// ✅ works
takesFunction((): undefined => {
  return;
});
```

This behavior was frustrating and confusing, especially when calling functions outside of one’s control. Understanding the interplay between inferring void over undefined, whether an undefined-returning function needs a return statement, etc. seems like a distraction.

TypeScript 5.1 允许没有返回语句的函数返回`undefined`。

```ts
// ✅ Works in TypeScript 5.1!
function f4(): undefined {
  // no returns
}
```

```ts
// ✅ Works in TypeScript 5.1!
takesFunction((): undefined => {
  // no returns
});
```

如果一个函数没有返回语句，它的返回类型会被推断为`undefined`。

```ts
// ✅ Works in TypeScript 5.1!
takesFunction(function f() {
  //                 ^ return type is undefined
  // no returns
});
```

```ts
// ✅ Works in TypeScript 5.1!
takesFunction(function f() {
  //                 ^ return type is undefined

  return;
});
```

在 TypeScript 的`——noImplicitReturns`选项下，只返回 undefined 的函数现在有一个类似`void`的异常，因为不是每个代码路径都必须以显式返回结束。

```ts
// ✅ Works in TypeScript 5.1 under '--noImplicitReturns'!
function f(): undefined {
  if (Math.random()) {
    // do some stuff...
    return;
  }
}
```

## Getters和Setters支持声明不同的类型

TypeScript 4.3 made it possible to say that a get and set accessor pair might specify two different types.

```ts
interface Serializer {
    set value(v: string | number | boolean);
    get value(): string;
}

declare let box: Serializer;

// Allows writing a 'boolean'
box.value = true;

// Comes out as a 'string'
console.log(box.value.toUpperCase());
```

Initially we required that the get type had to be a subtype of the set type. This meant that writing`box.value = box.value;`would always be valid.

However, there are plenty of existing and proposed APIs that have completely unrelated types between their getters and setters. For example, consider one of the most common examples – the style property in the DOM and CSSStyleRule API. Every style rule has a style property that is a CSSStyleDeclaration; however, if you try to write to that property, it will only work correctly with a string!

TypeScript 5.1 now allows completely unrelated types for get and set accessor properties, provided that they have explicit type annotations. And while this version of TypeScript does not yet change the types for these built-in interfaces, CSSStyleRule can now be defined in the following way:

```ts
interface CSSStyleRule {
    // ...

    /** Always reads as a `CSSStyleDeclaration` */
    get style(): CSSStyleDeclaration;

    /** Can only write a `string` here. */
    set style(newValue: string);

    // ...
}
```

This also allows other patterns like requiring set accessors to accept only "valid" data, but specifying that get accessors may return undefined if some underlying state hasn’t been initialized yet.

```ts
class SafeBox {
    #value: string | undefined;

    // Only accepts strings!
    set value(newValue: string) {

    }

    // Must check for 'undefined'!
    get value(): string | undefined {
        return this.#value;
    }
}
```

In fact, this is similar to how optional properties are checked under --exactOptionalProperties.

## Decoupled Type-Checking Between JSX Elements and JSX Tag Types

Decoupled Type-Checking Between JSX Elements and JSX Tag Types
One pain point TypeScript had with JSX was its requirements on the type of every JSX element’s tag. This release of TypeScript makes it possible for JSX libraries to more accurately describe what JSX components can return. For many, this concretely means it will be possible to use asynchronous server components in React

For some context and background, a JSX element is either of the following:

// A self-closing JSX tag
<Foo />

// A regular element with an opening/closing tag
<Bar></Bar>
When type-checking <Foo /> or <Bar></Bar>, TypeScript always looks up a namespace called JSX and fetches a type out of it called Element. In other words, it looks for JSX.Element.

But to check whether Foo or Bar themselves are valid tag names, TypeScript would roughly just grab the types returned or constructed by Foo or Bar and check for compatibility with JSX.Element (or another type called JSX.ElementClass if the type is constructable).

The limitations here meant that components could not be used if they returned or if they "rendered" a more broad type than just JSX.Element. For example, a JSX library might be fine with a component returning strings or Promises.

As a more concrete example, future versions of React have proposed limited support for components that return Promises, but existing versions of TypeScript cannot express that without someone drastically loosening the type of JSX.Element.

import * as React from "react";

async function Foo() {
    return <div></div>;
}

let element = <Foo />;
//             ~~~
// 'Foo' cannot be used as a JSX component.
//   Its return type 'Promise<Element>' is not a valid JSX element.
To provide libraries with a way to express this, TypeScript 5.1 now looks up a type called JSX.ElementType. ElementType specifies precisely what is valid to use as a tag in a JSX element. So it might be typed today as something like

namespace JSX {
    export type ElementType =
        // All the valid lowercase tags
        keyof IntrinsicAttributes
        // Function components
        (props: any) => Element
        // Class components
        new (props: any) => ElementClass;

    export interface IntrinsictAttributes extends /*...*/ {}
    export type Element = /*...*/;
    export type ClassElement = /*...*/;
}

## Namespaced JSX Attributes

TypeScript now supports namespaced attribute names when using JSX.

import * as React from "react";

// Both of these are equivalent:
const x = <Foo a:b="hello" />;
const y = <Foo a : b="hello" />;

interface FooProps {
    "a:b": string;
}

function Foo(props: FooProps) {
    return <div>{props["a:b"]}</div>;
}
Namespaced tag names are looked up in a similar way on JSX.IntrinsicAttributes when the first segment of the name is a lowercase name.

// In some library's code or in an augmentation of that library:
namespace JSX {
    interface IntrinsicElements {
        ["a:b"]: { prop: string };
    }
}

// In our code:
let x = <a:b prop="hello!" />;

## typeRoots Are Consulted In Module Resolution

When TypeScript’s specified module lookup strategy is unable to resolve a path, it will now resolve packages relative to the specified typeRoots.

## Linked Cursors for JSX Tags

TypeScript now supports linked editing for JSX tag names. Linked editing (occasionally called "mirrored cursors") allows an editor to edit multiple locations at the same time automatically.

An example of JSX tags with linked editing modifying a JSX fragment and a div element.
An example of JSX tags with linked editing modifying a JSX fragment and a div element., image

This new feature should work in both TypeScript and JavaScript files, and can be enabled in Visual Studio Code Insiders. In Visual Studio Code, you can either edit the Editor: Linked Editing option in the Settings UI:

Visual Studio Code's Editor: Linked Editing` option

or configure editor.linkedEditing in your JSON settings file:

{
    // ...
    "editor.linkedEditing": true,
}
This feature will also be supported by Visual Studio 17.7 Preview 1.

## Snippet Completions for @param JSDoc Tags

TypeScript now provides snippet completions when typing out a @param tag in both TypeScript and JavaScript files. This can help cut down on some typing and jumping around text as you document your code or add JSDoc types in JavaScript.