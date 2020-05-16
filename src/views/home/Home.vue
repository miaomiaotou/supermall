<template>
<!-- 首页 -->
  <div id="home" class="wrapper">
    <nav-bar class="home-nav"><div slot="center">PokemonMall</div></nav-bar>
   
    <!-- 轮播图 -->
    <!-- <Swiper> -->
      <!-- 引入注册完之后就可以在这里用了 -->
      <!-- 这一段封装进了Homeswiper组件 -->
      <!-- <SwiperItem >  -->
        <!-- 插入的数据来自下边的data数组,也可以插入本地数据 -->
       <!-- <a href="item.link">
        <img src="@/assets/img/home/yusanjia_4.jpg">
      </a>
        </SwiperItem>
          <SwiperItem >  -->
        <!-- 插入的数据来自下边的data数组,也可以插入本地数据 -->
       <!-- <a href="item.link">
        <img src="@/assets/img/home/yusanjia_2.jpg">
      </a>
        </SwiperItem>
          <SwiperItem >  -->
        <!-- 插入的数据来自下边的data数组,也可以插入本地数据
       <a href="item.link">
        <img src="@/assets/img/home/yusanjia_3.jpg">
      </a>
        </SwiperItem>
     </Swiper>
    -->
      <home-swiper :banners="banners"/> 

      
      <recommend-view :recommends="recommends"/>
       
      <feature-view/>
      <!-- 引进进来 -->


      <!-- <ul>li1</ul>
    <ul>li1</ul>
    <ul>li1</ul>
    <ul>li1</ul>
    <ul>li1</ul>
    <ul>li1</ul>
    <ul>li1</ul>这种可以简单粗暴的滚动占位 -->
   
      

      <tab-control class="tab-control"
                   :titles="['药物', '精灵球', '工具']"

                   @tabClick="tabClick"/>
                   <!-- <img src="@/assets/img/home/chaomeng_5.jpg"> -->
      <good-list :goods="showGoods"/>
    <!-- </scroll> -->
   
    <back-top @click.native="backClick" v-show="isShowBackTop"/>
  </div>
  
</template>

<script>
  import HomeSwiper from './childComps/HomeSwiper'
  import{Swiper,SwiperItem} from '@/components/common/swiper'

  // 相当于import swiper from './components/common/swiper/Swiper'
  //       import swiperItem from './components/common/swiper/SwiperItem'

  import RecommendView from './childComps/RecommendView'

  import FeatureView from './childComps/FeatureView'

  import NavBar from 'components/common/navbar/NavBar'
  // 用的时候在这里用，所以在这里引入
  import TabControl from 'components/content/tabControl/TabControl'

  import GoodList from 'components/content/goods/GoodsList'

  // import Scroll from 'components/common/scroll/Scroll'
  import BackTop from 'components/content/backTop/BackTop'

  import { getHomeMultidata  } from "network/home"

  export default {
    name: "Home",
    components: {
       // 注册组件
      Swiper,
      SwiperItem,
      RecommendView,
      FeatureView,
      NavBar,
      TabControl,
      GoodList,
      HomeSwiper,
      // Scroll,
      BackTop
    },
   
    data() {
      return {
        // result:null,
        banners: [],
        //result里边的banners
        recommends: [],
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []},
        },
        // 默认第0页，数据都是0，把数据模型设计好，
        currentType: 'pop',
        isShowBackTop: false
      }
    },
    computed: {
      showGoods() {
        return this.goods[this.currentType].list
      }
    },
    created() {
      // 1.请求多个数据,然后把数据放进data里的变量里(那个result里)，要不然getHomeMultidata这个函数执行完了，里边的res就没了，就被内存回收了
      // getHomeMultidata().then(res=>{
      //   this.result=res;
          //  this.banners = res.data.banner把result里边的banners放进banners[]里边
          // 同理 this.recommends = res.data.recommend
     // 但是接着console.log(this.result)不可以，因为请求数据是异步操作，到这里的时候网络还没有执行完
      getHomeMultidata().then(res=>{
        this.result=res;
           this.banners = res.data.banners
       })
      this.getHomeMultidata()

      // 2.请求商品数据，调用函数三次
      this.getHomeGoods('pop')

      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },
    methods: {
      /**
       * 事件监听相关的方法
       */
      tabClick(index) {
        switch (index) {
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
            break
        }
      },
      backClick() {
        this.$refs.scroll.scrollTo(0, 0)
      },
      contentScroll(position) {
        this.isShowBackTop = (-position.y) > 1000
      },
      loadMore() {
        this.getHomeGoods(this.currentType)
      },
      /**
       * 网络请求相关的方法
       */
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          // this.result = res;
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        })
      },
      getHomeGoods(type) {
        const page = this.goods[type].page + 1
        getHomeGoods(type, page).then(res => {
          this.goods[type].list.push(...res.data.list)
          // 第一次根据tpye把pop对应的goods的list拿出来，再把res里的list塞进去
          // 拿到goods[type]这个空的数组了，然后就多了一组数据，就要把page加上1
          this.goods[type].page += 1

          this.$refs.scroll.finishPullUp()
        })
      }
    }
  }
</script>

<style scoped>
  #home {
    /*padding-top: 44px;*/
    height: 100vh;
    position: relative;
  }

  .home-nav {
    background-color:   rgb(9, 104, 182);
 
    color: rgb(243, 245, 247);

    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }

  .tab-control {
    position: sticky;
    /* sticky属性和top做成移动吸顶效果 */
    top: 44px;
    z-index: 9;
  }

  .content {
    overflow: hidden;

    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }

  /*.content {*/
    /*height: calc(100% - 93px);*/
    /*overflow: hidden;*/
    /*margin-top: 44px;*/
  /*}*/
</style>
