import { instance } from "@/utils/http";


export async function getCategories(id){
    return instance.get('/category',{
        params:{
            id
        }
    })
}

//二级分类列表
export async function getCategoryFilter(id){
    return instance.get('/category/sub/filter',{
        params:{
            id
        }
    })
}

/**
 * 
 * @param {*} data 
 * data{
 *   categoryId
 *   page:1
 *   pageSize:20
 *   sortField:'publishTime'|'orderNum'|'evaluateNum'
 * }
 * @returns 
 */
export async function getSubCategory(data){
    return instance({
        url:'/category/goods/temporary',
        method:'POST',
        data
    })
    // return instance.post('/category/goods/temporary',{
    //     data:data
    // })
}