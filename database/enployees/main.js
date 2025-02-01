// commonjs 早期模块化方案
// js 早期没有模块化方案
// 函数、类、对象 都是模块，早期js业务简单，都是添加一些页面交互等
// 幻灯片 js 就干这件事
// 越来越复杂，需要模块化，文件分离，标准化方案  
// require 是保留字，commonjs 早期模块化方案
const sqlite3 = require('sqlite3');
// 后端逻辑和数据库逻辑是分开的
// db:数据库连接对象 数据库操作句柄
// './mydatabase.db':路径
// I/O 操作
const db = new sqlite3.Database('no',
    async (err) => {
        // err 是否有错误 容错是关键
        // node js 快 ms 级别
        // 数据库 在别的服务器/硬盘上 慢 s 级别
        // await
        if (err) {
            console.error('数据库连接失败', err);
            return;
        }
        console.log('数据库连接成功');
        // 风筝 数据库操作句柄
        await db.run(`
            create table if not exists employees (
                id integer primary key,
                name text not null,
                department text not null,
                salary integer not null
            )
            `)


    });