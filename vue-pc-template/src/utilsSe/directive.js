import Vue from 'vue'

Vue.directive('focus', {
  inserted(el) {
    el.querySelector('input').focus()
  }
})
