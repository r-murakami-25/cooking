<template>
<div id="Ranking">
    <h2>人気ランキング</h2>
    <div class="rank" v-for="item in items" v-bind:key="item.id">
     <router-link :to="{name:'Recipe', params:{recipe_id: item.recipe_slug}}"> 
            <div class="rank_list"> 
                <p class="rank_picture"><img v-bind:src="item.img" alt="ランキング" class=img ></p>
                <ul class="rank_description">
                        <li class="ranking">{{item.rank}}位</li>
                        <li>{{item.title}}</li>
                        <li>{{item.time}}分</li>
                    
                </ul>
            </div> 
         </router-link>
    </div>
    
</div>
    
</template>

<script>
import db from '../main.js'
import {SLUG_CATEGORY_TABLE} from '../constants/slugCategoryTable'


export default{
    name:"Ranking",
    data(){
        return{
               
                items:[],
                title:[]
                 
            };
    },
    mounted() {
    var params=this.$route.params.categories_id

    var subparams=SLUG_CATEGORY_TABLE[params]
     console.log(subparams)
     this.title.push(subparams) 
     


    db.collection('items')
    .where('rank', 'in',['1','2','3'])
    .get()  
    .then(snapshot => {  
         snapshot.forEach(doc => {  
           let items = doc.data()  
           items.id = doc.id  
           this.items.push(items)  
         })  
       })
    }

}

</script>


<style scoped>
#Ranking{
    
    padding:2%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding-bottom: 3%;
}

h2{
    
    width:100%;
    border-bottom: double 6px #3b170b;
    border-top: double 6px #3b170b;
    text-align: center;

}

.ranking{
    font-size:20px ;
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
    width:40%;
    display: inline-block;
}

.rank_description{
    width:60%;
    display: inline-block;
    padding:2%;
}

.rank_list{
    border-bottom: 1px solid;
    display: flex;
    align-items: center;
    justify-content: center;
}



}














</style>
