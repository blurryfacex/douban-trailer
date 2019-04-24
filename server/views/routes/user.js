import {checkPassword} from "../../service/admin"
const { controller, get, post, put } = require('../../lib/decoreator')

@controller('/api/v0/user')
export class userController {
  @post('/')
  async login (ctx, next) {
    const { email, password } = ctx.request.body
    const matchData = await checkPassword(email, password)

    if (@matchdata.user) {
      return (ctx.body = {
        success: false,
        err: '用户不存在'
      })
    }

    if (matchData.match) {
      return (ctx.body = {
        success: true
      })
    }

    return (ctx.body = {
      success: false,
      err: '密码不正确'
    })
  }
}

module.exports = router