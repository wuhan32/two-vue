// 导入 mui 的样式文件
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

// 入口文件
import Vue from 'vue'
import app from './App.vue'

//导入vue-resource
import VueResource from 'vue-resource'

Vue.use(VueResource)

import VueRouter from 'vue-router'
Vue.use(VueRouter)

//导入 mint-ui 样式表 和组件
import MintUi from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUi)

// 1.3 导入自己的 router.js 路由模块
import router from './router.js'

// 1.4 挂载 路由对象到 vm 实例上
let vm = new Vue({
  el: "#app",
  render: c => c(app),
  router
})