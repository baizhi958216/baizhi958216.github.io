<script setup>
import { ref } from 'vue'
import { ElTabs,ElTabPane,ElSkeleton,ElTag } from 'element-plus'
import 'element-plus/es/components/tabs/style/css'
import 'element-plus/es/components/tab-pane/style/css'
import 'element-plus/es/components/skeleton/style/css'
import 'element-plus/es/components/tag/style/css'

const bangumi_list = ref()

fetch('https://api.okmiku.com/bangumi_list', { method : "post" })
  .then(res => res.json())
  .then(data => {
    bangumi_list.value = data.data
  })
</script>

# 动漫番组放送信息

<el-skeleton :rows="10" animated  v-if="!bangumi_list"/>
<el-tabs v-else>
  <el-tab-pane label="周一">
    <div v-for="fan in bangumi_list['一']">
      <el-tag effect="dark">{{ fan['date'] }}</el-tag>
      {{ fan['title']['cn'] }} 
    </div>
  </el-tab-pane>
  <el-tab-pane label="周二">
    <div v-for="fan in bangumi_list['二']">
      <el-tag effect="dark">{{ fan['date'] }}</el-tag>
      {{ fan['title']['cn'] }} 
    </div>
  </el-tab-pane>
  <el-tab-pane label="周三">
    <div v-for="fan in bangumi_list['三']">
      <el-tag effect="dark">{{ fan['date'] }}</el-tag>
      {{ fan['title']['cn'] }} 
    </div>
  </el-tab-pane>
  <el-tab-pane label="周四">
    <div v-for="fan in bangumi_list['四']">
      <el-tag effect="dark">{{ fan['date'] }}</el-tag>
      {{ fan['title']['cn'] }} 
    </div>
  </el-tab-pane>
  <el-tab-pane label="周五">
    <div v-for="fan in bangumi_list['五']">
      <el-tag effect="dark">{{ fan['date'] }}</el-tag>
      {{ fan['title']['cn'] }} 
    </div>
  </el-tab-pane>
  <el-tab-pane label="周六">
    <div v-for="fan in bangumi_list['六']">
      <el-tag effect="dark">{{ fan['date'] }}</el-tag>
      {{ fan['title']['cn'] }} 
    </div>
  </el-tab-pane>
  <el-tab-pane label="周日">
    <div v-for="fan in bangumi_list['日']">
      <el-tag effect="dark">{{ fan['date'] }}</el-tag>
      {{ fan['title']['cn'] }} 
    </div>
  </el-tab-pane>
</el-tabs>