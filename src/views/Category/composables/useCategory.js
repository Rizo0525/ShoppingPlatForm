import { onMounted, ref, watch } from 'vue'
import {onBeforeRouteUpdate, useRoute} from 'vue-router'
import {getCategories} from '@/apis/category'
export function useCategory(){
    let route = useRoute()
    let categoryDataRef = ref([])
    
    const getCategory = async (id)=>{
        let resp = await getCategories(id)
        categoryDataRef.value = resp.result
    }
    
    onMounted(()=>{
        getCategory(route.params.id)
    })
    
    onBeforeRouteUpdate((to)=>{
        getCategory(to.params.id)
    })
    return {
        categoryDataRef
    }
}