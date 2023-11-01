# 腾讯凯博

<el-timeline>
  <el-timeline-item timestamp="2023/10/20" placement="top">
    <el-card>
    <p>...：</p>
    <p>你好呀，很遗憾，你在本次凯博-全栈开发/实习的招聘旅程暂时告一段落。再次感谢你对腾讯凯博游戏的关注和支持，你的资料将进入公司的人才库，有合适的岗位我们将在第一时间与你联系。</p>
    <p>请带着属于你自己的能量，继续向前进。</p>
    <p>祝你愉快，我们一直在，期待有机会再相逢！</p>
    <p align="right">广州腾讯凯博信息科技有限公司</p>
    <p align="right">2023-10-20</p>
    <div style="font-size:11px">在这个卷的不得了的环境下能看我简历一眼，给我发通知发笔试发结果，无论结果如何，我都很感谢凯博能给我机会。</div>
    </el-card>
  </el-timeline-item>
  <el-timeline-item timestamp="2023/10/18" placement="top">
    <el-card>
      <h4>线上笔试</h4>
    </el-card>
  </el-timeline-item>
</el-timeline>

- 关于js的事件循环

<el-card v-show="answer">
JavaScript的事件循环是一种用于管理异步操作和事件处理的机制。它确保在单线程的JavaScript环境中，异步任务能够按照正确的顺序执行。

事件循环由以下几个组成部分：

1. 调用栈（Call Stack）：用于存储执行上下文（函数调用）的栈结构。当执行一个函数时，会将其执行上下文推入调用栈，当函数执行完成后，将其上下文从调用栈中弹出。

2. 任务队列（Task Queue）：用于存储待执行的任务。任务可以是异步操作的回调函数、定时器的回调函数等。

3. 事件循环（Event Loop）：是一个持续运行的循环，不断地从任务队列中取出任务，推入调用栈中执行。当调用栈为空时，事件循环会检查任务队列是否有任务，如果有，则将任务推入调用栈执行。

事件循环的执行过程如下：

1. 执行全局同步代码，将其中的函数调用推入调用栈。

2. 当调用栈为空时，事件循环会检查任务队列是否有待执行的任务。

3. 如果任务队列中有待执行的任务，事件循环会选择其中最先进入队列的任务，将其推入调用栈执行。

4. 执行任务时，如果遇到异步操作（如定时器、网络请求等），会将回调函数放入任务队列中，等待执行。

5. 当任务执行完成后，将其执行上下文从调用栈中弹出。

6. 重复步骤2-5，直到任务队列为空。

需要注意的是，微任务（microtask）和宏任务（macrotask）的执行顺序也会影响事件循环的执行。微任务包括Promise的回调函数、MutationObserver的回调函数等，它们的执行优先级高于宏任务，在每个任务执行完成后会立即执行微任务队列中的任务。
</el-card>

- promise.all和promise.race有什么区别

<el-card v-show="answer">
  <div>
Promise.all 和 Promise.race 是两个常用的 Promise 方法，它们有以下区别：

1. 功能不同：Promise.all 接收一个 Promise 数组作为参数，并返回一个新的 Promise，该 Promise 在所有传入的 Promise 都成功解析后才会被解析，如果有任何一个 Promise 被拒绝，则返回的 Promise 会被拒绝。而 Promise.race 也接收一个 Promise 数组作为参数，但是它返回的 Promise 会在传入的 Promise 中有一个成功解析或被拒绝后立即被解析或被拒绝。

2. 解析值不同：Promise.all 返回的 Promise 的解析值是一个由所有传入的 Promise 解析值组成的数组，解析值的顺序与传入的 Promise 数组的顺序一致。而 Promise.race 返回的 Promise 的解析值是第一个解析或拒绝的 Promise 的解析值。

3. 错误处理不同：Promise.all 如果传入的 Promise 数组中有任何一个被拒绝，则返回的 Promise 会被拒绝，并且会传递被拒绝的 Promise 的拒绝原因。而 Promise.race 如果传入的 Promise 数组中有任何一个被拒绝，则返回的 Promise 也会被拒绝，并且会传递被拒绝的 Promise 的拒绝原因。

这些是 Promise.all 和 Promise.race 的主要区别。
</div>
</el-card>

- 前端怎么做性能优化，不少于三点

<el-card v-show="answer">
  <div>
  当涉及到前端性能优化时，有几个关键的方面可以考虑。以下是至少三个常见的前端性能优化点：

