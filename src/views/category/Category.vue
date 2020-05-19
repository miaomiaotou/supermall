<template>
  <div class="wrapper" ref="aaaa">
    <div>
       <feature-view/>
      <!--1.无论是否设置click:false, button都可以点击-->
      <!-- <button @click="btnClick">按钮</button> -->

      <!--2.必须设置click:true, 那么div才能监听点击-->
      <div @click="divClick"></div>

      <tab-control class="tab-control"
                   :titles="['我御三家反正你也买不到就给你看看吧']"

                   @tabClick="tabClick"/>
      <GoodList/>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import TabControl from '../../components/content/tabControl/TabControl'
   
  import GoodList from 'components/content/goods/GoodsList'
  import FeatureView from '../home/childComps/FeatureView'

  export default {
    name: "Category",
    components:{
      TabControl,
      GoodList,
       FeatureView,
    },
    // methods:{
    //     tabClick(index) {
    //     switch (index) {
    //       case 0:
    //         this.currentType = 'pop'
    //         break
    //       case 1:
    //         this.currentType = 'new'
    //         break
    //       case 2:
    //         this.currentType = 'sell'
    //         break
    //     }
    //   }
    // },
    data() {
      return {
        scroll: null
      }
    },
    // 组件创建完后调用
    mounted() {
      this.scroll = new BScroll(this.$refs.aaaa, {
        // probeType: 3,
        // pullUpLoad: true
      })

      this.scroll.on('scroll', (position) => {
        console.log(position);
      })

      this.scroll.on('pullingUp', () => {
        console.log('上拉加载更多');
      })
    },
    methods: {
      btnClick() {
        console.log('btnClick');
      },
      divClick() {
        console.log('divClick');
      }
    }
  }
</script>

<style scoped>
/* .tab-control {
    position: sticky;
    top: 44px;
    z-index: 9;
  }
    */

   
    /*overflow-y: scroll;*/
  
</style>
