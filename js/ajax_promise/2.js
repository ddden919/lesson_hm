// 实例化时，传递函数，里面装耗时性任务
const p = new Promise((resolve, reject) => { // executor 执行器
    console.log('3333') // 同步任务
    setTimeout(() => { // 异步任务 event loop
        console.log('222')
        // resolve(data)
        reject()
    }, 1000)
})
// 想要控制异步任务的执行顺序的话 用promise
console.log(p.__proto__, p)
p.then(() => { // 等到executor里面的异步任务执行完了，才会执行then里面的函数
    console.log('111')
    console.log(p)
    // console.log(data)
})  
p.catch(() => {
    console.log('error')
})