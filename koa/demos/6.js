const path = require('path'); // 内置模块
const Koa = require('koa');
const app = new Koa();
const server = require('koa-static') // 周边生态 静态资源中间件

// console.log(__dirname); // 当前文件所在的目录 绝对路径
// console.log(path.join(__dirname, 'static')); // 拼接路径
// 路径对象
const main = server(path.join(__dirname, 'static')); // 静态资源中间件


app.use(main)
app.listen(3000);