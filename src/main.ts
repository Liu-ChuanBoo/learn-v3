import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import http from '@/utils/request'
createApp(App).use(router).use(createPinia()).use(http).use(ElementPlus).mount('#app')
