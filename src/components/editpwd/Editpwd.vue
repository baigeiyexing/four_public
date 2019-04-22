<template>
    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" >
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close" v-on:click="childclose"><span
                            aria-hidden="true">X</span></button>
                    <h4 class="modal-title" id="myModalLabel">修改密码</h4>
                </div>
                <div class="modal-body">
                    <form name = "editForm" method="post">
                        <div class="form-group">
                            <label for="recipient-name">原密码：</label>
                            <input  type='password' class="form-control" required placeholder="原密码" @blur="yz1" v-model="oldpwd">
                            <div style="display: inline-block" v-model="oldmsg" class="msg">{{oldmsg}}</div>
                        </div>
                        <div class="form-group">
                            <label for="message-text">新密码:</label>
                            <input  type='password'  class="form-control" required placeholder="长度为: 6-18" @blur="yz2" v-model="newpwd1">
                            <div style="display: inline-block" v-model="newpwdmsg1" class="msg">{{newpwdmsg1}}</div>
                        </div>
                        <div class="form-group">
                            <label for="message-text">再次输入:</label>
                            <input type='password' class="form-control" required placeholder="必须和第一次一样" @blur="yz3" v-model="newpwd2">
                            <div style="display: inline-block" v-model="newpwdmsg2" class="msg">{{newpwdmsg2}}</div>
                        </div>
                        <div class="form-group">
                            <label for="message-text"  >输入验证码:</label>
                            <input type="text" name="" class="form-control" id="yzm" required placeholder="输入右方验证码" @blur="yz4" v-model="code">
                            <div class="code" @click="refreshCode">
                                <SIdentify :identifyCode="identifyCode"></SIdentify>
                            </div>
                            <div style="display: inline-block" v-model="codemsg" class="msg">{{codemsg}}</div> 
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal" v-on:click="childclose">取消</button>
                    <!-- <button type="button" class="btn btn-primary" id="editsave" v-on:click="childclose">保存</button> -->
                    <el-button type="text" @click="open2" class="btn btn-primary" id="editsave" :disabled="pwdcheck">保存</el-button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import SIdentify from '@/components/identify/Identify.vue'
