import Vue from 'vue'// Vue 本体
import App from './App.vue'// 最初のコンポーネント App.vue を読み込む
import router from './router'// routerを読み込む
import store from './store'//storeを読み込む

Vue.config.productionTip = false

//firebase　以下
// import firebase from 'firebase' このままだとfirebase全てインストールしてしまう、以下必要な物だけインストールすること

// import firebase from "firebase/app"
// import "firebase/auth"
// import "firebase/firestore"

// vue.js firestoreでCRUD操作実現

import * as firebase from 'firebase/app' //変更点  エラーのexport defort(import as db)is not founded解決、すべて読みこんでいなかったため
import 'firebase/firestore' //変更点
import "firebase/storage"; //追加 7/11

import jQuery from 'jquery'//jQueryとの共存
global.jquery = jQuery
global.$ = jQuery
window.$ = window.jQuery = require('jquery')



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
// firebase.initializeApp(firebaseConfig);
const firebaseApp = firebase.initializeApp(firebaseConfig)  


//vue.js→firestoreへコレクション追加

export default firebaseApp.firestore()
export const db = firebase.firestore();  

// export default firestore


// Vue アプリケーションを起動します
new Vue({
  el:'#app',
  router,
  store,
  render: h => h(App)
}).$mount('#app')//id が app である DOM （index.html）に連携し,
//router,store使ってAppコンポーネント（app.vue）を表示するという意味（重要度低い）

//→要はindex.htmlとApp.vueを連携させる地う意味


