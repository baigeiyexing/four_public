<template>
    <footer class="footer">
        <footer>
            <div class="page-footer font-fz">
                <div class="footer-box">
                    <div class="footer-nav clear">
                        <ul class="f-nav">
                            <li class="f-nav-header">
                                <span>关于我们</span>
                            </li>
                            <li class="f-nav-iteam">
                                <a href="">星火STORY</a>
                            </li>
                            <li class="f-nav-iteam">
                                <a href="">星火实体店</a>
                            </li>
                        </ul>
                        <ul class="f-nav">
                            <li class="f-nav-header">
                                <span>购物指南</span>
                            </li>
                            <li class="f-nav-iteam">
                                <a href="">购买流程</a>
                            </li>
                        </ul>
                        <ul class="f-nav">
                            <li class="f-nav-header">
                                <span>关于配送</span>
                            </li>
                            <li class="f-nav-iteam">
                                <a href="">家具配送</a>
                            </li>
                            <li class="f-nav-iteam">
                                <a href="">家居配送</a>
                            </li>
                        </ul>
                        <ul class="f-nav">
                            <li class="f-nav-header">
                                <span>售后服务</span>
                            </li>
                            <li class="f-nav-iteam">
                                <a href="">家具售后</a>
                            </li>
                            <li class="f-nav-iteam">
                                <a href="">家居售后</a>
                            </li>
                        </ul>
                    </div>
                    <div class="f-bottom">
                        <div class="copyright">
                            星火独立家居品牌 © 2017 Xinghuo Interior design Co. Ltd. Beijing, China 京ICP备13004049号-3
                        </div>
                        <div class="contact">
                            客服邮箱 service@fnji.com<span style="margin: 0px 10px;">/</span>TEL 400-641-6399
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </footer>
</template>

<script>
    export default {
        name: 'VueX-Footer',
        props: {
            msg: String
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .footer{
        width:100%;
        position:relative;
        bottom: 0;
    }
    .page-footer{
        background-color: #f5f5f5;
        padding: 80px 0 45px;
        color: #979797;
        min-width: 1200px;
        margin-top: 60px;
    }
    .footer-box{
        overflow: hidden;
        width: 1100px;
        margin-left: auto;
        margin-right: auto;
    }
    .footer-nav{
        margin-left: -49px;
        margin-bottom: 48px;
    }
    .f-nav{
        width: 150px;
        float: left;
        list-style: none;
    }
    .f-nav li{
        padding-left: 48px;
    }
    .f-nav-header{
        color: #4d4d4d;
        font-size: 14px;
        margin-bottom: 35px;
        line-height: 1;
        border-left: 1px solid #4d4d4d;
    }
    .f-nav:first-child>.f-nav-header{
        border: none;
    }
    .f-nav-iteam a{
        font-size: 12px;
        line-height: 2;
        color: #979797;
    }
    .f-nav-iteam a:hover{
        text-decoration:underline;
    }



    .f-bottom{
        width: 1100px;
        font-size: 12px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        position: relative;
    }
    .copyright
    .contact{
        position: absolute;
        bottom: 0;
    }
</style>
