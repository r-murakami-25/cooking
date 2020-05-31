<!--  index.html>App.vue>view(Home.vue)>components(Home.vue)-->


<template>
<!--<h2>新着レシピ<h2><div id="New_recipe">の中に入るとflexされてしまう。入らないと画面に出ないどうすればよいか-->
<div id="NewRecipe">
    <div class="menu" v-for="item in list" v-bind:key="item.id">
    <p><img src="../assets/mainvisual.jpg" alt="新着レシピ"></p>
    <h3>{{item.name}}</h3>
    </div>
</div>
    
</template>

<script>
export default{
    name:"NewRecipe",
    data(){
        return{
                title:'新着レシピ',
                // menu:'大根の照り煮',
                list:[
                    {id:1, name:'大根の照り煮'},
                    {id:2, name:'ニンジン'},
                    {id:3, name:'ぶり照り煮'},
                    {id:4, name:'たらの照り煮'},

                ]
            };
    }

}

</script>


<style scoped>
#NewRecipe{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    background: coral;
}

.menu{
    width:40%;
}







</style>
