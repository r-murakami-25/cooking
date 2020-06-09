<!--  index.html>App.vue>view(Home.vue)>components(Home.vue)-->


<template>
<div id="Category">
    <h2>カテゴリー一覧</h2>
    <div class="Category_wrap" v-for="item in list" v-bind:key="item.id">
        <!-- <p class="rank_picture"><img src="../assets/raning_1.jpg" alt="ランキング"></p> -->        
        <h3>{{item.title}}</h3>
           <ul v-for="list in lists" v-bind:key="list.id">
               <li>{{list.name_1}}</li>
               <li>{{list.name_2}}</li>
           </ul>
    </div>
    <!-- <div class="menu" v-for="item in list" v-bind:key="item.id">
    <p><img src="../assets/new_recipe.jpg" alt="新着レシピ"></p>
    <h3>{{item.name}}</h3> 
    </div>-->
</div>
    
</template>

<script>
export default{
    name:"Category",
    data(){
        return{
               
                list:[
                    {id:1, title:'野菜'},
                    {id:2, title:'肉'},
                    {id:3, title:'魚'},
                    {id:4, title:'豆'},

                    // {id:4, rank:'4', title:'魚', time:'10'},
                    // {id:5, rank:'5', title:'魚', time:'10'},
                    // {id:6, rank:'6', title:'魚', time:'10'},

                 ],
                
                lists:[
                    {id:1, name_1:'キャベツ', name_2:'鳥肉'},
                    {id:2, name_1:'ジャガイモ', name_2:'牛肉'},
                    {id:3, name_1:'ニンジン', name_2:'豚肉'},
                    {id:4, name_1:'大根'},
                    {id:5, name_1:'ホウレンソウ'},
                    
                ],
                
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
