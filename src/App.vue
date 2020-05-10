<template>
  <div id="app" class="wrapper">
    <router-view/>
    <main-tab-bar/>
  </div>
</template>

<script>
  import MainTabBar from 'components/content/mainTabbar/MainTabBar'
  // import NavBar from 'components/common/navbar/Navbar'
  

  export default {
    name: 'app',
    components: {
      MainTabBar,
      // NavBar
    }
  }
</script>

<style>
  @import "assets/css/base.css";
  /* 引用样式用@import */
</style>
