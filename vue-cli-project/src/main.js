import Vue from 'vue'// Vue 本体
import App from './App.vue'// 最初のコンポーネント App.vue を読み込む
import router from './router'// routerを読み込む
import store from './store'//storeを読み込む

Vue.config.productionTip = false

// Vue アプリケーションを起動します
new Vue({
  el:'#app',
  router,
  store,
  render: h => h(App)
}).$mount('#app')//id が app である DOM （index.html）に連携し,
//router,store使ってAppコンポーネント（app.vue）を表示するという意味（重要度低い）

//→要はindex.htmlとApp.vueを連携させる地う意味