var a = 1;
console.log(typeof a, a.toFixed(2)); // number
var b = new Number(a);
console.log(typeof b); // object
console.log(b); // [Number: 1]
console.log(b.toFixed(2));