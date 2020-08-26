
<template>
<div id="NewRecipe">
    <div class="MainRecipe">
        <h2>旬のレシピ</h2>
        <div class="menu" v-for="item in items" v-bind:key="item.id">         
            <router-link :to="{name:'Recipe', params:{recipe_id: item.recipe_slug}}"> 
             <p><img v-bind:src="item.img"  alt="旬のレシピ" class=img ></p>
              <h3>{{item.title}}</h3>
            </router-link>
        </div>
    </div>
</div>
    
</template>

<script>
import db from '../main.js'

export default {  
  data() {  
    return {  
    name:"NewRecipe",
      items: [],  
    }  
  },  
  created() {  
    db.collection('items')  
      .where("category", "==", "肉")
      .get()  
      .then(snapshot => {  
        snapshot.forEach(doc => {  
          let fields = doc.data() 
          fields.id = doc.id  
          this.items.push(fields)  
        })  
      })  
  },  
}  


</script>


<style scoped>

.MainRecipe{
    padding:2%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

h2{
    width:100%;
    border-bottom: 1px solid;
    border-top: 1px solid;
}


.menu{
    width:30%;
    padding:2% 0;
}

.img{
  width: 100%;
  height: 30vw;
  object-fit:cover
}

@media screen and (max-width: 480px){
.menu{
    width:45%;
    padding:2% 0;
}

}









</style>
