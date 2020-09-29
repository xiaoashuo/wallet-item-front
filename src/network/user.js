import {request} from './request'

export function userLogin(data){
  return  request({
        url: "/user/login",
        method: "post",
        data: data
    })
}
