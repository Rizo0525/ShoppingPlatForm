import { instance } from "@/utils/http";


export async function getAllCategory(){
    return instance.get('/home/category/head')
}

export async function getHomeBanners(params={}){
    let {distributionSite ='1'} = params
    return instance.get('/home/banner',{
        params:{
            distributionSite
        }
    })
}

export async function getNewGoods(){
    return instance.get('/home/new')
}

export async function getHotGoods(){
    return instance.get('/home/hot')
}

export async function getHomeBrands(){
    return instance.get('/home/brand')
}

export async function getGoods(){
    return instance.get('/home/goods')
}