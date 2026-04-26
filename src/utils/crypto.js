
// 对用户密码加密
const crypto = require('crypto');

const secret = 'news_admin_2026_secret';

function cryptoPwd(pwd) {
    const hmac = crypto.createHmac('sha256', secret);
    hmac.update(pwd);
    return hmac.digest('hex')
}


module.exports = {
    cryptoPwd
}