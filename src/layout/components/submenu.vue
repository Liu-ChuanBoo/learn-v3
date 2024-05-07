<template>
    <template v-for="subItem in menuList">
        <el-sub-menu v-if="subItem.children?.length" :index="subItem.path">
            <template #title>
                <el-icon>
                    <component :is="subItem.meta.icon"></component>
                </el-icon>
                <span class="sle">{{ subItem.meta.title }}</span>
            </template>
            <submenu :menuList="subItem.children"></submenu>
        </el-sub-menu>
        <el-menu-item :index="subItem.path" v-else @click="handleClickMenu(subItem)">
            <el-icon>
                <component :is="subItem.meta.icon"></component>
            </el-icon>
            <template #title>
                <span class="sle">{{ subItem.meta.title }}</span>
            </template>
        </el-menu-item>
    </template>
</template>
<script setup lang="ts" >
import { useRouter } from 'vue-router'
defineProps<{ menuList: Menu.MenuOptions[] }>()

const router = useRouter()
const handleClickMenu = (item: Menu.MenuOptions) => {
    router.push(item.path)
}
</script>
<style lang="less" scoped></style>