console.log(1 / +0); // Infinity 正无穷大
console.log(1 / -0); // -Infinity 负无穷大
console.log(1 / 0); // Infinity
console.log(1 / NaN); // NaN
console.log(1 / undefined); // NaN
console.log(1 / null); // NaN
console.log(1 / ''); // Infinity
console.log(1 / ' '); // 1
console.log(Object.is(+0, -0)); // false
console.log(Object.is(5, 5)); // true
console.log(Object.is(NaN, NaN)); // true
// 隐式类型转换
// NaN not a number -> 数字类型
console.log(2 * "a", 2 + "a") // NaN
console.log(typeof NaN) // number
console.log(parseInt("abc")) // NaN
console.log(parseInt("123abc")) // 123
console.log(parseInt("abc123")) // NaN
console.log(NaN === NaN) // false NaN 不代表确切值
// 不能通过 ===NaN 去判断，所以要isNaN
console.log(isNaN(NaN), isNaN(parseInt("abc"))) // true true
console.log(Number.isNaN(NaN)) // true

