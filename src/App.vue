<script setup>
// import HelloWorld from '@/components/HelloWorld.vue'
</script>

<template>
    <!-- 使用 router-link 组件进行导航 -->
    <!-- 通过传递 `to` 来指定链接 -->
    <!-- `<router-link>` 将呈现一个带有正确 `href` 属性的 `<a>` 标签 -->
    <!-- <router-link to="/">Go to Layout</router-link>&nbsp;&nbsp; -->
    <!-- <router-link to="/login">Go to Login</router-link> -->
  <div class="app-container">
    <router-view></router-view>
  </div>
</template>

<style scoped lang="scss">
.app-container{
  width: 1280px;
  margin: 0 auto;
  height: 100%;
}
</style>
