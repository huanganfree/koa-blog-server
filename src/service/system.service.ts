/**
 * 处理业务逻辑，调用数据库
 */
import { Context } from "koa";
import { User } from "../model";

export async function serviceGetUserInfo(ctx: Context) {
    const { userId } = ctx.state.user
    const user = await User.findOne({ where: { id: userId } })
    return user
}