import tool from '@/utilsSe/tool'
import router from '@/router'
import { login, getInfo, logout } from '@/api/login'
import { constantRouterMap, asyncRouterMap } from '@/router'

const someFilter = (name, roles) => {
  return roles.some((v, i) => {
    return v.name === name
  })
}

const getAsyncRouter = (router, roles) => {
  return router.filter((v, i) => {
    const isTrue = v.path === '*' ? true : someFilter(v.name, roles)
    isTrue && v.children && (v.children = getAsyncRouter(v.children, roles))
    if (isTrue) return v
  })
}

const user = {
  state: {
    token: tool.localGet('token'),
    userInfo: '',
    roles: constantRouterMap
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_USERINFO: (state, userInfo) => {
      state.userInfo = userInfo
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    }
  },
  actions: {
    Login({ commit }, data) {
      return new Promise((resolve, reject) => {
        login(data).then(res => {
          const { data } = res
          tool.localSet('token', data.token)
          commit('SET_TOKEN', data.token)
          resolve(res)
        }).catch(err => {
          reject(err)
        })
      })
    },
    GetInfo({ commit }) {
      return new Promise((resolve, reject) => {
        getInfo().then(res => {
          const { data } = res
          commit('SET_USERINFO', data)
          // const roles = data.roles
          // if (!roles.length) reject('暂无权限')
          // const asyncRouter = getAsyncRouter(asyncRouterMap, roles)
          // const asyncRouter = asyncRouterMap
          // const allRouter = constantRouterMap.concat(asyncRouter)
          // commit('SET_ROLES', allRouter)
          // resolve(asyncRouter)
          resolve(res)
        }).catch(err => {
          reject(err)
        })
      })
    },
    LogOut() {
      return new Promise((resolve, reject) => {
        logout().then(res => {
          tool.localClear()
          router.push('/login')
          setTimeout(() => location.reload(), 50)
          resolve(res)
        }).catch(err => {
          reject(err)
        })
      })
    },
    FedLogOut() {
      return new Promise(resolve => {
        tool.localClear()
        location.reload()
        resolve()
      })
    }
  }
}

export default user
