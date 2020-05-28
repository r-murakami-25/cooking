<!--  index.html>App.vue>view(Home.vue)>components(Home.vue)-->


<template>
<div id="categories">
<p id="mainVisual"><img src="../assets/mainvisual.jpg" alt="mainVisual" ></p>
<h1>{{ msg }}</h1>  

</div>
    
</template>

<script>
export default{
    name:"categories",
    data(){
        return{msg:"キャベツ"};
    }

}
</script>


<style scoped>
#mainVisual{
    width:100%;
    background:#f5deb3;
    text-align: center;
}



/* .mainVisual img{
    width: 100%;
} */


#categories{
    padding: 0.5em 1em;
    margin: 2em 0;
    font-weight: bold;
    border: solid 3px #000000;
    width:30%;
    
}


</style>