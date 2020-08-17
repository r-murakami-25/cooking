import Vue from 'vue'
import VueRouter from 'vue-router'
import Policy from '../views/Policy.vue'
import Tool from '../views/Tool.vue'
import Company from '../views/Company.vue'
import MainVisual from '../views/MainVisual.vue'
import Categories from '../views/Categories.vue'
import　Recipe　from '../views/Recipe.vue'


// import Choice from '../views/Choice.vue'


// ルート用のコンポーネントを読み込む
Vue.use(VueRouter)
// VueRouterインスタンス(UIに出すもの)を生成する
  const router = new VueRouter({

    scrollBehavior (to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else {
        return { x: 0, y: 0 }
      }
    },

  routes : [
  {
    path: '/',
    component: MainVisual,
  },
  {
    path: '/Policy',
    component: Policy
  },
  {
    path: '/Tool',
    component:Tool
    
  },
  {
    path: '/Company',
    component: Company
  },
  // /Categories/1
  // /Categories/2
  // {
  //   path: '/Categories/:categories_id',
  //   name: Categories,
  //   component: Categories
  // },
  {
    path: '/Categories/:categories_id',
    name: 'Categories',
    component: Categories,
    // props:route =>({categories_id:Number(route.params.categories_id)})
    //  props:true
    // props: route => ({ id: Number(route.params.id) })
  },
 {
    path: '/Recipe/:recipe_id',
    name:'Recipe',
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
