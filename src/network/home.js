import {request} from "./request";
// 封装对首页的数据
// 封装这样的函数，对首页的请求
export function getHomeMultidata() {
  return request({
    url: '/webapi/debug/',
    // /home///'
    
  })
}


// export function getHomeGoods() {
//   return 
// }
// 请求的时候要告诉type,page，同时baseulr已经设置好了
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












// 把一个数据放进另外一个数组
// let totalNums = []
// const nums1 = [20, 11, 222]
// 可以直接totalNums = nums1,但是有以下这种情况的时候，如果还是直接赋值了，第一个就没了，所以应该是都往第一个里边塞，用遍历
// const nums2 = [111, 22, 333]，
// 用遍历,遍历要塞的数组，
// for (let n of nums1) { 
//   totalNums.push(n)
// }

// 另一种方法
// totalNums.push(...nums1)
// ...把nums1里的元素解析出来，依次塞进totalNums里边，
// Push这个函数可以传递可变对象




// 把一个数据放进另外一个数组
// let totalNums = []
// const nums1 = [20, 11, 222]
// 可以直接totalNums = nums1,但是有以下这种情况的时候，如果还是直接赋值了，第一个就没了，所以应该是都往第一个里边塞，用遍历
// const nums2 = [111, 22, 333]，
// 用遍历,遍历要塞的数组，
// for (let n of nums1) { 
//   totalNums.push(n)
// }

// totalNums.push(...nums1)
// totalNums.push(...nums1)
// ...把nums1里的元素解析出来，依次塞进totalNums里边，
// Push这个函数可以传递可变对象

