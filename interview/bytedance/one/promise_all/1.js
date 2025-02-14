const weather = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ temp: 20, conditions: 'Sunny with Clouds' });
  }, 2000);
});

const tweets = new Promise((resolve, reject) => {
  setTimeout(() => {
      // resolve('I like cake, BBQ is ready now!');
      reject('error');
  }, 5000);
})

// 简单 并发
// 多个异步任务，不在乎顺序，全部完成后再做其他事情
// js 单线程，怎么实现并发？
console.time("time")
Promise
    .all([weather, tweets])
    .then(responses => {
     console.log(responses);
    })
   .catch(err => {
     console.log(err); 
   })
console.timeEnd("time")