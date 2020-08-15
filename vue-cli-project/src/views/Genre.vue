<!-- index.html>App.vue>view(Home.vue)削除するファイル-->

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
