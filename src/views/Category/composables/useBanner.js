

import {getHomeBanners} from '@/apis/home'
import { onMounted, ref, watch } from 'vue'

export function useBanner(){
    const bannerRef = ref([])
    const getBanner = async ()=>{
        let resp = await getHomeBanners({
            distributionSite:2
        })
        bannerRef.value = resp.result
    }
    onMounted(()=>{
        getBanner()
    })
    return {
        bannerRef
    }
}

