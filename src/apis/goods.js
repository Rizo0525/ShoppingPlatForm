
import { instance } from "@/utils/http";

export async function getGoodsDetails(id){
    return instance.get('/goods',{
        params:{
            id
        }
    })
}

/**
 * 
 * @param {id} 商品id
 * @param {type} 1表示24小时热销榜  2代表周热销榜
 * @param {limit} 获取个数
 */

export async function getGoodsHot({id,type,limit=3}){
    return instance.get('/goods/hot',{
        params:{
            id,type,limit
        }
    })
}