import Vue from 'vue'
import Vuex from 'vuex'
import {INCREMENT} from './mutation-type'
Vue.use(Vuex)

const state={
    count: 0
}
const getters={
   getCount(state){
       return state.count
   }
}
const mutations={
    [INCREMENT](state){
        return state.count++
    }
}
const actions={
    increment(context){
        context.commit(INCREMENT)
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