// false | true
// Primitive -> Boolean
// Boolean当作构造函数来用
console.log(Boolean()) // 默认值为false
console.log(Boolean(false))
console.log(Boolean(true))
console.log(Boolean(undefined)) // false
console.log(Boolean(null)) // false
console.log(Boolean(0)) // false
console.log(Boolean('')) // false
console.log(Boolean(NaN), 'NaN') // false
console.log(Boolean(-0), '-0') // false
console.log(Boolean(+0), '+0') // false
