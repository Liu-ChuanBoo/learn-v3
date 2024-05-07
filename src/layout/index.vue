<!-- src/layout/index.vue -->
<template>
    <div class="common-layout">
        <el-container>
            <el-aside width="200px">
                <LayoutMenu></LayoutMenu>
            </el-aside>
            <el-container>
                <el-header>
                    <headr></headr>
                </el-header>
                <el-main>
                    <routerView />
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
<script setup lang="ts">
import headr from "./head.vue";
import LayoutMenu from "./menu.vue";
</script>
   
<style lang="scss">
html,
body,
#app,
.common-layout {
    height: 100%;
}

.common-layout .el-container {
    height: 100%;
    background-color: #f0f2f5;
}

.common-layout .el-container .el-aside {
    background-color: #001529;
    // height: 100%;
}

.common-layout .el-container .el-header {
    background-color: #fff;
}

.common-layout .el-container .el-main {
    background-color: #fff;
    margin: 16px;
}

.common-layout .el-container .el-footer {
    background-color: #fff;
}

.el-header {
    height: 60px;
}
</style>