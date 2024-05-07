<template>
    <div class="aside-box">

        <div class="logo-box">
            <img class="logo" src="../assets/img/logo.png" alt="" @click="isCollapse = !isCollapse">
        </div>
        <el-scrollbar>

            <el-menu default-active="2" class="el-menu-vertical-demo" :collapse="isCollapse" active-text-color="#ffd04b"
                background-color="#545c64" text-color="#fff">
                <submenu :menuList="menuList"></submenu>
            </el-menu>
        </el-scrollbar>
    </div>
</template>
  
<script lang="ts" setup>
import { computed, ref } from 'vue'
import submenu from './components/submenu.vue'

const isCollapse = ref(false)

const menuList = computed(() => {
    return []

})
</script>
  
<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
    height: 100%;
}

.el-scrollbar {
    height: calc(100% - 60px);

    :deep(.el-scrollbar__view) {
        height: 100%;
    }
}

.aside-box {
    height: 100%;
}

.logo-box {
    width: 100%;
    background: #515050;
    height: 60px;
    text-align: center;

    .logo {
        width: 140px;
        height: 100px;
        margin-top: -15px;
    }
}
</style>
  