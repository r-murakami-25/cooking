<template>
<div id="Company">
    <h2>会社概要</h2>
    <p>ただ今準備中</p>
    <!-- <dl  class="MainCompany" v-for="item in list" v-bind:key="item.id">
        
        <dt>{{item.title}}</dt>
            <dd>{{item.main}}</dd>
    </dl>   
    
    -->
</div>
    
</template>



<script>
export default{
    name:"Company",
    data(){
        return{
               
                // list:[
                //     {id:1, title:'社名', main:`未定`},

                //     {id:2, title:'代表取締役', main:`未定`},
                    
                //     {id:3, title:'設立', main:`未定`},
                //  ]
            };
    }

}

</script>


<style scoped>
#Company{
    padding:2%;
}










</style>
