import Vue from 'vue'
import VueRouter from 'vue-router'
import {getToken} from "../network/auth";
Vue.use(VueRouter)

const HOME = () => import('@/views/home/home')
const PROFILE = () => import('@/views/profile/profile')
const LOGIN = () => import('@/views/login/Login')
const HOME_DETAIL = () => import('@/views/detail/Detail')
const COLLECT_MONEY = () => import('@/views/collect/CollectMoney')
const TRANSFER = () => import('@/views/transfer/Transfer')
const CONTRACT = () => import('@/views/contract/ContractList')
const CONTRACT_PUBLISH = () => import('@/views/contract/ContractPublish')
const WALLET_LIST = () => import('@/views/wallet/WalletList')
const WALLET_DETAIL = () => import('@/views/wallet/WalletDetail')

const NOT_FOUND = () => import('../components/common/exceptions/404')
//1.存放静态路由信息
const routes = [
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
    path: '/detail',
    component: HOME_DETAIL
  },
  {
    path: '/collect/money',
    component: COLLECT_MONEY
  },
  {
    path: '/transfer',
    component: TRANSFER

  },
  {
    path: '/contract/publish',
    component: CONTRACT_PUBLISH

  },
  {
    path: '/contract',
    component: CONTRACT

  },
  {
    path: '/wallet/list',
    component: WALLET_LIST

  },
  {
    path: '/wallet/detail',
    component: WALLET_DETAIL

  },
  {
    path: '*',
    name: 'NOTFOUND',
    component: NOT_FOUND
  }
]

// router.beforeEach((to,from,next)=>{
//   if (to.path==='/login'){
//     next()
//   }else{
//     const token=getToken();
//     if (!token){
//
//       next('/login')
//     }else{
//       next();
//     }
//   }
// })
//2.创建router实例

const createRouter = () => new VueRouter({
  mode: "history",
  routes
})
const router = createRouter()

export function resetRouter () {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // the relevant part
}
router.beforeEach((to,from,next)=>{
  const token=getToken();
  if (to.path==='/login'){
    if (token){
      next('/home')
    }else{
      next()
    }
  }else{
    if (!token){
      next('/login')
    }else{
      next();
    }
  }
})
export default router
