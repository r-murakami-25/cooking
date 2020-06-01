<!--  index.html>App.vue>view(Home.vue)>components(Home.vue)-->


<template>
<div id="Terms">
    <h1>サービス利用規約</h1>
    <p>本サービス利用規約（以下「本利用規約」といいます）は、第1編の基本利用規約および各サービス固有の利用条件（第2編の個別規約を含みます）で構成されます。</p>    
    <h2>基本利用規約</h2>
    <ul class="MainTerms" v-for="item in list" v-bind:key="item.id">
        <li>{{item.title}}</li>
        <li>{{item.main}}</li>
    </ul>
   
</div>
    
</template>

<script>
export default{
    name:"Policy",
    data(){
        return{
               
                list:[
                    {id:1, title:'【第 1 条 基本利用規約について】', main:`本ポリシー4において個人情報とは、
                    個人情報の保護に関する法律（以下「個人情報保護法」といいます。）に定める「個人情報」をいいます。
                    当社は、本サービスにおいて以下のユーザー情報を取得する場合があり、これらの情報には個人情報が`},

                    {id:2, title:'【第 2 条 定義】', main:`本ポリシー5において個人情報とは、
                    個人情報の保護に関する法律（以下「個人情報保護法」といいます。）に定める「個人情報」をいいます。
                    当社は、本サービスにおいて以下のユーザー情報を取得する場合があり、これらの情報には個人情報が`},
                    
                    {id:3, title:'【第 3 条 広告の掲載等】', main:`本ポリシー6において個人情報とは、
                    個人情報の保護に関する法律（以下「個人情報保護法」といいます。）に定める「個人情報」をいいます。
                    当社は、本サービスにおいて以下のユーザー情報を取得する場合があり、これらの情報には個人情報が`},
                 ]
            };
    }

}

</script>


<style scoped>
#Terms{
    background:#f5deb3;
    padding:2%;
}










</style>
