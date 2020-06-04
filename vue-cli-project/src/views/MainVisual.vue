<!-- index.html>App.vue>view(Home.vue)-->

<template>
  <div class="mainVisual">
    
    <MainVisual></MainVisual> 
    <Choice></Choice>
    <Ranking></Ranking>
    <NewRecipe></NewRecipe>
    <Recipe></Recipe>
    <!-- <Categories></Categories> -->
    
  </div>
</template>

<script>
// @ is an alias to /src

import  MainVisual from '@/components/MainVisual.vue'
import  Choice from '@/components/Choice.vue'
import  Ranking from '@/components/Ranking.vue'
import  NewRecipe from '@/components/NewRecipe.vue'
import  Recipe from '@/components/Recipe.vue'
// import  Categories from '@/components/Categories.vue'

export default {
  // name: 'category',
  components: {
    MainVisual,
    Choice,
    Ranking,
    NewRecipe,
    Recipe,
    // Categories
  }
}
</script>
