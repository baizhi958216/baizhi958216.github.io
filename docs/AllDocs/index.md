<script setup>
import { ref } from 'vue'
import { ElTabs,ElTabPane,ElSkeleton,ElTag } from 'element-plus'
import 'element-plus/es/components/tabs/style/css'
import 'element-plus/es/components/tab-pane/style/css'
import 'element-plus/es/components/skeleton/style/css'
import 'element-plus/es/components/tag/style/css'

const bangumi_list = ref()

const w = ['一','二','三','四','五','六','日']

fetch('http://120.78.174.154:3001/bangumi_list')
  .then(res => res.json())
  .then(data => {
    bangumi_list.value = data
  })
</script>

# 动漫番组放送信息

<el-skeleton :rows="10" animated  v-if="!bangumi_list"/>
<el-tabs v-else>
  <el-tab-pane :label="`周${day}`" v-for="day in w">
    <div v-for="fan in bangumi_list[day]">
      <el-tag effect="dark">{{ fan['date'] }}</el-tag>
      {{ fan['title']['cn'] }} 
    </div>
  </el-tab-pane>
</el-tabs>