<!--  index.html>App.vue>view(Home.vue)>components(Home.vue)-->


<template>
<div id="Categories">
    
   
    
    <!-- <h5>Firebase 検索時　2階層目</h5> これもの中に入るとflexされてしまう。入らないと画面に出ないどうすればよいか-->
    <div class="MainCategories">
         <!-- 疑問）タイトルもv-forしたいがネストするべきか？component/category.vueみたいに -->
       
       <!-- if文と同じ意味[?] もしタイトルの長さ[配列]が、0より長ければ、タイトルを表示-->
        <h2>{{titles.length>0?titles[0]:"カテゴリー未設定"}}のレシピ</h2> 
            <div class="categories_list" v-for="item in items" v-bind:key="item.id">
                 <router-link :to="{name:'Recipe', params:{recipe_id: item.recipe_slug}}"> 
                    <p id="mainVisual"><img v-bind:src="item.img"  alt="mainVisual" class=img ></p>
                    <h2>{{ item.title}}</h2>
                    <!-- <p>{{categories_id}}</p> -->
                </router-link> 
                <!-- <p>これは{{categories_id}}</p> -->
            </div>
       
    </div>
</div>

     
</template>

<script>
import db from '../main.js'
import {SLUG_CATEGORY_TABLE} from '../constants/slugCategoryTable'

export default{
    name:"Categories",
    // props:{
    //     categories_id:Number
    //      }, 
    data(){
        return{
            items:[],
            titles:[]
           
        };
    },
    mounted() { 
        
    
    //pathを取得
    var params=this.$route.params.categories_id//
    alert(params);
    //(SLUG_CATEGORY_TABLE[params])の[params]よくわからない

    // パターン1）SLUG_CATEGORY_TABLE[params]＝subparamsとしてsubparamsを配列aに入れて表示　文字列にならない
    //SLUG_CATEGORY_TABLEのpathを取得
     var subparams=SLUG_CATEGORY_TABLE[params]//?調べる
     alert(subparams)
     console.log(subparams)
     this.titles.push(subparams) 
    
    
    // パターン2　firestoreのcategoryとsubparamsをイコールにして配列aにいれる
    // db.collection('items') 
       
    //     .where("category", "==",subparams)
    //    .get()  
    //    .then(snapshot => {  
    //      snapshot.forEach(doc => {  
    //        let item = doc.data()  //item
    //        item.id = doc.id  //item
    //        console.log("item",item)
    //        this.a.push(item)  
    //      })  
    //    })  


      db.collection('items') 
       
      .where("slug", "==",params)
       .get()  
       .then(snapshot => {  
         snapshot.forEach(doc => {  
           let item = doc.data()  //item
           item.id = doc.id  //item
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
    /* background: coral; */
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
