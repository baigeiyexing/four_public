<template>
    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" >
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close" v-on:click="addchildclose"><span
                            aria-hidden="true">X</span></button>
                    <h4 class="modal-title" id="myModalLabel">新增地址</h4>
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
                        <input type="checkbox" id="address-default">
                        <label for="address-default"></label>
                        <span class="label-text" for="address-default" >默认地址</span>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal" v-on:click="addchildclose">取消</button>
                    <el-button type="text" @click="open2" class="btn btn-primary" id="editsave">保存</el-button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {regionData, CodeToText, TextToCode} from 'element-china-area-data'
export default {
    name:'addaddress',
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
            status1:false,
            status2:false,
            status3:false,
            status4:false,
            status5:true,
        }
    },
    methods: {
        addchildclose(){
            this.$parent.closeadd()
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
            }else if (!username.test(this.nickname)) {
                this.nicknamemsg="只能输入中文和英文";
            } else {
                this.nicknamemsg="";
                this.status1=true
            }
        },
        yz2(){
            if(this.sendOptions.length==0){
                this.areamsg="不能为空"
            }else{
                this.status2=true
                this.areamsg=""
            }
        },
        yz3(){
            if(this.xxarea.length==0){
                this.xxareamsg="不能为空"
            }else{
                this.status3=true
                this.xxareamsg=""
            }
        },
        yz4(){
            var phonenum = /^1[34578]\d{9}$/;
            if(this.phone.length==0){
                this.phonemsg="不能为空"
            }else if(!phonenum.test(this.phone)){
                this.phonemsg="非法号码"
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
            this.$confirm('是否保存新增?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.addchildclose();
                this.$message({
                    type: 'success',
                    message: '添加成功!'
                });
            }).catch(() => {
                this.addchildclose();
                this.$message({
                    type: 'info',
                    message: '已取消添加'
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


