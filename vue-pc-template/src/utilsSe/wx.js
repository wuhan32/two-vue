import Vue from 'vue'
import store from '@/store'

class wx {
  static init(name, data, callback) {
    const wx = store.getters.wx
    wx.ready(() => wx[name](data, callback))
    wx.error(() => store.dispatch('_getWxConfig'))
  }

  static invoke(name, data, callback) {
    const wx = store.getters.wx
    wx.ready(() => wx.invoke(name, data, callback))
    wx.error(() => store.dispatch('_getWxConfig'))
  }
}

Vue.prototype.$wx = wx

export default wx
