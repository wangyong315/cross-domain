var mongoose = require('mongoose')
var config = require('../config')

mongoose.connect(config.dbUrl, function (err, result) {
  if (err) {
    console.log(err);
  } else {
    console.log('数据库连接成功');
  }
})

exports.Users = mongoose.model('users', new mongoose.Schema({
  username: String,
  password: String,
  email: String
}))

