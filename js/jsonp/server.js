// http 服务启动
// 引入内置的http模块
// commonjs node早期 es6模块化规范
const http = require('http'); // 引入http模块
// 启动http服务
// http协议是基于请求/响应的简单协议
const users = [
    {
        id: 1,
        name: '张三'
    },
    {
        id: 2,
        name: '李四'
    },
    {
        id: 3,
        name: '王五'
    }
]

const server = http.createServer((req, res) => {
    // 异步 高并发
    // 当请求来到服务器后，该函数会被调用(回调函数执行)
    // req 请求对象解析
    // 拿到资源
    // res 响应请求
    // http 结束
    res.end("callback(" + JSON.stringify(users)+ ")" ); // 结束响应
})
server.listen(3000, () => {
    console.log('server is running at port 3000');
})
