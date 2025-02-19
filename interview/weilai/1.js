const arr = [3, 1, 4, 1, 5, 9];
// sort 数组的排序api
// 函数来约定 a - b 升序 b - a 降序
// 冒泡来理解
// sort 会改变原数组
const sortedArr = arr.sort((a, b) => {
  return a - b;
})

console.log(sortedArr);
console.log(arr);

let arr2 = ['item1', 'item2', 'item3', 'item4'];

// 使用 splice 方法在索引 2 的位置插入新元素
arr2.splice(2, 0, 'newItem1', 'newItem2');

console.log(arr2);