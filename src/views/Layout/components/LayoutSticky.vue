<template>
    <div class="header-sticky" :class="{show:y>78}">
        <div class="container">
            <router-link to="/" class="logo"></router-link>
            <ul class="header-nav ">
                <li v-for="item in allCategoriesRef" :key="item.id">
                    <RouterLink :to="{name:'Category',params:{id:`${item.id}`}}" active-class="active">{{ item.name }}</RouterLink>
                </li>
            </ul>
            <div class="right">
                <RouterLink to="/">品牌</RouterLink>
                <RouterLink to="/">专题</RouterLink>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import {useCategoryStore} from '@/stores/useCategory'
import {storeToRefs} from 'pinia'

let y = ref(0)
document.addEventListener('scroll',(e)=>{
    y.value = document.documentElement.scrollTop
})
onMounted(()=>{
    y.value = document.documentElement.scrollTop
})


let categoryStore = useCategoryStore()
let {allCategoriesRef} = storeToRefs(categoryStore)

</script>

<style lang="scss" scoped>
.header-sticky{
    width: 100%;
    height: 80px;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 999;
    background-color: #fff;
    border-bottom: 1px solid #e4e4e4;
    transform: translateY(-100%);
    opacity: 0;

    // 状态二：移除平移 + 完全不透明
    &.show {
        transition: all 0.3s linear;
        transform: none;
        opacity: 1;
    }
    .container{
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 100px 0 150px;

        .logo{
            width: 200px;
            height: 80px;
            background: url('@/assets/images/logo.png') no-repeat right / contain;
        }
        .header-nav{
            width: 820px;
            display: flex;
            align-items: center;
            text-align: center;
            padding-left: 40px;
            position: relative;
            z-index: 998;
            li{
                width: 38px;
                margin-right: 40px;
                text-align: center;
                a{
                    font-size: 16px;
                    line-height: 32px;
                    height: 32px;
                    display: inline-block;
                    &:hover {
                        color: $xtxColor;
                        border-bottom: 1px solid $xtxColor;
                    }   
                }
                .active {
                    color: $xtxColor;
                    border-bottom: 1px solid $xtxColor;
                }
            }
        }
        .right{
            width: 220px;
            padding-left: 40px;
            align-items: center;
            text-align: center;
            border-left: 2px solid $xtxColor;
            a{
                width: 38px;
                display: inline-block;
                margin-right: 40px;
                font-size: 16px;
                line-height: 1;
                &:hover {
                    color: $xtxColor;
                }
            }
        }
    }
}
</style>