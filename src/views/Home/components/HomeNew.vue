<template>
    <div>
        <HomePanel title="新鲜好物" subTitle="人气推荐 好多商品">
            <ul class="goods-list">
                <li v-for="item in newGoodsRef" :key="item.id">
                    <RouterLink :to="{name:'Detail',params:{id:`${item.id}`}}">
                        <img v-img-lazy="item.picture" alt="" />
                        <p class="name">{{ item.name }}</p>
                        <p class="price">&yen;{{ item.price }}</p>
                    </RouterLink>
                </li>
            </ul>
        </HomePanel>
    </div>
</template>

<script setup>
import HomePanel from './HomePanel.vue'
import {getNewGoods} from '@/apis/home.js'
import { onMounted, ref } from 'vue'
let newGoodsRef = ref([])
onMounted(async ()=>{
    let resp = await getNewGoods()
    newGoodsRef.value = resp.result
})
</script>

<style lang="scss" scoped>
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 406px;
  padding: 0 20px 0;
  box-sizing: border-box;
  li {
    width: 290px;
    height: 406px;
    margin: 0 10px 0;
    background: #f0f9f4;
    transition: all .5s;

    &:hover {
      transform: translate3d(0, -3px, 0);
      box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
    }

    img {
      width: 306px;
      height: 306px;
    }

    p {
      font-size: 22px;
      padding-top: 12px;
      text-align: center;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }

    .price {
      color: $priceColor;
    }
  }
}
</style>