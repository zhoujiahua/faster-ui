import axios from 'axios'

// 创建 axios 实例
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // api 的 base_url
  timeout: 5000 // 请求超时时间
})

// request 拦截器
service.interceptors.request.use(
  config => {
    // 在发送请求之前做些什么
    return config
  },
  error => {
    // 对请求错误做些什么
    console.error(error)
    Promise.reject(error)
  }
)

// response 拦截器
service.interceptors.response.use(
  res => {
    // 对响应数据做些什么
    if (res.status !== 200) {
      console.error(res.statusText)
      return Promise.reject(new Error(res.statusText || 'Error'))
    } else {
      return res.data
    }
  },
  error => {
    // 对响应错误做些什么
    console.error('Error', error)
    return Promise.reject(error)
  }
)

export default service
