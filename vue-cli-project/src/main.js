import Vue from 'vue'// Vue 本体
import App from './App.vue'// 最初のコンポーネント App.vue を読み込む
import router from './router'// routerを読み込む
import store from './store'//storeを読み込む

Vue.config.productionTip = false

//firebase　以下
import firebase from 'firebase'
var firebaseConfig = {
  apiKey: "AIzaSyD7F8TCPHLy7omQhWDTNsrJ4_o6RJp6V9Y",
  authDomain: "my-portfolio-9973f.firebaseapp.com",
  databaseURL: "https://my-portfolio-9973f.firebaseio.com",
  projectId: "my-portfolio-9973f",
  storageBucket: "my-portfolio-9973f.appspot.com",
  messagingSenderId: "495175028807",
  appId: "1:495175028807:web:bb5db40b14607beec72162"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Vue アプリケーションを起動します
new Vue({
  el:'#app',
  router,
  store,
  render: h => h(App)
}).$mount('#app')//id が app である DOM （index.html）に連携し,
//router,store使ってAppコンポーネント（app.vue）を表示するという意味（重要度低い）

//→要はindex.htmlとApp.vueを連携させる地う意味



