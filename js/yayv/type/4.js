// 基本数据类型间的显式类型转换
// Number
console.log(Number());  // 0
console.log(Number(undefined));  // NaN 因为undefined在数值上下文中没有转成一个特定数值的含义
console.log(Number(null));  // 0
console.log(Number(true));  // 1
console.log(Number(false));  // 0 
console.log(Number('123'));
console.log(Number('-123'));
console.log(Number('0x11'));
console.log(Number(""), Number(" "));  // 0 0
console.log(Number("100a"));  // NaN

