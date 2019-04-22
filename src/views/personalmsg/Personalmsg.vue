<template>
    <section>
        <h1>我的信息</h1>
        <div class="breadcrumb-order">
            <router-link to="/personal"><img src="../../assets/img/home.png"></router-link>
        <img src="../../assets/img/line.png">
        <router-link to="/personal"><span id="user">用户中心</span></router-link>
        <img src="../../assets/img/line.png">
        <span class="last-bread">我的信息</span>
        </div>
        <div class="container">
            <form name="userinfo"  ref="form" enctype="multipart/form-data">
                <div id="touxiang">
                    <div class="info-name">个人头像</div>
                    <el-upload  class="avatar-uploader"  action="https://jsonplaceholder.typicode.com/posts/"  :show-file-list="false"  :on-success="handleAvatarSuccess"  :before-upload="beforeAvatarUpload">  <img v-if="imageUrl" :src="imageUrl" class="avatar">  <i v-else class="el-icon-plus avatar-uploader-icon"></i></el-upload>
                </div>
                <div class="account-content">
                    <div id="msg">
                        <div class="sex-nickname clear">
                            <div class="sex">
                                <div class="info-name">称谓</div>
                                <div class="sex-select">
                                    <select name="sex" id="sex-select">
                                        <option value="0">先生</option>
                                        <option value="1">女士</option>
                                    </select>
                                </div>
                            </div>
                            <div class="nickName">
                                <div class="info-name">昵称</div>
                                <input type="text" name="nickname" class="input" v-model="nickname" @blur="yz1">
                                <p class="msg" v-model="nicknamemsg">{{nicknamemsg}}</p>
                            </div>
                        </div>
                        <div class="realname">
                            <div class="info-name">真实姓名</div>
                            <input type="text" name="realname" class="input" v-model="realname" @blur="yz2">                        
                            <p class="msg" v-model="realnamemsg">{{realnamemsg}}</p>
                        </div>
                        <div class="birthday">
                            <div class="info-name">生日</div>
                            <el-date-picker name="birthday" v-model="value1" type="date" placeholder="选择日期" @blur="yz3"></el-date-picker>
                            <p class="msg" v-model="birthmsg">{{birthmsg}}</p>
                        </div>
                        <div class="email">
                            <div class="info-name">邮箱</div>
                            <input type="text" name="email" class="input" v-model="email" @blur="yz4">                        
                            <p class="msg" v-model="emailmsg">{{emailmsg}}</p>                        
                        </div>
                        <div class="telephone">
                            <div class="info-name">手机号码</div>
                            <input type="text" name="telephone" class="input" v-model="telephone" @blur="yz5">                        
                            <p class="msg" v-model="telephonemsg">{{telephonemsg}}</p>     
                        </div>
                    </div>
                    <div class="change-password" v-on:click="open">修改登录密码</div>
                    <el-button type="text" v-on:click.prevent="open2"><button class="save-changes" :disabled="ischeck">保存修改</button></el-button>
                </div>
            </form>
        </div>
    <Editpwd v-if="is"></Editpwd>
    </section>
