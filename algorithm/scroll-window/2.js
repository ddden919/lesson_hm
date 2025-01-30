// es6 set
const mySet = new Set();
mySet.add(1);
mySet.add("hello");
mySet.add(true);
console.log(mySet);
mySet.delete(1);
console.log(mySet);
console.log(mySet.has(1));
// mySet.clear();
// console.log(mySet);
for (let item of mySet) {
    console.log(item);
}
console.log(Array.from(mySet));
console.log([...mySet]); // 展开运算符
