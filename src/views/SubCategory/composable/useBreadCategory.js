
import {onMounted, ref} from 'vue'
import {useRoute} from 'vue-router'
import {getCategoryFilter} from '@/apis/category'

export function useBreadCategory(){
    let route = useRoute()
    let breadCategoryRef = ref([])
    
    const getCategory = async ()=>{
      let resp = await getCategoryFilter(route.params.id)
      breadCategoryRef.value = resp.result
      // console.log(breadCategoryRef.value)
    }
    onMounted(()=>{
      getCategory()
    })
    return {
        breadCategoryRef
    }
}