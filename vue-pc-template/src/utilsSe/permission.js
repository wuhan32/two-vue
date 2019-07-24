import router from '@/router'
import store from '@/store'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import tool from '@/utilsSe/tool'

const whiteList = ['/login', '/404']

router.beforeEach((to, from, next) => {
  nprogress.start()
  if (tool.localGet('token')) {
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      if (!store.getters.userInfo) {
        store.dispatch('GetInfo').then(res => {
          // router.addRoutes(res)
          // next({ ...to, replace: true })
          next()
        }).catch(err => {
          console.log(err)
          store.dispatch('FedLogOut').then(() => {
            next({ path: '/login' })
          })
        })
      } else {
        next()
      }
    }
  } else {
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next(`/login?redirect=${to.path}`)
    }
  }
})

router.afterEach((to, from, next) => {
  nprogress.done()
  to.path === '/' && router.push('/')
})
