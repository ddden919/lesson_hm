const Koa = require('koa')
const app = new Koa()

const handler = async (ctx, next) => {
    try {
      await next()
  }catch (err) {
        ctx.response.status = err.statusCode || err.status || 500
        ctx.response.type = 'html' // 响应头
    // ctx.response.body = {
    //   message: err.message
        // }
        ctx.response.body = '<p>Something wrong, please contact administrator.</p>'
        ctx.emit('error', err, ctx) // vue 子向父 汇报
  }
}

const main = async(ctx, next )=> {
    ctx.throw(500, 'Page Not Found')
    await next()
}

app.on('error', function (err) {
    console.log('longging error', err.message)
    console.log(err)
})

app.use(handler) // 挂载 有人兜底
app.use(main)

app.listen(3000)