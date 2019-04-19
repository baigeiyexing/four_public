<template>
    <header class="header">
        <div class="header-title">生长于野 <span class="separator">·</span> 安于室</div>
            <div class="logo"></div>
            <nav>
                <ul class="header-nav">
                    <li><router-link to="/home" >主页</router-link></li>
                    <li><router-link to="/furniture?1">家具</router-link></li>
                    <li><router-link to="/furnishing">家居</router-link></li>
                    <li><router-link to="/lifestyle">风格</router-link></li>
                    <li><router-link to="/afflatus">灵感</router-link></li>
                </ul>
            </nav>
            <div class="header-right">
                <div class="input-hover">
                    <input type="text" class="u-search-input">
                    <i class="iconfont icon-sousuo"></i>
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
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html,body{
        width: 100%;
    }
    body{
        color: #000;
        font-weight: 500;
        font-size: 1rem;
        line-height: 1.5;
        background-color: #fff;
        font-family: '方正宋刻本秀楷';
    }
    /*@font-face{*/
        /*font-family: '方正宋刻本秀楷';*/
        /*src: url('/fonts/FZSKBXKK.eot');*/
        /*src: local('/fonts/FZSKBXKK Regular'),*/
        /*local('/fonts/FZSKBXKK'),*/
        /*url('/fonts/FZSKBXKK.ttf') format('truetype'),*/
        /*url('/fonts/FZSKBXKK.svg#FZSKBXKK') format('svg');*/
    /*}*/

    ul,li{
        list-style: none;
    }
    a{
        color: #666;
        font-family: '方正宋刻本秀楷';
        text-decoration: none;
    }
    a:hover{
        color: #000;
        font-family: '方正宋刻本秀楷';
        text-decoration: none;
    }
    .center{
        width: 1100px;
        margin: 0 auto;
    }
    .clear::before,
    .clear::after{
        content: '';
        display: table;
    }
    .clear::after{
        clear: both;
    }

    .header-title{
        font-size: 12px;
        color: #999;
        text-align: center;
        background-color: #f7f7f7;
        min-width: 1200px;
    }
    .separator{
        font-size: 20px;
        vertical-align: middle;
    }
    .header{
        border-bottom: 1px solid #cfcdcd;
        width: 100%;
        min-width: 1200px;
        background-color: #fff;
        z-index: 999;
    }
    .logo{
        float: left;
        width: 62px;
        height: 83px;
        /*background: url(../images/chart/logo.png) no-repeat center;*/
        background-size: cover;
        line-height: 83px;
        margin-right: 180px;
    }
    /* header-nav */
    .header-right{
        float: right;
        line-height: 83px;
    }
    .header-nav li{
        float: left;
        padding: 0 40px;
    }
    .header-nav a{
        display: block;
        line-height: 83px;
        height: 83px;
        font-size: 16px;
    }
    .cur {
        border-bottom:2px solid #000;
    }
    .header-nav  li:hover a{
        border-bottom:2px solid #000 !important;
    }
    /* header-right */
    .header-right div{
        float: left;
        padding: 0 5px;
        color: #666;
    }
    .header-right span{
        cursor: pointer;
    }
    .header-right .iconfont{
        font-size: 18px;
    }
    .u-search-input{
        border: 1px solid #a5a4a4;
        width: 100px;
        height: 20px;
        border-radius: 1em;
        padding: 0 5px;
        font-size: 12px;
        line-height: 20px;
        vertical-align: middle;
        display: none;
        margin-right: 2px;
        overflow: visible;
        outline: none;
    }
    .input-hover:hover input{
        display:inline-block;
    }
    .item{
        margin: 0 5px;
    }
    .hover-text{
        display: none;
        vertical-align: middle;
        font-size: 11px;
        color: #666;
    }


    .nickname-item{
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
    }
    .iconimg{
        width: 18px;
        height: 18px;
        vertical-align: middle;
    }
    #userbox{
        visibility: hidden;
        position: absolute;
        top: 100%;
        right: 0;
        margin-top: 2px;
        border: 1px solid #c9c9c9;
        width: 200px;
        line-height: 1.2;
        background-color: #fff;
        padding: 0 !important;
        z-index: 998;
    }
    .userbox_top{
        width: 100%;
        box-sizing: border-box;
        padding: 25px !important;
        display: flex;
        align-self: auto;
    }
    .userbox_top span{
        line-height: 30px;
        font-size: 14px;
        padding-left: 25px;
    }
    .userbox_top img{
        width: 30px;
        height: 30px;
        border-radius: 50%;
    }
    .userbox_bottom{
        display: inline-block;
        width: 100%;
        font-size: 12px;
        line-height: 33px;
        text-align: center;
        color: #666;
        padding: 0;
        user-select: none;
        font-weight: 400;
        padding: 0 !important;
        display: flex;
        justify-content: space-between
    }
    .userbox_bottom a{
        display: inline-block;
        box-sizing: border-box;
        width: 50%;
        border-top: 1px solid #c9c9c9;
    }
    .userbox_bottom a:first-child{
        border-right: 1px solid #c9c9c9;
    }
    .nickname{
        width: 35px;
        font-size: 12px;
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
    }

</style>
