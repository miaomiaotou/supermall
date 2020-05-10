<template>
  <div id="app" class="wrapper">
    <router-view/>
     <nav-bar class="home-nav"><div slot="center">PokemonMall</div></nav-bar>
    <main-tab-bar/>
  </div>
</template>

<script>
  import MainTabBar from 'components/content/mainTabbar/MainTabBar'
  import NavBar from './components/common/navbar/NavBar'
  

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
   .home-nav {
    background-color:   rgb(9, 104, 182);
    /* padding: 22; */
    color: rgb(243, 245, 247);

    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 8;
  }
  /* 引用样式用@import */
</style>
