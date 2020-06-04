<!--  index.html>App.vue>view(Home.vue)>components(Home.vue)-->


<template>
<div id="Recipe">
    <div v-for="item in list" v-bind:key="item.id">
        <p class="mainVisual"><img src="../assets/mainvisual.jpg" alt="mainVisual" ></p> 
        <h1>{{ make }}</h1>
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
            make:"ロールキャベツ",
            text:`魔法使いと心を繋ぐ育成ゲーム「魔法使いの約束」から、
            ゲーム内で食べると魔力がみなぎる「魔法のビスケット」の再現レシピのご紹介です。
            滑らかなクリームチーズをサクサクのビスケットで挟んで、一口チーズケーキ風に仕上げました。
            チョコレートペンで描いた可愛らしいお目々がチャームポイントです。
            混ぜて挟むだけのお手軽スイーツなので、お菓子作り初心者でも失敗なくお作りいただけますよ。
            ぜひお試しくださいね。`,
            time:"15分",
            material:"材料",
            cook:"作り方",
            list:[
                {id:1, name:'キャベツ', number:'1/2個'},
                {id:2,name:'キュウリ', number:'1/2個'},
                {id:3,name:'ニンジン', number:'1/2個'},
                {id:4,name:'ハクサイ', number:'1/2個'},
                {id:5,name:'トマト', number:'1/2個'},
              
                ],
            list_cook:[
                {id:1, explain:'ホワイトチョコレートを細かく割ります。'},
                {id:2, explain:'ニンジンを細かく割ります。'},
                {id:3, explain:'キャベツを細かく割ります。'},
                {id:4, explain:'ピーマンを細かく割ります。'},
                {id:5, explain:'マッシュルームを細かく割ります。'},
                {id:6, explain:'タマネギを細かく割ります。'},

                ],
                
            point:"ポイント",
            point_detail:`薄力粉は薄めに付けてください、
            薄力粉を付けることで、味が絡みやすくなります。
            合わせ調味料はあらかじめ混ぜておくと便利です。
            合わせ調味料を入れたら、焦げないように気をつけてください。
            焼き時間は鶏肉の厚さや火加減によって異なりますので、調理時間は目安にして様子を見てください。`


            };
    }

}
</script>


<style scoped>
#Recipe{
    background:wheat;
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