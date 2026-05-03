/**
 * 控制器，校验参数，处理请求，调用服务层处理业务逻辑，返回响应
 */
// import { RouterContext } from "@koa/router";
import { Context, Next } from "koa";
import { responseFail, responseSuccess } from "../utils/response";
import { serviceLogin } from "../service/auth.service";
import JWT from 'jsonwebtoken';

export interface UserRequestBody {
  username?: string;
  password?: string;
  id?: any
}

export async function login(ctx: Context, next: Next) {
  const body = ctx.request.body as UserRequestBody
  if (body.username) {
    const user = await serviceLogin(body)
    if (user) {
      const dbPassword = user.getDataValue('password') as string
      if (dbPassword === body.password) {
        const token = JWT.sign(
          { userId: user.getDataValue('id'), username: body.username },
          process.env.JWT_SECRET as string,
          {expiresIn: '30s'}
        )
        responseSuccess(ctx, token, '登录成功')
        next()
      } else {
        responseFail(ctx, '密码错误', 400)
      }
    } else {
      responseFail(ctx, '用户不存在', 400)
    }
  } else {
    responseFail(ctx, '该用户不存在', 400)
  }
}

export function logout(ctx: Context, next: Next) {

}
