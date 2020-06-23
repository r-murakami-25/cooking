<!--  index.html>App.vue>view(Home.vue)>components(Home.vue)-->


<template>
<!--<h2>新着レシピ<h2><div id="New_recipe">の中に入るとflexされてしまう。入らないと画面に出ないどうすればよいか-->
<div id="NewRecipe">
    <div class="MainRecipe">
        <h2>新着レシピ</h2>
        <div class="menu" v-for="item in items" v-bind:key="item.id">
             <p><img src="../assets/mainvisual.jpg" alt="新着レシピ"></p>
        <h3>{{item.title}}</h3>
        </div>
    </div>
</div>
    
</template>

<script>
// https://bbbbruno.qrunch.io/entries/YDTE4pZ0erk9uAcQ
// Vue.js + firestoreでCRUD操作を実現を参考

import db from '../main.js'

export default {  
  data() {  
    return {  
    name:"NewRecipe",
      items: [],  
    }  
  },  
  created() {  
    // fetch data from firestore  
    db.collection('items')  
      .get()  
      .then(snapshot => {  
        snapshot.forEach(doc => {  
          let items = doc.data()  //item→itemsにしたら起動した
          items.id = doc.id  //item→itemsにしたら起動した
          this.items.push(items)  
        })  
      })  
  },  
}  
// export default{
//     name:"NewRecipe",
//     data(){
//         return{
//                 title:'新着レシピ',
//                 // menu:'大根の照り煮',
//                 list:[
//                     {id:1, name:'大根の照り煮'},
//                     {id:2, name:'ニンジン'},
//                     {id:3, name:'ぶり照り煮'},
//                     {id:4, name:'たらの照り煮'},

//                 ]
//             };
//     }

// }

</script>


<style scoped>

.MainRecipe{
    padding:2%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    /* background: coral; */
}

/* h2{
    width:100%;
    padding: 0 1% 1% 1%;
} */

h2{
    /* padding: 0 1% 1% 0; */
    width:100%;
    border-bottom: 1px solid;
    border-top: 1px solid;
}


.menu{
    width:45%;
    padding:2% 0;
}







</style>
