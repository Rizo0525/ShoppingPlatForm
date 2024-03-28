import {instance} from '@/utils/http'

export function login({account,password}){
    return instance({
        url:'/login',
        method:'POST',
        data:{
            account,password
        }
    })
}