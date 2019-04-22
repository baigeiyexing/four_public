<template>
    <div class = "home_body" >
        <!-- ---------↓ 循环创建页面图片--------- -->
        <div class="clear home_body_top_box">
            <div class="home_body_box" v-for="(bodyImgK,index) in bodyImgs" :key="index" >
                <img v-bind:src="bodyImgK.src" alt="">
            </div>
        </div>
    </div>
</template>
<style scoped>
    .clear:after{
        content: "";
        display: block;
        clear: both;
        height: 0;
        visibility: hidden;
    }
    .home_body{
        margin-top: 40px;
    }
    .home_body_box{
        width: 270px;
        height: 270px;
        overflow: hidden;
        float: left;

    }
    .home_body_box:nth-child(2){
        margin-right: 7.5px;
        margin-left: 12.5px;
    }
    .home_body_box:nth-child(3){
        margin-right: 12.5px;
        margin-left: 7.5px;
    }
    .home_body_box img{
        height: 300px;
        /*height: 260px;*/
        background-color: #000;
    }
    .home_body_top_box{
        width: 1120px;
        margin-left: auto;
        margin-right: auto;
    }
</style>
<script>
    export default {
        name: 'home_body',
        data(){
            return{
                // ↓ --------------- 引入图片地址 ----------------
                bodyImgs:[
                    {src:require("../../assets/img/home/body/body1.jpg")},
                    {src:require("../../assets/img/home/body/body2.jpg")},
                    {src:require("../../assets/img/home/body/body3.jpg")},
                    {src:require("../../assets/img/home/body/body4.jpg")}
                    ]
            }
        }

    }
</script>