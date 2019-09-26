var mongoose = require('mongoose');

//连接数据库 数据库名(usersdb) 没有会自动创建
mongoose.connect('mongodb://localhost/usersdb')

var Schema = mongoose.Schema;

// 声明一个数据集 对象
var loginSchema = new Schema({
    username: {
        type: String,
        unique: true
    },
    password: {
        type: String
    },
    age: Number,
    address: String,
    createAt: {
        type: Date,
        default : Date.now()
    }
});
// 将数据模型暴露出去
module.exports = mongoose.model('user_loginregister', loginSchema);