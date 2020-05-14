<template>
  <div class="goods-item">
    <!-- 获取到数据 -->
    <img :src="goodsItem.show.img" alt="">
    <!--图片 goods.show.img是首页传过来的数据，就是这个结构的，是网络请求过来的数据 ，没有接口所以用个本地的哈哈哈哈-->


    <div class="goods-info">
      <!-- 然后从goodsItem里边把商品的描述什么的取出来，（传过来的数据结构就是这个样），放到P标签里 -->
      <p>{{goodsItem.title}}</p>
      <!-- 商品描述下边的价格，收藏什么的 -->
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsListItem",
    props: {
      goodsItem: {
        type: Object,
        // 小组件对应的是对象
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
/* 小的item里边的具体的布局和样式 */
  .goods-item {
    padding-bottom: 40px;
    position: relative;

    width: 48%;
    /* 宽度要是设置固定了，不同的屏幕就会留空白，设置成百分比比较好 */
  }

  .goods-item img {
    width: 100%;
    border-radius: 5px;
  }

  .goods-info {
    font-size: 12px;
    position: absolute;
  /* 小组件下边的文字什么的是直接定位的 */
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }
/* goode-info和上边的class对应 */
  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }

  .goods-info .collect {
    position: relative;
  }

  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>
