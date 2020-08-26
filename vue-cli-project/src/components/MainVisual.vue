<template>
<div id="MainVisual">
<carousel
:per-page="1"
:autoplay="true" 
:autoplayTimeout="3000"
:loop="true"
:speed="2000"

>

  <slide class="slide">
    <img src="../assets/rawhamsalada.jpg" alt="スライド1">
  </slide>
  <slide class="slide">
    <img src="../assets/rawhamsalada.jpg" alt="スライド2">
  </slide>
  <slide class="slide">
    <img src="../assets/rawhamsalada.jpg" alt="スライド3">
  </slide>
  <slide class="slide">
    <img src="../assets/rawhamsalada.jpg" alt="スライド4">
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

.slide img{
  width: 100%;
  height: 35vw;
  object-fit:cover
}



</style>
