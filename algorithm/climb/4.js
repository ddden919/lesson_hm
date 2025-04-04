const coinChange = function (coins, amount) {
    const f = []; // 每个面额的最优值
    f[0] = 0; // 初始值
    for (let i = 1; i <= amount; i++){
        f[i] = Infinity; // 初始值
        for (let j = 0; j < coins.length; j++){
            if (i - coins[j] >= 0) {
                f[i] = Math.min(f[i], f[i - coins[j]] + 1)
            }
        } 
    }
     return f[amount] === Infinity? -1 : f[amount]
}