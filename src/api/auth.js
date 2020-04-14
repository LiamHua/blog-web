import request from '@/utils/request'

export function login(loginForm) {
  return request({
    url: 'auth/login',
    method: 'post',
    data: loginForm
  })
}

export function verifyToken(token) {
  return request({
    url: 'auth/verify',
    method: 'post',
    data: { token }
  })
}