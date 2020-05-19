<template>
  <div id="app" class="wrapper">
    <keep-alive exclude="detail">
      <!-- home离开时记录状态和位置，让home不要随便销毁掉，但是还要在home中保持原来的位置
      思路：离开时保存位置信息，进来时把位置设置成原来的位置信息 
      要排除detail的原因是，不排除的话点进去都是一个详情了-->
    <router-view/>
    </keep-alive>

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
