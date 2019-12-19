const router = require('koa-router')()
const api = require('../sql/index.js')
const moment = require('moment');
const fs = require('fs')
// 注册页面
router.post('/register', async (ctx, next) => {
    console.log(ctx.request.body)
    // let {name, password,avator } = ctx.request.body
    return
    let base64Data = avator.replace(/^data:image\/\w+;base64,/, ""),
        dataBuffer = new Buffer(base64Data, 'base64'),
        getName = Number(Math.random().toString().substr(3)).toString(36) + Date.now(),
        upload = await new Promise((reslove, reject) => {
            fs.writeFile('./static/images/' + getName + '.png', dataBuffer, err => {
                if (err) {
                    throw err;
                    reject(false)
                }
                reslove(true)
                console.log('头像上传成功')
            })
        })
    if (upload) {
        await api.insertData([name, password, getName + '.png', moment().format('YYYY-MM-DD HH:mm:ss')])
            .then(res => {
                console.log('注册成功', res)
                //注册成功
                ctx.body = {
                    code: 200,
                    message: '注册成功'
                };
            })
    } else {
        console.log('头像上传失败')
        ctx.body = {
            code: 500,
            message: '头像上传失败'
        }
    }
})

module.exports = router