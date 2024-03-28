<script setup>
defineProps({
    title:{
        type:String,
    },
    subTitle:{
        type:String
    }
})
</script>


<template>
  <div class="home-panel">
    <div class="container">
      <div class="head">
         <!-- 主标题和副标题 -->
        <h3>
          {{ title }}<small>{{ subTitle }}</small>
        </h3>
      </div>
      <!-- 主体内容区域 -->
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang='scss'>
.home-panel {
  background-color: #fff;
  margin: 20px 0;
  .container{
    padding: 0 0 20px 0;
  }
  &:hover{
      transform: translate3d(0,-2px,0);
      box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
  }
  .head {
    padding: 40px 0;
    display: flex;
    align-items: flex-end;
    h3 {
      flex: 1;
      font-size: 32px;
      font-weight: normal;
      margin-left: 36px;
      height: 35px;
      line-height: 35px;
      small {
        font-size: 16px;
        color: #999;
        margin-left: 20px;
      }
    }
  }
}
</style>