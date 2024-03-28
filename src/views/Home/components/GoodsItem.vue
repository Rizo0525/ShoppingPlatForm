<template>
    <div>
        <router-link class="goods-item" to="/">
            <img :src="goods.picture" alt="">
            <p class="name ellipsis">{{ goods.name }}</p>
            <p class="description ellipsis">{{ goods.desc }}</p>
            <p class="price">&yen;{{ goods.price }}</p>
        </router-link>
    </div>
</template>

<script setup>
defineProps({
    goods:{
        typeof:Object,
        default:()=>{}
    }
})
</script>

<style lang="scss" scoped>
 .goods-item{
    display: block;
    width: 220px;
    padding: 20px 30px;
    transition: all .5s;
    text-align: center;
    &:hover {
        transform: translate3d(0, -3px, 0);
        box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
    }
    img{
        width: 160px;
        height: 160px;
    }
    p{
        padding-top: 10px;
    }
    .name{
        font-size: 16px;
    }
    .desc {
        color: #999;
        height: 29px;
        overflow: hidden;
    }
    .price {
        color: $priceColor;
        font-size: 20px;
    }
}
</style>