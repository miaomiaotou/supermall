<template>
<!-- 轮播图里的小的item -->
  <div class="slide">
    <slot>miaomiao</slot>
    <!-- 预留的插槽，可以往里边插东西 -->
  </div>
</template>

<script>
	export default {
		name: "Slide"
	}
</script>

<style scoped>
  .slide {
    width: 100%;
    flex-shrink: 0;
  }

  .slide img {
    width: 100%;
  }
</style>
