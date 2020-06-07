<!--  index.html>App.vue>view(Home.vue)>components(Home.vue)-->


<template>
<div id="Ranking">
    <h2>人気ランキング</h2>
    <div class="rank" v-for="item in list" v-bind:key="item.id">
        <p class="rank_picture"><img src="../assets/raning_1.jpg" alt="ランキング"></p>
        <div class="rank_description">
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
                    // {id:4, rank:'4', title:'魚', time:'10'},
                    // {id:5, rank:'5', title:'魚', time:'10'},
                    // {id:6, rank:'6', title:'魚', time:'10'},

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

h2{
    padding: 0 1% 1% 1%;
}

.rank{
    display: flex;
    flex-wrap: wrap;
    justify-content: stretch;
    padding-bottom: 3%;
    
}

.rank_picture{
    width:30%;
}

.rank_description{
    width:70%;
    padding:2%;
    /* text-align: center; */
}











</style>
