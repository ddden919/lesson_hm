// js 两张模块化方案 commonjs 和 es6 module
// mvc
const Koa = require('koa');
const app = new Koa();
const fs = require('fs'); // node 内置 文件模块

// 中间件 从上到下执行
const main = ctx => {
    // fs 读取文件
    // 返回给用户
    ctx.response.type = 'html'; // 响应头
    // 创建一个读取流 文件流 水龙头
    ctx.response.body = fs.createReadStream('./index.html');
    // index.html 返回给用户
    //   ctx.response.body = 'Hello World';
    // ctx.body = 'Hello World';
}

// 中间件 req middlewares res
app.use(main)

app.listen(3000);