let Koa = require('koa')

let app = new Koa()

app.use((ctx, next) => {
  ctx.body = 'hello wangyong'
})

app.listen(3000)