import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// Layout
import Layout from '../views/layout/Layout'
// import layoutFull from '../views/layoutFull'

// 同步路由
export const constantRouterMap = [
  // 定向页面
  { path: '/', redirect: '/dashboard' },
  { path: '*', redirect: '/404' },
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        name: 'redirect',
        component: () => import('@/views/redirect')
      }
    ]
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/404/404')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login')
  },
  {
    path: '/dashboard',
    redirect: '/dashboard/dashboardSon',
    name: 'dashboard',
    component: Layout,
    hidden: true,
    meta: { title: '主页', icon: 'example' },
    children: [{
      path: 'dashboardSon',
      name: 'dashboardSon',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '主页', icon: 'example' }
    }]
  },
  // 业务页面
  {
    path: '/test',
    redirect: '/test/test-1',
    name: 'test',
    component: Layout,
    meta: { title: 'test', icon: 'example' },
    children: [
      {
        path: 'test-1',
        name: 'test-1',
        component: () => import('@/views/test/test-1'),
        meta: { title: 'test-1', icon: 'example' }
      },
      {
        path: 'test-2',
        name: 'test-2',
        component: () => import('@/views/test/test-2'),
        meta: { title: 'test-2', icon: 'example' }
      },
      {
        path: 'test-3',
        name: 'test-3',
        component: () => import('@/views/test/test-3'),
        meta: { title: 'test-3', icon: 'example' }
      },
      {
        path: 'echarts',
        name: 'echarts',
        component: () => import('@/views/test/echarts'),
        meta: { title: 'echarts', icon: 'example' }
      },
      {
        path: 'draggable',
        name: 'draggable',
        component: () => import('@/views/test/draggable'),
        meta: { title: 'draggable', icon: 'example' }
      }
    ]
  }
]

// 异步路由
export const asyncRouterMap = []

export default new Router({
  // mode: 'history', // 后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
