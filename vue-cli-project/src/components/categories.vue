<!--  index.html>App.vue>view(Home.vue)>components(Home.vue)-->


<template>
<div id="Categories">
    
    <h1>カテゴリー</h1>
    
    <!-- <h5>Firebase 検索時　2階層目</h5> これもの中に入るとflexされてしまう。入らないと画面に出ないどうすればよいか-->
    <div class="MainCategories">
        <router-link to="/Recipe">
            <div class="categories_list" v-for="item in list" v-bind:key="item.id">
            <p id="mainVisual"><img src="../assets/mainvisual.jpg" alt="mainVisual" ></p>
            <h2>{{ item.name}}</h2>  
            </div>
        </router-link>
    </div>
</div>

     
</template>

<script>
export default{
    name:"Categories",
    data(){
        return{
            list:[
                {id:1, name:'キャベツ'},
                {id:2, name:'ニンジン'},
                {id:3, name:'ホウレンソウ'},
                {id:4, name:'セロリ'},
                {id:5, name:'キュウリ'},
                {id:6, name:'ナス'},
               
            ]
        };
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

.MainCategories{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    background: cornflowerblue;
}

.categories_list{
    width: 30%;
    display: inline-block;
}


</style>
