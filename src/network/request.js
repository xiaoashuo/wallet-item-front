
import Axios from 'axios'

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
        return config;
      },err=>{
        return Promise.reject(error)
      });
      //响应拦截器
      instance.interceptors.response.use(res=>{
         return res.data;
      },err=>{
       return  Promise.reject(error)
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
