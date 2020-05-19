<template>
  <div class="detailswiper">
      <swiper class="swiper">
          <swiper-item class = "swiper-item"  v-for="item in topimges" :key="item">
              <img src="item" alt="">


          </swiper-item>
      </swiper>

  </div>
</template>

<script>
import {Swiper,SwiperItem} from '../../components/common/swiper'
// 把图片用轮播图展示


export default {
    name :'detailswiper',
    components:{
        Swiper,
        SwiperItem
    },
    // 接收detail.vue的图片
    props:{
        topimges:{
            type: Array,
            default(){
                return[]
            }
        }
    }

}
</script>

<style scoped>
.swiper{
    height: 300px;
    overflow: hidden;

}
</style>