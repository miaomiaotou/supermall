import {request} from "./request";
// 封装对首页的数据
// 封装这样的函数，对首页的请求
export function getHomeMultidata() {
  return request({
    url: '/webapi/debug/',
    // /home///'
    
  })
}

// 请求的时候要告诉type,page，baseulr已经设置好了
export function getHomeGoods(type,page) {
  return request({
    url:'home/data',
    params:{
      type,
      data
    }
  })
}

// 函数调用 -> 压入函数栈(保存函数调用过程中所有变量)
// 函数调用结束 -> 弹出函数栈(释放函数所有的变量)
// function test() {
//   const names = ['why', 'aaa']
// }
//
// test()
//
// test()




// 把一个数组放进另外一个数组里
// let   nums1 = []
// const nums2 = [111, 22, 333]
// 
// 这样num1 =nums2也行，但是不太好
// 但是有一个新的

// for (let n of nums1) {
//   totalNums.push(n)
// }

// totalNums.push(...nums1)
