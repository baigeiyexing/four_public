<template>
    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" >
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close" v-on:click="childclose"><span
                            aria-hidden="true">X</span></button>
                    <h4 class="modal-title" id="myModalLabel">编辑地址</h4>
                </div>
                <div class="modal-body">
                    <div class="name-wrapper">
                        <div class="form-group appellation">
                            <div class="label-wrapper"><i class="must-icon in"></i><label
                                    class="form-label">称谓</label></div>
                            <div class="col-select">
                                <select id="sex">
                                    <option  value="1">女士</option>
                                    <option  value="0">先生</option>
                                </select>
                                </div>
                            <div class="msg-block"><span></span></div>
                        </div>
                        <div class="input-wrap form-group nickName">
                            <div class="label-wrapper">
                                <i class="must-icon in"></i>
                                <label class="form-label">收货人姓名</label>
                                </div>
                                <input class="input" id="name" maxlength="20" v-model="nickname" @blur="yz1">
                            <div class="msg-block" v-model="nicknamemsg"><span>{{nicknamemsg}}</span></div>
                        </div>
                    </div>
                    <div class="select-group-wrapper">
                        <div class="label-wrapper">
                            <i class="must-icon in"></i>
                            <label class="form-label">省/市/区</label>
                        </div>
                        <el-cascader id="shengshiqu" size="large" :options="sendaddresss" v-model="sendOptions" @change="handleChanges" style="width:217px;" clearable @blur="yz2"></el-cascader>
                        <div class="msg-block" v-model="areamsg"><span>{{areamsg}}</span></div>
                    </div>
                    <div class="input-wrap form-group address-detail">
                        <div class="label-wrapper">
                            <i class="must-icon in"></i>
                            <label class="form-label">详细地址</label>
                        </div>
                            <input class="input" id="xx-address" placeholder="请输入含街道、门牌号码的详细地址" maxlength="35" v-model="xxarea" @blur="yz3">
                        <div class="msg-block" v-model="xxareamsg"><span>{{xxareamsg}}</span></div>
                    </div>
                    <div class="input-wrap form-group phone">
                        <div class="label-wrapper">
                            <i class="must-icon in"></i>
                            <label class="form-label">手机号码</label>
                        </div>
                        <input class="input" id="phone" type="text" placeholder="请输入手机号" v-model="phone" @blur="yz4" >
                        <div class="msg-block" v-model="phonemsg"><span>{{phonemsg}}</span></div>
                    </div>
                    <div class="input-wrap form-group post-code">
                        <div class="label-wrapper">
                            <i class="must-icon"></i>
                            <label class="form-label">邮政编码</label>  
                        </div>
                        <input class="input" id="ad_zip" placeholder="非必须" maxlength="6" v-model="zip" @blur="yz5" >
                        <div class="msg-block" v-model="zipmsg"><span>{{zipmsg}}</span></div>
                    </div>
                    <div class="check-box check-address-default" >
                        <input type="checkbox" id="address-default" >
                        <label for="address-default"></label>
                        <span class="label-text" for="address-default" >默认地址</span>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal" v-on:click="childclose">取消</button>
                    <el-button type="text" @click="open2" class="btn btn-primary" id="editsave">保存</el-button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {regionData, CodeToText, TextToCode} from 'element-china-area-data'
