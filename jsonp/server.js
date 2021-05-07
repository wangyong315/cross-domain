let express = require('express')

let app = express()

app.get('/say', (req, res) => {
  let { wd, cb } = req.query
  res.end(`${cb}("我不爱你")`)
})

app.listen(3000, () => {
  console.log('server is running at port 3000');
})