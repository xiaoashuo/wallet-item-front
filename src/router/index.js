import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const HOME=()=>import('@/views/home/home')
const PROFILE=()=>import('@/views/profile/profile')
const LOGIN=()=>import('@/views/login/Login')

const NOT_FOUND=()=> import('../components/common/exceptions/404')
//1.存放静态路由信息
const routes=[
    {
       path: '/',
       redirect: '/login'
    },
    {
        path: '/login',
        component: LOGIN
    },
    {
       path: '/home',
       component: HOME
    },
    {
        path: '/profile',
        component: PROFILE
    },
   {
       path: '*',
       name: 'NOTFOUND',
       component: NOT_FOUND
   }
]
//2.创建router实例 
const router=new VueRouter({
    mode: "history",
    routes
})

export default router