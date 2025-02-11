const Koa = require('koa');
const route = require('koa-route'); 
const app = new Koa();

// 中间件本质是函数
// const main = ctx => {
//     if(ctx.path !== '/'){ 
//         ctx.response.type = 'html';
//         ctx.response.body = '<a href="/">Index Page</a>';
//     } else {
//         ctx.response.type = 'text'; // 设置响应类型为文本
//         ctx.response.body = 'Hello World';
//     }
// }

const main = ctx => {
    ctx.response.body = 'Hello World';
}

const about = ctx => {
    ctx.response.type = 'html';
    ctx.response.body = '<a href="/">Index Page</a>'; 
}

// app.use(main);
app.use(route.get('/', main));
app.use(route.get('/about', about));
app.listen(3000);

console.log("Server is listening on http://localhost:3000");