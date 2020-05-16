import axios from 'axios'
// 使用的时候先导入
// axios({
//   url:'http://sc.signalping.com/webapi/debug/',
    // method:'get',
    // params:{
    //   type:'pop',
    //   page:1
    // }
    // params专门针对get请求的参数拼接
// }).then(res=>{
//   console.log(res)
// })


// 



export function request(config) {
  // 1.创建axios的实例,config是对象类型
  const instance = axios.create({
   
    baseURL: 'https://sc.signalping.com',
    // 服务器的ip,和端口号
    timeout: 5000
  })

  // 2.axios的拦截器
  // 2.1.请求拦截的作用
  instance.interceptors.request.use(config => {
    return config
  }, err => {
    // console.log(err);
  })

  // 2.2.响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err);
  })

  // 3.发送真正的网络请求
  return instance(config)
}
