var str = 'abc345efgabcab'
// 一个一个字符去匹配的
str = str.replace(/[abc]/g, '')
console.log(str)
// 去掉字符中的a、b、c字符'345efg'