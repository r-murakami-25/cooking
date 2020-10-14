<template>
<div id="Search">
    <input type="text" v-model="query" class="search_box"  placeholder="料理名・食材でレシピをさがす"  @keypress.enter="onKeypressEnter" value="">

    <pre>{{$data}}</pre>

    <div class="MainCategories">
       
 
            <!-- <div class="categories_list" v-for="item in items" v-bind:key="item.id">
                 <router-link :to="{name:'Recipe', params:{recipe_id: item.recipe_slug}}"> 
                    <p id="mainVisual"><img v-bind:src="item.img"  alt="mainVisual" class=img ></p>
                    <h2>{{ item.title}}</h2>
                </router-link> 
            </div> -->
       
    </div>
</div>


</template>

<script>
import db from '../main.js'
export default{
    name:"Search",
    data(){
        return{
            
         query:"",
         items:[]
                
        }
        
    },
    methods: {
          onKeypressEnter() {
            //Seaechに移動、SearchにクエリーをURL経由で渡す
            let newItem={
              item:this.query //item=入力したもの
            };
            // this.query=''
            this.items.push(newItem);// items:[]に入力したもの入れる

            this.$router.push( {path:`/Search/`,query:{name:this.query}})//URLに入力したものを挿入する

            var params=this.$route.params.search_id//URLを取得

            console.log(params)


          },
    mounted() { 
    // var params=this.$route.params.categories_id
    // var subparams=SLUG_CATEGORY_TABLE[params]
    // console.log(subparams)
    // this.titles.push(subparams) 

    
        
    
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