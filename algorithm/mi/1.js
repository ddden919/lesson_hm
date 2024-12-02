// 求x的n次方

// 方法一：循环
// 时间复杂度：O(n)
function pow(x, n) {
    let result = 1;
    for (let i = 0; i < n; i++) {
        result *= x;
    }
    return result;
}

// 方法二：分治
// 时间复杂度：O(logn)
function pow(x, n) {
    if (n === 0) return 1;
    if (n === 1) return x;
    if (n % 2 === 0) {
        let temp = pow(x, n / 2);
        return temp * temp;
    } else {
        let temp = pow(x, (n - 1) / 2);
        return temp * temp * x;
    }
}

// 方法三：位运算
// 时间复杂度：O(logn)
function pow(x, n) {
    let result = 1;
    while (n > 0) {
        if (n & 1) {
            result *= x;
        }
        x *= x;
        n >>= 1;
    }
    return result;
}

// 方法四：递归
// 时间复杂度：O(logn)
function pow(x, n) {
    // 退出条件
    if (n === 0) return 1;
    if (n === 1) return x;
    // 把问题分解为规模更小的子问题 自顶而下
    if (n % 2 === 0) {
        let temp = pow(x, n / 2);
        return temp * temp;
    } else {
        let temp = pow(x, (n - 1) / 2);
        return temp * temp * x;
    }
}