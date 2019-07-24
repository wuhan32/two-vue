import request from '@/utilsSe/request'

/* 合作方管理 */
export function getPartnerList(params) {
  return request.get('/partner/list', { params })
}

export function getProjectProAdd(data) {
  return request.post('/project/add-accounting-product', data, {
    headers: { 'content-type': 'application/json' },
    isLoading: true,
    isSuccessTIp: true,
    isErrorTip: true
  })
}
