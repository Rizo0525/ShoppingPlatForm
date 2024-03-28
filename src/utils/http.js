import axios from "axios";
// import { useUserStore } from "@/stores/useUser";
import {useUserStore} from '@/stores/useUser'
import {router} from '@/router'


const instance = axios.create({
    baseURL:'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout:5000
})

instance.interceptors.request.use(function(config){
    let store = useUserStore()

    let token = store.userInfo.token
    if(token){
        config.headers.Authorization = 'Bearer ' + token
    }
    //请求之前做些什么
    return config;
},function(error){
    return Promise.reject(error)
})

instance.interceptors.response.use(function(response){
    //对响应的数据做些什么
    // console.log(response)
    return response.data
},function(error){
    let store = useUserStore()
    
    ElMessage({
        message: error.response.data.message,
        type: 'warning',
    })
    if(error.response.status === 401){
        store.$reset()
        // console.log(router)
        // console.log('跳转')
        router.push('/login')
    }
    return Promise.reject(error)
}) 

export {instance}