import { request } from "./request"
// 对应拦截器那点


export function getdetail(iid){


  return request({
      url:'detail',
      params:{
          iid
      }
  })
}