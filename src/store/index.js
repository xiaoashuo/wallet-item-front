import Vue from 'vue'
import Vuex from 'vuex'
import {INCREMENT, SET_TOKEN, SET_USER_INFO, SET_WALLET_ADDRESS} from './mutation-type'
Vue.use(Vuex)

const state={
    count: 0,
    //当前选中钱包地址
    walletAddress: '',
    token: "",
    userInfo:{},


}
const getters={
   getCount(state){
       return state.count
   },
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
    [INCREMENT](state){
        return state.count++
    },
    [SET_WALLET_ADDRESS](state,value){
       state.walletAddress=value
    },
    [SET_USER_INFO](state,value){
      state.userInfo=value
    },
    [SET_TOKEN](state,value){
      state.token=value
    },


}
const actions={
    increment(context){
        context.commit(INCREMENT)
    },
    [SET_WALLET_ADDRESS]({commit},walletAddress){
       commit(SET_WALLET_ADDRESS,walletAddress)
    },
    setUserInfo({commit},payload){
      commit(SET_USER_INFO,payload)
    },
    setToken({commit},value){
      commit(SET_TOKEN,value)
    },

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
