import {request} from './request'

/**
 * 得到gasInfo
 */
export const getGasInfo = () => {
  return request({
    url: "/token/gasInfo"
  });
}

export function getTokenBalance(contractAddress, walletAddress) {
  return request({
    url: '/token/balance',
    method: 'get',
    params: {
      "address": walletAddress,
      "contractAddress": contractAddress
    }
  })
}

/**
 * 执行本币转账
 * @param data
 * @returns {AxiosPromise}
 */
export function transferMoney(data) {
  return request({
    url: '/wallet/transfer',
    method: 'post',
    data: data
  })
}

/**
 * 执行代币转账
 * @param data
 * @returns {AxiosPromise}
 */
export function transferTokenMoney(data) {
  return request({
    url: '/token/send',
    method: 'post',
    data: data
  })
}
