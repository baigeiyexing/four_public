<template>
    <div>
    <vuex_aff_lunbo></vuex_aff_lunbo>
    <div v-on:click="get_affData(2)">点我2</div>
    </div>
</template>

<script>
    // ↓ ---------- 引入轮播组件 ----------------
    import aff_lunbo from"../../components/aff_originality/aff_lunbo"
    export default {
        // data(){
        //     return{[
        //             {lunbo:["图片1","图片2","图片3","图片4","图片5"],
        //     aff_id:[1,2,3,4,5,6,7,8,9]}
        //
        // ]
        //     }
        // }
        // ,
        // components:{
        //     // ↓ 注册轮播图组件
        //     vuex_aff_lunbo:aff_lunbo
        // }
        // ,
        // methods:{
        //     // ↓ 设置灵感页面的AJAX方法
        //     get_affData:function(page_num) {
        //       console.log(123)
        //     }
        //     // ↓ 构造页面的方法
        //
        //
        // }
    }

</script>
