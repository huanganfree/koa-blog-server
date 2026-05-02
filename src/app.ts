import Koa from 'koa';
import { bodyParser } from '@koa/bodyparser';
import jwt from 'koa-jwt';

import dotenv from 'dotenv';
dotenv.config({path: `.env.${process.env.NODE_ENV}`})

import('./model/index');
import('./db/index');
import { mountRouters } from './router/index';

console.log('当前环境==', process.env.DB_HOST)

const app = new Koa();

// 跳过登录
app.use(jwt({ secret: process.env.JWT_SECRET! }).unless({ path: [/^\/api\/auth\/login/] }));

app.use(bodyParser());

mountRouters(app)

app.on('error', err => {
  console.error('server error', err)
});

app.listen(process.env.PORT);