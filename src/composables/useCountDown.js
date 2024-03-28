import {ref,computed,onUnmounted} from 'vue'
import dayjs from 'dayjs'
export function useCountDown(){
    let timer = null
    const time = ref(0)
    const formatTime = computed(() => dayjs.unix(time.value).format('mm分ss秒'))
    let start = (currenttime)=>{
        time.value = currenttime
        timer = setInterval(()=>{
            time.value--
        },1000)
    }
    onUnmounted(()=>{
        timer && clearInterval(timer)
    })

    return {
        formatTime,
        start
    }
}