<template>
    <section>
        <h1>我的优惠券</h1>
        <div class="breadcrumb-order">
            <router-link to="/personal"><img src="../../assets/img/home.png"></router-link>
        <img src="../../assets/img/line.png">
        <router-link to="/personal"><span id="user">用户中心</span></router-link>
        <img src="../../assets/img/line.png">
        <span class="last-bread">我的优惠券</span>
        </div>
        <div class="content-wrapper no-have">
            <div>
                <div class="coupon-tab">
                    <div v-for="(item,index) in status" class="tab-title" :class="{ active:check == index}" @click="change(index)" :key="index">{{item}}</div>
                </div>
                <div class="add-new-coupon"><el-button type="text" @click="dialogFormVisible = true">添加优惠券</el-button></div>
                <div class="loading">
                    <!-- <img src="./image/mockup/common/loading-1.gif"> -->
                </div>
                <div class="coupon-list-wrapper">
                    <ul class="coupon-list"></ul>
                    <div class="pagination-wrap" id="pagination-id-1"></div>
                </div>
                <div class="empty">您目前无可用的优惠券</div>
            </div>
            <el-dialog title="添加优惠券" :visible.sync="dialogFormVisible">
            <el-form :model="form">
                <el-form-item label="优惠券号" :label-width="formLabelWidth">
                <el-input v-model="form.name" autocomplete="off" v-on:input ="add"></el-input>
                </el-form-item>
                <div class="msg">{{msg}}</div>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="handleClose">取 消</el-button>
                <el-button type="primary" @click="handleClose">确 定</el-button>
            </div>
            </el-dialog>
        </div>
    </section>
</template>
<script>
export default {
    name:'coupon',
    data(){
        return{
            check:0,
            status:['可使用','已使用','已过期'],
            dialogTableVisible: false,
            dialogFormVisible: false,
            form: {
            name: '',
            region: '',
            date1: '',
            date2: '',
            delivery: false,
            type: [],
            resource: '',
            desc: ''
            },
            formLabelWidth: '120px',
            msg:""
        }
    },
    methods:{
        change(index){
            this.check = index
        },
        add(){
            this.msg="优惠券不存在或已过期"
        },
        handleClose(){
            this.dialogFormVisible=false,
            this.msg="",
            this.form.name= ''
        }
    }
}
</script>
<style>
section{
    margin: 50px auto;
    box-sizing: border-box;
    min-height: 500px;
}

h1{
    width: 180px;
    margin: 10px auto 30px;
    font-size: 36px;
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

/* 主体 */
.container{
    width: 100%;
    padding: 0 30px;
}
.content-wrapper {
    width: 1410px;
    padding: 30px 15px;
    margin: 0 auto;
}
.content-wrapper > div {
    width: 1280px;
    margin: 0 auto;
    position: relative;
}
.content-wrapper > div .coupon-tab {
    border-bottom: 1px solid #dddddd;
    margin-bottom: 18px;
}


/* 优惠券状态*/
.content-wrapper > div .coupon-tab .tab-title {
    position: relative;
    display: inline-block;
    padding: 10px 35px;
    margin-right: 10px;
    cursor: pointer;
    border-bottom: 2px solid transparent;
}
/* 选中后下面的下划线 */
.content-wrapper > div .coupon-tab .tab-title.active:after {
    opacity: 1;
}
.content-wrapper > div .coupon-tab .tab-title:after {
    content: '';
    display: block;
    position: absolute;
    top: 38px;
    border: 2px solid #3E62AD;
    width: 42px;
    opacity: 0;
    margin: 0 auto;
    border-radius: 10px;
}
/* 添加优惠券 */
.content-wrapper > div .add-new-coupon {
    position: absolute;
    top: 10px;
    right: 20px;
    cursor: pointer;
    text-decoration: none;
}
.content-wrapper > div .empty {
    font-size: 20px;
    padding: 30px;
    text-align: center;
}
.el-dialog{
    position: fixed;
    top: 40%;
    left: 50%;
    transform: translate(-50%,-50%)
}
.msg{
    color: red;
    font-size: 14px;
    text-align: center
}
</style>


