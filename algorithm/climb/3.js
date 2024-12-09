// 动态规划
// 适合用动态规划 最终值 最优解 dp
// 先递归 找到大问题,子问题的关系 -> 状态转移方程
// 最优子结构
const climbStairs = function (n) {
    const f = []; // f[i] 第i层的结果
    f[1] = 1;
    f[2] = 2;
    for (let i = 3; i <= n; i++) {
        f[i] = f[i - 1] + f[i - 2]
    }
    return f[n]
}