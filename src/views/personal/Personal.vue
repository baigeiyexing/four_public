<template>
    <section>
        <h1>用户中心</h1>
        <div class="container">
            <div class="wish-wrap">
                <img src="../../assets/img/wish.jpg">
                <router-link to="/wishlist">
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
                    <router-link to="/personalmsg">
                        <span class="text">个人中心</span>
                    </router-link>
                    <router-link to="/personalmsg">
                        <p>管理您的个人信息 &gt;</p>
                    </router-link>
                </li>
                <li class="li-item">
                    <router-link to="/address">
                        <span class="text">我的地址</span>
                    </router-link>
                    <router-link to="/address">
                        <p>管理您的订单地址 &gt;</p>
                    </router-link>
                </li>
                <li class="li-item">
                    <router-link to="/coupon">
                        <span class="text">我的优惠券</span>
                    </router-link>
                    <router-link to="/coupon">
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
section{
    width: 100%;
    margin: 50px auto;
    box-sizing: border-box;
}

h1{
    width: 160px;
    margin: 10px auto 30px;
    font-size: 36px;
}
.container{
    width: 100%;
}
/* 心愿清单 */
.wish-wrap {
    max-width: 1440px;
    margin: 0 auto;
    position: relative;
    background: #fff;
    text-align: center;
    padding: 80px 0 52px;
}
@media screen and (max-width: 767px){
    .wish-wrap {
        padding: 40px 15px;
    }
}

.wish-wrap img {
    width: 300px;
    height: 300px;
    margin: 0 auto 22px;
}
.wish-wrap a {
    width: 120px;
    margin: 0 auto;
    display: block;
    text-decoration: none;
    color: #337ab7;
    background-color: transparent;
}

/* 子页面 */
.row {
    margin: 0 25px;
    position: relative;
    background: #fff;
    text-align: center;
    border-top: 1px solid rgb(207, 205, 205);
    list-style: none;
    overflow: hidden;
    padding: 0;
}
.row li {
    width: 24.8%;
    margin: 15px 0;
    padding: 46px 0;
    float: left;
}
.row >li:nth-child(-n+3){
    border-right: 1px solid rgb(207, 205, 205);
}
.row li a {
    position: relative;
    display: block;
    letter-spacing: 1.25px;
    line-height: 20px;
    margin-bottom: 10px;
    text-decoration: none;

}
.row li a .text {
    padding-right: 15px;
    color: #3e62ad;
    font-size: 14px;
}
.row li p {
    font-size: 13px;
    letter-spacing: 0;
    color: #9B9B9B;
}

</style>


