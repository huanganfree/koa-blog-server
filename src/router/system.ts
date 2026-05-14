import Router from '@koa/router';
import { addRole, deleteRoles, editRoles, getRoles, getUserInfo } from "../controller/system.controller";

const router = new Router({ prefix:'/api/system' });

router.get('/userInfo', getUserInfo)  

// 角色
router.post('/role/create', addRole)
router.get('/roles/search', getRoles)
router.delete('/roles/delete', deleteRoles)
router.put('/role/edit', editRoles)

export default router