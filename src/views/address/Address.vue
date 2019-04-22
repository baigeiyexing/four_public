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
            <li class="address-wrap">
                <div class="info-wrap">
                    <div class="add-realname">${ele.realname}</div>
                    <div class="add-address">${ad_address}</div>
                    <div class="add-telephone">${ele.telphone}</div>
                    <div class ="add-default-address hid" dat-index="${ele.ad_choose}">默认地址</div>
                </div>
                <div class="edit-wrap clear">
                    <a href="javascript:;" id="edit" v-on:click="open"  :key="">编辑</a>
                    <el-button type="text" @click="open2" id="del"><a href="javascript:;">删除</a></el-button>
                </div> 
            </li>
            <!-- <li v-for="item in addresslist" class="address-wrap" :key="item.id">
                <div class="info-wrap">
                    <div class="add-realname">${ele.realname}</div>
                    <div class="add-address">${ad_address}</div>
                    <div class="add-telephone">${ele.telphone}</div>
                    <div class ="add-default-address hid" dat-index="${ele.ad_choose}">默认地址</div>
                </div>
                <div class="edit-wrap clear">
                    <a href="" id="edit"  data-toggle="modal" data-target="#myModal" :key="">编辑</a>
                    <el-button type="text" @click="open2" id="del"><a href="javascript:;">删除</a></el-button>
                </div>
            </li>  -->
            <li class="new-address"> 
                <a href="javascript:;" id="newaddress" data-toggle="modal" data-target="#myModal" v-on:click="openadd">添加新地址</a>
                <p>预先填写您的邮寄及账单信息可以为您节约付款时间</p>
            </li> 
        </ul>
    </div>
    <Addressmodal v-if="is"></Addressmodal>
    <Addaddress v-if="isadd"></Addaddress>
    </section>
    
</template>
<script>
import Addressmodal from '@/components/address/Addressmodal.vue'
import Addaddress from '@/components/address/Addaddress.vue'

export default {
    name: 'address',
    data(){
        return{
            addresslist:[],
            is:false,
            isadd:false
        }
    },
    components: {
        Addressmodal,
        Addaddress
    },
    methods:{
        //禁止滚动
        stop(){
            var mo=function(e){e.preventDefault();};
            document.body.style.overflow='hidden';
            document.addEventListener("touchmove",mo,false);//禁止页面滑动
        },
        /***取消滑动限制***/
        move(){
            var mo=function(e){e.preventDefault();};
            document.body.style.overflow='';//出现滚动条
            document.removeEventListener("touchmove",mo,false);
        },
        open(){
            this.is=true,
            this.stop();
        },
        close(){
            this.is=false,
            this.move();
        },
        openadd(){
            this.isadd=true,
            this.stop();
        },
        closeadd(){
            this.isadd=false,
            this.move();
        },
        open2() {
            this.$confirm('是否删除此地址?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.$message({
                    type: 'success',
                    message: '删除成功!'
                });
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
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

h1{
    width: 160px;
    margin: 10px auto 30px;
    font-size: 36px;
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
.address-wrap:hover{
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
.info-wrap{
    width: 256px;
    height: 150px;
    padding: 13px 15px;
}
.add-realname,.add-address,.add-telephone{
    text-align: center;
}
.add-realname{
    margin: 20px 0 7px;
}
.add-address{
    padding: 6px 8px;
}
.add-telephone{
    padding: 5px 0 0;
}
.add-default-address{
    width: 194px;
    margin: 3px auto;
    font-size: 12px;
    color: #3E62AD;
    text-align: center;
}
.edit-wrap{
    width: 256px;
    height: 17px;
    padding: 13px;
    border-top: 1px solid #E0EAFF;
    color: #3E62AD; 
}
.edit-wrap a{
    text-decoration: none;
}
#edit{
    float: left;
    padding: 0 5px;
}
#del{
    float: right;
    padding: 0 5px;
    font-size: 17px
}
#del>a{
    padding: 0 5px;
    font-size: 17px
}
  
</style>


