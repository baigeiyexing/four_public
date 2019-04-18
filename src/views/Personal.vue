<template>
  <section>
    <h1>用户中心</h1>
    <div class="container">
        <div class="wish-wrap">
            <img src="../assets/wish.jpg">
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
                <router-link to="./getaddress">
                    <span class="text">我的地址</span>
                </router-link>
                <router-link to="./getaddress">
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
@import "../assets/personal.css";

</style>


