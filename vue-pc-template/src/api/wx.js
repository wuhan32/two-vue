import request from '@/utilsSe/request'

const appFlag = '04'

export function getWxCodeUrl() {
  const params = { appFlag }
  return request.get(`/api-wx-qyh/wx-user/code-url`, { params })
}

export function getWxAuth(params) {
  params.appFlag = appFlag
  return request.get(`/api-wx-qyh/wx-user/auth`, { params })
}

export function getWxConfig() {
  const url = location.href.split('#')[0]
  const params = { appFlag, url }
  return request.get(`/api-wx-qyh/wx-user/info-config`, { params })
}
