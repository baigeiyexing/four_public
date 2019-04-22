<template>
    <div class="home">
        <vuex_lunbo></vuex_lunbo>
        <vuex_body></vuex_body>
        <vuex_Showcase></vuex_Showcase>
        <vuex_video></vuex_video>
    </div>
</template>

<script>
// ↓ --------- 引入home轮播组件 ----------
    import Home_lunbo from '../../components/home/Home_lubo'
// ↓ -------- 引入页面身体部分组件 ----------
    import Home_body from "../../components/home/Home_body"
// ↓ ----------- 引入橱窗组件 ---------
    import Home_Showcase from "../../components/home/Home_showcase"
// ↓ ----------- 引入主页视频组件 ---------
    import Home_Video from "../../components/home/Home_video"

    export default {
        name: 'home',
        components: {
            // ↓ 注册主页轮播组件
            vuex_lunbo:Home_lunbo,
            // ↓ 注册主页身体组件
            vuex_body:Home_body,
            // ↓ 注册橱窗组件
            vuex_Showcase:Home_Showcase,
            // ↓ 注册主页视频组件
            vuex_video:Home_Video
        }
        ,
        data(){
            return{
                
            }
        }
    }
</script>
