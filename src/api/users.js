import request from '@/utils/request'

/**
 * 登录
 */
export async function getUserInfo () {
  const res = await request.get('/api/user/info')
  if (res.code === 0) {
    return res.data
  }
  return Promise.reject(new Error(res.message))
}
