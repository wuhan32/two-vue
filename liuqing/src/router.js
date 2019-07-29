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
import photosInfo from './components/photos/photosInfo.vue'
import goodslist  from './components/Goods/GoodsList.vue'
import goodsinfo from './components/Goods/GoodsInfo.vue'
import goodsdesc from './components/Goods/GoodsDesc.vue'
import goodscomment from './components/Goods/GoodsComment.vue'
let router = new VueRouter({
  	routes: [
          {path:'/',redirect:'/home'},
          { path:'/home',component:home},
          { path:'/member',component:member},
          { path:'/shopcar',component:shopcar},
          { path:'/search',component:search},
          { path:'/home/newslist',component:newslist},
          { path:'/home/newsInfo/:id',component:newsInfo},
          {path:'/home/photosList',component:photosList},
          {path:'/home/photosInfo/:id',component:photosInfo},
          {path:'/home/goodslist',component:goodslist},
          {path:'/home/goodsinfo/:id',component:goodsinfo,name:'goodsInfo'},
          {path:'/home/goodsdesc/:id',component:goodsdesc,name:'goodsdesc'},
          {path:'/home/goodscomment/:id',component:goodscomment,name:'goodscomment'}
      ],
  	// 覆盖默认的路由高亮的类，默认的类叫做 router-link-active
  	linkActiveClass: 'mui-active'
})

export default router