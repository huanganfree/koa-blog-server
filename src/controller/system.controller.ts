import { Context, Next } from "koa";
import { serviceGetUserInfo } from "../service/system.service";
import { responseFail, responseSuccess } from "../utils/response";
import { UserRequestBody } from "./auth.controller";

export async function getUserInfo(ctx: Context, next: Next) {
    const user = (await serviceGetUserInfo(ctx)) as UserRequestBody
    if (user.id) {
        responseSuccess(ctx, user)
    } else {
        responseFail(ctx, '该用户不存在', 400)
    }
}