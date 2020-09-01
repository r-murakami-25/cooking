
<template>
<div id="Categories">
    
    <div class="MainCategories">
       
        <h2>{{titles.length>0?titles[0]:"カテゴリー未設定"}}のレシピ</h2> 
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
import {SLUG_CATEGORY_TABLE} from '../constants/slugCategoryTable'

export default{
    name:"Categories",
    data(){
        return{
            items:[],
            titles:[]
           
        };
    },
    mounted() { 
    var params=this.$route.params.categories_id
    var subparams=SLUG_CATEGORY_TABLE[params]
    console.log(subparams)
    this.titles.push(subparams) 


    db.collection('items') 
        .where("slug", "==",params)
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
  height: 30vw;
  object-fit:cover
}




</style>
