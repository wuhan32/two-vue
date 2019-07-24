import axios from 'axios'
import tool from '@/utilsSe/tool'
import qs from 'qs'
import { Loading } from 'element-ui'

var isLoading, isSuccessTip, isErrorTip, loading
const request = axios.create({
  baseURL: `${tool.baseURL}`,
  timeout: 20000,
  headers: {
    // 'Content-Type': 'application/json;chartset=uft-8' // json
    'Content-Type': 'application/x-www-form-urlencoded' // form
  },
  withCredentials: false,
  qs: true,
  /* 自定义 */
  isLoading: true,
  isSuccessTip: false,
  isErrorTip: true
})

/* request拦截器 */
request.interceptors.request.use(
  config => {
    isLoading = config.isLoading
    isSuccessTip = config.isSuccessTip
    isErrorTip = config.isErrorTip
    config.isLoading && (loading = Loading.service({ text: '正在加载中', background: 'rgba(0, 0, 0, 0.3)' }))
    config.qs && (config.data = qs.stringify(config.data, { indices: false }))
    tool.localGet('token') && (config.headers['token'] = tool.localGet('token'))
    return config
  },
  err => {
    loading && loading.close()
    isErrorTip && tool.messageError('网络状态差')
    return Promise.reject(err)
  }
)

request.interceptors.response.use(
  res => {
    isLoading && loading.close()
    const { data } = res
    tool.checkStatus(data.status, data.message, isSuccessTip, isErrorTip)
    if (data.status === 0) return data
    else return Promise.reject(res)
  },
  err => {
    isLoading && loading.close()
    isErrorTip && tool.messageError('网络状态差')
    return Promise.reject(err)
  }
)

export default request
