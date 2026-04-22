const Koa = require('koa');
const app = new Koa();

// logger

app.use(async (ctx, next) => {
    console.log('1=');
    
  await next();
  console.log('2=');
});

// x-response-time

app.use(async (ctx, next) => {
  await next();
  console.log('3=');
});

// response

app.use(async ctx => {
  ctx.body = '<h1>Hello World</h1>';
});

app.listen(8000);