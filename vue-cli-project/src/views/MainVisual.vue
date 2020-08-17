<!-- index.html>App.vue>view(Home.vue)-->

<template>
  <div class="mainVisual">
   
    <MainVisual></MainVisual> 
    <!-- <GenreMenu></GenreMenu> -->
    <Ranking></Ranking>
    <NewRecipe></NewRecipe>
    <SeasonalRecipe></SeasonalRecipe>
    <Category></Category>
     <!-- <Carousel :img-list="images"></Carousel>  -->

    <!-- <Recipe></Recipe> -->
    <!-- <Categories></Categories> -->
    
  </div>
</template>

<script>
// @ is an alias to /src
import  MainVisual from '@/components/MainVisual.vue'
import  Category from '@/components/Category.vue'
import  Ranking from '@/components/Ranking.vue'
import  NewRecipe from '@/components/NewRecipe.vue'
import  SeasonalRecipe from '@/components/SeasonalRecipe.vue'
//  import  Carousel from '@/components/Carousel.vue'

// import  Recipe from '@/components/Recipe.vue'
// import  Categories from '@/components/Categories.vue'


export default {
  // name: 'category',
  components: {
    
    MainVisual,
    Category,
    Ranking,
    NewRecipe,
    SeasonalRecipe,
    //  Carousel
    // Recipe,
    // Categories,
   
  }
}
</script>
