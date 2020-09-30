<template>
<div id="Company">
    <h2>会社概要</h2>
 
     <dl  class="MainCompany" v-for="item in list" v-bind:key="item.id">
        
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
                    {id:1, title:'社名', main:`(株)×××××××`},

                    {id:2, title:'代表取締役', main:`×××××××`},

                    {id:3, title:'設立', main:`2020年`},
                 ]
            };
    }

}

</script>


<style scoped>
#Company{
    padding:4%;
}

dl{
    padding-bottom: 1%;
}









</style>
