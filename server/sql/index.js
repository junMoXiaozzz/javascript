let query = require('../config/mysql.js')
// 注册用户
 let insertData = function (value) {
    let _sql = "insert into users set name=?,pass=?,avator=?,moment=?;"
    return query(_sql, value)
}
module.exports = {
    insertData
}