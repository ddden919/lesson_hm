const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

const redirect = ctx => {
    // 302 重定向
    ctx.response.redirect('/');
}

const main = ctx => {
    ctx.status = 404;
    ctx.body = 'Page Not Found';
}

router.get('/', main);
router.get('/redirect', redirect);

app.use(router.routes())
   .use(router.allowedMethods());

// 错误处理中间件（可选）
app.use(async (ctx, next) => {
    try {
        await next();
    } catch (err) {
        ctx.status = err.status || 500;
        ctx.body = err.message;
    }
});

app.listen(3000);