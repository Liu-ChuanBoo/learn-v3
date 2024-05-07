import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index'
import pinia from "@/store";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import http from '@/utils/request'
const app = createApp(App)
app.use(ElementPlus).use(router).use(pinia).use(http).mount("#app");
