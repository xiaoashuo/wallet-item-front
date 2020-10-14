
import Axios from 'axios'
import {getToken, logout} from "./auth";
import router from "../router";

// function createBaseInstance(){
//     //1、创建Axios的实例
//     const instance = Axios.create({
//       //公共url前缀(接口)
//       baseURL: '/api',
//       //超时时间
//       timeout: 10000
//     });
//     return instance;
//   }
// const $instance=Axios.create({
//     //公共url前缀(接口)
//     baseURL: '/api',
//     //超时时间
//     timeout: 10000
// })
export  function request(config) {

      //1.创建axios实列
  const instance = Axios.create({
    //公共url前缀(接口)
    baseURL: '/api',
    //超时时间
    timeout: 30000
  });
      // 2. axios拦截器
      //请求拦截器
      instance.interceptors.request.use(config=>{

        if (config.url.indexOf("/user/login")===-1){
          config.headers.Authorization=getToken()
        }
        return config;
      },err=>{
        return Promise.reject(err)
      });
      //响应拦截器
      instance.interceptors.response.use(res=>{
         const  result=res.data;
         if (result.code && result.code==1001){
           logout()
           router.replace({
             path: '/login',
           })
         }
         return result;
      },err=>{
        console.log(err)
       return  Promise.reject(err)
      });
      //3.发送真正的网络请求
      return instance(config)
}


export function fetchPost(url, params) {
  return new Promise((resolve, reject) => {
    Axios.post(url, params)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err);
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export function fetchGet(url, param) {
  return new Promise((resolve, reject) => {
    Axios.get(url, {
      params: param
    })
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
