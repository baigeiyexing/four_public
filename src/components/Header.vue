<template>
    <header class="header">
        <div class="header_title">
            <div class="head_text_box">
                <span>生长于野 · 安于室</span>
            </div>
        </div>
        <div class="head_nav_box">
            <div class="head_nav">
                <div class="home_logo"></div>
                <ul class="clear">
                    <li><router-link to="/home" >主页</router-link></li>
                    <li><router-link to="/furniture?1">家具</router-link></li>
                    <li><router-link to="/furnishing">家居</router-link></li>
                    <li><router-link to="/lifestyle">风格</router-link></li>
                    <li><router-link to="/afflatus">灵感</router-link></li>
                </ul>
                <span class="head_nav_button">
                    <span class="head_input_box"><input class="head_input" type="text" value="请输入需要查询的内容"><span class="iconfont icon-fangdajing"></span></span>
                    <span><router-link to="/shoppingCart"><span class="iconfont icon-gouwuchekong"></span></router-link></span>
                    <span><router-link to="/about"><span class="iconfont icon-dingdan"></span></router-link></span>
                    <span ><router-link to="/personal"><span class="iconfont icon-denglu"></span></router-link></span>
                </span>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: 'VueX-Header',
        data(){
            return{

            }
        },
        props: {
            msg: String
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    a{color:#A9A9A9;}
    a:link{color:#000000}
    a:hover{color:#000}
    a{text-decoration:none;}
    .clear:after{
        content: "";
        display: block;
        clear: both;
        height: 0;
        visibility: hidden;
    }

    .header_title{
        width: 100%;
        background-color: #F6F6F6;
        height: 28px;
        overflow: hidden;
    }
    .head_text_box{
        width: 1100px;
        margin-top:5px;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
    }
    .head_nav ul li{
        float: left;
        list-style: none;
        display: inline;
        padding: 35px  0 31px 0;
        margin: 0 30px;
        color: #bcbcbc;

    }
    .head_nav ul li:hover{
        border-bottom: 3px #000 solid;
    }
    .head_nav ul{
        height: 90px;
        width: 460px;
        text-align: center;
        margin-left: auto;
        margin-right: auto;

    }
    .home_logo{
        float: left;
        width: 70px;
        height: 90px;
        background-color: #000;
    }
    .head_nav{
        width: 1100px;
        margin-left: auto;
        margin-right: auto;
        position: relative;

    }
    .head_nav_box{
        background-color: #fff;
        width: 100%;

    }
    .head_nav_button{
        position: absolute;
        top:36px;
        right: 20px;
    }
    .head_nav_button span{
        margin-left: 10px;
    }
    .head_nav_button span:hover{
        color: #000;
    }
    .head_nav_button span :nth-child(2){
        margin-left: 0px;
    }

    .head_nav_button input{
        width: 150px;
        font-size: 12px;
    }
    .head_input{
       display: none;
        border-radius: 40px;
        -webkit-box-shadow: 0 0 0 1000px white  inset !important;
        padding-left: 5px;
        border: 1px solid #DBDBDB;
        margin-right: 5px;
        outline:none
    }
    .head_input_box:hover .head_input{
        display:inline-block;
    }

</style>
