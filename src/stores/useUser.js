import {defineStore} from 'pinia'
import {login} from '@/apis/login'
import {ref} from 'vue'
import {mergeCartAPI} from '@/apis/cart'
import { useCartStore } from './useCart'

export const useUserStore = defineStore('user',()=>{
    const cartStore = useCartStore()
    
    let userInfo = ref({})
    const getUserInfo = async ({account,password})=>{
        let resp = await login({account,password})
        userInfo.value = resp.result
        await mergeCartAPI(cartStore.cartListRef.map(item=>{
            return {
                skuId:item.skuId,
                selected:item.selected,
                count:item.count
            }
        }))
        await cartStore.updateNewList()
    }

    function $reset() {
        userInfo.value = {}
        cartStore.$reset()
    }
    return {
        userInfo,
        getUserInfo,
        $reset
    }
},{
    persist:true
})