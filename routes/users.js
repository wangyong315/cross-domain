var express = require('express');
var models = require('../models');
var util = require('../util');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
// 登录
router.get('/login', function(req, res, next) {
  res.render('users/login', { title: 'Express' });
});
// 登录
router.post('/login', function(req, res, next) {
  var user = req.body
  req.body.password = util.md5(req.body.password)
  models.Users.findOne({username: req.body.username, password: req.body.password}, function (err, doc) {
    if (err) {
      console.log(err);
      res.redirect('back')
    } else {
      if (doc) { // 找到了对应用户，登录成功
        res.redirect('/')
      } else {
        res.redirect('back')
      }
    }
  })
});
// 注册
router.get('/reg', function(req, res, next) {
  res.render('users/reg', { title: 'Express' });
});

router.post('/reg', function(req, res, next) {
  var user = req.body
  if (user.password != user.repassword) {
    res.redirect('back')
  } else {
    req.body.password = util.md5(req.body.password)
    models.Users.create(req.body, function (err, doc) {
      if (err) {
        console.log(err);
      } else {
        console.log(doc);
        res.redirect('/users/login')
      }
    })
  }
});

router.get('/logout', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
