# peropero

## 远程面试

- 细说websocket

::: details 查看AI回答
WebSocket 是一种在单个 TCP 连接上进行全双工通信的协议。它提供了浏览器与服务器之间的双向实时通信能力。

主要特点:
- 建立在 TCP 协议之上
- 全双工通信
- 支持跨域
- 数据格式轻量，性能开销小

使用流程:
1) 客户端发起 WebSocket 连接请求
2) 服务器响应，完成握手
3) 双方可以互相发送消息
4) 任一方可以关闭连接
:::

- websocket的心跳是怎么做的

::: details 查看AI回答
心跳是保持 WebSocket 连接活跃的机制。

实现方式:
- 客户端定期向服务器发送心跳包
- 服务器收到后回应一个心跳包
- 如果在指定时间内没收到响应，认为连接断开，可以尝试重连

示例代码:

```javascript
function heartbeat() {
  if (ws.readyState === WebSocket.OPEN) {
    ws.send('ping');
  }
}

let heartbeatInterval = setInterval(heartbeat, 30000);

ws.onmessage = function(event) {
  if (event.data === 'pong') {
    console.log('Received pong');
  }
};
```
:::

- websocket跟sse的区别，为什么像chatglm他们这些用sse

::: details 查看AI回答
WebSocket:
- 全双工通信
- 需要服务器特殊支持
- 可以从客户端发送数据到服务器

SSE (Server-Sent Events):
- 单向通信(服务器到客户端)
- 基于 HTTP 协议，实现简单
- 自动重连机制

ChatGPT 等使用 SSE 的原因:
- 对于生成式 AI，主要是服务器向客户端推送数据，不需要双向通信
- SSE 实现简单，易于集成到现有 HTTP 服务
- 自动重连机制有利于长时间的数据流传输
:::

- nginx怎么处理websocket跨域

::: details 查看AI回答
在 Nginx 配置中添加:

```nginx
server {
    listen 80;
    server_name example.com;

    location /websocket {
        proxy_pass http://backend;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
    }
}
```
:::

- vue生命周期

::: details 查看AI回答
主要生命周期钩子:
- beforeCreate
- created
- beforeMount
- mounted
- beforeUpdate
- updated
- beforeUnmount (Vue 3) / beforeDestroy (Vue 2)
- unmounted (Vue 3) / destroyed (Vue 2)
:::

- react的useeffect跟vue的onmounted区别

::: details 查看AI回答
useEffect:
- 可以处理副作用
- 可以指定依赖，在依赖变化时执行
- 可以返回清理函数

onMounted:
- 仅在组件挂载后执行一次
- 不能指定依赖
- 没有内置的清理机制
:::

- useeffect为什么不能用async函数

::: details 查看AI回答
useEffect 期望函数返回一个清理函数或者什么都不返回。而 async 函数总是返回一个 Promise，这不符合 useEffect 的期望。

如果需要在 useEffect 中使用异步操作，可以在内部定义一个异步函数并立即调用:

```javascript
useEffect(() => {
  const fetchData = async () => {
    // 异步操作
  };
  fetchData();
}, []);
```
:::

- 讲一下响应式布局

::: details 查看AI回答
响应式布局是一种网页设计方法，使得网页能够自动适应不同设备和屏幕大小。

主要技术:
- 媒体查询 (Media Queries)
- 流式布局
- 弹性盒子 (Flexbox)
- 网格布局 (Grid)
- 相对单位 (如 %, em, rem)
- 图片适配 (如 max-width: 100%)
:::

- 讲一下grid

::: details 查看AI回答
Grid 是一种二维布局系统，可以同时处理行和列。

主要特点:
- 可以创建复杂的布局结构
- 支持显式和隐式网格
- 可以控制项目的对齐和分布
- 支持网格区域命名

