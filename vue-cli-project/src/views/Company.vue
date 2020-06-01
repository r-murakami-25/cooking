<!-- index.html>App.vue>view(Home.vue)-->

<template>
  <div class="company">
    <Company></Company>
   
    
  </div>
</template>

<script>
// @ is an alias to /src

import  Company from '@/components/Company.vue'

export default {
  // name: 'Company',
  components: {
    Company
  }
}
</script>
