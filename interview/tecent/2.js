// 编写二叉树的前序遍历
// 递归
function preOrder(root) {
    if (!root) return
    console.log(root.val)
    preOrder(root.left)
    preOrder(root.right)
}

// 迭代
function preOrderTraversal(root) {
    if (!root) return []
    const stact = [root]
    const result = []
    while (start.length) {
        const node = stact.pop()
        node && result.push(node.val)
        node.right && stact.push(node.right)
        node.left && stact.push(node.left)
    }
    return result
}