<!-- index.html>App.vue>view(Home.vue)-->

<template>
  <div class="category">
    <h1>野菜</h1>
   
    
  </div>
</template>

<script>
// @ is an alias to /src

import  category from '@/components/category.vue'

export default {
  name: 'category',
  components: {
    category
  }
}
</script>
