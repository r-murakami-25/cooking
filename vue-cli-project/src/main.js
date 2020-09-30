// 読み込み

import Vue from 'vue'// Vue 本体
import App from './App.vue'// App.vue を読み込む
import router from './router'// vue-routerを読み込む
import store from './store'//storeを読み込む
// import VueCarousel from 'vue-carousel';

// Vue.use(VueCarousel);
// Vue.config.productionTip = false
 

Vue.config.productionTip = false

// vue.js firestoreでCRUD操作実現

import * as firebase from 'firebase/app' 
import 'firebase/firestore' //変更点
import "firebase/storage"; 

import jQuery from 'jquery'//jQueryとの共存
global.jquery = jQuery
global.$ = jQuery
window.$ = window.jQuery = require('jquery')

// firestore
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


// Vue アプリケーションを起動する
new Vue({
  el:'#app',
  router,
  store,
  render: h => h(App)
}).$mount('#app')

