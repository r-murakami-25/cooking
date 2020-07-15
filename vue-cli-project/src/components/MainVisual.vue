<!--  index.html>App.vue>view(Home.vue)>components(Home.vue)-->


<template>
<div id="MainVisual">
<!-- <p class="mainVisual"><img src="../assets/mainvisual.jpg" alt="mainVisual" ></p> -->
<carousel
:per-page="1"
:autoplay="true" 
:autoplayTimeout="3000"
:loop="true"
:speed="2000"

>

  <slide class="slide">
    <img src="../assets/mainvisual.jpg" alt="スライド1">
  </slide>
  <slide class="slide">
    <img src="../assets/mainvisual_2.jpg" alt="スライド2">
  </slide>
  <slide class="slide">
    <img src="../assets/mainvisual_3.jpg" alt="スライド3">
  </slide>
  <slide class="slide">
    <img src="../assets/mainvisual_4.jpg" alt="スライド4">
  </slide>
</carousel>
 

</div>
    
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
export default {
    name:"MainVisual",
    components: {
        Carousel,
        Slide
    }
}

</script>


<style scoped>

/* .slide{
  margin-top: 40px;
  text-align: center;
  background: #f5deb3;
} */

.slide img{
  width: 100%;
  height: 35vw;
  object-fit:cover
}

/* .VueCarousel-pagination{
  background:pink;
}
.VueCarousel-dot-container{
  background:pink;
} */

/* .VueCarousel-pagination[data-v-438fd353] {
    width: 80%;
    text-align: s;
} */

</style>
