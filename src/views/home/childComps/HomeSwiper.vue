<template>
 <Swiper>
      <!-- 引入注册完之后就可以在这里用了 -->

      <SwiperItem > 
        <!-- 插入的数据来自下边的data数组,也可以插入本地数据 -->
       <a href="item.link">
        <img src="@/assets/img/home/yusanjia_4.jpg">
      </a>
        </SwiperItem>
          <SwiperItem > 
        <!-- 插入的数据来自下边的data数组,也可以插入本地数据 -->
       <a href="item.link">
        <img src="@/assets/img/home/yusanjia_2.jpg">
      </a>
        </SwiperItem>
          <SwiperItem > 
        <!-- 插入的数据来自下边的data数组,也可以插入本地数据 -->
       <a href="item.link">
        <img src="@/assets/img/home/yusanjia_3.jpg">
      </a>
        </SwiperItem>
     </Swiper>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper'

  export default {
    name: "HomeSwiper",
    props: {
      banners: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      Swiper,
      SwiperItem
    }
  }
</script>

<style scoped>

</style>