1. 减少网络请求：减少网络请求是提高前端性能的重要方面之一。可以通过合并和压缩文件、使用雪碧图、使用字体图标、使用资源缓存和CDN等技术来减少页面所需的资源文件数量和大小，从而减少网络请求的次数和时间。

2. 优化图片加载：图片通常是网页加载时间的主要因素之一。使用合适的图片格式（如JPEG、PNG、WEBP等），并根据实际需要适当压缩和优化图片，可以减少图片文件的大小。此外，延迟加载（懒加载）技术和使用响应式图片可以在提供合适的用户体验的同时减少不必要的带宽占用和加载时间。

3. 优化代码和资源：精简和优化前端代码和资源可以显著提高页面加载和渲染速度。可以通过压缩和合并CSS和JavaScript文件、使用缓存和CDN、移除不必要的代码和注释、优化DOM操作和重绘重排、延迟加载和异步加载等技术来实现。此外，使用轻量级的库和框架、避免过度渲染和不必要的资源加载也是优化前端性能的重要手段。

这些是前端性能优化的一些常见方法，但具体的优化策略应根据项目需求和具体情况来确定。重点是要综合考虑页面加载速度、渲染性能、资源使用和用户体验等方面，通过不断测试和优化来提高前端性能。
  </div>
</el-card>

- 写个函数，遇到整数输出那个整数，没有则输出0

:::tip 例如

abc123def -> 123

asx 123 -> 123

xdzsw -> 0

adaa 29.1 -> 0

1231saw -> 1231

:::

<el-card v-show="answer">

  <div>
  
  ```js
  function findInteger(inputString) {
    const matches = inputString.match(/\d+/g); // 使用正则表达式匹配所有连续的数字
    if (matches) {
      const integer = parseInt(matches[0]); // 将匹配到的第一个数字转换为整数
      return integer;
    }
    return 0; // 没有找到整数，返回0
  }
  console.log(findInteger("abc123def")); // 输出: 123
  console.log(findInteger("asx 123")); // 输出: 123
  console.log(findInteger("xdzsw")); // 输出: 0
  console.log(findInteger("adaa 29.1")); // 输出: 0
  console.log(findInteger("1231saw")); // 输出: 1231
  ```
  </div>

</el-card>

- 控制台输出什么

:::tip

```js
let a = []
for(let i = 0; i < 10; i++){
    a[i] = function(){
        console.log(i)
    }
}
a[6]()
```
<div style="display:flex; gap: 12px">
<el-button @click="tryconsole">在console试一下</el-button>
<el-button @click="trydialog">我不会打开console！</el-button>
</div>


:::

- 使用html和css实现网格三列布局，页面小于768px时单行排列。格子宽度固定，缩放会重新排列

<el-card v-show="answer">

html: 

```html
<div class="grid-container">
  <div class="grid-item">格子 1</div>
  <div class="grid-item">格子 2</div>
  <div class="grid-item">格子 3</div>
</div>
```

css:

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 三列等宽 */
  gap: 10px; /* 格子之间的间距 */
}

.grid-item {
  background-color: #f2f2f2;
  padding: 20px;
  text-align: center;
}

