// 封装axios,http工具模块
import axios from 'axios'

const http = axios.create({
  baseURL: 'http://blog.parade.net/v1',
  timeout: 5000
})

// 添加请求拦截器
http.interceptors.request.use((config) => {
  return config
}, (error) => {
  return Promise.reject(error)
})

// 添加响应拦截器
http.interceptors.request.use((response) => {
  // 2x状态吗触发函数
  //
  return response
}, (error) => {
  // 超出2xx，触发处理函数
  return Promise.reject(error)
})

export { http }