基本用法:

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
}
```
:::

- 讲一下动画有哪些实现方式，有了解过动画祯吗

::: details 查看AI回答
- CSS 过渡 (Transition)
- CSS 动画 (Animation)
- JavaScript 动画
- SVG 动画
- Canvas 动画
- WebGL 动画

动画帧是指动画中的每一个画面。在 CSS 动画中，可以使用 @keyframes 规则定义关键帧。
:::

- git pull原理

::: details 查看AI回答
git pull 实际上是两个命令的组合:
1. git fetch: 从远程仓库获取最新的提交历史
2. git merge: 将获取的分支与当前分支合并
:::

- git项目管理的流程，git tag发版对比直接用环境分支的优势

::: details 查看AI回答
使用环境分支（如 master、develop、staging 等）进行发版：

1. 优点：
   - 直观：每个环境对应一个分支，易于理解和管理。
   - 持续集成：可以配置 CI/CD 系统自动部署特定分支到对应环境。
   - 灵活性：可以在分支上直接进行热修复或小改动。

2. 缺点：
   - 分支管理复杂：需要维护多个长期分支，可能导致合并冲突。
   - 版本不明确：难以快速确定生产环境的确切代码版本。
   - 回滚困难：如果需要回滚到之前的版本，可能需要复杂的操作。

使用 Git tag 发版：

1. 优点：
   - 版本明确：每个 tag 对应一个明确的代码版本，便于追踪和管理。
   - 轻量级：tag 不会创建新的分支，不影响正常的开发流程。
   - 易于回滚：可以快速切换到任何已标记的版本。
   - 版本信息：可以为每个 tag 添加详细的版本说明。
   - 简化发布流程：可以基于 tag 自动触发构建和部署。

2. 缺点：
   - 需要额外操作：每次发布需要手动创建 tag。
   - 不适合频繁小改动：如果经常需要小幅度修改，使用 tag 可能显得繁琐。

Git tag 发版的优势：

1. 版本管理更清晰：每个 tag 代表一个明确的版本，便于追踪和管理。

2. 简化部署流程：可以基于 tag 来触发自动化部署，而不是依赖特定分支。

3. 更好的版本控制：可以为每个 tag 添加详细的版本说明，记录每个版本的变更。

4. 便于回滚：如果出现问题，可以快速回滚到之前的 tag 版本。

5. 减少分支管理复杂度：不需要维护多个长期运行的环境分支。

6. 更好的语义化版本控制：可以使用语义化版本号（如 v1.2.3）来命名 tag，使版本更有意义。

7. 更好的协作：团队成员可以很容易地了解当前的生产版本，以及每个版本的具体变更。

8. 更安全：tag 通常是不可变的，这保证了已发布版本的稳定性。

总的来说，使用 Git tag 进行版本发布通常能提供更清晰、更可控的版本管理，特别是在需要严格控制版本和便于回滚的场景中。
:::

- docker部署前端怎么在dockerfile对前端项目进行优化

::: details 查看AI回答
在 Dockerfile 中可以:
- 使用多阶段构建
- 选择轻量级基础镜像 (如 nginx:alpine)
- 只复制必要的文件
- 合并 RUN 命令减少层数
- 使用 .dockerignore 排除不必要的文件
:::

- 如何优化过万行代码的单文件

::: details 查看AI回答
- 使用代码分割 (Code Splitting)
- 提取公共模块
- 使用懒加载
- 应用设计模式优化代码结构
- 考虑将大文件拆分成多个小文件
:::

- 怎样确保你拆出来的组件在使用的时候不会报错

::: details 查看AI回答
优化大型单文件并确保拆分后的组件不会报错是一个复杂的过程，需要仔细规划和执行。

1. 渐进式重构

不要一次性重构整个文件，而是采取渐进式的方法：

- 从最独立的部分开始拆分
- 每次只重构一小部分
- 每次更改后都进行测试

2. 单一职责原则

确保每个拆分出来的组件只负责一个特定的功能。这样可以减少组件之间的依赖，降低出错的风险。

3. 接口设计

为新组件设计清晰、稳定的接口：

- 仔细考虑组件需要的 props
- 使用 PropTypes（React）或 props 验证（Vue）来定义接口
- 考虑使用默认值来增加健壮性

4. 状态管理

考虑组件的状态管理：

- 决定哪些状态应该保留在组件内部
- 哪些状态应该提升到父组件或全局状态管理（如 Redux、Vuex）

5. 依赖注入

使用依赖注入来减少组件间的耦合：

- 通过 props 传递必要的依赖
- 考虑使用 Context API（React）或 provide/inject（Vue）来传递深层依赖

6. 类型检查

使用静态类型检查工具：

- 在 JavaScript 中使用 TypeScript 或 Flow
- 这些工具可以在编译时捕获许多潜在的错误

7. 单元测试

为拆分出的每个组件编写单元测试：

- 测试组件的各种输入和状态
- 模拟组件的依赖
- 使用测试覆盖率工具确保高覆盖率

8. 集成测试

编写集成测试以确保组件在整体中正常工作：

- 测试组件间的交互
- 测试数据流
- 模拟真实使用场景

9. 文档和注释

为新组件编写清晰的文档和注释：

- 描述组件的用途和使用方法
- 记录任何非显而易见的行为或边界情况

10. 代码审查

进行严格的代码审查：

- 让团队其他成员审查变更
- 使用工具如 ESLint 进行静态代码分析

11. 模块化和懒加载

使用模块化和懒加载技术：

- 将大型组件拆分为更小的子组件
- 使用动态导入实现按需加载

12. 错误边界（React）或错误捕获（Vue）

实现错误边界或错误捕获机制：

- 在 React 中使用 Error Boundaries
- 在 Vue 中使用 errorCaptured 钩子

13. 监控和日志

在生产环境中实施监控和日志：

- 使用错误跟踪工具（如 Sentry）
- 实现详细的日志记录

14. 兼容性策略

如果旧代码仍在使用，考虑实现兼容层：

- 创建包装器组件来适配旧的 API
- 使用适配器模式来转换数据结构

15. 版本控制

使用语义化版本控制：

- 遵循 semver 规范
- 为重大更改创建新的主版本号
::: 

- 项目开发的一个流程

::: details 查看AI回答
1. 需求分析
2. 设计阶段 (UI/UX, 架构设计)
3. 开发规划 (任务拆分, 估时)
4. 编码实现
5. 代码审查
6. 测试 (单元测试, 集成测试, UI 测试)
7. 部署
8. 维护和迭代

这个流程可能会根据具体项目和团队而有所调整。
:::
