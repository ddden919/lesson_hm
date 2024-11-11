//代码的执行次数  T(n)

function traverse(arr) {
    var len = arr.length;  //1
    for (var i = 0; i < len; i++) {  //1 + n + 1 + n
        console.log(arr[i]);   // n
    }
}
// T(n) = 3n + 2 = O(n)
traverse();