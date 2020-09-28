
<template>
<div id="Search">
    <input type="text" v-model="query" class="search_box"  placeholder="料理名・食材でレシピをさがす"  @keypress.enter="onKeypressEnter" value="">
  
    <pre>{{$data}}</pre>
</div>
    

</template>

<script>
import db from '../main.js'

export default{
    name:"Search",
    data(){
        return{
            
         query:"",
         newItems:[]
                
        }
        
    },
    methods: {
          onKeypressEnter() {
            //Seaechに移動、SearchにクエリーをURL経由で渡す
            let newItem={
              item:this.query
            };

            // this.query=''

            this.newItems.push(newItem);

            this.$router.push( `/Search/${this.query}`)
          },

    mounted() { 
    // var params=this.$route.params.categories_id
    // var subparams=SLUG_CATEGORY_TABLE[params]
    // console.log(subparams)
    // this.titles.push(subparams) 


    db.collection('items') 
        .where("name", "==",this.query)
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

/* .search_box{
  display: block;
  margin: 0 auto;
  width:80%;
  background:#ffffff;
  border-radius: 6px;
  padding:0.5%;
  margin: 0 auto;
}

input.search_box{
    background:#ccc;
    margin: 0 auto;
} */ 

</style>

<!-- <div id="Search">
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
            keyword: '', -->
            <!-- //入力文字初期値
            // objects: [],
            //fitrestore内すべてを取得　
            // items:[],
            
                
        }
        
    }, -->

    <!-- //fitrestoreからドキュメント内のすべてを取得、表示
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

    //取得したドキュメント内の「name=テキストボックスに入力したもの」であればそれらだけ表示　
    watch:{
         keyword(val){
             this.items = [];
             for(let object of this.objects){//配列objects（firestoreのすべて）の中のオブジェクト（i）を1個ずつ繰り返す
                //fitrestore内（i）.nameまたは、titleテキストボックスの値（value）が-1でなければ（=なら）以下になる
                if (object.name.indexOf(val) !== -1 || object.title.indexOf(val) !== -1 ){
                this.items.push(object);//itemにfirestoreで取得したiを入れる
               console.log(this.item)
                }
             
          }
        }
    },
       
      methods: {
          onKeypressEnter() {
             this.items = [];
                  for(let object of this.objects){//配列objectsの中のオブジェクト（i）を1個ずつ繰り返す
                  //if (i.name.indexOf(val) !== -1){//i.nameまたは、title、categoryテキストボックスの値（value）が-1でなければ（あっていれば）以下
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


</style> -->