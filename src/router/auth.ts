import { getUserInfo, login, logout } from "../controller/auth.controller";
import Router from '@koa/router';

const router = new Router({ prefix:'/api/auth' });

router.post('/login', login)
router.post('/logout', logout)

export default router