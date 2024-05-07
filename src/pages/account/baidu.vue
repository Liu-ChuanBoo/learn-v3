<template>
    <baidu-map class="map" @click="clickBaidu" ak="8IVxKuM5iokp9WhNU2T0LoCVZyriCu2b" v="3.0" type="API"
        :center="{ lng: 116.404, lat: 39.915 }" :zoom="15">
    </baidu-map>
</template>
   
<script setup>
import { BaiduMap } from 'vue-baidu-map-3x'
const clickBaidu = (type, target, point, pixel, overlay) => {
    console.log(type);
}
</script>
   
<style>
.map {
    width: 100%;
    height: 300px;
}
</style>