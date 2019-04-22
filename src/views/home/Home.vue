<template>
<vueX_lunbo></vueX_lunbo>
<vueX_body></vueX_body>
</template>



<script>
// ↓ --------- 引入home轮播组件 ----------
    import Home_lunbo from '../../components/home/Home_lubo'
    import Home_body from '../../components/home/Home_body'
    export default {
        name: 'home',
        // data(){
        //     return {
        //      留着写代码的位置
        // },
        components: {
            // ↓ 注册主页轮播组件
            vueX_lunbo:Home_lunbo,
            vueX_body:Home_body
        }
    }
</script>