</template>
<script>
import Editpwd from "@/components/editpwd/Editpwd.vue"
export default {
    data() {
        return {
            imageUrl: '',
            value1: '',
            is:false,
            ischeck:true,
            nickname:"",
            realname:"",
            email:"",
            telephone:"",
            nicknamemsg:"",
            realnamemsg:"",
            birthmsg:"",
            emailmsg:"",
            telephonemsg:"",
            status1:false,
            status2:false,
            status3:false,
            status4:false,
            status5:false,
        };
    },
    components:{
        Editpwd
    },
    methods: {
        save(){
            if(this.status1&&this.status2&&this.status3&&this.status4&&this.status5){
                this.ischeck=false
            }else{
                this.ischeck=true
            }
        },
        yz1(){
            var name = /[^\a-\z\A-\Z0-9\u4E00-\u9FA5\@\.]/g;
            if(this.nickname.length==0){
                this.nicknamemsg="昵称不能为空";
                this.status1 = false
            }else if(name.test(this.nickname)){
                this.nicknamemsg="此昵称不可用";
                this.status1 = false
            }else{
                this.nicknamemsg="";
                this.status1 = true
            }
            this.save()
        },
        yz2(){
            var name = /^[\u4E00-\u9FA5A-Za-z]+$/;
            if(this.realname.length==0){
                this.realnamemsg="姓名不能为空";
                this.status2 = false
            }else if(!name.test(this.realname)){
                this.realnamemsg="只能输入中文和英文";
                this.status2 = false
            }else{
                this.realnamemsg="";
                this.status2 = true
            }
            this.save()
        },
        yz3(){
            if(this.value1==""||this.value1==null){
                this.birthmsg="生日不能为空";
                this.status3 = false
            }else{
                this.birthmsg="";
                this.status3 = true
            }
            this.save()
        },
        yz4(){
            var emailname = /^\w+@\w+(\.[a-zA-Z]{2,3}){1,2}$/;
            if(this.email.length==0){
                this.emailmsg="邮箱不能为空";
                this.status4 = false
            }else if(!emailname.test(this.email)){
                this.emailmsg="邮箱格式错误";
                this.status4 = false
            }else{
                this.emailmsg="";
                this.status4 = true
            }
            this.save()
        },
        yz5(){
            var phonenum = /^1[34578]\d{9}$/;
            if(this.telephone.length==0){
                this.telephonemsg="手机号码不能为空";
                this.status5 = false
            }else if(!phonenum.test(this.telephone)){
                this.telephonemsg="非法号码";
                this.status5 = false
            }else{
                this.telephonemsg=""
                this.status5 = true
            }
            this.save()
        },
        open2() {
            var formData = new FormData(this.$refs.form)
            console.log(formData.realname)
            this.$confirm('是否保存修改?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.$message({
                    type: 'success',
                    message: '保存成功!'
                });
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消保存'
                });          
            });
        },
        handleAvatarSuccess(res, file) {
            this.imageUrl = URL.createObjectURL(file.raw);
        },
        beforeAvatarUpload(file) {
            const isJPG = file.type === 'image/jpeg';
            const isLt2M = file.size / 1024 / 1024 < 2;
            if (!isJPG) {
                this.$message.error('上传头像图片只能是 JPG 格式!');
            }
            if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isJPG && isLt2M;
        },
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
    }
}
</script>
<style>
section{
    margin: 50px auto;
}
h1{
    width: 160px;
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
.container{
    width: 940px;
    height: 660px;
    padding: 40px 15px 0 15px;
    margin: 0 auto;
}

.account-content{
    width: 300px;
    height: 660px;
    margin: 0 auto;
    position: relative;
}
/* 个人头像 */
#touxiang{
    float: left;
    text-align: center;
    margin-top: 100px
}
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}
.avatar-uploader .el-upload:hover {
    border-color: #409EFF;
}
.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
}
.avatar {
    width: 178px;
    height: 178px;
    display: block;
}
/* 信息名称格式 */
.info-name{
    width: 100%;
    height: 28.4px;
    font-size: 14;
    font-weight: 400;
    color: #898989;
    margin-bottom: 10px;
    text-align: left
}
.input{
    width: 100%;
    height: 40px;
    padding: 10px;
    border-radius: 4px;
    border: 1px solid #DFE3E6;
    color: #4A4A4A;
    outline: none;
    user-select: none;
    box-shadow: none
}
.input:focus{
    border-style:solid;
    border-color: #03a9f4;
	/* box-shadow: 0 0 15px #03a9f4; */
}
.msg{
    width: 100%;
    height: 13px;
    font-size: 12px;
    color: red;
}
/* 性别和昵称 */
.sex-nickname{
    width: 100%;
    height: 103.4px;   
}
.sex{
    width: 76px;
    height: 78.4px;
    margin-bottom: 25px;
    float: left;
}
.sex>.sex-select{
    width: 76px;
    height: 40px;
    border-radius: 5px;
}
#sex-select{
    width: 100%;
    height: 100%;
    border: 1px solid #DFE3E6;
    border-radius: 5px;
    outline: none;
    user-select: none;
}
#sex-select:focus{
    border-style:solid;
    border-color: #03a9f4;
}
.nickName{
    float: right;
    width: 190px;
    height: 78.4px;
    margin-bottom: 25px;
}
/* 真实姓名 */
.realname{
    width: 300px;
    height: 103.4px;
}

/* 生日 */
.birthday{
    width: 300px;
    height: 103.4px;
}
.el-date-editor{
    width: 100%!important
}

/* 邮箱 */
.email{
    width: 300px;
    height: 103.4px;

}

/* 手机号码 */
.telephone{
    width: 300px;
    height: 103.4px;

}
/* 修改密码 */
.change-password{
    font-size: 12px;
    color: #337ab7;
    border: none;
    position: relative;
    bottom:8px;
}
.change-password:hover{
    color: #4033b7;
    cursor: pointer;
    border: none;
    background: none;
}
/* 信息保存修改 */
.el-button--text{
    float: right;
}
.save-changes{
    width: 150px;
    height: 40px;
    margin: 30px auto 0;
    border: 1px solid #337ab7;
    border-radius: 5px;
    color: #337ab7;
    text-align: center;
    line-height: 40px;
    background: none;
    float: right;
    cursor: pointer;
}
.save-changes:hover{
    color: #4033b7;
    border: 1px solid #4033b7;
    box-shadow: 0px 1px 10px #4033b7;
    /* cursor:no-drop; */
}
</style>

