<template>
    {{ name }}
    <div v-bind="$attrs">
        <el-button @click="clickToPar">
            传参
        </el-button>
    </div>
    <child></child>
</template>
<script setup lang="ts" >
import { defineProps,defineExpose,useAttrs, inject ,onUnmounted} from 'vue';
import child from './child.vue';
const pros = defineProps({
    name: String,
    
})
const emit = defineEmits(['myclick','update:key','update:value'])
const clickToPar = ()=> {
    emit('myclick',{age: 15,sex: 1})
    console.log(str)
    // emit("update:key",333)
    // emit("update:value",'dsdfdsfa')
}

const attr = useAttrs()
defineExpose({
        childName: "这是子组件的属性",
        someMethod(){
            console.log("这是子组件的方法")
        }
    })
const str = inject('str')
import mitt from '@/hooks/mitt'

const someMethed = () => {  
    console.log(111)
}
// A组件打开事件总线监听，暴露给mitt，B组件调用时，通过emit('事件名称')触发A组件的函数
mitt.on('handleChange',someMethed)
onUnmounted(()=>{
    mitt.off('handleChange',someMethed)
})

</script>
<style lang="less" scoped></style>