<!--  index.html>App.vue>view(Home.vue)>components(Home.vue)-->


<template>
<div id="Category">
    <h2>カテゴリー</h2>

     <div v-for="category in categories"  v-bind:key="category.id" class="category_list">
             <h3>{{category.type }}</h3> 
          <ul>
            <li v-for="item in category.items"  v-bind:key="item.id"  class="flex">
                <router-link :to="{name:'Categories', params:{categories_id: item.slug}}"> {{ item.name }}</router-link>
            </li>
        </ul> 
        
    </div> 
</div>
</template>

<script>
import db from '../main.js'

export default { 
   
  data() {  
    return {  
    name:"NewRecipe",
    
    categories:[
          {
              type:'肉',
              items: [],
          },
          {
              type:'魚介類',
              items: [],
          },
          {
              type:'野菜',
              items: [],
          },
          
      ],
        
    }  
  },  
  created() {  
    
    // fetch data from firestore 
    //   var params=this.$route.params['id']
    //  console.log(params)
    

    //categoriesのitems[]に直接アクセス
    let items= this.categories.map(obj=>obj.items);
    //self=this(上記のitemsをreference用変数(self)を使って置き換える)参照元→https://qiita.com/shanonim/items/7718556c0fab54a517c2
    // let self = this （ただの「これという意味で、関数を指すことになるitemsを指してない」）今回はいらない

    //以下　コレクション（itemsの）一覧取得し、変数dataにドキュメントのフィールドをすべて代入。 +slug取得　-router-link :toの飛ぶ先-

    //カテゴリー"肉"
     db.collection('items')  
      .where("category", "==", "肉")
      .get()
      .then((querySnapshot)=> {
      let data = []
      querySnapshot.forEach((doc)=> {
        console.log(doc)
        this.categories[0].items.push(doc.data())
        console.log(this.categories)
      })
    }) 

     //カテゴリー"魚介類"
    db.collection('items')  
      .where("category", "==", "魚介類")
      .get()
      .then((querySnapshot)=> {
      let data = []
      querySnapshot.forEach((doc)=> {
        console.log(doc)
        this.categories[1].items.push(doc.data())
        console.log(this.categories)
      })
    }) 

     //カテゴリー"野菜"
    db.collection('items')  
      .where("category", "==", "野菜")
      .get()
      .then((querySnapshot)=> {
      let data = []
      querySnapshot.forEach((doc)=> {
        console.log(doc)
        this.categories[2].items.push(doc.data())
        console.log(this.categories)
      })
    })  


    
    
  },

  
   
}  

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
    width: 50%;
    display: inline-block;
    padding: 2%;
    background: #f5deb3;
    box-shadow: 0px 0px 0px 1px #f5deb3;
    border: dashed 1px white;
}

.category_list{
    padding:5% 0;
    

}



}


</style>
