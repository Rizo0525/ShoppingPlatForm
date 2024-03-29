<template>
    <div class="home-category">
        <ul class="menu">
            <li v-for="item in allCategoriesRef" :key="item.id">
                <router-link :to="{name:'Category',params:{id:`${item.id}`}}">{{ item.name }}</router-link>
                <router-link :to="{name:'SubCategory',params:{id:`${i.id}`}}" v-for="i in item.children.slice(0,2)" :key="i.id">{{ i.name }}</router-link>
                <div class="layer">
                    <h4>分类推荐<small>根据您的购买记录或浏览记录推荐</small></h4>
                    <ul>
                        <li v-for="i in item.goods" :key="i.id">
                            <router-link to="/">
                                <img :src="i.picture" alt="">
                                <div class="info">
                                    <p class="name ellipsis-2">
                                        {{ i.name }}
                                    </p>
                                    <p class="desc ellipsis">{{ i.desc }}</p>
                                    <p class="price"><i>¥</i>{{ i.price }}</p>
                                </div>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup>
import {useCategoryStore} from '@/stores/useCategory.js'
import {storeToRefs} from 'pinia'
import { onMounted } from 'vue'
let categoryStore = useCategoryStore()
let {allCategoriesRef} = storeToRefs(categoryStore)
</script>

<style lang="scss" scoped>
.home-category{
    width: 250px;
    height: 495px;
    background: rgba(0,0,0,0.8);
    position: relative;
    z-index: 99;
    ul{
        li{
            height: 55px;
            line-height: 55px;
            padding-left: 40px;
            &:hover {
                background: $xtxColor;
            }
            a {
                margin-right: 4px;
                color: #fff;
                &:first-child {
                    font-size: 16px;
                }
            }
            .layer{
                width: 990px;
                height: 495px;
                position: absolute;
                left: 250px;
                top: 0;
                padding: 0 15px;
                display: none;
                h4{
                    font-size: 20px;
                    line-height: 80px;
                    font-weight: normal;
                    small{
                        font-size: 14px;
                        color: #666;
                        margin-left: 8px;
                    }
                }
                ul{
                    display: flex;
                    flex-wrap: wrap;
                    li{
                        width: 310px;
                        height: 120px;
                        margin-bottom: 15px;
                        margin-right: 15px;
                        border-radius: 4px;
                        border: 1px solid #eee;
                        padding: 0;
                        &:nth-child(3n){
                            margin-right: 0;
                        }
                        a{
                            display: flex;
                            color: #000;
                            padding: 10px;
                            width: 100%;
                            height: 100%;
                            align-items: center;
                            img{
                                width: 95px;
                                height: 95px;
                            }
                            &:hover {
                                background: #e3f9f4;
                            }
                            .info{
                                line-height: 24px;
                                padding-left: 10px;
                                overflow: hidden;
                                .name{
                                    font-size: 16px;
                                    color: #666;
                                }
                                .desc{
                                    color: #999;
                                }
                                .price{
                                    font-size: 22px;
                                    color: $priceColor;
                                    i{
                                        font-size: 16px;
                                    }
                                }
                            }
                        }
                    }
                }
            }
            &:hover {
                .layer {
                    display: block;
                    background: rgba(255,255,255,0.93);
                    // border-top: 1px solid #ccc;
                    // border-right: 1px solid #ccc;
                    // border-bottom: 1px solid #ccc;
                    // box-sizing: content-box;
                }
            }
        }
    }
}
</style>