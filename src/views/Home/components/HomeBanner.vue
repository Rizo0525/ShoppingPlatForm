<template>
    <div class="home-banner">
        <el-carousel trigger="click" height="495px">
            <el-carousel-item v-for="item in bannerRef" :key="item.id">
                <img :src="item.imgUrl" alt="">
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script setup>
import {getHomeBanners} from '@/apis/home.js'
import { onMounted, ref } from 'vue'
let bannerRef = ref([])
onMounted(async ()=>{
    bannerRef.value = (await getHomeBanners()).result
})
</script>

<style lang="scss" scoped>
.home-banner{
    position: absolute;
    left: 0;
    top: 0;
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
</style>