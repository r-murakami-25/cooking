<!-- index.html>App.vue>view(Home.vue)-->

<template>
  <div class="Recipe">
    <Recipe></Recipe>
   
    
  </div>
</template>

<script>
// @ is an alias to /src

import Recipe from '@/components/Recipe.vue'

export default {
  // name: 'Company',
  components: {
    Recipe
  }
}
</script>
