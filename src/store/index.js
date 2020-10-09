import Vue from 'vue'
import Vuex from 'vuex'
import {INCREMENT, SET_TOKEN, SET_USER_INFO, SET_WALLET_ADDRESS} from './mutation-type'
import {removeToken} from "../network/auth";
Vue.use(Vuex)

const state={
    //当前选中钱包地址
    walletAddress: sessionStorage.getItem("walletAddress")?sessionStorage.getItem("walletAddress"):'',
    token: sessionStorage.getItem("token")?sessionStorage.getItem("token"):'',
    userInfo: sessionStorage.getItem("userInfo")?JSON.parse(sessionStorage.getItem("userInfo")):{} ,


}
const getters={
   getUserInfo(state){
     return state.userInfo
   },
   getToken(state){
     return state.token
   },
   getWalletAddress(state){
     return state.walletAddress
   },

}
const mutations={
    [SET_WALLET_ADDRESS](state,value){
       state.walletAddress=value
    },
    [SET_USER_INFO](state,value){
      state.userInfo=value
    },
    [SET_TOKEN](state,value){
      state.token=value
    },
  saveState(state){
     sessionStorage.setItem("walletAddress",state.walletAddress)
     sessionStorage.setItem("token",state.token)
     sessionStorage.setItem("userInfo",JSON.stringify(state.userInfo))
  },

}
const actions={
    [SET_WALLET_ADDRESS]({commit},walletAddress){
       commit(SET_WALLET_ADDRESS,walletAddress)
    },
    setUserInfo({commit},payload){
      commit(SET_USER_INFO,payload)
    },
    setToken({commit},value){
      commit(SET_TOKEN,value)
    },
   saveState({commit}){
     commit("saveState")
   },
  logout({commit}){
    commit(SET_TOKEN,'')
    commit(SET_WALLET_ADDRESS,'')
    commit(SET_USER_INFO,{})
    sessionStorage.clear()
  }

}
const debug=process.env.NODE_ENV !== 'production';
const store=new Vuex.Store({
     // ...
    strict: debug,
    state,
    getters,
    mutations,
    actions
})

export default store
