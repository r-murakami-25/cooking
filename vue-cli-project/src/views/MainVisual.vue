
<template>
  <div class="mainVisual">
   
    <MainVisual></MainVisual> 
    <Ranking></Ranking>
    <SeasonalRecipe></SeasonalRecipe>
    <!-- <Carousel></Carousel>  -->
    <NewRecipe></NewRecipe>
    <Category></Category>
  </div>
</template>

<script>
// @ is an alias to /src
import  MainVisual from '@/components/MainVisual.vue'
import  Category from '@/components/Category.vue'
import  Ranking from '@/components/Ranking.vue'
import  NewRecipe from '@/components/NewRecipe.vue'
import  SeasonalRecipe from '@/components/SeasonalRecipe.vue'
// import  Carousel from '@/components/Carousel.vue'


export default {
  components: {
    
    MainVisual,
    Category,
    Ranking,
    NewRecipe,
    SeasonalRecipe,
    // Carousel
    
  }
}
</script>
