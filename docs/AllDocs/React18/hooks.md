# 各种Hook

## use🪄

:::warning `use`Hook 只在React的`canary`和`experimental`中可用。

canary

```bash
pnpm i react@canary react-dom@canary
```

experimental

```bash
pnpm i react@experimental react-dom@experimental
```

在`tsconfig.json`加入编译器选项
```json {4}
{
  "compilerOptions": {
    // ...
    "types": ["react/canary"] // 或者["react/experimental"]
    // ...
  }
}
```
导入类型提示


:::

这个hook用于简化Promise的处理(Promise实例，resolve，reject等)

- 不使用`use`Hook获取数据

    需要引入`useEffect`,`useState`，然后再到`useEffect`进行数据处理
    ```tsx
    import { useEffect, useState } from "react";

    type Product = {
      title: string
    }
    
    function App() {
      const [product, setProduct] =   useState<Product>();
    
      useEffect(()=>{
        fetch('https://dummyjson.com/products/1')
          .then(res => res.json())
          .then(json => setProduct(json))
      },[])
    
      if(!product) return <div>Loading...</div> 
    
      return (
        <div>{product.title}</div>
      )
    }
    
    export default App
    ```

- 使用`use`Hook
  
  将异步的结果存储在getProduct中

    ```tsx
    import { use } from "react";

    type Product = {
      title: string
    }

    const getProduct = fetch('https://dummyjson.com/products/1').then(res => res.json())

    function App() {
      const product = use<Product>(getProduct)
      if(!product) return <div>Loading...</div> 

      return (
        <div>{product.title}</div>
      )
    }

    export default App
    ```

在这个hook渲染之前允许执行其它语句， 这样React可以对SSR提供更好的支持(服务端渲染)。只需将此调用添加到组件中即可。将这个React组件拆分成另一个块（chunk）时，只需添加一个async关键字。

这意味着可以在React组件的初始化过程中，即在首次渲染之前执行异步操作，例如数据获取或其他副作用操作。这使得在组件渲染之前就可以准备好所需的数据，从而提高了渲染性能和用户体验。

:::warning

`use`目前仍处于实验性版本，社区仍在讨论如何处理Promise的`pending`、`reject`状态？会不会增加React的复杂性？

:::

## State

保存一个变量的**初始值**并返回**状态值**, 使用设置函数更新状态。

`useState`返回的是一个数组，相比对象，返回数组可以使状态管理更加简单和灵活。数组的第一个元素是当前状态的值，可以通过解构赋值来获取。而第二个元素是一个函数，用于更新状态。

一个基本的用法：
```tsx
import { useState } from "react"

function App() {
  const [title, setTitle] = useState<string>('')
  return (
    <>
      <input type="text" onChange={
        (e)=>setTitle(e.target.value)
      } />

      <div>{title}</div>
    </>
  )
}

export default App
```

上面这个用法会将状态更新操作放进队列更新，下一次组件重新渲染之后`useState`返回最新值，但是对于异步的状态更新，一个比较好的做法是放个函数进去：

```tsx
import { useState } from "react"

function App() {
  const [title, setTitle] = useState<string>('')
  return (
    <>
      <input type="text" onChange={
        (e)=>{
            const val = e.target.value;
            setTitle(prev => prev + val)
        }
      } />

      <div>{title}</div>
    </>
  )
}

export default App
```

## Context

使用Props可以在组件间进行传值，但是组件多了会变得很麻烦，因此，这个`Context`Hook可以用于多个组件共享数据。

:::code-group 

```tsx [LanguageContext.tsx]
import { createContext } from "react";

export const LanguageContext = createContext("");
```

```tsx [App.tsx]
import Dddd from "./Dddd";
import { LanguageContext } from "./LanguageContext";
function App() {
  return (
    <LanguageContext.Provider value={"en"}>
      <Dddd />
      <Dddd />
      <Dddd />
    </LanguageContext.Provider>
  );
}

export default App;
```

```tsx [Dddd.tsx]
import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";
function App() {
  const language = useContext(LanguageContext);
  return <div>{language}</div>;
}

export default App;
```

:::

## Ref

创建一个可变的引用，这个引用在重新渲染时保持不变，但当值发生变化时不会触发重新渲染。

对于存储和访问不需要进行渲染，比如DOM元素、计时器或其他可变的值挺有用。

```tsx
import { useRef } from "react";
function App() {
  const inputRef = useRef(null);
  const handleClick = () => {
    // 使用ref访问input元素
    if (inputRef.current) (inputRef.current as HTMLInputElement).focus();
  };
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
}

export default App;
```

