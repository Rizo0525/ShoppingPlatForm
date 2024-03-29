<script setup>
import GoodsItem from '@/views/Home/components/GoodsItem.vue'
import {useBreadCategory} from './composable/useBreadCategory'
import {useGoodsList} from './composable/useGoodsList'
import {getSubCategory} from '@/apis/category'
import {ref} from 'vue'

let {breadCategoryRef} = useBreadCategory()
let {goodsListRef,reqData,handleClick,getGoodsList} = useGoodsList()

const count = ref(0)
const load = async () => {
  reqData.value.page ++
  let resp = await getSubCategory(reqData.value)

  goodsListRef.value = [...goodsListRef.value,...resp.result.items]
  if(resp.result.items.length){
    disabled.value = true
  }
}

const disabled = ref(false)
</script>

<template>
  <div class="container">
    <!-- 面包屑 -->
    <div class="bread-container">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ name:'Category',params:{id:`${breadCategoryRef.parentId}`} }">{{ breadCategoryRef.parentName }}
        </el-breadcrumb-item>
        <el-breadcrumb-item>{{ breadCategoryRef.name }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="sub-container">
      <el-tabs v-model="reqData.sortField" @tab-change="handleClick">
        <el-tab-pane label="最新商品" name="publishTime"></el-tab-pane>
        <el-tab-pane label="最高人气" name="orderNum"></el-tab-pane>
        <el-tab-pane label="评论最多" name="evaluateNum"></el-tab-pane>
      </el-tabs>
      <div class="body" v-infinite-scroll="load" :infinite-scroll-disabled="disabled">
         <!-- 商品列表-->
         <GoodsItem v-for="item in goodsListRef" :key="item.id" :goods="item"></GoodsItem>
      </div>
    </div>
  </div>

</template>


<style lang="scss" scoped>
.bread-container {
  padding: 25px 20px  ;
  color: #666;

}
.sub-container {
  padding: 20px 10px;
  background-color: #fff;
  .body {
    display: flex;
    flex-wrap: wrap;
    padding: 0 10px;
    justify-content: space-around;
  }
  .pagination-container {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }
}
</style>