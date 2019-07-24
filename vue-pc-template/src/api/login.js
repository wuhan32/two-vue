import request from '@/utilsSe/request'

export function login(data) {
  return request.post('/user/login', data)
}

export function getInfo(params) {
  return request.get('/user/getUserInfo', { params })
}

export function logout(params) {
  return request.get('/user/loginOut', { params })
}

export function getUserRegister(data) {
  return request.post('/user/register', data)
}
