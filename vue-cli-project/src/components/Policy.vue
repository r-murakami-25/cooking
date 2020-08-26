<template>
<div id="Policy">
    <h1>プライバシーポリシー</h1>
    <p>未定<p>
    <div class="MainPolicy" v-for="item in list" v-bind:key="item.id">
        <h2>{{item.title}}</h2>
        <p>{{item.main}}</p> 
       
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
                    未定
                 ]
            };
    }

}

</script>


<style scoped>
#Policy{
    background:#f5deb3;
    padding:2%;
}










</style>
