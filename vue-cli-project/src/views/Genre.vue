<!-- index.html>App.vue>view(Home.vue)-->

<template>
  <div class="Genre">
    <Genre></Genre>
   
    
  </div>
</template>

<script>
// @ is an alias to /src

import Genre from '@/components/Genre.vue'

export default {
  // name: 'Company',
  components: {
    Genre
  }
}
</script>
