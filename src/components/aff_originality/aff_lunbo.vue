<template>
    <carousel-3d>
        <slide :index="0">
            Slide 1 Content
        </slide>
        <slide :index="1">
            Slide 2 Content
        </slide>
        <slide :index="2">
            Slide 2 Content
        </slide>
        <slide :index="3">
            Slide 2 Content
        </slide>
        <slide :index="4">
            Slide 2 Content
        </slide>

    </carousel-3d>
</template>
<script>
    import { Carousel3d, Slide } from 'vue-carousel-3d';

    export default {
        components: {
            Carousel3d,
            Slide
        }
        ,
        methods: {
            showcase_right: function () {
                if (this.long> -560){
                    this.long -= 280;
                    this.showcase_box_in.style.left =  this.long + "px";
                }
            },
            showcase_left: function () {
                if (this.long< 0){
                    this.long += 280;
                    this.showcase_box_in.style.left = this.long + "px";
                }

            }
        }
    };
</script>