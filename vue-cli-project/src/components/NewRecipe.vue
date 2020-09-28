<template>
<div id="NewRecipe">
    <div class="MainRecipe">
        <h2>新着レシピ</h2>
      <div class="menu" v-for="item in items" v-bind:key="item.id">
        <router-link :to="{name:'Recipe', params:{recipe_id: item.recipe_slug}}"> 
              <p><img v-bind:src="item.img"  alt="新着レシピ" class=img ></p>
          <p>{{item.title}}</p>
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
      .get()  
      .then(snapshot => {  
        snapshot.forEach(doc => {  
          let items = doc.data()  
          items.id = doc.id  
          this.items.push(items)  
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
    border-bottom: double 6px #663300;
    border-top: double 6px #663300;
    text-align: middle;
    text-align: center;
}

.menu{
    width:30%;
    padding:2% 0;
}

.img{
  width: 100%;
  /* height: 30vw; */
  object-fit:cover
}

@media screen and (max-width: 480px){
.menu{
    width:45%;
    padding:2% 0;
}

}








</style>
