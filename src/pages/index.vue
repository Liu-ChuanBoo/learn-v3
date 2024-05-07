<template>
    <div>
        首页
        <h1>{{ osName }}</h1>
        <router-link to="/admin">管理页面</router-link>
    </div>
</template>
<script setup lang="ts" >
import { onMounted, ref } from 'vue';
const osName = ref('')
onMounted(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Windows
    if (userAgent.indexOf('Windows') > -1) {
        osName.value = 'Windows';

        // Mac OS
    } else if (userAgent.indexOf('Mac') > -1) {
        osName.value = 'Mac OS';

        // Linux
    } else if (userAgent.indexOf('Linux') > -1) {
        osName.value = 'Linux';

        // iOS
    } else if (userAgent.indexOf('iPhone') > -1 || userAgent.indexOf('iPad') > -1 || userAgent.indexOf('iPod') > -1) {
        osName.value = 'iOS';

        // Android
    } else if (userAgent.indexOf('Android') > -1) {
        osName.value = 'Android';

        // Unknown
    } else {
        osName.value = 'Unknown';
    }
});
</script>
<style lang="less" scoped></style>