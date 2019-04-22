<template>
    <div class="home_lunbo_top_box">
    <el-carousel  :interval="5000" arrow="always">
        <el-carousel-item class="home_lunbo_box" v-for="(item,index) in lunboimg" :key="index">
            <img class="home_lunbo_picture" v-bind:src="item.src" alt="">
        </el-carousel-item>
    </el-carousel>
    </div>
</template>

<style>
    /*↓ 插件窗口的高*/
    .el-carousel__container{
        height: 300px!important;
    }
    .home_lunbo_picture{
        width: 1120px;
        position: absolute;
        top: -100px;
    }
    .el-carousel__item h3 {
        color: #475669;
        font-size: 18px;
        opacity: 0.75;
        line-height: 300px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
    .home_lunbo_top_box{
        width: 1120px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 30px;
        position: relative;
    }
</style>
<script>
    export default {
        name: 'home_lunbo',
        data() {
            return {
                // ↓ ----------------- 引入的轮播图片地址 -------------------
                lunboimg: [
                    {src: require("../../assets/img/home/lunbo/lunbo1.jpg")},
                    {src: require("../../assets/img/home/lunbo/lunbo2.jpg")},
                    {src: require("../../assets/img/home/lunbo/lunbo3.jpg")},
                    {src: require("../../assets/img/home/lunbo/lunbo4.jpg")}
                ]
            }
        }
    }
</script>