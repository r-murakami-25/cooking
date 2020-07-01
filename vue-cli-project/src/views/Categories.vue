<!-- index.html>App.vue>view(Home.vue)-->

<template>
  <div class="Categories">
    <Categories></Categories>
   
    
  </div>
</template>

<script>
// @ is an alias to /src

import  Categories from '@/components/Categories.vue'
// import axios from 'axios'

export default {
  // name: 'Company',
  components: {
    Categories
  },
  // mounted: () => {
  //   console.log(this.$route.params)
  // }
}
</script>
