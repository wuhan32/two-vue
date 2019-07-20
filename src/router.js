// 1.1 导入路由的包
import VueRouter from 'vue-router'


//引入相应的组件

import home from './components/tabbar/home.vue'
import member from './components/tabbar/member.vue'
import shopcar from './components/tabbar/shopcar.vue'
import search from './components/tabbar/search.vue'
import newslist from './components/news/newslist.vue'
import newsInfo from './components/news/newsInfo.vue'
import photosList from './components/photos/photosList.vue'

let router = new VueRouter({
  	routes: [
          {path:'/',redirect:'/home'},
          { path:'/home',component:home},
          { path:'/member',component:member},
          { path:'/shopcar',component:shopcar},
          { path:'/search',component:search},
          { path:'/home/newslist',component:newslist},
          { path:'/home/newsInfo/:id',component:newsInfo},
          {path:'/home/photosList',component:photosList}
      ],
  	// 覆盖默认的路由高亮的类，默认的类叫做 router-link-active
  	linkActiveClass: 'mui-active'
})

export default router