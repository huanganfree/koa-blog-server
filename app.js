require('dotenv').config({path: `.env.${process.env.NODE_ENV}`})
const Koa = require('koa');
const app = new Koa();

app.use(async (ctx, next) => {
  console.log('1=');
});


app.on('error', err => {
  console.error('server error', err)
});

app.listen(process.env.PORT);