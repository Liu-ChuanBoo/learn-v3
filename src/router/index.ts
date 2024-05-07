import { createRouter, createWebHistory, } from 'vue-router'
import Login from '../pages/login.vue';
import Layout from '@/layout/index.vue'

import accountRoutes from './modules/account'

export const routes = [
    {
        path: '/',
        redirect: '/home',
        component: Layout,
        children: [
            {
                path: '/home',
                component: () => import('../pages/index.vue'),
                meta: {
                    title: '系统首页',
                    icon: 'HomeFilled'
                }
            },
            {
                path: '/admin',
                component: () => import('../pages/account/admin.vue'),
                meta: {
                    title: '系统管理',
                    icon: 'HomeFilled'
                }
            },
        ]
    },
    {
        name: 'login',
        path: '/login',
        component: Login
    },
    {
        name: 'index',
        path: '/index',
        component: () => import("../layout/index.vue")
    }
]
const asyncRoutes = [
     accountRoutes
]

const router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes: [...routes, ...asyncRoutes],
    history: createWebHistory(),

})
router.beforeEach(async (to, from, next) => {
   
    next()
})


export default router
