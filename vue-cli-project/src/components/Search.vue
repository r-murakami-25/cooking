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
 #Search{
    width: 60%;
}
.search_box{
  
  width:100%;
  border-radius: 6px;
  padding:1%;
  
}

/* .search_box{
  display: block;
  margin: 0 auto;
  width:80%;
  background:#ffffff;
  border-radius: 6px;
  padding:0.5%;
  margin: 0 auto;
}

input.search_box{
    background:#ccc;
    margin: 0 auto;
} */ 

</style>