<template>
    <div class="container">
        <div class="bread-container">
            <el-breadcrumb separator=">">
                <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
                {{ categoryDataRef.value }}
                <el-breadcrumb-item>{{ categoryDataRef.name }}</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="home-banner">
            <el-carousel trigger="click" height="495px">
                <el-carousel-item v-for="item in bannerRef" :key="item.id">
                    <img :src="item.imgUrl" alt="">
                </el-carousel-item>
            </el-carousel>
        </div>
        
        <div class="sub-list">
            <h3>全部分类</h3>
            <ul>
                <li v-for="item in categoryDataRef.children" :key="item.id">
                    <router-link :to="{name:'SubCategory',params:{id:`${item.id}`}}">
                        <img v-img-lazy="item.picture" alt="">
                        <p>{{item.name}}</p>
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="ref-goods" v-for="item in categoryDataRef.children" :key="item.id">
            <div class="head">
                <h3>-  {{item.name}} -</h3>
            </div>
            <div class="body">
                <GoodsItem v-for="i in item.goods" :goods="i"></GoodsItem>
                <!-- <div v-for="i in item.goods" :key="3"></div> -->
            </div>
        </div>
    </div>
</template>

<script setup>

import GoodsItem from '@/views/Home/components/GoodsItem.vue'
import {useBanner} from './composables/useBanner'
import {useCategory} from './composables/useCategory'
const {bannerRef} = useBanner()
const {categoryDataRef} = useCategory()


</script>

<style lang="scss" scoped>
.container{
    h3 {
        font-size: 28px;
        color: #666;
        font-weight: normal;
        text-align: center;
        line-height: 100px;
    }
    position: relative;
    .bread-container{
        padding: 25px 20px ;
    }
    .home-banner{
        z-index: 98;
        width: 100%;
        height: 100%;
        img{
            width: 100%;
        }
    }
    .el-carousel__item h3 {
    color: #475669;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
    text-align: center;
    }
   
    .sub-list{
        margin-top: 20px;
        background-color: #fff;
        ul{
            display: flex;
            padding: 0 32px;
            flex-wrap: wrap;
            li{
                width: 168px;
                height: 160px;
                a{
                    display: block;
                    font-size: 16px;
                    text-align: center;
                    img{
                        width: 100px;
                        height: 100px;
                    }
                    p{
                        line-height: 40px;
                    }
                    &:hover{
                        color:$xtxColor;
                    }
                }
            }
        }
    }
    .ref-goods{
        background: #fff;
        margin-top: 20px;
        .body{
            display: flex;
            padding: 0 0 20px 0;
            justify-content: space-around;
        }
    }
}
</style>@/apis/category