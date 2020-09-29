import {request} from './request'

/**
 * 得到gasInfo
 */
export const getGasInfo=async ()=>{
 return  await request({
            url: "/token/gasInfo"
        })
}