@media (max-width: 767px) {
  .grid-container {
    grid-template-columns: 1fr; /* 单列排列 */
  }
}
```

</el-card>

- js使用递归实现快排

<el-card v-show="answer">

```js
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr; // 数组长度为 0 或 1 时，直接返回
  }

  const pivotIndex = Math.floor(arr.length / 2); // 选择基准元素的索引
  const pivot = arr[pivotIndex]; // 基准元素的值

  const left = [];
  const right = [];

  for (let i = 0; i < arr.length; i++) {
    if (i === pivotIndex) {
      continue; // 跳过基准元素
    }

    if (arr[i] < pivot) {
      left.push(arr[i]); // 小于基准元素的放入左子数组
    } else {
      right.push(arr[i]); // 大于等于基准元素的放入右子数组
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)]; // 递归调用快速排序，并拼接左子数组、基准元素、右子数组
}
```

```js
const array = [5, 3, 8, 4, 2, 7, 1, 6];
const sortedArray = quickSort(array);
console.log(sortedArray); // 输出: [1, 2, 3, 4, 5, 6, 7, 8]
```

</el-card>

- 如果你使用过vue和react，说说他们的区别

<el-card v-show="answer">
Vue 和 React 是两个流行的前端框架，它们有一些区别和不同的设计理念。以下是一些 Vue 和 React 的主要区别：

1. 学习曲线：Vue 的学习曲线相对较低，更易于上手。Vue 的语法和模板更接近传统的 HTML 和 CSS，因此对于初学者来说更容易理解和学习。而 React 则使用了 JSX 语法，需要一些对 JavaScript 以及组件化思维的熟悉。

2. 生态系统：React 有一个庞大且活跃的生态系统，有很多第三方库和工具可供选择，如 Redux、React Router、Material-UI 等。Vue 的生态系统也相对庞大，但相对于 React 来说规模较小。

3. 组件化开发：Vue 和 React 都采用了组件化开发的思想，但在实现上有一些差异。Vue 的组件开发更加直观和简单，模板语法和组件选项使得开发者可以更快速地构建和组合组件。React 则更注重于 JavaScript 的编程方式，使用 JSX 来描述组件的结构和逻辑。

4. 响应式更新：Vue 使用了双向绑定的概念，通过在模板中使用指令和表达式，可以实现数据的自动响应和更新。React 则使用了虚拟 DOM 和单向数据流的概念，通过显式地更新状态和使用组件的生命周期方法来实现数据的更新。

5. 社区和支持：React 由 Facebook 维护，拥有庞大的社区和活跃的支持，因此可以很容易地找到相关的文档、教程和解决方案。Vue 由一个由 Evan You 领导的团队维护，也有相当规模的社区和支持。

这些是 Vue 和 React 主要的区别。选择使用哪个框架取决于项目的需求、团队的经验和个人的偏好。无论选择哪个框架，它们都提供了强大的工具和功能来构建现代的、高性能的前端应用程序。
</el-card>

- js和ts的区别

<el-card v-show="answer">
JavaScript（JS）和TypeScript（TS）是两种不同的编程语言，它们有一些区别和不同的特点。以下是 JS 和 TS 的主要区别：

1. 类型系统：JS 是一种弱类型的动态语言，它不需要显式声明变量的类型，并且可以在运行时更改变量的类型。TS 是一种强类型的静态语言，它引入了静态类型检查，需要在编写代码时显式声明变量的类型，并且在编译时进行类型检查。这可以提供更好的代码可读性和错误检测。

2. 类型注解：TS 支持类型注解，可以在变量、函数参数和返回值等地方显式地指定类型。这使得代码更加清晰和可维护，并且可以提供更好的开发工具支持，如代码补全、类型检查和重构等。

3. 静态类型检查：TS 在编译时进行静态类型检查，可以帮助捕获潜在的类型错误和编码错误。这有助于提早发现问题，并提高代码的可靠性和可维护性。

4. ECMAScript 版本：JS 是 ECMAScript（ES）的一种实现，而 TS 是在 JS 基础上进行扩展的。TS 支持最新的 ES 版本，并可以使用 ES 模块、类、箭头函数等特性，同时还引入了一些额外的语言特性，如接口、泛型、装饰器等。

5. 工具和生态系统：JS 有广泛的工具和生态系统支持，如包管理器 npm、构建工具 webpack、测试框架 Jest 等。TS 可以无缝地与这些工具和生态系统集成，并且有大量的类型声明文件（Type Declaration Files）可供使用，以提供对第三方库和框架的类型支持。

6. 学习曲线和迁移成本：由于 TS 是基于 JS 的，因此对于已经熟悉 JS 的开发者来说，学习 TS 相对较容易。迁移现有的 JS 项目到 TS 可能需要一些工作，特别是在添加类型注解和解决类型相关的问题方面。

这些是 JS 和 TS 的一些主要区别。选择使用哪种语言取决于项目需求、团队的技能和偏好，以及对类型安全和开发工具支持的需求。无论选择哪种语言，它们都是构建现代 Web 应用程序的强大工具。
</el-card>

<el-button type="info" link @click="answer=!answer">{{answer?"隐藏":"看看"}}AI的答案</el-button>

<script setup>
import { ref } from 'vue'
import { ElTimeline, ElTimelineItem, ElCard, ElButton }  from "element-plus"
import { ElMessage } from 'element-plus'
import 'element-plus/es/components/button/style/css'
import 'element-plus/es/components/card/style/css'
import 'element-plus/es/components/message/style/css'
import 'element-plus/es/components/timeline/style/css'
import 'element-plus/es/components/timeline-item/style/css'

const answer = ref(false)

const tryconsole=()=>{
    let a = []
    for(let i = 0; i < 10; i++){
        a[i] = function(){
            console.log(i)
        }
    }
    a[6]()
}
const trydialog = () => {
  ElMessage.success({
    showClose: true,
    message: '6',
    center: true,
  })
}
</script>