<template>
<div class="detail">
    <detailswiper :topimges="topimges"/>
    <!-- topimges="topimges,把图传过去 -->

</div>
  
</template>

<script>
import {getdetail} from '../../network/detail';
import detailswiper from './detailswiper';
export default {
name :"detail",
components:{
    detailswiper
    },

data(){
    // 现在这里把iid保存下来，默认设为null
    return{
        iid: null,
        topimges:[]

    }
},
created(){
    // 在这里拿传过来的iid,可以通过这个iid去请求更加详细的东西
    this.iid = this.$route.params.iid
    // 根据iid请求详细的数据，直接在这里请求不好。在network里的，detail.js里封装比较好

    // 在network里请求完之后,在这里再处理,把数据请求过来再展示
    // 展示的过程：1.把需要展示的数据从请求的数据中抽出来，从一大推里边找自己想要的数据（没接口文档）
    //            2.把数据展示出来，自己定义变量存进去  
    getdetail(this.iid).then(
        res=>{
            console.log(res);
            // 获取来自服务器顶部的图片轮播数据，然后在detailswiper展示出来
            this.topimges = res.result.items.topimges
            


            
        }
    )
}
}
</script>

<style  scoped>

</style>>

