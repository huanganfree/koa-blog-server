import { getUserInfo } from "../controller/system.controller";
import Router from '@koa/router';

const router = new Router({ prefix:'/api/system' });

router.get('/userInfo', getUserInfo)

export default router