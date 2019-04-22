<template>
    <div id="app">
        <vuex_Header></vuex_Header><!-- ← 引入的头部导航-->
        <router-view></router-view>
        <vuex_Footer></vuex_Footer><!-- ← 引入的尾部导航-->
    </div>
</template>
<script>
    // ↓ ---------  引入头部组件 ----------
    import Header from "./components/Header"
    // ↓ ---------- 引入尾部组件 ---------
    import Footer from './components/Footer'
 
    
    
    
    export default {
        name:"App",
        components:{ // 注册引入组件
            vuex_Header:Header,// ← 头部导航
            vuex_Footer:Footer // ← 尾部页面
        }
    }
</script>
<style>
*{
    margin: 0;
    padding: 0;
}
/* ↓ --------- 引入 主页与灵感页面所需要使用的icon -----------*/
@import "./common/homeAndAff_Icon/iconfont.styl";
</style>
