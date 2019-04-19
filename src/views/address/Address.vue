<template>
    <section>
    <h1>我的地址</h1>
    <div class="breadcrumb-order">
        <router-link to="/personal"><img src="../../assets/img/home.png"></router-link>
        <img src="../../assets/img/line.png">
        <router-link to="/personal"><span id="user">用户中心</span></router-link>
        <img src="../../assets/img/line.png">
        <span class="last-bread">我的地址</span>
    </div>
    <div class="container">
        <ul id='address-list' class="clear">
            <li class="new-address"> 
                <a href="javascript:;" id="newaddress" data-toggle="modal" data-target="#myModal">添加新地址</a>
                <p>预先填写您的邮寄及账单信息可以为您节约付款时间</p>
            </li> 
        </ul>
        
    </div>
    
</section>
</template>
<script>
export default {
    name: 'address',
    components: {

    }
}
</script>
<style>
section{
    margin: 50px auto;
    box-sizing: border-box;
}

h1{
    width: 160px;
    margin: 10px auto 30px;
}
ul,li{
    list-style: none;
}
.clear::before,
.clear::after{
    content: '';
    display: table;
}
.clear::after{
    clear: both;
}
/* 返回用户中心导航 */
.breadcrumb-order {
    max-width: 1440px;
    margin: 0 auto;
    position: relative;
    padding-top: 20px;
    z-index: 2;
    line-height: 24px;
    padding-left: 20px;
    font-size: 13px;
    color: #4A4A4A;
}
.breadcrumb-order a{
    font-weight: 600;
    text-decoration: none;
}
.breadcrumb-order img{
    width: 12px;
    height: 10.8px;
    background-size: cover;
    margin: 0 5px;
    display: inline-block;
    vertical-align: middle;
}
.breadcrumb-order #user{
    color: #000;
}
.breadcrumb-order span{
    color: #3E62AD;
}
.container{
    width: 100%;
    padding: 0 30px;
}
#address-list{
    width: 1280px;
    margin: 0 auto;
    padding: 60px 0;
    justify-content:center;
}
.address-wrap{
    width: 256px;
    height: 195px;
    margin: 0 30px 60px 30px;
    background: #F2F4F5;
    /* margin: 0 auto; */
    float: left;
}
.new-address:hover{
    border: 1px solid #4033b7;
    box-shadow: 0px 1px 10px #4033b7; 
}

.new-address{
    width: 256px;
    height: 195px;
    margin: 0 30px 60px 30px;
    border: 1px solid #E0EAFF;
    color: #4a4a4a;
    float: left;
}
.new-address>a{
    display: block;
    width: 194px;
    height: 17px;
    margin: 50px auto 0;
    padding: 0 0 30px;
    text-align: center;
    text-decoration: none;
}
.new-address>p{
    width: 194px;
    text-align: center;
    margin: 0 auto;
}

  
</style>


