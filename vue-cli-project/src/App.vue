<!--index.html>App.vue-->

<template>
  <div id="app">
    

    <header>

        <p><router-link to="/"><img src="assets/logo.gif" alt="ロゴ"></router-link></p>
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
    

    <footer>
      
      <router-link to="/Home">ポリシー</router-link>
      <router-link to="/tool">利用規約</router-link>
      <router-link to="/Company">会社概要</router-link>
    
      <p><router-link to="/"><img src="" alt="ロゴ"></router-link></p>
      </footer>


    
  </div>
</template>

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
  }
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
}

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
