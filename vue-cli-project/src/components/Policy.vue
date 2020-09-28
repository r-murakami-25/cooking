<template>
<div id="Policy">
    <h2>プライバシーポリシー</h2>
    <p>ただ今準備中<p>
    <div class="MainPolicy" v-for="item in list" v-bind:key="item.id">
        <!-- <h2>{{item.title}}</h2>
        <p>{{item.main}}</p>  -->
       
    </div>
   
</div>
    
</template>

<script>

import db from '../main.js'

export default{
    name:"Policy",
    data(){
        return{
               
                 list:[
                     
                  ]
            };
    }

}

</script>


<style scoped>
#Policy{
    padding:2%;
}










</style>
