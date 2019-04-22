<template>
    <section>
        <h1>我的心愿单</h1>
        <div class="breadcrumb-order">
            <router-link to="/personal"><img src="../../assets/img/home.png"></router-link>
        <img src="../../assets/img/line.png">
        <router-link to="/personal"><span id="user">用户中心</span></router-link>
        <img src="../../assets/img/line.png">
        <span class="last-bread">我的心愿单</span>
        </div>
        <div class="container">
            <ul id="wish-list" class="clear">
                <li class="wish-wrap">
                    <el-button type="text" @click="open2"><div class="del" data-index="">X</div></el-button>
                    <div class="img-wrap">
                        <img src="../../assets/img/wish.jpg" alt="" class="img-item">
                    </div>
                    <div class="wish-info">
                        <div class="name">娱乐储物桌</div>
                        <div class="size">长660*宽660*高411mm</div>
                        <div class="price">￥4,800.00</div>
                    </div>
                </li>
                <!-- <li class="wish-wrap" v-for="item in wishlist">
                    <div class="del" data-index="">X</div>
                    <div class="img-wrap">
                        <img src="item.img" alt="" class="img-item">
                    </div>
                    <div class="wish-info">
                        <div class="name">{{item.name}}</div>
                        <div class="size">{{item.size}}</div>
                        <div class="price">{{item.price}}</div>
                    </div>
                </li> -->
            </ul>
        </div>
    </section>
</template>
<script>
export default {
    methods: {
        open2() {
            this.$confirm('是否将此商品移除心愿单?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.$message({
                    type: 'success',
                    message: '移除成功!'
                });
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消移除'
                });          
            });
        },
    }
}
</script>
<style>
section{
    margin: 50px auto;
    box-sizing: border-box;
}
ul,li{
    list-style: none!important;
}
/* 心愿清单 */
h1{
    width: 160px;
    margin: 10px auto 30px;
    font-size: 36px;
}
.container{
    width: 100%;
    padding: 0 30px;
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
/* 心愿单商品盒子 */
#wish-list{
    width: 1280px;
    margin: 0 auto;
    padding: 60px 0;
}
.wish-wrap{
    float: left;
    width: 256px;
    height: 381.2px;
    padding: 40px 0;
    border: 1px solid rgb(235, 235, 235);
    margin: 20px;
    position: relative;
}
.wish-wrap:hover{
    border: 1px solid #4033b7;
    box-shadow: 0px 1px 10px #4033b7; 
}
/* 删除 */
.del{
    position: absolute;
    right: 10px;
    top: 10px;
    color: #3E62AD;
    font-size: 16px;
    cursor: pointer;
}
/* 物品图片 */
.img-wrap{
    width: 200px;
    height: 200px;
    display: block;
    margin: auto;
    cursor: pointer;
    overflow: hidden;
}
.img-item{
    width: 100%;
    height: 100%;
    background-size: cover;
}
/* 物品信息 */
.wish-info{
    text-align: center;
    margin-top: 20px;
}
.name{
    color: #3E62AD;
    font-size: 16px;
    text-decoration: none;
}
.size{
    font-size: 13px;
    color: #4A4A4A;
    margin: 10px auto;
}
.price{
    color: #3E62AD;
    font-size: 16px
}
</style>


