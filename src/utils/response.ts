import { RouterContext } from "@koa/router";
import { Context } from "koa";

export function responseSuccess(ctx: RouterContext | Context, data: any | null = null, msg: string = '操作成功') {
    ctx.body = {
        code: 200,
        data,
        msg
    };
};

export function responseFail(ctx: RouterContext | Context, msg: string = '操作失败', code: number = 500) {
    ctx.body = {
        code,
        data: null,
        msg
    };
};