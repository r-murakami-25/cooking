
<template>
  <div id="app">
    

    <header>

        <h1 class="logo"><router-link to="/"><img src="./assets/logo.png" alt="ロゴ" class="logo_img"></router-link></h1>
        <Search></Search>
    </header>

    <router-view/>

    <footer class="footer">

      <ul class=footer_nav>
        <!-- <li><router-link to="/Policy">ポリシー</router-link></li> -->
        <li><router-link to="/Tool">利用規約</router-link></li>
        <li><router-link to="/Company">会社概要</router-link></li>
      </ul> 

      <p class="logo"><router-link to="/"><img src="./assets/logo.png" alt="ロゴ"></router-link></p>

    
      </footer>


    
  </div>
</template>

  // firebase以下 
<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/7.15.1/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->



<script>
//App.vue以下
import  Search from '@/components/Search.vue'

// import Home from'./components/Home.vue'
// import Search from'./components/Search.vue'
// import categories from'./components/categories.vue'
// import recipe from'./components/recipe.vue'

export default {
  name:'app',
  components:{
    Search,
    // Home:Home,
    // Search:Search
    // categories:categories,
    // recipe:recipe
  },
  scrollBehavior (to, from, savedPosition) {
  return { x: 0, y: 0 }
},


  // scrollBehaivor () {
  // return { x: 0, y: 0 }
  // },
  

}
</script>


<style>
/*共通設定*/

*{
	margin: 0;
	padding: 0;
	box-sizing:border-box;
}

*::before,*::after{
	box-sizing: border-box;
}

* img {
    vertical-align: bottom;
    width:100%;
    border-radius: 5%;
}

a{
  text-decoration: none;
  color:black;

}

a:hover{
    color:black;
    text-decoration: underline #0000;
}

ul{
  list-style: none;
}


#app {
  font-family: "メイリオ", Meiryo, "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", "ＭＳ Ｐゴシック", "MS PGothic", Osaka, sans-serif;
	font-weight: normal;
  font-size: 100%;
  /* font-family: Avenir, Helvetica, Arial, sans-serif;  */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 980px;
  margin: 0 auto;
}

p{
  font-size: 16px;
}


/* 以下#app */

/* 以下header */
header{
  padding:1%;
  display: flex;
  -webkit-align-items: center; /* 縦方向中央揃え（Safari用） */
  align-items: center; /* 縦方向中央揃え */
  -webkit-justify-content:space-around ; /* 横方向中央揃え（Safari用） */
  justify-content: space-around; /* 横方向中央揃え */
  border-bottom: 1px solid #d5d2cd;
  -webkit-box-shadow: 0 2px 4px rgba(0, 0, 0, .1);
  box-shadow: 0 2px 4px rgba(0, 0, 0, .1);
}

.logo{
   display: inline-block;  
    width:30%;
}

img.logo_img {
    vertical-align: middle;
}

h2{
  font-size:140%;
}

h3{
  font-size: 110%;
}


footer{
  background: #a3a3a3;
  text-align: center;
}

.footer_nav li{
  padding: 1%;
  display: inline-block;
}




</style>
