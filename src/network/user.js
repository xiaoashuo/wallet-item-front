import {request} from './request'

export function userLogin(data) {
  return request({
    url: "/user/login",
    method: "post",
    data: data
  })
}


/**
 * 获取用户信息
 * @param userId
 * @returns {AxiosPromise}
 */
export function getUserInfo() {
  return request({
    url: '/user/info',
    method: 'get'
  })
}

/**
 * 得到用户关联合约
 * @param walletAddress
 * @returns {AxiosPromise}
 */
export const getUserRelationContracts = (walletAddress) => {
  return request({
    url: '/user/contract/list',
    method: 'get',
    params: {
      walletAddress: walletAddress
    }
  });
}
export const userLogout=()=>{
  return request({
    url: '/user/logout',
    method: 'get'
  })
}

