<!--  index.html>App.vue>view(Home.vue)>components(Home.vue)-->


<template>
<div id="Genre">
    <dl  class="Genre" v-for="item in list" v-bind:key="item.id">
        <dt>{{item.title}}</dt>
            <dd>{{item.main}}</dd>
    </dl>   
    
   
</div>
    
</template>



<script>
export default{
    name:"Company",
    data(){
        return{
               
                list:[
                    {id:1, title:'社名', main:`dely株式会社 (dely, Inc.)`},

                    {id:2, title:'代表取締役', main:`RISAKO`},
                    
                    {id:3, title:'設立', main:`2014年4月`},
                 ]
            };
    }

}

</script>


<style scoped>
#Genre{
    background:#f5deb3;
    padding:2%;
}










</style>