useRef Hook经常与其他Hook一起使用，比如useEffect，用于在函数组件中执行副作用、存储和管理可变的值。

## Effect

`useEffect` 用来将组件与外部系统进行同步。

副作用: 访问 DOM 元素、订阅事件、发送网络请求等。`useEffect`Hook 提供了一种在组件渲染后执行副作用操作的方式。

`useEffect` 接受两个参数：**副作用函数**和**依赖项数组**。副作用函数是在组件渲染后执行的函数，而依赖项数组则是用来指定副作用函数依赖的变量。当依赖项数组中的变量发生变化时，副作用函数会被重新执行。

使用 `useEffect` 可以实现很多常见的副作用场景，比如订阅和取消订阅事件、发送网络请求、操作 DOM 等。这样可以确保组件与外部系统的状态保持同步，并在需要时进行清理操作，以避免内存泄漏。

举个例子，以下代码展示了如何使用 `useEffect` 来订阅和取消订阅事件：

```tsx
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    // 在组件渲染后订阅事件
    const subscription = externalSystem.subscribe(event => {
      // 处理事件
    });

    // 返回一个清理函数，在组件卸载前取消订阅
    return () => {
      subscription.unsubscribe();
    };
  }, []); // 依赖项数组为空，表示副作用只在组件渲染后执行一次

  return <div>App</div>;
}

export default App;
```

在上面的例子中，useEffect 的副作用函数会在组件渲染后执行一次，订阅事件。同时，通过返回一个清理函数，可以在组件卸载前取消订阅，以防止内存泄漏。

## Callback

在组件重新渲染时,`useCallback`缓存已有的函数定义。

在 React 中，组件的函数定义在每次重新渲染时都会被重新创建。这可能会导致子组件不必要的重新渲染，因为每次重新创建函数定义时，它们都会被认为是新的引用。

`useCallback`Hook 的作用是缓存函数定义，以便在重新渲染时保持相同的引用。这样可以确保子组件只在函数定义发生真正变化时才重新渲染。

`useCallback`接受两个参数：**回调函数**和**依赖项数组**。回调函数是你想要缓存的函数定义，而依赖项数组则是用来指定回调函数依赖的变量。当依赖项数组中的变量发生变化时，回调函数会被重新创建。

使用 `useCallback` 可以解决一些性能优化问题，尤其是在将函数作为 prop 传递给子组件时。通过缓存函数定义，可以避免子组件不必要的重新渲染。

```tsx
import { useCallback } from 'react';

function App() {
  const handleClick = useCallback(() => {
    // 处理点击事件
  }, []); // 依赖项数组为空，表示回调函数不依赖任何变量

  return <button onClick={handleClick}>Click Me</button>;
}

export default App
```
在上面的例子中，useCallback 的回调函数会在组件首次渲染时创建，并在后续重新渲染时保持相同的引用。这样，当父组件重新渲染时，即使 MyComponent 作为 prop 传递给其他子组件，也不会触发子组件的不必要重新渲染。

## Memo

在组件重新渲染时, `useMemo`可以缓存计算的结果。

在 React 中，组件的渲染过程可能会涉及到一些计算密集型的操作，比如处理大量数据或执行复杂的计算。如果这些计算在每次重新渲染时都重新执行，可能会导致性能问题。

`useMemo`Hook 的作用是缓存计算的结果，以便在重新渲染时重复使用。这样可以避免不必要的计算，并提升组件的性能。

`useMemo` 接受两个参数：**计算函数**和**依赖项数组**。计算函数是用来执行计算的函数，而依赖项数组则是用来指定计算函数依赖的变量。当依赖项数组中的变量发生变化时，计算函数会被重新执行。

使用 useMemo 可以在需要时缓存计算结果，避免重复计算。这在处理大量数据或执行复杂计算时特别有用。

```tsx
import { useMemo } from 'react';

function App({ data }) {
  const result = useMemo(() => {
    // 执行一些复杂的计算
    return processData(data);
  }, [data]); // 依赖项数组包含 data，当 data 发生变化时重新计算结果

  return <div>{result}</div>;
}

export default App
```

在上面的例子中，useMemo 的计算函数会在组件首次渲染时执行，并将结果缓存起来。当 data 发生变化时，计算函数会被重新执行，更新缓存的结果。这样可以避免在每次重新渲染时都重新执行复杂的计算逻辑，提升组件的性能。

:::warning 注意

useCallback和useMemo都用作缓存，使用时应注意函数用途

:::

## Reducer

## Performance

## Resource
