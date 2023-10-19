# 腾讯凯博

<el-timeline>
  <el-timeline-item timestamp="2023/10/19" placement="top">
    <el-card>
      <h4>进入人才库</h4>
    </el-card>
  </el-timeline-item>
  <el-timeline-item timestamp="2023/10/19" placement="top">
    <el-card>
      <h4>线上笔试</h4>
    </el-card>
  </el-timeline-item>
</el-timeline>

- 关于js的事件循环

- promise.all和promise.race有什么区别

- 前端怎么做性能优化，不少于三点

- 写个函数，遇到整数输出那个整数，没有则输出0
:::tip 例如

abc123def -> 123

asx 123 -> 123

xdzsw -> 0

adaa 29.1 -> 0

1231saw -> 1231

:::

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
<el-button @click="tryconsole">试一下</el-button>

:::

- 使用html和css实现网格三列布局，页面小于768px时单行排列。格子宽度固定，缩放重新排列

- js使用递归实现快排

- 如果你使用过vue和react，说说他们的区别

- js和ts的区别


人才库见

<script setup>
import { ElTimeline, ElTimelineItem, ElCard, ElButton }  from "element-plus"
import 'element-plus/es/components/button/style/css'
import 'element-plus/es/components/card/style/css'
import 'element-plus/es/components/timeline/style/css'
import 'element-plus/es/components/timeline-item/style/css'

const tryconsole=()=>{
    let a = []
    for(let i = 0; i < 10; i++){
        a[i] = function(){
            console.log(i)
        }
    }
    a[6]()
}
</script>