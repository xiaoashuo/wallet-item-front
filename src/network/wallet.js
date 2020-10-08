import {request} from "./request";

export function getWalletBalance(address) {
   return request({
     url: '/wallet/balance',
     method: 'get',
     params:{
       address: address
     }
   })
}

/**
 * 得到钱包列表
 * @returns {AxiosPromise}
 */
export function getWalletList() {
     return request({
       url: '/wallet',
       method: 'get'
     })
}

/**
 * 下载钱包文件
 * @param address
 * @returns {AxiosPromise}
 */
export function downloadWallet(address) {
  return request({
    url: `/wallet/export/${address}`,
    method: 'get',
    responseType: 'blob'
  })
}
