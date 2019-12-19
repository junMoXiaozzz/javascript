const Koa = require('koa');
const path = require('path')
const session = require('koa-session-minimal');
const MysqlStore = require('koa-mysql-session');
const config = require('./config/default.js');
// const koaStatic = require('koa-static')
const staticCache = require('koa-static-cache')

const app = new Koa()
// session存储配置
const sessionMysqlConfig = {
    user: config.database.USERNAME,
    password: config.database.PASSWORD,
    database: config.database.DATABASE,
    host: config.database.HOST,
}
// 配置session中间件
app.use(session({
    key: 'USER_SID',
    store: new MysqlStore(sessionMysqlConfig)
}))
// 缓存
app.use(staticCache(path.join(__dirname, './static'), {
    dynamic: true
}, {
    maxAge: 365 * 24 * 60 * 60
}))


app.use(require('./routers/register.js').routes())
app.listen(3000)
console.log('server 3000 is start')