<template>
<!-- 让大的，遍历小的 -->

  <div class="goods">
    <goods-list-item/>
   
   <!-- <img src="@/assets/img/home/01_miaowazhongzi.png" alt="">
   <img src="@/assets/img/home/02_miaowahua.png" alt="">
   <img src="@/assets/img/home/03_miaowazhongzi.png" alt="">
 -->

    <!-- <goods-list-item v-for="item in goods" :goods-item="item"/> -->
<!-- 实际展示的时候不是这样的li，是需要home.vue把数据给过来，然后展示 -->
    <!-- <ul>
      <li>biaol</li>
      <li>biaol</li>
      <li>biaol</li>
      <li>biaol</li>
      <li>biaol</li>
      <li>biaol</li>
    </ul> -->

<!-- <good-list :goods="goods["pop"].list/> 之后就把数值给过来了，可以插值表达式用一下 <div>{{goods}}</div>,
根据这个goods来决定遍历多少个小的item,然后放到div里边展示就可以了(每一个小组件对应一个对象)-->
<!-- <goods-list-item v-for="item in goods" 
:goods-item="item"/> -->
 <!-- 把遍历出来的值放到右边的item，然后给了左边的goods-item -->



</div>
</template>

<script>
// 要遍历先把item拿过来，和注册
  import GoodsListItem from './GoodsListItem'
  export default {
    name: "GoodsList",
    components: {
      GoodsListItem
    },
    // 接受home.vue的数据，先一个空的数组，props父传子
    props: {
      goods: {
        type: Array,
        // 数组类型
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .goods {
    /* 安排每一个小的item的布局 */
    display: flex;
    /* 父组件里只有flex的话，都会往一行里边塞，用flex-wrap属性调整成包裹，就可以设置宽度，不往一行里边塞*/
    flex-wrap: wrap;
    justify-content: space-around;
    /* 用这个小的item就均等分了 */
    padding: 2px;
  }
</style>