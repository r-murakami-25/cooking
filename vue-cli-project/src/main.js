import Vue from 'vue'// Vue 本体
import App from './App.vue'// 最初のコンポーネント App.vue を読み込む
import router from './router'// routerを読み込む
import store from './store'//storeを読み込む

Vue.config.productionTip = false

//firebase　以下
// import firebase from 'firebase' このままだとfirebase全てインストールしてしまう、以下必要な物だけインストールすること

import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

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


//vue.js→firestoreへコレクション追加
var db = firebase.firestore(); 

// export default firestore

//category追加
db.collection("category").add({
  name1: "キャベツ",
  name2: "ニンジン",
  name3: "トマト",
})
.then(function(docRef) {
  console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
  console.error("Error adding document: ", error);
});

//contents追加
db.collection("contents").add({
  article: "写真",
  title: "ロールキャベツ",
})
.then(function(docRef) {
  console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
  console.error("Error adding document: ", error);
});

//recipe追加
db.collection("recipe").add({
  visual: "写真",
  material: "キャベツ",
  title: "ロールキャベツ",
  method: "混ぜる",
  time: "15",
  title: "ロールキャベツ",
})
.then(function(docRef) {
  console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
  console.error("Error adding document: ", error);
});






// Vue アプリケーションを起動します
new Vue({
  el:'#app',
  router,
  store,
  render: h => h(App)
}).$mount('#app')//id が app である DOM （index.html）に連携し,
//router,store使ってAppコンポーネント（app.vue）を表示するという意味（重要度低い）

//→要はindex.htmlとApp.vueを連携させる地う意味



