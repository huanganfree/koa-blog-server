import Koa from 'koa';
import { bodyParser } from '@koa/bodyparser';
import jwt from 'koa-jwt';

import dotenv from 'dotenv';
dotenv.config({ path: `.env.${process.env.NODE_ENV}` })

import('./model/index');
import('./db/index');
import { mountRouters } from './router/index';
import { responseFail } from './utils/response';

console.log('当前环境==', process.env.DB_HOST)

const app = new Koa();

// Custom 401 handling if you don't want to expose koa-jwt errors to users
app.use(async function (ctx, next) {
  try {
    return await next();
  } catch (err: any) {
    console.log('err===', err);
    if (401 == err.status) {
      ctx.status = 401;
      const errName = err.originalError.name
      if (errName == 'TokenExpiredError') {
        responseFail(ctx, 'token过期', 401);
      } else if (errName == 'JsonWebTokenError') {
        responseFail(ctx, '认证失败，请提供有效的 Token', 401);
      }
    } else {
      throw err;
    }
  }
});

// 跳过登录
app.use(jwt({ secret: process.env.JWT_SECRET! }).unless({ path: [/^\/api\/auth\/login$/] }));

app.use(bodyParser());

mountRouters(app)

app.on('error', err => {
  console.error('server error', err)
});

app.listen(process.env.PORT);