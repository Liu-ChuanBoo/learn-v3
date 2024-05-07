<template>
兄弟
<el-button @click="handleClick"></el-button>
</template>
<script setup lang="ts" >
import mitts from '@/hooks/mitt'
const handleClick = () => {
    console.log(333);
    
    mitts.emit('handleChange')
}
</script>
<style lang="scss" scoped>

</style>