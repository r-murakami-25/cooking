<!--  index.html>App.vue>view(Home.vue)>components(Home.vue)-->


<template>
<div id="Category">
  <h2>{{title}}</h2>
    <!-- ここから削除するもの -->
    <!-- <ul v-for='category in categorys' v-bind:key="category.id" class="category_ist"> -->
        <!-- <router-link :to="{name:'Categories', params:{categories_id: category.id}}"> -->
        <!-- <router-link to="/Categories"><li>
            <span>{{ category.name }}</span>
            <ul>
                
                <li v-for="menu in category.menu" v-bind:key="menu.id">{{ menu }}</li>
            </ul>
        </li>
        </router-link> -->
        <!-- </router-link> -->
    <!-- </ul>  -->
    <!-- 上記まで削除する -->

    <!-- 以下最新 -->

    <p class="team_name">{{ category_1 }}</p>
     <div v-for="item in items"  v-bind:key="item.id" class="category_list">
            <p class="team">
                <router-link :to="{name:'Categories', params:{categories_id: item.slug}}">
                    {{ item.name }}
                </router-link>
            </p>   

        <!-- ここから6/24の分コメントアウト戻す    -->
 <!-- <div v-for="team in teams"  v-bind:key="team.id" class="category_list">
     <p class="team_name">{{ team.name }}</p>       
         <ul>
            <li v-for="member in team.members"  v-bind:key="member.id"  class="flex">
                <router-link :to="{name:'Categories', params:{categories_id: member.id}}"> {{ member.name }}</router-link>
            </li>
        </ul>
    </div>  -->

        <!-- コメントアウト戻す上記まで -->
    </div> 


    <p class="team_name">{{ category_2 }}</p>
     <div v-for="a in aa"  v-bind:key="a.id" class="category_list">
           <p class="team">
                <router-link :to="{name:'Categories', params:{categories_id: a.slug}}">
                    {{ a.name }}
                </router-link>
            </p>  
    </div> 

    <p class="team_name">{{ category_3}}</p>
     <div v-for="b in bb"  v-bind:key="b.id" class="category_list">
           <p class="team">
                <router-link :to="{name:'Categories', params:{categories_id: b.slug}}">
                    {{ b.name }}
                </router-link>
            </p>   
    </div> 
    <!-- <h2>{{title}}</h2>

     <div v-for="category in categories"  v-bind:key="category.id" class="category_list">
             <h3>{{category.name }}</h3> 
          <ul>
            <li v-for="item in categories.items"  v-bind:key="item.id"  class="flex">
                <router-link :to="{name:'Categories', params:{categories_id: item.id}}"> {{ item.name }}</router-link>
            </li>
        </ul> 
    </div>  -->
</div>
</template>

<script>
import db from '../main.js'

export default {  
  data() {  
    return {  
    name:"NewRecipe",
      items: [], 
      aa:[],
      bb:[],
      category_1:"肉",
      category_2:"野菜",
      category_3:"魚介類",
      title:"カテゴリー"
    }  
  },  
  mounted() {  
    // fetch data from firestore  
    db.collection('items')  
      .where("category", "==", "肉")
      .get()  
      .then(snapshot => {  
        snapshot.forEach(doc => {  
          let items = doc.data()  //item→itemsにしたら起動した
          items.id = doc.id  //item→itemsにしたら起動した
          this.items.push(items)  
        })  
      }) 

      db.collection('items')  
      .where("category", "==", "野菜")
      .get()  
      .then(snapshot => {  
        snapshot.forEach(doc => {  
          let items = doc.data()  //item→itemsにしたら起動した
          items.id = doc.id  //item→itemsにしたら起動した
          this.aa.push(items)  
        })  
      })   

      db.collection('items')  
      .where("category", "==", "魚介類")
      .get()  
      .then(snapshot => {  
        snapshot.forEach(doc => {  
          let items = doc.data()  //item→itemsにしたら起動した
          items.id = doc.id  //item→itemsにしたら起動した
          this.bb.push(items)  
        })  
      })  

      db.collection('items')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          let items = {
            'slug': doc.data().slug
          }
          this.items.push(items)
          this.aa.push(items)
          this.bb.push(items)
       
        })
      })
    
  },  

  


  
  
}  
// import db from '../main.js'

// export default {  
//   data() {  
//     return {  
//     name:"NewRecipe",
//     title:"カテゴリー",
//     categories:[
//           {
//               name:'肉',
//               items: [],
//           },
//           {
//               name:'魚',
//               items: [],
//           },
//           {
//               name:'野菜',
//               items: [],
//           },
          
//       ],

//     }  
//   },  
//   created () {
//       db.collection('items').get().then((querySnapshot) => {
//         querySnapshot.forEach((doc) => {
//           let items = {
//             'id': doc.id,
//             'slug': doc.data().slug,
//             'name': doc.data().slug
//           }
        
//           this.category.push(items) 
//         })
//       })
//     }
// }  

//   this.categories.push({'name': doc.data().slug})
        //   これできない　categories.itemsおかしい？


// export default{
//     name:"Category",
//     data(){
//         return{
//              title: 'カテゴリー一覧',
            //  categorys:[
            //  {id:1, name:'野菜', menu:['キャベツ', 'ニンジン', 'トマト', 'ダイコン','ホウレンソウ']},
            //  {id:2, name:'肉',  menu: ['鶏肉', '牛肉', '豚肉']},
            //  {id:3, name:'魚',  menu: ['白身魚', '赤身魚', '貝', 'エビ','海藻']},  
            //  {id:4, name:'豆',  menu: ['豆腐', '大豆']}

            //   ]

//             teams: [
//             {
//                  name: '野菜',
//                  members: [
//                      { id:1, 'name': 'キャベツ'}, { id:2,'name': 'ニンジン'},{ id:3,'name': 'トマト'},{id:4,'name': 'ダイコン'},
//                      { id:5, 'name': 'ホウレンソウ'},{ id:6, 'name': 'ジャガイモ'},
//                  ]
//              },
//             {
//                  name: '肉',
//                  members: [
//                      { id:6, 'name': '鶏肉'}, { id:7,'name': '豚肉'},{id:8,'name': '牛肉'}
//                  ]
//              },
//              {
//                  name: '魚',
//                  members: [
//                      { id:9, 'name': '白身魚'}, { id:10,'name': '赤身魚'},{id:11,'name': '貝'},{id:12,'name': 'エビ'},
//                      { id:13,'name': '海藻'},
//                  ]
//              },
//              {
//                  name: '豆',
//                  members: [
//                      { id:14, 'name': '豆腐'}, {id:15, 'name': '大豆'}
//                  ]
//              },
//          ]
//         };
//     }

// }

</script>




<style scoped>
#Category{
    padding:2%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    /* background: coral; */
}



/* h1{
    width:100%;
    padding: 0 1% 1% 1%;
} */
h2{
    /* padding: 0 1% 1% 0; */
    width:100%;
    border-bottom: 1px solid;
    border-top: 1px solid;
}

/* .category_ist{
    width:20%;
    padding:2% 0;
    display: inline-block;
} */

span{
    font-size: 25px;
    font-weight: bold;
}


/* スマホの時 */
@media screen and (max-width: 480px){

#Category{
  display: block;
}

/* .flex{
    width:50%;
    display: inline-block;
    padding:2% 0;
    
} */

.flex{
    width:50%;
    display: inline-block;
    padding:2% 0;
    background: #d6ebff;
    box-shadow: 0px 0px 0px 5px #d6ebff;
    border: dashed 2px white;

}

.category_list{
    padding:5% 0;
    

}



}


</style>
