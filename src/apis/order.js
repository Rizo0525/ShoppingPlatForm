import {instance} from '@/utils/http'

export async function getCheckInfoAPI(){
    return instance.request({
        url:'/member/order/pre',
        method:'GET'
    })
}


export async function createOrderAPI(data){
    return instance.request({
        url:'/member/order',
        method:'POST',
        data
    })
}


export async function getOrderAPI(id){
    return instance.request({
        url:`/member/order/${id}`,
    })
}


export const getUserOrder = (params) => {
    return instance.request({
      url:'/member/order',
      method:'GET',
      params
    })
}