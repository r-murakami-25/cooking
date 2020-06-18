<!--  index.html>App.vue>view(Home.vue)>components(Home.vue)-->


<template>
<div id="Category">
     <h1>{{title}}</h1>

    <!-- <ul v-for='category in categorys' v-bind:key="category.id" class="category_ist"> -->
        <!-- <router-link :to="{name:'Categories', params:{categories_id: category.id}}"> -->
        <!-- <router-link to="/Categories"><li>
            <span>{{ category.name }}</span>
            <ul>
                
                <li v-for="menu in category.menu" v-bind:key="menu.id">{{ menu }}</li>
            </ul>
        </li>
        </router-link> -->
        <!-- </router-link> -->
    <!-- </ul>  -->

     <div v-for="team in teams"  v-bind:key="team.id" class="category_list">
        {{ team.name }}
        <ul>
            <li v-for="member in team.members"  v-bind:key="member.id"  class="flex">
                <router-link :to="{name:'Categories', params:{categories_id: member.id}}"> {{ member.name }}</router-link>
            </li>
        </ul>
    </div> 
</div>
</template>

<script>
export default{
    name:"Category",
    data(){
        return{
             title: 'カテゴリー一覧',
            //  categorys:[
            //  {id:1, name:'野菜', menu:['キャベツ', 'ニンジン', 'トマト', 'ダイコン','ホウレンソウ']},
            //  {id:2, name:'肉',  menu: ['鶏肉', '牛肉', '豚肉']},
            //  {id:3, name:'魚',  menu: ['白身魚', '赤身魚', '貝', 'エビ','海藻']},  
            //  {id:4, name:'豆',  menu: ['豆腐', '大豆']}

            //   ]

            teams: [
            {
                 name: '野菜',
                 members: [
                     { id:1, 'name': 'キャベツ'}, { id:2,'name': 'ニンジン'},{ id:3,'name': 'トマト'},{id:4,'name': 'ダイコン'},
                     { id:5, 'name': 'ホウレンソウ'},{ id:6, 'name': 'ジャガイモ'},
                 ]
             },
            {
                 name: '肉',
                 members: [
                     { id:6, 'name': '鶏肉'}, { id:7,'name': '豚肉'},{id:8,'name': '牛肉'}
                 ]
             },
             {
                 name: '魚',
                 members: [
                     { id:9, 'name': '白身魚'}, { id:10,'name': '赤身魚'},{id:11,'name': '貝'},{id:12,'name': 'エビ'},
                     { id:13,'name': '海藻'},
                 ]
             },
             {
                 name: '豆',
                 members: [
                     { id:14, 'name': '豆腐'}, {id:15, 'name': '大豆'}
                 ]
             },
         ]
        };
    }

}
</script>




<style scoped>
#Category{
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

/* .category_ist{
    width:20%;
    padding:2% 0;
    display: inline-block;
} */

span{
    font-size: 25px;
    font-weight: bold;
}


/* スマホの時 */
@media screen and (max-width: 480px){

#Category{
  display: block;
}

.flex{
    width:50%;
    display: inline-block;
    padding:2% 0;
    
}

.category_list{
    padding:5% 0;
    

}



}


</style>
