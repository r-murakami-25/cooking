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

  <slide>
    <img src="../assets/mainvisual.jpg" alt="スライド1">
  </slide>
  <slide>
    <img src="../assets/dish.jpg" alt="スライド2">
  </slide>
  <slide>
    <img src="../assets/mainvisual.jpg" alt="スライド3">
  </slide>
  <slide>
    <img src="../assets/mainvisual.jpg" alt="スライド4">
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

 /* #MainVisual{
  max-width:1200px ;
  max-height: 500px;
}
.slide img{
  width: 100%;
  height:auto;
}  */


</style>
