import Vue from 'vue'
import VueRouter from 'vue-router'
import Policy from '../views/Policy.vue'
import Tool from '../views/Tool.vue'
import Company from '../views/Company.vue'
import MainVisual from '../views/MainVisual.vue'
import Categories from '../views/Categories.vue'
import　Recipe　from '../views/Recipe.vue'
import　Search from '../views/Search.vue'

// ルート用のコンポーネントを読み込む
Vue.use(VueRouter)
// VueRouterインスタンス(UIに出すもの)を生成する
  const router = new VueRouter({

      //  mode: 'history',
      //  routes: [],

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
  
  {
    path: '/Categories/:categories_id',
    name: 'Categories',
    component: Categories,
    
  },
 {
    path: '/Recipe/:recipe_id',
    name:'Recipe',
    component: Recipe
},

{
  path: '/Search',
  name:'Search',
  component: Search
},

//どこにもヒットしない時
{ 
  path: '*', 
  redirect: '/notfound' 
},


  
]
})


export default router
