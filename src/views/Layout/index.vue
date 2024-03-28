<template>
    <div>
        <!-- 我是首页&nbsp;&nbsp;
        <div>
            <router-link :to="{name:'LayoutFooter'}">footer</router-link>&nbsp;&nbsp;
            <router-link :to="{name:'LayoutHeader'}">header</router-link>&nbsp;&nbsp;
            <router-link :to="{name:'LayoutNav'}">nav</router-link>&nbsp;&nbsp;
        </div>
        <router-view></router-view> -->
        <layout-nav></layout-nav>
        <layout-header></layout-header>
        <router-view></router-view>
        <layout-footer></layout-footer>
        <layout-sticky></layout-sticky>
    </div>
</template>

<script setup>
import LayoutFooter from './components/LayoutFooter.vue';
import LayoutHeader from './components/LayoutHeader.vue';
import LayoutNav from './components/LayoutNav.vue';
import LayoutSticky from './components/LayoutSticky.vue'


import {useCategoryStore} from '@/stores/useCategory'
import { onMounted } from 'vue';
let categoryStore = useCategoryStore()
let {getCategory} = categoryStore
onMounted( ()=>{ getCategory()})
</script>

<style lang="scss" scoped>

</style>