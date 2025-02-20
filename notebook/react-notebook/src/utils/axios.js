import axios from "axios";
import { Toast } from "zarm";

axios.defaults.baseURL = '/api'
// 跨域 默认不携带cookie
axios.defaults.withCredentials = true // 跨域请求携带cookie
// 配置请求头 约定 让后端知道 这是一个ajax请求 异步的
axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
// JWT token Authorization 授权码
axios.defaults.headers['Authorization'] = `${localStorage.getItem('token')} || null`
axios.defaults.headers.post['Content-Type'] = 'application/json'

// 响应拦截
axios.interceptors.response.use(res => {
    console.log('响应拦截···', res.data)
    // 统一处理错误
    // 加工数据
    if (typeof res.data !== 'object') {
        Toast.show('服务端异常')
        // reject resolve
        return Promise.reject(res)
    }

    if (res.data.code !== 200) {
        if(res.data.msg){
            Toast.show(res.data.msg)
        }
        if(res.data.code === 401){ // 状态码 401 未登录
            // 跳转到登录页
            window.location.href = '/login'
        }
        return Promise.reject(res.data)
    }
    return res.data
})

export default axios