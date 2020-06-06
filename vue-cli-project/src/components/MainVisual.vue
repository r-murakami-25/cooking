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
    background:chocolate;
} */





#categories{
    padding: 0.5em 1em;
    margin: 2em 0;
    font-weight: bold;
    border: solid 3px #000000;
    width:30%;
    
}


</style>
