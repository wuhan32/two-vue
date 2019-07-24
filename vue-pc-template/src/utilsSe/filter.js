import Vue from 'vue'
import tool from '@/utilsSe/tool'

Vue.filter('formatDate', (val, isTime = false) => {
  if (!val) return '暂无'
  return tool.getAnyDate(val, 0, isTime)
})

Vue.filter('titleFilter', (val, length) => {
  if (!val) return '暂无'
  if (val.length >= length) return `${val.substring(0, length)}...`
  else return val
})

Vue.filter('fileType', (val) => {
  if (!val) return '暂无'
  else return val.split('.').reverse()[0]
})

Vue.filter('percent', (val) => {
  if (!val) return '暂无'
  else return `${(val * 100).toFixed(2)}%`
})

Vue.filter('money', (val) => {
  if (!val) return '0.00'
  var intPart = Number(val) | 0
  var intPartFormat = intPart.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
  var valArr = val.toString().split('.')
  var floatPart = '.00'
  if (valArr.length !== 2) return `¥ ${intPartFormat}${floatPart}`
  if (valArr.length === 2) {
    floatPart = valArr[1]
    if (floatPart.length === 1) return `¥ ${intPartFormat}.${floatPart}0`
    if (floatPart.length === 2) return `¥ ${intPartFormat}.${floatPart}`
    return `¥ ${intPartFormat}${((floatPart / 100).toFixed(2))}`
  }
})

Vue.filter('noAny', (val) => {
  if (!val) return '暂无'
  else return val
})
