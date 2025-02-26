# 爬楼梯

- 递归
  - 自顶向下 顶端 n 走法
    递归公式
    f(n) = f(n-1) + f(n-2)
    退出条件
    f(1) = 1
    f(2) = 2

- 什么样的题目我们会想到递归？
  自顶而下，画图的时候，树状结构
  - 先把问题定位到终点
  - 站在终点，思考后退的各种可能性

              f(n)
            /     \
          f(n-1)  f(n-2)
          /  \
      f(n-2) f(n-3)
      /  \
    f(n-3) f(n-4)
    /  \

- 爬楼梯递归
  - 爆栈
  - 重复计算 用空间换时间
  - 记忆搜索

- 拿到算法题，常用的算法套一下(递归、分治、回溯、贪心、动态规划...)

- 动态规划
  - 得到达成某个目的的解法个数
  - 不关心具体的过程
  - 动态规划自底向上 解决问题 迭代
  - 动态规划比递归可读性更好，
    最难的算法，状态转移方程比较难确定，先用递归想一下

# 硬币问题

- 递归
