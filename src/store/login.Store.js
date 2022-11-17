import { makeAutoObservable } from 'mobx'
import { http } from '@/utils'

class LoginStore {
  token = ''
  constructor() {
    makeAutoObservable()
  }
  // 登录
  login = async ({ mobile, code }) => {
    const res = await http.post('', {
      mobile, code
    })
    this.token = res.data.token
  }
}
export default LoginStore