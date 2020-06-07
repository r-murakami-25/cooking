<!--  index.html>App.vue>view(Home.vue)>components(Home.vue)-->


<template>
<div id="Categories">
    
   
    
    <!-- <h5>Firebase 検索時　2階層目</h5> これもの中に入るとflexされてしまう。入らないと画面に出ないどうすればよいか-->
    <div class="MainCategories">
         <h2>キャベツのレシピ</h2>
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
                {id:1, name:'キャベツチーズ'},
                {id:2, name:'餃子'},
                {id:3, name:'コールスロー'},
                {id:4, name:'キャベツサラダ'},
                {id:5, name:'お浸し'},
                {id:6, name:'ロールキャベツ'},
               
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
    padding:2%;
}

h2{
    width:100%;
    padding: 0 1% 1% 1%;
}
.categories_list{
    width: 30%;
    display: inline-block;
}


</style>
