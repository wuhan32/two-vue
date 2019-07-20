// 导入 mui 的样式文件
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

// 入口文件
import Vue from 'vue'
import app from './App.vue'

//导入vue-resource
import VueResource from 'vue-resource'

Vue.use(VueResource)
//配置全局的根域名
Vue.http.options.root = "http://www.liulongbin.top:3005/"
//全局设置post提交表单数据的 组织格式
Vue.http.options.emulateJSON = true

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import moment from 'moment'
// 定义全局的过滤器
Vue.filter('dateFormat', function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
  return moment(dataStr).format(pattern)
})

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