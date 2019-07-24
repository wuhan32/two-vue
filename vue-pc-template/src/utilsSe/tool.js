import Vue from 'vue'
import store from '@/store'
import { Message } from 'element-ui'

const tool = {
  baseURL: process.env.BASE_API
}

/* 配置 */
tool.baseURL = 'http://xxx'
/* img类型 */
tool.imgType = ['jpg', 'png', 'jpeg', 'gif']
/* 判断img */
tool.isImg = (type, isTurn = true) => {
  const typeCp = isTurn ? type.split('.').reverse()[0] : type
  if (tool.imgType.indexOf(typeCp) === -1) return false
  else return true
}
/* 上传 */
tool.upload = {
  img: () => `${tool.baseURL}/file/upload?token=${tool.localGet('token')}`,
  template: (typeName) => `${tool.baseURL}/template/upload?token=${tool.localGet('token')}&typeName=${typeName}`
}
/* 下载 */
tool.download = {
  img: (fileName) => `${tool.baseURL}/file/download?fileName=${fileName}`,
  template: (typeName) => `${tool.baseURL}/template/download?typeName=${typeName}`,
  export: (typeName, id) => `${tool.baseURL}/template/export?typeName=${typeName}&id=${id}`
}
/* 检查状态码 */
tool.checkStatus = (status, message, isMessage, isTip) => {
  (isTip && status === 0) && tool.messageSuccess(message || '操作成功');
  (isMessage && status !== 0) && tool.messageError(message || '请求失败')
  if (status === -99999) return store.dispatch('FedLogOut')
}
/* 结束 */

/* 提示 */
tool.message = (message, sec = 3) => {
  return Message({
    message: message,
    duration: sec * 1000
  })
}
/* 正确提示 */
tool.messageSuccess = (message, sec = 3) => {
  return Message.success({
    message: message,
    duration: sec * 1000
  })
}
/* 错误提示 */
tool.messageError = (message, sec = 3) => {
  return Message.error({
    message: message,
    duration: sec * 1000
  })
}
/* 结束 */

/* dom操作 */
/* img错误处理 */
tool.imgError = () => {
  document.addEventListener('error', (e) => {
    const elem = e.target
    elem.tagName.toLowerCase() === 'img' && (elem.src = '/static/img/404.png')
  }, true)
}
/* 监听屏幕 */
tool.windowResize = (callback) => {
  window.addEventListener('resize', (e) => {
    callback(e)
  })
}
/* 结束 */

