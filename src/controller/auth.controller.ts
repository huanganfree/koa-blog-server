import { RouterContext, RouterMiddleware } from "@koa/router";
import { Next } from "koa";
import { responseSuccess } from "../utils/response";

export function login(ctx: RouterContext, next: Next) {
    console.log('postUserLogin==ctx', ctx.request.body);

    if(ctx.request.body?.username == 'ha'){
        responseSuccess(ctx)
    }
}

export function logout(ctx: RouterContext, next: Next) {

}

export function getUserInfo(ctx: RouterContext, next: Next) {

}