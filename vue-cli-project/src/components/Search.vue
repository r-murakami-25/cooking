<template>
<div id="Search">
    <input type="text" class="search_box" v-model="keyword" placeholder="料理名・食材でレシピをさがす"  @keypress.enter="onKeypressEnter" value="">

</div>
    
</template>

<script>
import db from '../main.js'
import {SLUG_CATEGORY_TABLE} from '../constants/slugCategoryTable'
import {SLUG_RECIPE_TABLE} from '../constants/slugRecipeTable'


export default{
    name:"Search",
    data(){
        return{
            keyword: '',//入力文字初期値
            objects: [],//fitrestore内すべてを取得　
            items:[],
            
                
        }
        
    },

    //fitrestoreからドキュメント内のすべてを取得、表示
    created() {  
     db.collection('items') 
       .get()  
       .then(snapshot => {  
         snapshot.forEach(doc => {  
           let fields = doc.data()  //fields
           fields.id = doc.id  //fields
           console.log("item",fields)
           this.objects.push(fields) 
            console.log(this.objects) 
         })  
       })  
    },  

    watch:{
         keyword(val){
             this.items = [];
             for(let object of this.objects){
                if (object.name.indexOf(val) !== -1 || object.title.indexOf(val) !== -1 ){
                this.items.push(object);
               console.log(this.item)
                }
             
          }
        }
    },
       
      methods: {
          onKeypressEnter() {
             this.items = [];
                  for(let object of this.objects){
                  if (object.name.indexOf(this.keyword) !== -1){
                             this.$router.push( `/Categories/${object.slug}`)
                  }
          }

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


</style>