import Sku from './XtxSku/index.vue'
import ImageView from "./ImageView/index.vue"
export const componentPlugin = {
    install(app){
        app.component('Sku',Sku)
        app.component('ImageView',ImageView)
    }
}