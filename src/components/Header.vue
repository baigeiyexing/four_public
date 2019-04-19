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

                    <input type="text" value="请输入需要查询的内容"><span class="iconfont icon-fangdajing"></span>
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
    a{color:#000;}
    a:link{color:#000000}
    a:hover{color:#eeeeee}
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
        background-color: #fffac9;
        height: 30px;
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
        background-color: #d9d9d9;
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
    .head_nav_button span :nth-child(2){
        margin-left: 0px;
    }

    .head_nav_button input{
        width: 80px;
    }


</style>
