<template>
<div id="Recipe">
    <div>
        <div v-for="item in items" v-bind:key="item.name">
            <p class="mainVisual"><img v-bind:src="item.img"  alt="mainVisual" class=img ></p> 
        </div>
             <h2>{{title.length>0?title[0]:"該当するレシピはありませんでした"}}</h2>

        
         <div v-for="item in items" v-bind:key="item.id" class="text">
            <h3>ポイント</h3> 
            <p>{{item.point}}</p> 
            <p>調理時間　:{{item.time}}分</p>
        </div>

        <ul class="materials_list">
            <li v-for="item in items" v-bind:key="item.id">
                      <h3>材料<span>({{item?item.servings:""}}人前)</span></h3>

                <ul  class="materials" v-for="material in item?item.materials:[]" v-bind:key="material?material.name:''">
                    <li>{{material?material.material:""}}</li>
                    <li>{{material?material.amount:""}}</li>
                </ul>
            </li>  
        </ul>            
    
         <h3>作り方</h3>
         <ul>
            <li v-for="item in items" v-bind:key="item.id">
              
              
                <ul  class="materials" v-for="(c,i) in item?item.cook:[] " v-bind:key="c?c.explain:''">
                    <li>
                     {{i+1}}.{{c?c.explain:""}}
                    </li>
                </ul>
            </li>  
        </ul>
            
     
    </div> 
</div>
    
</template>



<script>
import db from '../main.js'
import {SLUG_RECIPE_TABLE} from '../constants/slugRecipeTable'

export default{
    name:"Recipe",
    data(){
        return{

            
            title:[],
            items:[],
            material:[],


            };
            
                
    },
    mounted() { 


    var params=this.$route.params.recipe_id
    var subparams=SLUG_RECIPE_TABLE[params]
     console.log(subparams)
     this.title.push(subparams) 
    
    db.collection('items') 
       .where("recipe_slug", "==",params)
        .get()  
        .then(snapshot => {  
          snapshot.forEach(doc => {  
          let item = doc.data() 
            item.id = doc.id  
            console.log("item",item)
            this.items.push(item)  
             console.log(this.items)
          })  
       })  

        
    }

    


}
</script>


<style scoped>
/* #Recipe{
    padding: 2%;
}  */

img{
    vertical-align: bottom;
    width: 68%;
}

p.mainVisual {
    text-align: center;
}

p{
    padding: 1%;
}

h2 {
    font-size: 140%;
    padding: 1% 4%;

}

.text{
    margin:2%;
}

h3{
    border-bottom: 1px solid;
    padding: 0 4%;
}

ul{
    list-style: none;
    padding: 2%;
}

ul.materials_list {
    padding-bottom: 10px;
}

.materials{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    border-bottom: 1px solid #dcdcdc;
}

span{
    font-size: 12px;
}


</style>