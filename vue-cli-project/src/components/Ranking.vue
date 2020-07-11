<!--  index.html>App.vue>view(Home.vue)>components(Home.vue)-->


<template>
<div id="Ranking">
    <h2>人気ランキング</h2>
    <div class="rank" v-for="item in items" v-bind:key="item.id">
     <router-link :to="{name:'Recipe', params:{recipe_id: item.title}}"> 
            <div class="rank_list"> 
                <p class="rank_picture"><img v-bind:src="item.img" alt="ランキング" class=img ></p>
                <div class="rank_description">
                        <p>{{item.rank}}位</p>
                        <p>{{item.title}}</p>
                        <p>{{item.time}}分</p>
                    
                </div>
            </div> 
         </router-link>
    </div>
    <!-- <div class="menu" v-for="item in list" v-bind:key="item.id">
    <p><img src="../assets/new_recipe.jpg" alt="新着レシピ"></p>
    <h3>{{item.name}}</h3> 
    </div>-->
</div>
    
</template>

<script>
import db from '../main.js'

export default{
    name:"Ranking",
    data(){
        return{
               
                items:[]
                    // {id:1, rank:'1', title:'ミニ寿司', time:'30'},
                    // {id:2, rank:'2', title:'ニンジン', time:'20'},
                    // {id:3, rank:'3', title:'魚', time:'10'},
                    // {id:4, rank:'4', title:'魚', time:'10'},
                    // {id:5, rank:'5', title:'魚', time:'10'},
                    // {id:6, rank:'6', title:'魚', time:'10'},

                 
            };
    },
    mounted() { 

    db.collection('items')
    .where('rank', 'in',['1','2','3'])
    .get()  
    .then(snapshot => {  
         snapshot.forEach(doc => {  
           let items = doc.data()  //item→itemsにしたら起動した
           items.id = doc.id  //item→itemsにしたら起動した
           this.items.push(items)  
         })  
       })
    }

}

</script>


<style scoped>
#Ranking{
    background:#f5deb3;
    padding:2%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding-bottom: 3%;
}

h2{
    /* padding: 0 1% 1% 0; */
    width:100%;
    border-bottom: 1px solid;
    border-top: 1px solid;
}


.rank{
   width:30%;
}

.rank_list{
    padding:20px 0;
}

.rank_picture{
    display: inline-block;
}

.rank_description{
    display: inline-block;
}

.img{
  width: 100%;
  height: 20vw;
  object-fit:cover
}

/* .rank_list{
    width:25%;
} */


/* スマホの時 */
@media screen and (max-width: 480px){
#Ranking{
   display: block;
}


.rank{
    width:100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: stretch;
    padding-bottom: 3%;
    
}

.rank_picture{
    width:30%;
    display: inline-block;
}

.rank_description{
    width:70%;
    display: inline-block;
    padding:2%;
    /* text-align: center; */
}



}














</style>
