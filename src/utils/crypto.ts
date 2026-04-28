// 对用户密码加密
import crypto from 'crypto'

const secret = 'news_admin_2026_secret';

function cryptoPwd(pwd: string) {
    const hmac = crypto.createHmac('sha256', secret);
    hmac.update(pwd);
    return hmac.digest('hex')
}


module.exports = {
    cryptoPwd
}