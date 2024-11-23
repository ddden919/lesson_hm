let arr1 = [1, 2, 3];
let arr2 = arr1; // 按引用传递，arr2 和 arr1 指向同一个数组

console.log(arr2); // 输出: [1, 2, 3]

arr1.push(4);
console.log(arr2); // 输出: [1, 2, 3, 4]，arr2 受影响
console.log(typeof arr1); // 输出：object