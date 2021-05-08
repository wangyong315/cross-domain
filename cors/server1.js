let express = require('express')

let app = express()

let whiteList = ['http://localhost:3000']

app.use(function (req, res, next) {
  let origin = req.headers.origin
  if (whiteList.includes(origin)) {
    // 设置那个源可以访问我
    res.setHeader('Access-Control-Allow-Origin', origin)
    // res.setHeader('Access-Control-Allow-Headers', 'name')
    res.setHeader('Access-Control-Allow-Methods', 'PUT')
    if(req.method === 'OPTIONS'){
      console.log('OPTIONS', req.method);
      res.end()
    }
  }
  next()
})

app.use(express.static(__dirname))

app.put('/getData', (req, res) => {
  console.log('req', req.headers);
  res.end('我不爱你')
})


app.get('/getData', (req, res) => {
  console.log('req', req.headers);
  res.end('我不爱你')
})

app.listen(4000, () => {
  console.log('server is running at port 4000');
})