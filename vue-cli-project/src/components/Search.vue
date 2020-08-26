<template>
<div id="Search">
    <input type="text" class="search_box"  placeholder="料理名・食材でレシピをさがす"  @keypress.enter="onKeypressEnter" value="">

       
</div>
    
</template>

<script>
import db from '../main.js'

export default{
    name:"Search",
    data(){
        return{
            
            
                
        }
        
    },
    methods: {
          onKeypressEnter() {
               }

             

          }

      

       }



</script>

<style>
.search_box{
  display: block;
  margin: 0 auto;
  width:80%;
  background:#ffffff;
  border-radius: 6px;
  padding:0.5%;
}

</style>