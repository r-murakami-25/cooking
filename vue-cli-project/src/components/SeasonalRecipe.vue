<template>
<div id="SeasonalRecipe">
    <h2>旬のレシピ</h2>

    <div class='container'>
    <!-- <div v-for="category in categories"  v-bind:key="category.id" class="category_list">
          <ul>
            <li v-for="item in category.items"  v-bind:key="item.id"  class="flex">
                <router-link :to="{name:'Categories', params:{categories_id: item.slug}}"> {{ item.name }}</router-link>
            </li>
        </ul> 
        
    </div>  -->
    
    <ul v-for="item in items"  v-bind:key="item.id">
            <li>
                <router-link :to="{name:'Recipe', params:{recipe_id: item.recipe_slug}}">                     
                    <img v-bind:src="item.img"  alt="旬のおすすめ" class=img >
                      <p>{{item.title}}</p>
                </router-link>
            </li>
    </ul>
    
    </div>
  
</div>

     
</template>

<script>

import db from '../main.js'

export default {  
  data() {  
    return {  
    name:"Carousel",
      items: [],  
    }  
  },  
  created() {  
    db.collection('items')  
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
#SeasonalRecipe{
    padding:2%;
}

h2{
    width:100%;
    border-bottom: 1px solid;
    border-top: 1px solid;
    border-bottom: double 6px #3b170b;
    border-top: double 6px #3b170b;
    text-align: center;
}



.container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}  

ul{
    display: inline-block;
    width:30%;
    padding:2% 0;
    margin: 0 1.5%;
} 


@media screen and (max-width: 480px){
 body{
    line-height:0;
    margin:0;
    padding:0;
  }
  
  .container {
    width: 100vw;
    margin-left: -2%;
    overflow-x: scroll;
    overflow-y: hidden;
    display: flex;
    flex-wrap: nowrap;
    -webkit-overflow-scrolling: touch;
}

 .container::-webkit-scrollbar {
  display: none;
} 

ul {
    /* display: block; */
    scroll-snap-align: center;
    height: auto;
    width: 43%;
    /* margin-top: 10vh; */
    flex: none;
    /* margin-right: 1rem; */
}

li{
    text-align: center;
    /* padding-top: 10vw; */
    margin: 0;
    font-size: 2vw;
}

img{
    width: 100%;
}

}


 

</style>
