<!--  index.html>App.vue>view(Home.vue)>components(Home.vue)-->


<template><!--いらないファイル-->
<div id="Genre">
    
    <h1>ジャンル</h1>
    
    <!-- <h5>Firebase 検索時　2階層目</h5> これもの中に入るとflexされてしまう。入らないと画面に出ないどうすればよいか-->
    <div class="MainGenre">
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
    name:"Genre",
    data(){
        return{
            list:[
                {id:1, name:'和食・日本料理'},
                {id:2, name:'中華'},
                {id:3, name:'フレンチ'},
                {id:4, name:'イタリアン'},
                {id:5, name:'郷土料理'},
                {id:6, name:'多国籍料理'},
               
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

.MainGenre{
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
