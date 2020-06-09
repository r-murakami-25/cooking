<!-- index.html>App.vue>view(Home.vue)-->

<template>
  <div class="mainVisual">
    
    <MainVisual></MainVisual> 
    <Category></Category>
    <Ranking></Ranking>
    <NewRecipe></NewRecipe>
    <!-- <Recipe></Recipe> -->
    <!-- <Categories></Categories> -->
    <!-- <Choice></Choice> -->
    
  </div>
</template>

<script>
// @ is an alias to /src

import  MainVisual from '@/components/MainVisual.vue'
import  Category from '@/components/Category.vue'
import  Ranking from '@/components/Ranking.vue'
import  NewRecipe from '@/components/NewRecipe.vue'
// import  Recipe from '@/components/Recipe.vue'
// import  Categories from '@/components/Categories.vue'
// import  Choice from '@/components/Choice.vue'


export default {
  // name: 'category',
  components: {
    MainVisual,
    Category,
    Ranking,
    NewRecipe,
    // Recipe,
    // Categories,
    // Choice,
  }
}
</script>
