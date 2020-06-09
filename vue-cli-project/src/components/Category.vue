<!--  index.html>App.vue>view(Home.vue)>components(Home.vue)-->


<template>
<div id="Category">
     <h1>{{title}}</h1>

    <ul v-for='category in categorys' v-bind:key="category.id" class="category_ist">
        <li>
            <span>{{ category.name }}</span>
            <ul>
                <li v-for="menu in category.menu" v-bind:key="menu.id">
                     <router-link :to="{ name:'Categories', params:{categories_id: menu.id}}">{{ menu }}</router-link>
                </li>
            </ul>
        </li>
    </ul> 

    <!-- <div v-for="team in teams"  v-bind:key="team.id">
        {{ team.name }}
        <ul>
            <li v-for="member in team.members"  v-bind:key="member.id">
                <router-link :to="{name:'Recipe', params:{recipe_id: member.name}}"> {{ member.name }}</router-link>
            </li>
        </ul>
    </div> -->
</div>
</template>

<script>
export default{
    name:"Category",
    data(){
        return{
             title: 'カテゴリー一覧',
             categorys:[
             {id:1, name:'野菜', menu:['キャベツ', 'ニンジン', 'トマト', 'ダイコン','ホウレンソウ']},
             {id:2, name:'肉',  menu: ['鶏肉', '牛肉', '豚肉']},
             {id:3, name:'魚',  menu: ['白身魚', '赤身魚', '貝', 'エビ','海藻']},  
             {id:4, name:'豆',  menu: ['豆腐', '大豆']}

              ]

        //     teams: [
        //     {
        //         name: 'はるかな',
        //         members: [
        //             {
        //                 'name': '大空遥'
        //             }, {
        //                 'name': '比嘉かなた'
        //             }
        //         ]
        //     }, {
        //         name: 'エクレア',
        //         members: [
        //             {
        //                 'name': 'トーマス・紅愛'
        //             }, {
        //                 'name': 'トーマス・恵美理'
        //             }
        //         ]
        //     }, {
        //         name: 'なるあや',
        //         members: [
        //             {
        //                 'name': '遠井成美'
        //             }, {
        //                 'name': '立花彩紗'
        //             }
        //         ]
        //     }
        // ]
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

.category_ist{
    width:20%;
    padding:2% 0;
    display: inline-block;
}

span{
    font-size: 25px;
    font-weight: bold;
}




</style>
