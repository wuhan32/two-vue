import Vue from 'vue'
import App from './App'

import router from '@/router'
import store from '@/store'

import '@/styles/index.scss'
import '@/stylesSe/index.scss'

import '@/element'
import '@/icons'
import '@/utilsSe'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
