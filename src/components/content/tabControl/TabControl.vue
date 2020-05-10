<template>
  <div class="tab-control">
    <!-- 起名字tab-control -->

    <!-- 根据数组决定几个div ,然后在里边分了小的item起名为tab-control-item,然后把变量给index,然后监听click，保证点击的时候触发效果-->


    <!-- <div v-for="items in titles" :key="items">
   <span>{{item}}</span> --> 

    <div v-for="(item, index) in titles" :key="item"
         class="tab-control-item"
         :class="{active: index === currentIndex}"
         @click="itemClick(index)" >
      <span>{{item}}</span>




    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    props: {
      // 用这个的时候要传入的数据
      titles: {
        type: Array,
      // 传文字，数组类型

        default() {
          return []
        }
      }
    },
    data() {
      return {
        currentIndex: 0
      }
     },
    // 用变量current记录一下谁选中了



    // 监听
    methods: {
      itemClick(index) {
        this.currentIndex = index;
        this.$emit('tabClick', index)
      }
    }
  }
</script>

<style scoped>
  .tab-control {
    display: flex;
    text-align: center;
    font-size: 15px;
    height: 40px;
    line-height: 40px;
    background-color: #fff;
  }

  .tab-control-item {
    flex: 1;
  }

  .tab-control-item span {
    padding: 5px;
  }

  .active {
    color: var(--color-high-text);
  }

  .active span {
    border-bottom: 3px solid var(--color-tint);
  }
</style>
