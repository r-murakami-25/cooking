<template>
<div id="Category">
    <h2>カテゴリー</h2>

     <div v-for="category in categories"  v-bind:key="category.id" class="category_list">
             <h3 class="category_type">{{category.type }}</h3> 
          <ul>
            <li v-for="item in category.items"  v-bind:key="item.id"  class="flex">
                <router-link :to="{name:'Categories', params:{categories_id: item.slug}}"> {{ item.name }}</router-link>
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
    name:"NewRecipe",
    
    categories:[
          {
              type:'肉',
              items: [],
          },
          {
              type:'魚介類',
              items: [],
          },
          {
              type:'野菜',
              items: [],
          },
          
      ],
        
    }  
  },  
  created() {  
    let items= this.categories.map(obj=>obj.items);
    
     db.collection('items')  
      .where("category", "==", "肉")
      .get()
      .then((querySnapshot)=> {
      let data = []
      querySnapshot.forEach((doc)=> {
        console.log(doc)
        this.categories[0].items.push(doc.data())
        console.log(this.categories)
      })
    }) 

    db.collection('items')  
      .where("category", "==", "魚介類")
      .get()
      .then((querySnapshot)=> {
      let data = []
      querySnapshot.forEach((doc)=> {
        console.log(doc)
        this.categories[1].items.push(doc.data())
        console.log(this.categories)
      })
    }) 

    db.collection('items')  
      .where("category", "==", "野菜")
      .get()
      .then((querySnapshot)=> {
      let data = []
      querySnapshot.forEach((doc)=> {
        console.log(doc)
        this.categories[2].items.push(doc.data())
        console.log(this.categories)
      })
    })  


    
    
  },

  
   
}  


</script>




<style scoped>
#Category{
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

/* .category_type{
    background: #ccc;
    box-shadow: 0px 0px 0px 1px #ccc;
    border: dashed 1px #eaeaea;
} */

span{
    font-size: 25px;
    font-weight: bold;
}

ul{
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-around;
}






@media screen and (max-width: 480px){

#Category{
  display: block;
}




.flex{
    width: 50%;
    display: inline-block;
    padding: 2%;
    /* background: #ccc;
    box-shadow: 0px 0px 0px 1px #ccc;
    border: dashed 1px #eaeaea; */
}

.category_list{
    padding:5% 0;
    

}



}


</style>
