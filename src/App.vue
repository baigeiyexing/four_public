<template>
    <div id="app">
        <VueX-Header></VueX-Header><!-- ← 引入的头部导航-->
<<<<<<< HEAD
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/personal">Personal</router-link>|
        <router-link to="/furniture">Furniture</router-link>
=======
>>>>>>> dced649d138a8e0a73cb27b6d92ed57d0d7efcb0
        <router-view></router-view>
        <VueX-Footer></VueX-Footer><!-- ← 引入的尾部导航-->
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
            "VueX-Header":Header,// ← 头部导航
            "VueX-Footer":Footer // ← 尾部页面
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
