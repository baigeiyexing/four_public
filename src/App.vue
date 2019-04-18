<template>
    <div id="app">
        <VueX-Header></VueX-Header><!-- ← 引入的头部导航-->
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
</style>
