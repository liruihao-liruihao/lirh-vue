import axios from 'axios'

export function request(config) {
    //1、创建axios实例
    const instance=axios.create({
        baseURL:'http://localhost:8099',
        timeout:6100,
        withCredentials:true
    })
    //2、axios的拦截器
    // 2.1、请求 拦截器
    instance.interceptors.request.use(config=>{
        return config
    },err=>{

    })
    // 2、响应拦截
    instance.interceptors.response.use(res=>{
        if (res.data.status===102){
            location.href="/login";
        }else{
            return res.data;
        }

    },err=>{
        console.log(err);
    })
    // 3、真正发送请求
    return instance(config)

}