<!--  index.html>App.vue>view(Home.vue)>components(Home.vue)-->


<template>
<div id="Ranking">
    <h3>ランキング</h3>
    <div class="rank" v-for="item in list" v-bind:key="item.id">
        <p class="rank_picture"><img src="../assets/mainvisual.jpg" alt="ランキング"></p>
        <div>
            <p>{{item.rank}}位</p>
            <p>{{item.title}}</p>
            <p>{{item.time}}分</p>
        </div>
    </div>
    <!-- <div class="menu" v-for="item in list" v-bind:key="item.id">
    <p><img src="../assets/new_recipe.jpg" alt="新着レシピ"></p>
    <h3>{{item.name}}</h3> 
    </div>-->
</div>
    
</template>

<script>
export default{
    name:"Ranking",
    data(){
        return{
               
                list:[
                    {id:1, rank:'1', title:'ミニ寿司', time:'30'},
                    {id:2, rank:'2', title:'ニンジン', time:'20'},
                    {id:3, rank:'3', title:'魚', time:'10'},

                 ]
            };
    }

}

</script>


<style scoped>
#Ranking{
    background:#f5deb3;
    padding:2%;
}

.rank{
    display: flex;
    flex-wrap: wrap;
    justify-content: stretch;
    
}

.rank_picture{
     width:40%;
}









</style>
