<template>
    <el-dropdown-menu>
        <el-dropdown-item v-for="i in historyList" @click="currentChatID = i.chatId">
            <div class="flex items-center justify-between w-full">
                <div>
                    {{ i.chatTitle ? i.chatTitle : '新对话' }}
                </div>
                <el-tooltip content="删掉这个对话" placement="top" effect="light">
                    <el-icon @click.left="$emit('removeChat', i.chatId)">
                        <Remove />
                    </el-icon>
                </el-tooltip>
            </div>
        </el-dropdown-item>
    </el-dropdown-menu>
</template>

<script setup lang="ts">
import { ElDropdownItem, ElDropdownMenu, ElTooltip, ElIcon } from 'element-plus'
import { Remove } from '@element-plus/icons-vue';
import IHistory from '../types/IHistory';

const historyList = defineModel<IHistory[]>('historyList')
const currentChatID = defineModel('currentChatID')

defineEmits(['removeChat'])
</script>

<style scoped></style>