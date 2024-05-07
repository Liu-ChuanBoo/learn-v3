<template>
    管理页面
    <br>
    <h2 style="color:red">
        {{ userName }}
        <br>
        {{ keys }}---{{ values }}
        <el-button @click="handleTest">测试</el-button>
    </h2>
    <br>
    <user :name="userName" :title="'ceshi'" num="333" @myclick="onMyclick" ref="used" v-model:key="keys"
        v-model:values="values"></user>
    <bro></bro>
    <baidu></baidu>
</template>
<script setup lang="ts" >
import { provide, reactive, ref } from 'vue'
import user from './user.vue'
import bro from './bro.vue'
import baidu from './baidu.vue'
const userName = ref('下班打豆豆')
const onMyclick = (value) => {
    console.log(value);

}

const used = ref(null)
const handleTest = () => {
    console.log(used.value.childName);

}

const keys = ref(9)
const values = ref('model传参')

const str = ref('dsfsd')
const arr = reactive([])
provide('str', str.value)
</script>
<style lang="less" scoped></style>