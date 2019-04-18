<template>
    <div class="home">
        <section class="banner" >
            <div class="swiper-container banner-swiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide"><a href="/Read?id=1"><img src="images/linganP/aff_banner_picture/maindetail1.jpg" alt=""></a></div>
                    <div class="swiper-slide"><a href="/Read?id=2"><img src="images/linganP/aff_banner_picture/maindetail2.jpg" alt=""></a></div>
                    <div class="swiper-slide"><a href="/Read?id=3"><img src="images/linganP/aff_banner_picture/maindetail3.jpg" alt=""></a></div>
                    <div class="swiper-slide"><a href="/Read?id=4"><img src="images/linganP/aff_banner_picture/maindetail4.jpg" alt=""></a></div>
                    <div class="swiper-slide"><a href="/Read?id=5"><img src="images/linganP/aff_banner_picture/maindetail5.jpg" alt=""></a></div>
                </div>

                <!-- 分页器 -->
                <div class="swiper-pagination"></div>

                <!-- 导航按钮 -->
                <div class="swiper-button-prev banner-swiper-prev swiper-button-black"></div>
                <div class="swiper-button-next banner-swiper-next swiper-button-black"></div>
            </div>
        </section>
        <!-- 风格 -->
        <section class="style">
            <div class="style-list">
                <a href=""><div class="style-img-box"><img src="images/img/shouye/main_1_1514120693954.jpg" alt=""></div></a>
                <a href=""><div class="style-img-box"><img src="images/img/shouye/13_1551941862194.jpg" alt=""></div></a>
                <a href=""><div class="style-img-box"><img src="images/img/shenghuoxq/1_1514120379819.jpg" alt=""></div></a>
                <a href=""><div class="style-img-box"><img src="images/img/shouye/7_1542082508446.jpg" alt=""></div></a>
            </div>
        </section>
        <!-- 分类 -->
        <section class="type">
            <div class="prev-next-box">
                <div class="swiper-container type-swiper">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide"><a href="/furniture?1"><div class="t-slide"><span>椅</span><img src="/images/furniture/chair/chair_8.jpg" alt=""></div></a></div>
                        <div class="swiper-slide"><a href="/furniture?2"><div class="t-slide"><span>桌</span><img src="/images/furniture/desk/desk_1.jpg" alt=""></div></a></div>
                        <div class="swiper-slide"><a><div class="t-slide"><span>床</span><img src="/images/furniture/bed/bed_1.jpg" alt=""></div></a></div>
                        <div class="swiper-slide"><a><div class="t-slide"><span>几</span><img src="/images/furniture/teatable/teaTable_2.jpg" alt=""></div></a></div>
                        <div class="swiper-slide"><a><div class="t-slide"><span>柜</span><img src="/images/furniture/wardrobe/wardrobe_1.jpg" alt=""></div></a></div>
                        <div class="swiper-slide"><a><div class="t-slide c-EEEFE9"><span>沙&nbsp;&nbsp;发</span><img src="/images/furniture/soft/soft_1.jpg" alt=""></div></a></div>
                    </div>
                </div>
                <!-- 导航按钮 -->
                <div class="swiper-button-prev type-swiper-prev swiper-button-black"></div>
                <div class="swiper-button-next type-swiper-next swiper-button-black"></div>
            </div>
        </section>
        <!-- 视频 -->
        <section class="video">
            <video muted autoplay="autoplay" loop="loop" src="/video.mp4"></video>
        </section>
        <!-- 灵感 -->
        <!-- <section class="inspiration">
            <div class="inspiration-article-list">
                <div class="inspiration-article-box"></div>
                <div class="inspiration-article-box"></div>
                <div class="inspiration-article-box"></div>
            </div>
            <div class="inspiration-img-list"></div>
        </section> -->
    </div>
</template>

<script>
    // @ is an alias to /src
    import HelloWorld from '@/components/HelloWorld.vue'
    export default {
        name: 'home',
        components: {
            HelloWorld,
            // Header,
            // footer
        }
    }
</script>
