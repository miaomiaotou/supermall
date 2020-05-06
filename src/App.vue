<template>
  <div id="app" class="wrapper">
    <router-view/>
    <main-tab-bar/>
  </div>
</template>

<script>
  import MainTabBar from 'components/content/mainTabbar/MainTabBar'
  import NavBar from 'components/common/navbar/NavBar'
  // 用的时候在这里用

  export default {
    name: 'app',
    components: {
      MainTabBar,
      NavBar
    }
  }
</script>

<style>
  @import "assets/css/base.css";
  /* 引用样式用@import */
</style>