/* 获取类 */
/* 时间兼容性处理 */
tool.replaceTime = (curDate) => {
  return curDate.replace(/-/g, '/')
}
/* 时间转对象 */
tool.dateToOb = (curDate = new Date()) => {
  const year = curDate.getFullYear()
  const month = (curDate.getMonth() + 1) > 9 ? `${curDate.getMonth() + 1}` : `0${curDate.getMonth() + 1}`
  const day = curDate.getDate() > 9 ? curDate.getDate() : `0${curDate.getDate()}`
  const hour = curDate.getHours() > 9 ? curDate.getHours() : `0${curDate.getHours()}`
  const min = curDate.getMinutes() > 9 ? curDate.getMinutes() : `0${curDate.getMinutes()}`
  const sec = curDate.getSeconds() > 9 ? curDate.getSeconds() : `0${curDate.getSeconds()}`
  return { year, month, day, hour, min, sec }
}
/* 获取时间戳 */
tool.getTimestamp = (curDate = new Date()) => {
  typeof curDate === 'string' && (curDate = tool.replaceTime(curDate))
  return new Date(curDate).getTime()
}
/* 获取时间 */
tool.getAnyDate = (curDate = new Date(), dayInt = 0, isTime = false) => {
  typeof curDate === 'string' && (curDate = tool.replaceTime(curDate))
  curDate = new Date(curDate)
  curDate.setDate(curDate.getDate() + dayInt)
  const curDateObj = tool.dateToOb(curDate)
  if (isTime) return `${curDateObj.year}-${curDateObj.month}-${curDateObj.day} ${curDateObj.hour}:${curDateObj.min}:${curDateObj.sec}`
  else return `${curDateObj.year}-${curDateObj.month}-${curDateObj.day}`
}
/* 获取时间区间 */
tool.getDateRange = (end, start = new Date()) => {
  typeof end === 'string' && (end = tool.replaceTime(end))
  typeof start === 'string' && (start = tool.replaceTime(start))
  const data = new Date(end).getTime() - new Date(start).getTime()
  if (!data || data < 0 || isNaN(data)) return false
  const day = Math.floor(data / (24 * 3600 * 1000))
  const leave1 = data % (24 * 3600 * 1000) // 小时余数
  const hour = Math.floor(leave1 / (3600 * 1000)) > 9 ? Math.floor(leave1 / (3600 * 1000)) : `0${Math.floor(leave1 / (3600 * 1000))}`
  const leave2 = leave1 % (3600 * 1000) // 分钟余数
  const min = Math.floor(leave2 / (60 * 1000)) > 9 ? Math.floor(leave2 / (60 * 1000)) : `0${Math.floor(leave2 / (60 * 1000))}`
  // const leave3 = leave2 % (60 * 1000); // 秒余数
  // const seconds = Math.round(leave3 / 1000) > 9 ? Math.round(leave3 / 1000) : `0${Math.round(leave3 / 1000)}`
  return `${day}天${hour}:${min}`
}
/* 获取参数 */
tool.getQuery = (data, isOpen = true) => {
  if (!data) return false
  if (isOpen) return JSON.parse(decodeURIComponent(data))
  else return encodeURIComponent(JSON.stringify(data))
}
/* 获取参数str */
tool.getQueryString = (key) => {
  const url = new RegExp(`(^|&)${key}=([^&]*)(&|$)`)
  const newUrl = window.location.search.substr(1).match(url)
  if (newUrl != null) return unescape(newUrl[2])
  else return false
}
/* 获取换行str */
tool.getEnterString = (str) => {
  if (!str) return
  return str.replace(/\n|\r|\r\n/g, '<br/>')
}
/* 结束 */

/* 对象数组操作 */
/* 复制 */
tool.obCopy = (data) => {
  return JSON.parse(JSON.stringify(data))
}
/* 融合对象 */
tool.obAssign = (...data) => {
  return Object.assign({}, ...data)
}
/* 对象转数组 */
tool.obToArray = (obj) => {
  var arr = []
  Object.keys(obj).forEach((v) => {
    arr = arr.concat(obj[v])
  })
  return arr
}
/* 判断json */
tool.isJson = (data) => {
  try {
    const obj = JSON.parse(data)
    if (typeof obj === 'object' && obj) return true
    else return false
  } catch (err) {
    return false
  }
}
/* 存储 */
tool.localSet = (key, data) => {
  typeof data !== 'object' && localStorage.setItem(key, data)
  typeof data === 'object' && localStorage.setItem(key, JSON.stringify(data))
}
/* 移除 */
tool.localRem = (key) => {
  localStorage.removeItem(key)
}
/* 获取 */
tool.localGet = (key) => {
  const data = localStorage.getItem(key)
  if (tool.isJson(data)) return JSON.parse(data)
  else return data
}
/* 清空 */
tool.localClear = () => {
  localStorage.clear()
}
/* 删除参数 */
tool.deleteParams = (data, ...arg) => {
  arg.forEach((v) => {
    delete data[v]
  })
  return data
}
/* 参数转json */
tool.filterRes = (obj) => {
  Object.keys(obj).forEach((v) => {
    typeof obj[v] === 'object' && (obj[v] = JSON.stringify(obj[v]))
  })
  return obj
}
/* 数组去重 */
tool.reduceArray = (arr, key) => {
  var hash = {}
  return arr.reduce((item, next) => {
    hash[next[key]] ? '' : hash[next[key]] = true && item.push(next)
    return item
  }, [])
}
/* 结束 */

Vue.prototype.$tool = tool

export default tool
