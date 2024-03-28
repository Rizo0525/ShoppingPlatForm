<template>
    <header class="header-container">
        <div class="container">
            <h1 class="logo">
                <RouterLink to="/">小兔鲜</RouterLink>
            </h1>
            <ul class="header-nav">
                <li v-for="item in allCategoriesRef" :key="item.id">
                    <router-link :to="{name:'Category',params:{id:`${item.id}`}}" active-class="active">{{ item.name }}</router-link>
                </li>
            </ul>
            <div class="search">
                <i class="iconfont icon-search"></i>
                <input type="text" placeholder="搜一搜">
            </div>

            <HeaderCart></HeaderCart>
        </div>
    </header>
</template>

<script setup>

import {useCategoryStore} from '@/stores/useCategory'
import {storeToRefs} from 'pinia'
import HeaderCart from './HeaderCart.vue'

let categoryStore = useCategoryStore()
let {allCategoriesRef} = storeToRefs(categoryStore)

</script>

<style lang="scss" scoped>
.header-container{
    background: #fff;
    .container{
        display: flex;
        align-items: center;
        position: relative;
        justify-content: center;
        .logo{
            width: 200px;
            a{
                display: block;
                height: 132px;
                width: 100%;
                text-indent: -9999px;
                background: url('@/assets/images/logo.png') no-repeat center 18px / contain;
            }
        }
        .header-nav{
            width: 820px;
            display: flex;
            padding-left: 40px;
            z-index: 998;
            position: relative;
            li{
                margin-left: 40px;
                width: 38px;
                text-align: center;
                display:inline-block;
                &:hover {
                    color: $xtxColor;
                    border-bottom: 1px solid $xtxColor;
                }
            }
        }
        .search {
            width: 170px;
            height: 32px;
            // position: absolute;
            // right: 20px;
            border-bottom: 1px solid #e7e7e7;
            line-height: 32px;
            .icon-search {
                font-size: 18px;
                margin-left: 5px;
            }
            input {
                width: 140px;
                padding-left: 5px;
                color: #666;
            }
        }
    }
}
.active{
    color: $xtxColor;
    border-bottom:1px solid $xtxColor
}
</style>