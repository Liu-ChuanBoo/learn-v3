
import Layout from '@/layout/index.vue'
import User from '@/pages/account/user.vue'
import Admin from '@/pages/account/admin.vue'

// 账户管理是一个整理
export default {
    path: '/account', // 账户管理的路由
    redirect: '/account/admin', // 路由的重定向
    component: Layout,
    meta: {
        title: '账户管理',
        icon: 'UserFilled'
    },
    children: [
        {
            path: '/account/admin',
            component: Admin,
            meta: {
                title: '管理员列表',
                icon: 'User'
            }
        },
        {
            path: '/account/user',
            component: User,
            meta: {
                title: '用户列表',
                icon: 'User'
            }
        }
    ]
}