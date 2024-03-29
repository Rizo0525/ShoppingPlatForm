<template>
    <div class="home-product">
        <HomePanel :title="item.name" v-for="item in goodsRef" :key='item.id'>
            <div class="box">
                <router-link class="cover" to="/home">
                    <img v-img-lazy="item.picture" alt="">
                    <div class="cover-title">
                        <span>{{item.name}}馆</span>
                        <span>{{item.saleInfo}}</span>
                    </div>
                </router-link>
                <ul class="goods-list">
                    <li v-for="i in item.goods" :key="i.id">
                        <!-- <router-link class="goods-item" to="/">
                            <img v-img-lazy="i.picture" alt="">
                            <p class="name ellipsis">{{ i.name }}</p>
                            <p class="description ellipsis">{{ i.desc }}</p>
                            <p class="price">&yen;{{ i.price }}</p>
                        </router-link> -->
                        <GoodsItem :goods="i"></GoodsItem>
                    </li>
                </ul>
            </div>
        </HomePanel>
    </div>
</template>

<script setup>
import HomePanel from './HomePanel.vue'
import GoodsItem from './GoodsItem.vue'
import {getGoods} from '@/apis/home.js'
import { onMounted, ref } from 'vue'
let goodsRef = ref([])
onMounted(async ()=>{
    let resp  = await getGoods()
    goodsRef.value = resp.result
})

</script>

<style lang="scss" scoped>
.home-product{
    a{
        padding: 2px 12px;
    }
    .box{
        display: flex;
        
        .cover{
            width: 240px;
            height: 610px;
            position: relative;
            margin-left: 5px;
            img{
                width: 100%;
                height: 100%;
            }
            .cover-title{
                position: absolute;
                top: 50%;
                transform: translate3d(0, -50%, 0);
                width: 188px;
                height: 66px;
                display: flex;
                line-height: 66px;
                font-size: 18px;
                span{
                    color: #fff;
                    background: red;
                    text-align: center;
                    &:nth-child(1){
                        width: 76px;
                        background-color: rgba($color: #000000, $alpha: 0.9);
                    }
                    &:nth-child(2){
                        flex: 1;
                        background: rgba($color: #000000, $alpha: 0.7);
                    }
                }
            }
        }
        .goods-list{
            width: 990px;
            display: flex;
            flex-wrap: wrap;
            margin-left: 20px;
            li{
                width: 240px;
                height: 300px;
                margin-right: 10px;
                margin-bottom: 10px;
                &:nth-last-child(-n + 4) {
                    margin-bottom: 0;
                }

                &:nth-child(4n) {
                    margin-right: 0;
                }
               
            }
        }
    }
}
</style>