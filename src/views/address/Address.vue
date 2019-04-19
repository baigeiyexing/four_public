<template>
    <section>
    <h1>我的地址</h1>
    <div class="breadcrumb-order">
        <router-link to="/personal"><img src="../assets/img/home.png"></router-link>
        <img src="../assets/img/line.png">
        <router-link to="/personal"><span id="user">用户中心</span></router-link>
        <img src="../assets/img/line.png">
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
@import '../assets/css/users_address.css';
</style>