export default {
  name: "codetest",
  data() {
    return {
      identifyCodes: "1234567890abcdefghijklmnopqrstuvwxyz",
      identifyCode: "",
      code:"",
      status1:false,
      status2:false,
      status3:false,
      status4:false,
      oldpwd:"",
      newpwd1:"",
      newpwd2:"",
      oldmsg:"",
      newpwdmsg1:"",
      newpwdmsg2:"",
      codemsg:"",
      pwdcheck:true
    };
  },
  components:{
      SIdentify
  },
  mounted() {
    this.identifyCode = "";
    this.makeCode(this.identifyCodes, 4);
  },
  methods: {
    savepwd(){
        if(this.status1&&this.status2&&this.status3&&this.status4){
            this.pwdcheck=false
        }else{
            this.pwdcheck=true
        }
    },
    //   正则判断
    yz1(){
        if(this.oldpwd.length==0){
            this.oldmsg="不能为空"
            this.status1=false
        }else{
            this.status1=true
            this.oldmsg=""
        }
        this.savepwd();
    },
    yz2(){
        if(this.newpwd1.length==0){
            this.newpwdmsg1="不能为空"
            this.status2=false
        }else if(this.newpwd1.length<6){
            this.newpwdmsg1="密码不能小于6位"
            this.status2=false
        }else if(this.newpwd1.length > 18){
            this.newpwdmsg1="密码不能大于18位"
        }else{
            this.status2=true
            this.newpwdmsg1=""
        }
        this.savepwd();
    },
    yz3(){
        if(this.newpwd2.length==0){
            this.newpwdmsg2="不能为空"
            this.status3=false
        }else if(this.newpwd2!==this.newpwd1){
            this.newpwdmsg2="和第一次新密码不同"
            this.status3=false
        }else{
            this.newpwdmsg2=""
            this.status3=true
        }
        this.savepwd();
    },
    yz4(){
        if(this.code.length==0){
            this.codemsg="不能为空"
            this.status4=false
        }else if(this.code.length!==4){
            this.codemsg="请输入右侧4位验证码"
            this.status4=false
        }else{
            this.codemsg=""
            this.status4=true
        }
        this.savepwd();
    },
    open2() {
        this.$confirm('是否保存修改?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
        }).then(() => {
            this.childclose();
            this.$message({
                type: 'success',
                message: '保存成功!'
            });
        }).catch(() => {
            this.childclose();
            this.$message({
                type: 'info',
                message: '已取消保存'
            });          
        });
    },
    childclose(){
        this.$parent.close()
    },
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    refreshCode() {
      this.identifyCode = "";
      this.makeCode(this.identifyCodes, 4);
    },
    makeCode(o, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode += this.identifyCodes[
          this.randomNum(0, this.identifyCodes.length)
        ];
      }
      console.log(this.identifyCode);
    }
  }
};
</script>
<style>
.modal {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1050;
    /* display: none; */
    overflow: hidden;
    -webkit-overflow-scrolling: touch;
    outline: 0;
    background: rgb(0, 0, 0,0.3)
}
.modal-header {
    padding: 15px;
    border-bottom: 1px solid #e5e5e5;
}
.modal-header>h4{
    text-align: center;
}
.modal-header .close {
    margin-top: -2px;
}
button.close {
    -webkit-appearance: none;
    padding: 0;
    cursor: pointer;
    background: transparent;
    border: 0;
}
button.close {
    -webkit-appearance: none;
    padding: 0;
    cursor: pointer;
    background: transparent;
    border: 0;
}

.close {
    float: right;
    font-size: 21px;
    font-weight: bold;
    line-height: 1;
    color: #000;
    text-shadow: 0 1px 0 #fff;
    filter: alpha(opacity=20);
    opacity: .2;
}
.wrap-dialog {
    
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    font-size: 16px;
    text-align: center;
    background-color: rgba(0, 0, 0, .4);
    z-index: 999;
}
.modal-dialog{
    width: 600px;
    margin: 30px auto;
    padding: 20px 20px 0;
    background: white
}
.dialog {
    position: relative;
    margin: 15% auto;
    width: 300px;
    background-color: #FFFFFF;
}
.dialog .dialog-header {
    height: 40px;
    padding: 10px;
    background-color: lightskyblue;
}
.dialog .dialog-body {
    height: 60px;
    padding: 20px;
}
.dialog .dialog-footer {
    padding: 8px;
    background-color: whitesmoke;
}
.modal-footer {
    padding: 15px;
    text-align: right;
    border-top: 1px solid #e5e5e5;
}
.btn-primary {
    color: #fff;
    background-color: #337ab7;
    border-color: #2e6da4;
}
.btn {
    width: 80px;
    padding: 2px;
}
.modal-footer .btn + .btn {
    margin-bottom: 0;
    margin-left: 5px;
}

.btn {
    display: inline-block;
    padding: 6px 12px;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: normal;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-image: none;
    border: 1px solid transparent;
    border-radius: 4px;
}
.btn-default {
    color: #333;
    background-color: #fff;
    border-color: #ccc;
}
.form-group {
    margin-bottom: 15px;
}
label {
    display: inline-block;
    max-width: 100%;
    margin-bottom: 5px;
    font-weight: bold;
}
.form-control {
    display: block;
    width: 100%;
    height: 34px;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 4px;
    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
    -webkit-transition: border-color ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;
    -o-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
}
.msg{
    width:100%;
    height: 14px;
    color: red;
    font-size: 13px;
}
/* 验证码 */
.code {
    border-radius: 4px;
    margin-top: -33px;
    float: right;
    height: 33px;
    overflow: hidden;
}
</style>


