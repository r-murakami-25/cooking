<!--  index.html>App.vue>view(Home.vue)>components(Home.vue)-->


<template>
<!-- いらないファイル -->
<div id="Choice">
<button v-for="item in list" v-bind:key="item.id">{{item.name}}</button>

</div>
    
</template>

<script>
export default{
    name:"Choice",
    data(){
        return{
            
            list:[
                // {id:1, name:'お家で贅沢'},
                {id:2, name:'プロフェショナル料理'},
                {id:3, name:'カテゴリー'},
                {id:4, name:'ランキング'},
                {id:5, name:'ジャンル'},
              
                ]

            };
    }

}

</script>


<style scoped>
#Choice{
    background:yellowgreen;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}






</style>
