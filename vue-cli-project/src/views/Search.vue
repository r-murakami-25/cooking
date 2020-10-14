
<template>
  <div class="Search">

    <div class="MainCategories">
       
 
            <div class="categories_list" v-for="item in items" v-bind:key="item.id">
                 <router-link :to="{name:'Recipe', params:{recipe_id: item.recipe_slug}}"> 
                    <p id="mainVisual"><img v-bind:src="item.img"  alt="mainVisual" class=img ></p>
                    <h2>{{ item.title}}</h2>
                </router-link> 
            </div>
       
    </div>
   
    
  </div>
</template>

<script>
import db from '../main.js'

import Search　from '@/components/Search.vue'

export default {
  components: {
    Search,
  },
  data(){
        return{
          
         items:[]
                
        }
        
    },
   mounted() {
 　//キーワードURLからを取得し検索する

 const name=this.$route.query.name

    db.collection('items') 
        .where("name", "==",name)
        .get()  
        .then(snapshot => {  
         snapshot.forEach(doc => {  
           let item = doc.data()  
           item.id = doc.id  
           console.log("item",item)
           this.items.push(item)  
         })  
       })  

       
}


}
</script>