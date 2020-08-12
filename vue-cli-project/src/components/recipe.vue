<!--  index.html>App.vue>view(Home.vue)>components(Home.vue)-->


<template>
<div id="Recipe">
    <div>
        <p class="mainVisual"><img src="../assets/mainvisual.jpg" alt="mainVisual" ></p> 
        <h2>{{title.length>0?title[0]:"カテゴリー未設定"}}</h2>
        <!-- <p>{{items[0].point}}</p> -->
        <p>調理時間</p>
        <!-- <p>{{items[0].time}}</p>   -->
        <h2>材料</h2>
       
        <ul>
            <li v-for="item in items" v-bind:key="item.id">
              
                <ul  class="materials" v-for="material in item?item.materials:[]" v-bind:key="material?material.name:''">
                    <li>{{material?material.material:""}}</li>
                    <li>{{material?material.amount:""}}</li>
                </ul>
            </li>  
        </ul>

                <!-- "m in item?item.material:[]"と"m?m.name:''"はfirestoreに入っていないときに仮のものを作る公式 -->
                <!-- item?（？左文字があるとき）item.material:[]（右から文字の時） -->
                <!-- material配列のためv-forすること -->
            
    
         <h3>作り方</h3>
         <ul>
            <li v-for="item in items" v-bind:key="item.id">
              
                <ul  class="materials" v-for="c in item?item.cook:[] " v-bind:key="c?c.explain:''">
                    <li>{{c?c.explain:""}}</li>
                </ul>
            </li>  
        </ul>
            
     

        


    </div> 
</div>
    
</template>



<script>
import db from '../main.js'
import {SLUG_RECIPE_TABLE} from '../constants/slugRecipeTable'

export default{
    name:"Recipe",
    data(){
        return{

            // items:[],
            title:[],
            items:[],
            

            // make:"タコ飯",
            // point:`初めにタコのやわらか煮をつくり、その煮汁とタコを使用します。お好みでホタテやエビなどの魚介類を入れてもおいしいです。バターを足すことでコクを増し、止まらないほどのおいしさに！`,
            // time:"80分（タコのやわらか煮:50分、タコ飯:25分）",
            material:[//7/23疑問　どうやってfirestoreに入れる？name同じだけど
                // {id:1,material:'タコ（刺身用可', amount:'200~300g程'},
                // {id:2,material:'昆布', amount:'2~3枚'},
                // {id:3,material:'醤油', amount:'大さじ3杯'},
                // {id:4,material:'砂糖', amount:'大さじ2杯'},
                // {id:5,material:'酒', amount:'50ml'},
                // {id:6,material:'水', amount:'350ml'},
                // {id:7,material:'米', amount:'2,5ごう'},
                // {id:8,material:'油揚げ', amount:'2枚'},
                // {id:9,material:'油', amount:'小さじ1杯'},
                // {id:10,material:'バター', amount:'20g(適量)'},
                ],
            recipe:[
                {id:1, explain:'タコの足を1本ずつ切り分ける（はさみが楽です）'},
                {id:2, explain:'タコと2~5の材料を加えて、沸騰するまで強火で煮る、沸騰したら弱火で50分蓋をし煮る'},
                {id:3, explain:'タコを煮て30分したら米を洗い、そのまま水につける（15~20分程）'},
                {id:4, explain:'タコと油揚げ（湯で油抜き後）ひと口サイズに切り分ける'},
                {id:5, explain:'フライパンに油をひき、米を入れる'},
                {id:6, explain:'水300mlとタコのやわらか煮の煮汁（昆布もすべて）を加え、タコと油揚げ（魚介類加えてよい）も入れる'},
                {id:7, explain:'蓋をし、強火にかける、煮立ったら弱火にし約12分炊く、おこげがほしい場合は最後に強火で1分ほどにし、火を止め10分蒸らす'},
                {id:8, explain:'最後にバターを加えて混ぜるとさらにおいしい！'},
               ],
                


            };
            
                
    },
    mounted() { 


    var params=this.$route.params.recipe_id
    alert(params);
    alert(SLUG_RECIPE_TABLE[params])//(SLUG_CATEGORY_TABLE[params])の[params]よくわからない

// SLUG_RECIPE_TABLE={
//     octopusrice:"タコ飯",beefbowl:"牛丼",chickenmeatball:"鶏つくね",chickenflakes:"鶏そぼろ丼",grilledfish:"焼き魚",gingerpork:"生姜焼き",deepfriedtatsuta:"赤身魚竜田揚げ",rollcabbage:"ロールキャベツ",friedscallops:"ホタテフライ",
//     coleslaw:"コールスローサラダ"
//     }

    //わからない7/18
    // パターン1）SLUG_CATEGORY_TABLE[params]＝subparamsとしてsubparamsを配列aに入れて表示　文字列にならない

     var subparams=SLUG_RECIPE_TABLE[params]//SLUG_RECIPE_TABLE[0]→タコ
     console.log(subparams)
     this.title.push(subparams) //path=octopasrice=タコライスとなる
    


    //recipe_slug", "==",paramsのもののみ取得
       db.collection('items') 
       
       .where("recipe_slug", "==",params)
        .get()  
        .then(snapshot => {  
          snapshot.forEach(doc => {  
          let item = doc.data()  //item
            item.id = doc.id  //item
            console.log("item",item)
            this.items.push(item)  
             console.log(this.items)
          })  
       })  
    //    console.log(items['name'])

        
    }

    


}
</script>


<style scoped>
#Recipe{
    /* background:wheat; */
    padding: 5%;
}

ul{
    list-style: none;
}

.materials{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}


</style>