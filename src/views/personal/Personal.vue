<template>
  <section>
    <h1>用户中心</h1>
    <div class="container">
        <div class="wish-wrap">
<<<<<<< HEAD
            <img src="../assets/wish.jpg">
=======
            <img src="../assets/img/wish.jpg">
>>>>>>> 186b7d5c884bfef2f50df53e325d0edf86cc7b1f
            <router-link to="./getwishlist">
                <span class="text">我的心愿清单 &gt;</span>
            </router-link> 
        </div>
        <ul class="row clear ">
            <li class="li-item">
                <router-link to="./order">
                    <span class="text">我的订单</span>
                </router-link>
                <router-link to="./order">
                    <p>管理和编辑您的订单 &gt;</p>
                </router-link>
            </li>
            <li class="li-item">
                <router-link to="./getmessage">
                    <span class="text">个人中心</span>
                </router-link>
                <router-link to="./getmessage">
                    <p>管理您的个人信息 &gt;</p>
                </router-link>
            </li>
            <li class="li-item">
<<<<<<< HEAD
                <router-link to="./getaddress">
                    <span class="text">我的地址</span>
                </router-link>
                <router-link to="./getaddress">
=======
                <router-link to="/address">
                    <span class="text">我的地址</span>
                </router-link>
                <router-link to="/address">
>>>>>>> 186b7d5c884bfef2f50df53e325d0edf86cc7b1f
                    <p>管理您的订单地址 &gt;</p>
                </router-link>
            </li>
            <li class="li-item">
                <router-link to="./getcoupon">
                    <span class="text">我的优惠券</span>
                </router-link>
                <router-link to="./getcoupon">
                    <p>管理您的优惠券 &gt;</p>
                </router-link>
            </li>
        </ul>
    </div>
</section>

</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'personal',
  components: {
  }
}

</script>

<style scoped>
<<<<<<< HEAD
@import "../assets/personal.css";
=======
@import "../assets/css/personal.css";
>>>>>>> 186b7d5c884bfef2f50df53e325d0edf86cc7b1f

</style>


