import {request} from './request'

/**
 * 得到gasInfo
 */
export const getGasInfo=async ()=>{
 return  await request({
            url: "/token/gasInfo"
        })
}

export function getTokenBalance(contractAddress,walletAddress) {
   return request({
     url: '/token/balance',
     method:'get',
     params:{
       "address": walletAddress,
       "contractAddress": contractAddress
     }
   })
}
