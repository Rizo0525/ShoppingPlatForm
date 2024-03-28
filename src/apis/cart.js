import {instance} from '@/utils/http'

export async function addCartAPI({skuId,count}){
    return instance.request({
        url:'/member/cart',
        method:"POST",
        data:{
            skuId,
            count
        }
    })
}


export async function  getCartAPI(){
    return instance.get('/member/cart')
}

export async function deleteCartAPI(ids){
    return instance.request({
        method:"DELETE",
        url:'/member/cart',
        data:{
            ids
        }
    })
}

export async function mergeCartAPI(data){
    return instance.request({
        url:'/member/cart/merge',
        method:"POST",
        data
    })
}