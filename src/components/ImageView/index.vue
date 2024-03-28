<template>
    <div class="goods-image">
        <div ref="middleEle" class="middle" @mousemove="middlePicMouseMove" v-if="goodsDetailsRef.mainPictures">
            <img :src="goodsDetailsRef.mainPictures[activeIndex]" alt="" class="">
            <div v-show="!isOutside" class="layer" :style="{left:`${left}px`,top:`${top}px`}"</div>
        </div>
        <div class="small">
            <ul>
                <li v-for="(item,i) in goodsDetailsRef.mainPictures" :key="item" :class="{ active:i === activeIndex }"><img :src="item" alt="" @mouseenter="smallPicMoveEnter(i)"></li>
            </ul>
        </div>
        <div v-show="!isOutside" class="large" :style="{
            backgroundImage: `url(${goodsDetailsRef.mainPictures[activeIndex]})`,
            backgroundPositionX: `${positionX}px`,
            backgroundPositionY: `${positionY}px`,
            }" v-if="goodsDetailsRef.mainPictures">
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue'
import { useMouseInElement } from '@vueuse/core'

defineProps({
    goodsDetailsRef:{
        type: Object
    }
})


const activeIndex = ref(0)
const smallPicMoveEnter = function(i){
    // console.log(item)
    activeIndex.value = i
}


const middleEle = ref(null)

const positionX = ref(0)
const positionY = ref(0)
//滑块
const left = ref(0)
const top = ref(0)

const { elementX, elementY, isOutside } = useMouseInElement(middleEle)

watch([elementX,elementY,isOutside],()=>{
    if(isOutside.value){
        return ;
    }
    // console.log('变化了')
    if(elementX.value>100&&elementX.value<300){
        left.value = elementX.value-100
    }
    if(elementY.value>100&&elementY.value<300){
        top.value = elementY.value-100
    }

    if(elementX.value<100) left.value = 0
    if(elementY.value<100) top.value = 0
    if(elementX.value>300) left.value = 200
    if(elementY.value>300) top.value = 200

    positionX.value = -left.value*2
    positionY.value = -top.value*2
})
</script>

<style lang="scss" scoped>
.goods-image{
    width: 480px;
    height: 400px;
    position: relative;
    display: flex;
    .middle{
        width: 400px;
        height: 400px;
        background: #f5f5f5;
        .layer{
            position: absolute;
            left: 0;
            top: 0;
            width: 200px;
            height: 200px;
            background: rgba(0,0,0,0.2);
        }
    }
    .small{
        width: 80px;
        overflow: hidden;
        li{
            width: 68px;
            height: 68px;
            margin-left: 12px;
            margin-bottom: 15px;
            cursor: pointer;

            &:hover,
            &.active {
                border: 2px solid $xtxColor;
            }
        }
    }
    .large{
        width: 400px;
        height: 400px;
        position: absolute;
        left: 412px;
        top: 0;
        z-index: 500;
        background-repeat: no-repeat;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        background-size: 800px 800px;
    }
    }
</style>