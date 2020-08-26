
<template>
<div id="Terms">
    <h1>サービス利用規約</h1>
    <p>未定</p>    
    <h2>未定</h2>
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
                    {id:1, title:'未定', main:`未定`},

                    {id:1, title:'未定', main:`未定`},
                    
                    {id:1, title:'未定', main:`未定`},
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
