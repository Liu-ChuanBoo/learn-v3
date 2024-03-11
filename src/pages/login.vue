<template>
    <div @click="tologin">登录</div>
    <h2> {{ store.name }}</h2>
    <h1 @click="changeName">修改名称</h1>
    <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick" />
</template>
<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router'
import { useStore } from "../store/index";
import { getCurrentInstance } from 'vue'
const router = useRouter()
const store = useStore()
function tologin() {
    router.push({
        name: 'index'
    })
}
function changeName(): void {
    store.name = '索索'
}
interface Tree {
    label: string
    children?: Tree[]
}

const handleNodeClick = (data: Tree) => {
    console.log(data)
}

const data: Tree[] = [
    {
        label: 'Level one 1',
        children: [
            {
                label: 'Level two 1-1',
                children: [
                    {
                        label: 'Level three 1-1-1',
                    },
                ],
            },
        ],
    },
    {
        label: 'Level one 2',
        children: [
            {
                label: 'Level two 2-1',
                children: [
                    {
                        label: 'Level three 2-1-1',
                    },
                ],
            },
            {
                label: 'Level two 2-2',
                children: [
                    {
                        label: 'Level three 2-2-1',
                    },
                ],
            },
        ],
    },
    {
        label: 'Level one 3',
        children: [
            {
                label: 'Level two 3-1',
                children: [
                    {
                        label: 'Level three 3-1-1',
                    },
                ],
            },
            {
                label: 'Level two 3-2',
                children: [
                    {
                        label: 'Level three 3-2-1',
                    },
                ],
            },
        ],
    },
]

const defaultProps = {
    children: 'children',
    label: 'label',
}

const { proxy } = getCurrentInstance() as any;
function login(): void {
    let data = {
        roleId: "A",
        username: "dpc",
        password: "dpc12345",
        sysType: "zhfw"
    }
    proxy.$post("/index/login", data)
        .then((response: any) => {
            console.log(response)
            router.push({
                name: 'index'
            })
        })
}
</script>

