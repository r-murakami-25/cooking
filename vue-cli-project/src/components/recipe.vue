<!--  index.html>App.vue>view(Home.vue)>components(Home.vue)-->


<template>
<div id="Recipe">
    <div>
        <p class="mainVisual"><img src="../assets/mainvisual.jpg" alt="mainVisual" ></p> 
        <h2>{{ make }}</h2>
        <p>{{text}}</p>
        <p>{{time}}</p>
        <h2>{{material}}</h2>
        <ul>
            <li v-for="item in list" v-bind:key="item.id">
                {{item.name}} <span>{{item.number}}</span></li>
        </ul>
        <h3>{{cook}}</h3>
        <ol>
            <li v-for="item in list_cook" v-bind:key="item.id">
                {{item.explain}} </li>
        </ol>

        <h3>{{point}}</h3>
        <p>{{point_detail}}</p>


    </div> 
</div>
    
</template>

<script>
export default{
    name:"Recipe",
    data(){
        return{
            make:"タコ飯",
            text:`初めにタコのやわらか煮をつくり、その煮汁とタコを使用します。お好みでホタテやエビなどの魚介類を入れてもおいしいです`,
            time:"80分（タコのやわらか煮:50分、タコ飯:25分）",
            material:"材料",
            cook:"作り方",
            list:[
                {id:1, name:'タコ（刺身用可', number:'200~300g程'},
                {id:2,name:'昆布', number:'2~3枚'},
                {id:3,name:'醤油', number:'大さじ3杯'},
                {id:4,name:'砂糖', number:'大さじ2杯'},
                {id:5,name:'酒', number:'50ml'},
                {id:6,name:'水', number:'350ml'},
                {id:7,name:'米', number:'2,5ごう'},
                {id:8,name:'油揚げ', number:'2枚'},
                {id:9,name:'油', number:'小さじ1杯'},
                {id:10,name:'バター', number:'20g(適量)'},
                ],
            list_cook:[
                {id:1, explain:'タコの足を1本ずつ切り分ける（はさみが楽です）'},
                {id:2, explain:'タコと2~5の材料を加えて、沸騰するまで強火で煮る、沸騰したら弱火で50分蓋をし煮る'},
                {id:3, explain:'タコを煮て30分したら米を洗い、そのまま水につける（15~20分程）'},
                {id:4, explain:'タコと油揚げ（湯で油抜き後）ひと口サイズに切り分ける'},
                {id:5, explain:'フライパンに油をひき、米を入れる'},
                {id:6, explain:'水300mlとタコのやわらか煮の煮汁（昆布もすべて）を加え、タコと油揚げ（魚介類加えてよい）も入れる'},
                {id:7, explain:'蓋をし、強火にかける、煮立ったら弱火にし約12分炊く、おこげがほしい場合は最後に強火で1分ほどにし、火を止め10分蒸らす'},
                {id:8, explain:'最後にバターを加えて混ぜるとさらにおいしい！'},
               ],
                
            point:"ポイント",
            point_detail:`バターがコクを足し、やめられないほどのおいしさに！`


            };
            
                
    },

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

.mainvisual{
    width:100%;
    background:#f5deb3;
}


</style>