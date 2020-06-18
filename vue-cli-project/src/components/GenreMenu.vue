<!--  index.html>App.vue>view(Home.vue)>components(Home.vue)-->


<template>
<div id="GenreMenu">
    <h1>{{title}}</h1>

    <ul v-for='category in categorys' v-bind:key="category.id" class="GenreMenu_ist">
        <li>
            <router-link :to="{name:'Categories', params:{categories_id: category.id}}">{{ category.name }}</router-link>
        </li>
    </ul>
</div>
</template>

<script>
export default{
    name:"GenreMenu",
    data(){
        return{
            title: 'ジャンル',
            categorys:[
                    {id:16, name:'和食・日本料理'},
                    {id:17, name:'中華'},
                    {id:18, name:'フレンチ'},
                    {id:19, name:'イタリアン'},
                    {id:20, name:'郷土料理'},
                    {id:21, name:'多国籍料理'},

                ]
        };
    }

}
</script>




<style scoped>
#GenreMenu{
    padding:2%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    /* background: coral; */
}



h1{
    width:100%;
    padding: 0 1% 1% 1%;
}

.GenreMenu_ist{
    width:15%;
    padding:2% 0;
    display: inline-block;
}

span{
    font-size: 25px;
    font-weight: bold;
}

/* スマホの時 */
@media screen and (max-width: 480px){
#GenreMenu{
    padding:2%;
    font-display: block;
}

.GenreMenu_ist{
    width:100%;

}

   
}




</style>
