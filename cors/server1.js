let express = require('express')

let app = express()

let whiteList = ['http://localhost:3000']

app.use(function (req, res, next) {
  let origin = req.headers.origin
  if (whiteList.includes(origin)) {
    // 设置那个源可以访问我
    res.setHeader('Access-Control-Allow-Origin', origin)
  }
  next()
})

app.use(express.static(__dirname))

app.get('/getData', (req, res) => {
  console.log('req', req.headers);
  res.end('我不爱你')
})

app.listen(4000, () => {
  console.log('server is running at port 4000');
})