export default {
    name:'addressmodal',
    props:['addresslist'],
    created(){
        console.log(['四川省/成都市/武侯区'])
        this.sendOptions=["110000", "110100", "110101"]
    },
    data() {
        return {
            datas:[],
            sendaddresss: regionData,
            CodeToText,
            TextToCode,
            sendareas: '',//详细地址
            sendOptions: [],
            sendreturnprovince:'',
            sendreturncity:'',
            sendreturnregion:'',
            nickname:"",
            xxarea:"",
            phone:"",
            zip:"",
            nicknamemsg:"",
            areamsg:"",
            xxareamsg:"",
            phonemsg:"",
            zipmsg:"",
            status1:true,
            status2:true,
            status3:true,
            status4:true,
            status5:true,
        }
    },
    methods: {
        childclose(){
            this.$parent.close()
        },
        //通过下拉列表选择获取省市区
        handleChanges() {
            this.sendreturnprovince = CodeToText[this.sendOptions[0]]
            if (CodeToText[this.sendOptions[1]] == '市辖区') {
                this.sendreturncity = this.sendreturnprovince
            } else {
                this.sendreturncity = CodeToText[this.sendOptions[1]]
            }
            this.sendreturnregion = CodeToText[this.sendOptions[2]]
        },
        //通过省市区获取对应编码
        convertTextToCode(provinceText, cityText, regionText) {
			let code = ''
			if (provinceText && this.TextToCode[provinceText]) {
  				const province = this.TextToCode[provinceText]
  				code =code + province.code + ','
                if (cityText && province[cityText]) {
    				const city = province[cityText];
    				code =code + city.code + ','
                    if (regionText && city[regionText]) {
                        code =code + city[regionText].code;
    				}
                }
			}
			return code
        },
        // 正则判断
        yz1(){
            var username = /^[\u4E00-\u9FA5A-Za-z]+$/;
            if(this.nickname.length==0){
                this.nicknamemsg="不能为空"
                this.status1=false
            }else if (!username.test(this.nickname)) {
                this.nicknamemsg="只能输入中文和英文";
                this.status1=false
            } else {
                this.nicknamemsg="";
                this.status1=true
            }
        },
        yz2(){
            if(this.sendOptions.length==0){
                this.areamsg="不能为空"
                this.status2=false
            }else{
                this.status2=true
                this.areamsg=""
            }
        },
        yz3(){
            if(this.xxarea.length==0){
                this.xxareamsg="不能为空"
                this.status3=false
            }else{
                this.status3=true
                this.xxareamsg=""
            }
        },
        yz4(){
            var phonenum = /^1[34578]\d{9}$/;
            if(this.phone.length==0){
                this.phonemsg="不能为空"
                this.status4=false
            }else if(!phonenum.test(this.phone)){
                this.phonemsg="非法号码"
                this.status4=false
            }else{
                this.status4=true
                this.phonemsg=""
            }
        },
        yz5(){
            var zipnum = /^[0-9]{6}$/;
            if(this.zip.length==0){
                this.zipmsg=""
                this.status5=true
            }else if(!zipnum.test(this.zip)){
                this.zipmsg="非法邮编"
                this.status5=false
            }else{
                this.status5=true
                this.zipmsg=""
            }
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
    },
// mounted(){
// 	//通过this.datas获取地址赋值到页面
// 	this.sendOptions[0] = (this.TextToCode[this.datas.AddresserProvince].code)
// 	if (this.datas.AddresserProvince != this.datas.AddresserCity) {
// 		this.datas.AddresserCity = this.datas.AddresserCity
// 	} else {
// 	 this.datas.AddresserCity = '市辖区'
// 	}
// 	this.sendOptions[1] = (this.TextToCode[this.datas.AddresserProvince][this.datas.AddresserCity].code)

//     this.sendOptions[2] = (this.TextToCode[this.datas.AddresserProvince][this.datas.AddresserCity][this.datas.AddresserRegion].code)


//     this.sendOptions = [this.ruleForm.sendOptions[0], this.ruleForm.sendOptions[1], this.ruleForm.sendOptions[2]]
//     }
}
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
.input-wrap .label-wrapper {
      line-height: 24px; }
.input-wrap .label-wrapper .must-icon {
    width: 15px;
    height: 9px;
    background: url(../../assets/img/mustStar.png) no-repeat;
    display: none; }
.input-wrap .label-wrapper .must-icon.in {
    display: inline-block; 
}
.input-wrap .input {
    width: 100%;
    height: 40px;
    padding: 10px;
    border-radius: 4px;
    border: 1px solid #DFE3E6;
    color: #4A4A4A; 
}
.input-wrap .input::-webkit-input-placeholder {
    color: #b5b5b5;
    font-size: 13px; 
}
.input-wrap .input:focus {
    border-color: #3E62AD !important; 
}
.input-wrap .input[readonly="true"] {
    border-color: #DFE3E6;
    background: #ebebeb; 
}
.msg-block {
    width: 100%;
    height: 20px;
    margin-top: 8px;
    font-size: 13px;
    color: #D0021B; 
}
.input-wrap.error .input {
    background: #FADADB;
    outline-offset: 0;
    border-color: #EA5460; 
}
  
.code-input-wrapper .wrapper-content {
    position: relative; 
}
.code-input-wrapper .wrapper-content .input {
    display: block;
    padding-right: 180px; 
}
.code-input-wrapper .wrapper-content .code-img {
    width: 120px;
    height: 32px;
    position: absolute;
    top: 4px;
    right: 40px; 
}
.code-input-wrapper .wrapper-content i {
    cursor: pointer;
    position: absolute;
    right: 0;
    top: 0;
    width: 40px;
    height: 40px;
    text-align: center;
    padding-top: 8px;
    font-size: 18px;
    font-weight: bold; 
}
  
.checkbox-wrap {
    position: relative;
    display: inline-block; }
.checkbox-wrap .checkbox-icon {
      font-size: 14px;
      font-weight: bold;
      color: #000;
      width: 16px;
      height: 16px;
      cursor: pointer;
      display: inline-block;
      border: 1px solid #DFE3E6;
      border-radius: 4px;
      vertical-align: middle;
      position: absolute;
      left: 0;
      top: 2px; }
.checkbox-wrap .checkbox-icon:before {
        position: absolute;
        top: -2px;
        left: 0; }
.checkbox-wrap .checkbox-info {
      cursor: pointer;
      padding-left: 20px; }
  
.check-box {
    display: inline-block; }
.check-box input[type=radio], .check-box input[type=checkbox] {
      vertical-align: top; }
.check-box .label-text {
      margin-left: 5px; 
}
  
.form-group .label-wrapper {
    line-height: 24px; 
}
 .must-icon {
      width: 15px;
      height: 9px;
      background: url(../../assets/img/mustStar.png) no-repeat;
} 
.label-wrapper .must-icon.in {
    display: inline-block; 
}
  
.form-group input, .form-group select {
    width: 100%;
    height: 40px;
    border-radius: 4px;
    background-color: #fff;
    border-color: #DFE3E6;
    box-shadow: none; 
}
  
.form-group input:focus {
    border: #3E62AD !important;
    box-shadow: none; 
}
.appellation{
    width: 200px;
    display: inline-block;
}
.nickName{
    /* display: inline-block; */
    width: 300px;
    float: right;
}
.el-cascader{
    width: 100%!important
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
</style>
