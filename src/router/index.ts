import AuthRouter from './auth';
import Koa from 'koa';

export function mountRouters(app: Koa) {
    app.use(AuthRouter.routes()).use(AuthRouter.allowedMethods())
}