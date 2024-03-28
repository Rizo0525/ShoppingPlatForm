<template>
    <div class="goods-hot">
        <h3>{{title}}</h3>
        <router-link to="/" v-for="item in hotList" :key="item.id">
            <img :src="item.picture" alt="">
            <p class="name ellipsis">{{ item.name }}</p>
            <p class="desc ellipsis">{{ item.desc }}</p>
            <p class="price">&yen;{{ item.price }}</p>
        </router-link>
    </div>
</template>

<script setup>
import {getGoodsHot} from '@/apis/goods'
import { computed, onMounted, ref } from 'vue'
import {useRoute} from 'vue-router'

const props = defineProps({
    types:{
        type:String
    }
})

let hotTitles = {
    1:'24小时热榜',
    2:'周热榜'
}

const title = computed(()=>hotTitles[props.types])

const hotList = ref([])
const route = useRoute()
const getHotList = async function(){
    let resp = await getGoodsHot({
        id:route.params.id,
        type:props.types,
        limit:5
    })
    hotList.value = resp.result
}
onMounted(()=>{
    getHotList()
})


</script>

<style lang="scss" scoped> 
.goods-hot{
    margin-bottom: 20px;
    h3{
        height: 70px;
        line-height: 70px;
        padding-left: 25px;
        color: #fff;
        background:$helpColor;
        margin-bottom: 5px;
    }
    a{
        display: block;
        // background: red;
        padding:20px;
        text-align: center;
        background: #fff;
        img{
            width: 160px;
            height: 160px;
        }
        p{
            margin-top: 10px;
        }
        .name{
            font-size: 16px;
        }
        .desc{
            color: #999;
            height: 30px;
            line-height: 30px;
        }
        .price{
            font-size: 20px;
            color: $priceColor;
        }
    }
}
</style>