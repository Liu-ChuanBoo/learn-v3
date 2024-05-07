<template>
<div class="child">
孙子组件
{{ str }}
</div>
</template>
<script setup lang="ts" >
import { inject } from 'vue';

const str = inject('str')
</script>
<style lang="scss" scoped>
.child {
    background: #50dbb8;
    width: 300px;
    height: 300px;
}
</style>