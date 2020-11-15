import {request} from "./request";

export function getContractList() {
  return request({
    url: '/contract/list',
    method: 'get'
  })
}

export function deployContract(data) {
  return request({
    url: '/contract/deploy',
    method: 'post',
    data: data
  })

}
