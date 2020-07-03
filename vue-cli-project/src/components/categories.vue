<!--  index.html>App.vue>view(Home.vue)>components(Home.vue)-->


<template>
<div id="Categories">
    
   
    
    <!-- <h5>Firebase 検索時　2階層目</h5> これもの中に入るとflexされてしまう。入らないと画面に出ないどうすればよいか-->
    <div class="MainCategories">
         <!-- 疑問）タイトルもv-forしたいがネストするべきか？component/category.vueみたいに -->
        <h2>キャベツのレシピ</h2>
            <div class="categories_list" v-for="item in items" v-bind:key="item.id">
                 <router-link :to="{name:'Recipe', params:{recipe_id: item.title}}"> 
                    <p id="mainVisual"><img src="../assets/mainvisual.jpg" alt="mainVisual" ></p>
                    <h2>{{ item.title}}</h2>
                </router-link> 
            </div>
       
    </div>
</div>

     
</template>

<script>
import db from '../main.js'

export default{
    name:"Categories",
    data(){
        return{
            // list:[
            //     {id:1, name:'キャベツチーズ'},
            //     {id:2, name:'餃子'},
            //     {id:3, name:'コールスロー'},
            //     {id:4, name:'キャベツサラダ'},
            //     {id:5, name:'お浸し'},
            //     {id:6, name:'ロールキャベツ'},
               
            // ]
            title:[],
            items:[]
        };
    },
    mounted() {  
    // fetch data from firestore  
    db.collection('items')  
      .where("slug", "==", "cabbage")
      .get()  
      .then(snapshot => {  
        snapshot.forEach(doc => {  
          let items = doc.data()  //item→itemsにしたら起動した
          items.id = doc.id  //item→itemsにしたら起動した
          this.items.push(items)  
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




</style>
