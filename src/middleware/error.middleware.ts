import { Context, Next } from "koa";
import { responseFail } from "../utils/response";

export async function errorMiddleware(ctx: Context, next: Next) {
    try {
        return await next();
    } catch (err: any) {
        console.log('err==', JSON.stringify(err));
        if (err.status == 401) { // token错误
            ctx.status = 401;
            const errName = err.originalError?.name
            if (errName == 'TokenExpiredError') {
                responseFail(ctx, 'token过期', 401);
            } else if (errName == 'JsonWebTokenError') {
                responseFail(ctx, '认证失败，请提供有效的 Token', 400);
            } else {
                ctx.status = 500;
                responseFail(ctx, err.message, 500);
            }
        } else {// 其他错误
            responseFail(ctx, err.message, 500);
        }
        throw err; // 抛给app.on('error')
    }
}