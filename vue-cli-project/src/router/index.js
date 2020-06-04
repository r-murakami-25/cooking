import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import tool from '../views/tool.vue'
import Company from '../views/Company.vue'
import MainVisual from '../views/MainVisual.vue'
import Categories from '../views/Categories.vue'
import　Genre　from '../views/Genre.vue'
import　Recipe　from '../views/Recipe.vue'

// import Choice from '../views/Choice.vue'


// ルート用のコンポーネントを読み込む
Vue.use(VueRouter)
// VueRouterインスタンス(UIに出すもの)を生成する
  const router = new VueRouter({

  routes : [
  {
    path: '/',
    component: MainVisual,
    // Choice:Choice
  },
  {
    path: '/Home',
    component: Home
  },
  {
    path: '/tool',
    component:tool
    
  },
  {
    path: '/Company',
    component: Company
  },
  {
    path: '/Categories',
    component: Categories
  },
  {
    path: '/Genre',
    component: Genre
  },
  {
    path: '/Recipe',
    component: Recipe
  },

  // name: 'tool',
    // // route level code-splitting
    // // this generates a separate chunk (about.[hash].js) for this route
    // // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/tool.vue')
  //URLパラメータと
]
})

// const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes
// })

export default router
