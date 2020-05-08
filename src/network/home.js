import {request} from "./request";
// 封装对首页的数据
// 封装这样的函数，对首页的请求
export function getHomeMultidata() {
  return request({
    url: '/webapi/debug/',
    
  })
}
console.log(request.config)

// export function getHomeGoods(type, page) {
//   return request({
//     url: '',
//     params: {
//       type,
//       page
//     }
//   })
// }


// 函数调用 -> 压入函数栈(保存函数调用过程中所有变量)
// 函数调用结束 -> 弹出函数栈(释放函数所有的变量)
// function test() {
//   const names = ['why', 'aaa']
// }
//
// test()
//
// test()

// let = []



// const nums1 = [20, 11, 222]
// const nums2 = [111, 22, 333]

// for (let n of nums1) {
//   totalNums.push(n)
// }

// totalNums.push(...nums1)
