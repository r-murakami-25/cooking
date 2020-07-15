<!--  index.html>App.vue>view(Home.vue)>components(Home.vue)-->


<template>
<div id="Categories">
    
   
    
    <!-- <h5>Firebase 検索時　2階層目</h5> これもの中に入るとflexされてしまう。入らないと画面に出ないどうすればよいか-->
    <div class="MainCategories">
         <!-- 疑問）タイトルもv-forしたいがネストするべきか？component/category.vueみたいに -->
        <h2>キャベツのレシピ</h2>
            <div class="categories_list" v-for="item in items" v-bind:key="item.id">
                 <router-link :to="{name:'Recipe', params:{recipe_id: item.slug}}"> 
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
        };
    },
    mounted() { 
    //  var pathname = location.pathname;
    //  alert(pathname);「/」が出る
// var parameter = location.search;
// alert(parameter);何もなし

// var name=this.$route.name
// alert(name);「Categories」取得

// var ok=this.$route.fullPath
// alert(ok);更新されない場所変えても

  
//  var ok=this.$route.path
//  alert(ok);
// 「Categories/cabbage」取得


        // db.collection('items')
    //   .where("slug", "array-contains","cabbage")
    //   .get()
    //   .then((querySnapshot) => {
    //     querySnapshot.forEach((doc) => {
    //       let items = {
    //         'slug': doc.data().slug,
    //         'name': doc.data().name,
    //         'title': doc.data().title,
    //       }
    //       this.items.push(items)
       
    //     })
    //   })
     
    // fetch data from firestore  
    // var url = location.href ;

    // console.log(url)

    var params=this.$route.params.categories_id
    alert(params);
    alert(SLUG_CATEGORY_TABLE[params])


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
/* #mainVisual{
    width:100%;
    background:#f5deb3;
    text-align: center;
} */



/* .mainVisual img{
    width: 100%;
} */


/* #categories{
    padding: 0.5em 1em;
    margin: 2em 0;
    font-weight: bold;
    border: solid 3px #000000;
    width:30%;
    
} */

/* .MainCategories{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    background: cornflowerblue;
    padding:2%;
}

.categories_list{
    width: 30%;
    display: inline-block;
} */

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
