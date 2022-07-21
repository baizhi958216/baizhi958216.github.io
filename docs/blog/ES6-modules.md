# ES6 模块化

a.js

```JavaScript
let user = {
    name: 'baizhi958216',
    uid:'123456'
}
// 导出, default为默认导出
export default user
export const hello = 'Hello'
```

b.js

```JavaScript
import {user, hello} from 'a.js'
console.log(user, hello);
```
