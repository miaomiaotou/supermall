<template>
<!-- 用于展示商品列表的，这个div里要放小的item ，遍历小的item-->
  <div class="goods">
    <!-- <goods-list-item v-for="item in goods" :goods-item="item"/> -->
    <goods-list-item v-for="item in goods" :goods-item="item"/>
  </div>
</template>

<script>
  import GoodsListItem from './GoodsListItem'

  export default {
    name: "GoodsList",
    components: {
      GoodsListItem
    },
    props: {
      goods: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    padding: 2px;
  }


</style>
