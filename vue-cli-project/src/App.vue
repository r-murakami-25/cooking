<!--index.html>App.vue-->

<template>
  <div id="app">
    

    <header>

        <h1 class="logo"><router-link to="/"><img src="./assets/logo.gif" alt="ロゴ"></router-link></h1>
        <nav class="Navigation">
          <ul>
            <li><router-link to="/Categories">カテゴリー</router-link></li>
            <li><router-link to="/Genre">ジャンル</router-link></li>
          </ul>
        </nav>
        
        <input type="text" class="search_box" placeholder="料理名・食材でレシピをさがす" value="">

    </header>

    <router-view/>
    
    <!-- <router-view/> -->
    
    <!-- <div class="categories_main">
      <categories></categories>
      <categories></categories>
      <categories></categories>
      <categories></categories>
      <categories></categories>
      <categories></categories>

    </div> -->
    <!-- <recipe></recipe> -->
    

    <footer class="footer">

      <ul class=footer_nav>
        <li><router-link to="/Home">ポリシー</router-link></li>
        <li><router-link to="/tool">利用規約</router-link></li>
        <li><router-link to="/Company">会社概要</router-link></li>
      </ul>

      <p class="logo"><router-link to="/"><img src="./assets/logo.gif" alt="ロゴ"></router-link></p>

    
      </footer>


    
  </div>
</template>

// firebase以下 
<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/7.15.1/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->


//App.vue以下
<script>
import Home from'./components/Home.vue'
// import categories from'./components/categories.vue'
// import recipe from'./components/recipe.vue'

export default {
  name:'app',
  components:{
    Home:Home,
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
}

a{
  text-decoration: none;
}

ul{
  list-style: none;
}


#app {
  font-family: "メイリオ", Meiryo, "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", "ＭＳ Ｐゴシック", "MS PGothic", Osaka, sans-serif;
	font-weight: normal;
  /* font-family: Avenir, Helvetica, Arial, sans-serif;  */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 1200px;
  margin: 0 auto;
}

header{
  background:#f5deb3;
  padding:1%;
}

.logo{
  display: inline-block;
  width:5%;
}

.Navigation{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around ;
  text-align: center;
  padding:1%;
}

.Navigation ul{
  width:100%;
}

.Navigation ul li{
  display: inline-block;
  width: 30%;
}



.search_box{
  display: block;
  margin: 0 auto;
  width:80%;
  background:#ffffff;
  border-radius: 6px;
  padding:0.5%;
}

.MainRecipe{
    padding:2%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    /* background: coral; */
}

footer{
  background: #deb887;
  text-align: center;
}

.footer_nav li{
  padding: 1%;
  display: inline-block;
}




/* .footer{
  display:flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.footer_nav{
  width: 95%;
} */

/* .categories_main{
  max-width: 1200px;
  background:whitesmoke;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around ;
} */

/* #nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
