# 这辈子第一张to签

<div style="display:flex;flex-direction: column;gap:1rem;justify-content: center;align-items:center">
  <el-image style="width: 180px;" :src="url" />
  <el-tag type="danger" style="width:200px">小染</el-tag>
</div>

<script setup>
import { ref } from 'vue'
import { ElImage, ElTag } from 'element-plus'
import 'element-plus/es/components/image/style/css'
import 'element-plus/es/components/tag/style/css'

const url = ref('https://raw.githubusercontent.com/baizhi958216/baizhi958216.github.io/main/docs/AllDocs/KickMe/xiaoran.jpg')
</script>