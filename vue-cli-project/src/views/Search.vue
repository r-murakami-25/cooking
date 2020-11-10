
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

<style scoped>

.MainCategories{
    padding:2%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
   
}

h2{
    width:100%;
    padding: 0 1% 1% 1%;
    
}

.categories_list{
    width:45%;
    padding:2% 0;
    display: inline-block;
}

.img{
  width: 100%;
  /* height: 30vw;
  object-fit:cover */
}




</style>
