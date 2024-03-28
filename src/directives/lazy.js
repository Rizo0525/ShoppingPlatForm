import { useIntersectionObserver } from '@vueuse/core'
export const imgLazyPlugin = {
    install(app){
        app.directive('img-lazy',{
            mounted(el,binding){
                const { stop } = useIntersectionObserver(
                    el,
                    ([{ isIntersecting }], observerElement) => {
                      if(isIntersecting){
                        el.src = binding.value
                        stop()
                      }
                    },
                )
            },
        })
    }
}