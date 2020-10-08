
import Axios from 'axios'
import {getToken, setToken} from "./auth";
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
    timeout: 10000
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
         return res.data;
      },err=>{
        console.log(err)
       return  Promise.reject(err)
      });
      //3.发送真正的网络请求
      return instance(config)
}


//  export const get = (url,params)=>{
//   params = params || {};
//   return new Promise((resolve,reject)=>{
//       // axiso 自带 get 和 post 方法
//       $http.get(url,{
//           params,
//       }).then(res=>{
//           if(res.data.status===0){
//               resolve(res.data);
//           }else{
//               alert(res.data.msg)
//           }
//       }).catch(error=>{
//           alert('网络异常');
//       })
//   })
// }

// export const post = (url,params)=>{
//   params = params || {};
//   return new Promise((resolve,reject)=>{
//       $http.post(url,params).then(res=>{
//           if(res.data.status===0){
//               resolve(res.data);
//           }else{
//               alert(res.data.msg);
//           }
//       }).catch(error=>{
//           alert('网络异常');
//       })
//   })
// }
