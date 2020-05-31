<!-- index.html>App.vue>view(Home.vue)-->

<template>
  <div class="home">
    <Policy></Policy>
   
    
  </div>
</template>

<script>
// @ is an alias to /src

import Policy from '@/components/Policy.vue'

export default {
  // name: 'Home',
  components: {
    Policy
  }
}
</script>

