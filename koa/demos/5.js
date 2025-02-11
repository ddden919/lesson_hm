const Koa = require('koa');
const app = new Koa();
// 使用 fs.promises 访问 promise-based 文件系统方法
const fs = require('fs');
const fsPromises = fs.promises; // fs 异步 promisify

const main = async ctx => {
    ctx.response.type = 'html';
    // console.log(fs.readFile('./index.html', () => {}) ,fsPromises.readFile('./index.html'))
    ctx.response.body = await fsPromises.readFile('./index.html');
}

app.use(main);
app.listen(3000);