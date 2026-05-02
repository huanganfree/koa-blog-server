/**
 * 处理业务逻辑，调用数据库
 */
import { UserRequestBody } from "../controller/auth.controller";
import { User } from "../model";

export async function serviceLogin(params: UserRequestBody) {
    const { username } = params
    const user = await User.findOne({ where: { username } })
    return user
}