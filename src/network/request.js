import axios from 'axios'


export function request(config) {
    const instance = axios.create({
            // 请求根路径
            baseURL: 'http://152.136.185.210:8000/api/w6',
            // 设置超时时间
            timeout: 5000,
        })
        //get请求 url查询对象  params:{id:12}
        // post请求  data:{}
        // 跨域是否是否带Token  withCredentials:false
        // 自定义请求头  headers:{'x-Requested-With':'XMLHttpRequest'}
        // 请求前数据处理 transformRequest:[function(data){}]
        // 请求后数据处理 transformResponse:[function(data){}]
        // 拦截器
    axios.interceptors.request.use(config => {
            return config
        }, err => {
            console.log(err);
        })
        // 响应拦截
    axios.interceptors.response.use(res => {
            return res.data
        }, err => {
            console.log(err);
        })
        // 返回值是promise
    return instance(config)
}