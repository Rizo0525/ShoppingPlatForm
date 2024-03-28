
import {useRoute} from 'vue-router'
import {onMounted, ref} from 'vue'
import {getSubCategory} from '@/apis/category'

export function useGoodsList(){
    let goodsListRef = ref([])
    let route = useRoute()

    const reqData = ref({
        categoryId:route.params.id,
        page:1,
        pageSize:20,
        sortField:'publishTime'
    })
    const getGoodsList = async (value)=>{
        console.log("value:::",value)
        let resp = await getSubCategory(value)
        goodsListRef.value = resp.result.items
    }
    onMounted(()=>{getGoodsList(reqData.value)})
    const handleClick = function(tab,event){
        // console.log(reqData.value)
        getGoodsList(reqData.value)
    }
    return {
        goodsListRef,
        reqData,
        handleClick,
        getGoodsList
    }
}