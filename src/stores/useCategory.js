import {defineStore} from 'pinia'
import { getAllCategory } from '@/apis/home'
import {ref} from 'vue'

export const useCategoryStore = defineStore('category',()=>{
    const allCategoriesRef = ref([])

    const getCategory = async function(){
        allCategoriesRef.value = (await getAllCategory()).result
    }
    return {
        allCategoriesRef,
        getCategory
    }
})