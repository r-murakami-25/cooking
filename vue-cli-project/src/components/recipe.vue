<template>
<div id="Recipe">
    <div>
        <div v-for="item in items" v-bind:key="item.name">
            <p class="mainVisual"><img v-bind:src="item.img"  alt="mainVisual" class=img ></p> 
        </div>
             <h2>{{title.length>0?title[0]:"該当するレシピはありませんでした"}}</h2>

        
         <div v-for="item in items" v-bind:key="item.id">
            <p>ポイント</p>
            <p>{{item.point}}</p> 
            <p>調理時間</p>
            <p>{{item.time}}</p>
        </div>

        <h2>材料</h2>
        <ul>
            <li v-for="item in items" v-bind:key="item.id">
              
                <ul  class="materials" v-for="material in item?item.materials:[]" v-bind:key="material?material.name:''">
                    <li>{{material?material.material:""}}</li>
                    <li>{{material?material.amount:""}}</li>
                </ul>
            </li>  
        </ul>            
    
         <h3>作り方</h3>
         <ul>
            <li v-for="item in items" v-bind:key="item.id">
              
                <ul  class="materials" v-for="c in item?item.cook:[] " v-bind:key="c?c.explain:''">
                    <li>{{c?c.explain:""}}</li>
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
            recipe:[
                {id:1, explain:'タコの足を1本ずつ切り分ける（はさみが楽です）'},
                {id:2, explain:'タコと2~5の材料を加えて、沸騰するまで強火で煮る、沸騰したら弱火で50分蓋をし煮る'},
                {id:3, explain:'タコを煮て30分したら米を洗い、そのまま水につける（15~20分程）'},
                {id:4, explain:'タコと油揚げ（湯で油抜き後）ひと口サイズに切り分ける'},
                {id:5, explain:'フライパンに油をひき、米を入れる'},
                {id:6, explain:'水300mlとタコのやわらか煮の煮汁（昆布もすべて）を加え、タコと油揚げ（魚介類加えてよい）も入れる'},
                {id:7, explain:'蓋をし、強火にかける、煮立ったら弱火にし約12分炊く、おこげがほしい場合は最後に強火で1分ほどにし、火を止め10分蒸らす'},
                {id:8, explain:'最後にバターを加えて混ぜるとさらにおいしい！'},
               ],
                


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
#Recipe{
    padding: 5%;
}

ul{
    list-style: none;
}

.materials{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}


</style>