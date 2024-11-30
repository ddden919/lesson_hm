// 编写一个函数 [1,2,3,4,5,6,7,8,9,0]
// return "(123) 456-7890" 电话号码

var getPhoneNum = function (arr) {
   // return `(${arr.slice(0, 3).join('')}) ${arr.slice(3, 6).join('')}-${arr.slice(6, 10).join('')}`
   // return "(" + arr[0] + arr[1] + arr[2] + ")" + " " + arr[3] + arr[4] + arr[5] + "-" + arr[6] + arr[7] + arr[8] + arr[9]
    // es6 模版字符串 提升代码的可读性
    return `(${arr[0]}${arr[1]}${arr[2]}) ${arr[3]}${arr[4]}${arr[5]}-${arr[6]}${arr[7]}${arr[8]}${arr[9]}`
}

console.log(getPhoneNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))