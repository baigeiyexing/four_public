<template>
    <div class = "home_video" >
       <video class="home_video_mp4" v-bind:src="video_src.src" autoplay loop></video>
    </div>
</template>
<style>
    .home_video_mp4{
        width: 100%;
        margin-top: 30px;
    }
    .home_video{
        width: 1120px;
        margin-left: auto;
        margin-right: auto;
    }
</style>
<script>
    export default {
        name: 'home_body',
        data(){
            return{
                // ↓ --------------- 引入图片地址 ----------------
                video_src:
                    {src:require("../../assets/video/home/video.mp4")}
            }
        }
    }
</script>