# 手搓一个防抖

希望实现一个用户在输入的时候进行查询的功能，通常会在查询 API 的时候加上函数防抖，避免频繁的查询对服务器和数据库造成不必要的压力。

debounce 函数的使用时机通常有三要素：**频繁触发的**、**延迟执行的**、**性能优化需要的**

:::tip 我在这里用的是SSR(NextJS)
:::

:::code-group

```tsx [useDebounce.tsx]
import { useEffect, useState } from "react";

export function useDebounce<T>(value: T, delay?: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay || 300);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}
```

```tsx [search-input.tsx]
"use client"
import { useEffect, useState } from "react";
import { useDebounce } from "./use-debounce";

export const SearchInput = () => {
  const [value, setValue] = useState("");
  const debounceValue = useDebounce(value);
  useEffect(() => {
    console.log(debounceValue);
  }, [debounceValue]);
  return (
    <div>
      <input onChange={(e) => setValue(e.target.value)} />
    </div>
  );
};

```
:::
