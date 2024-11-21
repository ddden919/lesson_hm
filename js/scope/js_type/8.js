// 简单类型typeof 得不到null
let a = 1;
// typeof js 类型 运算符
// console.log(typeof a, typeof(a));
// The Good Parts 什么是好的，什么是坏的
console.log(typeof a, + "1");
console.log(typeof "hello");
console.log(typeof false);
console.log(typeof 12n);
console.log(typeof Symbol());
console.log(typeof undefined);
// null 是bug  function是函数类型 不是js的类型 
console.log(typeof null);
console.log(typeof function () { });
