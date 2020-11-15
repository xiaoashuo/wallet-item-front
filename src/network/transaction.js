import {request} from "./request";

export function getTransactionList(data) {
  return request({
    url: 'transaction/list',
    method: 'post',
    data: data
  })
}
