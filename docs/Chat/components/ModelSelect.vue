<template>
  <div class="flex items-center">
    <div class="min-w-[120px]">模型：</div>
    <el-select v-model="requestModel" placeholder="选择您的小猫" size="large">
      <el-option v-for="item in tags" :key="item.name" :label="item.name" :value="item.name">
        <div class="flex items-center justify-between">
          <div>
            {{ item.name }}
          </div>
          <el-tooltip content="删掉这个模型" placement="top" effect="light" >
            <el-icon @click.left=" $emit('removeModel', item.name)">
            <Remove />
            </el-icon>
          </el-tooltip>
        </div>
      </el-option>
    </el-select>
  </div>
</template>

<script setup lang="ts">
import { ElSelect, ElOption, ElIcon, ElTooltip } from "element-plus";
import { Remove } from '@element-plus/icons-vue'
const requestModel = defineModel<any>("requestModel");

const tags = defineModel<{ name: string }[]>("tags");
defineEmits(["removeModel"]);
</script>

<style scoped lang="scss"></style>
