<template>
    <div class="showcaes">
        <div class="showcase_box">
            <span class="showcase_left_button" v-on:click="showcase_left()"><</span>
            <span class="showcase_right_button" v-on:click="showcase_right()">></span>
            <div class="showcase_box_in clear">
                <div class="showcase_Class" v-for="(asetsjonsK,index) in asetsjonses" :key = "index">
                    <span class="showcase_text">{{asetsjonsK.text}}</span>
                    <img class="showcase_img" v-bind:src="asetsjonsK.src" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    *{
        -webkit-touch-callout: none; /* iOS Safari */
        -webkit-user-select: none; /* Chrome/Safari/Opera */
        -khtml-user-select: none; /* Konqueror */
        -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
        user-select: none; /* Non-prefixed version, currentlynot spported by any browser */
    }
    .clear:after{
        content: "";
        display: block;
        clear: both;
        height: 0;
        visibility: hidden;
    }
    .showcaes{
        margin-top: 30px;
    }
    .showcase_box{
        width: 1120px;
        height: 380px;
        overflow: hidden;
        margin-left: auto;
        margin-right: auto;
        position: relative;

    }
.showcase_Class{
    width:270px;
    height: 380px;
    overflow: hidden;
    display: inline-block;
    margin-right: 13px;
    background-color: #EFECE7;
}
.showcase_img{
    width: 270px;
    transition: all .5s linear;
}
.showcase_img:hover{
    -webkit-transform: scale(1.3);
    -moz-transform: scale(1.3);
    -ms-transform: scale(1.3);
    -o-transform: scale(1.3);
    transform: scale(1.3);
    transition: all .5s linear;
}
    .showcase_box_in{
        width: 1850px;
        position: absolute;
        left: 0;
        transition: all 1s linear;
    }
    .showcase_text{
        display: block;
        height: 199.81px;
        text-align: center;
        padding-top: 80px;
        font-size: 18px;
    }
    .showcase_left_button ,.showcase_right_button{
        position: absolute;
        top: calc(50% - 60px);
        font-size: 60px;
        cursor:pointer;
        z-index: 10;
    }
    .showcase_left_button{
        left:30px;

    }
    .showcase_right_button{
        right:30px;
    }
</style>
<script>
    export default {
        name: 'home_showcase',

        mounted(){//← 这里必须是mouted钩子
            // ↓ -------------- 获取橱窗节点 ---------------
            this.showcase_box_in=document.getElementsByClassName("showcase_box_in")[0];
            // ↓ ------------- 橱窗移动的所在位置 ----------------
            this.long=0


        },
        data() {
            return {
                // ↓ ----------------- 引入的轮播图片地址 -------------------
                asetsjonses: [
                    {src: require("../../assets/img/home/showcase/chair.jpg"),text:"椅"},
                    {src: require("../../assets/img/home/showcase/desk.jpg"),text:"桌"},
                    {src: require("../../assets/img/home/showcase/bed.jpg"),text:"床"},
                    {src: require("../../assets/img/home/showcase/teaTable.jpg"),text:"几"},
                    {src: require("../../assets/img/home/showcase/wardrobe.jpg"),text:"柜"},
                    {src: require("../../assets/img/home/showcase/soft.jpg"),text:"沙发"},
                ],
            }
        },
        // ↓ ------------- 设置橱窗页移动的方法 --------------
        methods: {
            showcase_right: function () {
                if (this.long> -560){
                    this.long -= 280;
                    this.showcase_box_in.style.left =  this.long + "px";
                }
            },
            showcase_left: function () {
                if (this.long< 0){
                    this.long += 280;
                    this.showcase_box_in.style.left = this.long + "px";
                }

            }
        }
    }
</script>