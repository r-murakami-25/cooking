<!--  index.html>App.vue>view(Home.vue)>components(Home.vue)-->


<template>
<!--<h2>新着レシピ<h2><div id="New_recipe">の中に入るとflexされてしまう。入らないと画面に出ないどうすればよいか-->
<div id="SeasonalRecipe">
    <div v-for="item in items" v-bind:key="item.id">
      <!-- <img :src="ramen.imageUrl" /> -->
      <p>{{items.title}}</p>
    </div>

  </div>
    
</template>

<script>


// import db from '../main.js'


export default {
  name: 'SeasonalRecipe',
  data() {
    return {
      items: [],
    }
  },
  // created(){  
  //   // fetch data from firestore  
  //   db.collection('items')  
  //     .get()  
  //     .then(snapshot => {  
  //     snapshot.forEach(doc => {  
  //       let item = doc.data()  
  //       item.id = doc.id  
  //       this.items.push('items')  
  //     })  
  //   })  
  // },  
//   mounted() {
//     db.collection('ramens').get().then(snap => {
//       const array = [];
//       snap.forEach(doc => {
//         array.push(doc.data());
//       });
//       this.ramens = array
//     });
//   }
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
