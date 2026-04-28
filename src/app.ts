import Koa from 'koa';
import { bodyParser } from '@koa/bodyparser';

import dotenv from 'dotenv';
dotenv.config({path: `.env.${process.env.NODE_ENV}`})

import('./model/index'); // proper reason
import('./db/index');
import { mountRouters } from './router/index';

console.log('当前环境==', process.env.DB_HOST)

const app = new Koa();
app.use(bodyParser());
mountRouters(app)

app.on('error', err => {
  console.error('server error', err)
});

app.listen(process.env.PORT);