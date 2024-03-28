import { defineStore } from "pinia";
import { computed,ref } from "vue";
import { useUserStore } from './useUser'
import { addCartAPI,getCartAPI,deleteCartAPI } from '@/apis/cart'


export const useCartStore = defineStore('cart',()=>{
    const cartListRef = ref([])
    const userStore = useUserStore()
    const isLogin = computed(()=>userStore.userInfo.token)

    const updateNewList = async ()=>{
        const resp = await getCartAPI()
        cartListRef.value = resp.result
    }
    const addCart = async (goods)=>{
        const {skuId,count} = goods
        if(isLogin.value){
            // 登录之后的加入购物车
            await addCartAPI({skuId,count})
            await updateNewList()

        }else{
            const item = cartListRef.value.find((item)=>{
                return goods.skuId === item.skuId
            })
            if(item){
                item.count +=goods.count
            }else{
                cartListRef.value.push(goods)
            }
        }
        
    }
    const delCart = async (id)=>{
        if(isLogin.value){
            await deleteCartAPI([id])
            const resp = await getCartAPI()
            cartListRef.value = resp.result
        }else{
            cartListRef.value = cartListRef.value.filter(item=>{
                return item.skuId !== id
            })
        }
    }

    let allCount = computed(()=>cartListRef.value.reduce((a,b)=>{
        return a + b.count
    },0))
    
    let totalPrice = computed(()=>cartListRef.value.reduce((a,b)=>{
        return a + b.count * b.price
    },0))

    let singleCheck = (goods,selected)=>{
        const item = cartListRef.value.find((item)=>{
            return goods.skuId === item.skuId
        })
        item.selected = selected
    }

    let selectedGoods = computed(()=>{
        return cartListRef.value.filter(item=>item.selected)
    })

    let selectedGoodsPrice = computed(()=>{
        return selectedGoods.value.reduce((a,b)=>{
            return a + b.price * b.count
        },0)
    })

    let isAll = computed(()=>{
        return cartListRef.value.every((item)=>item.selected === true)
    })

    //全选
    let setAllSelected = (selected)=>{
        cartListRef.value.forEach(item=>item.selected = selected)
        // console.log(cartListRef.value)
    }

    function $reset(){
        cartListRef.value = []
    }
    return {
        cartListRef,
        $reset,
        addCart,
        delCart,
        allCount,
        totalPrice,
        selectedGoods,
        setAllSelected,
        singleCheck,
        isAll,
        selectedGoodsPrice,
        updateNewList
    }
},{
    persist:true
})