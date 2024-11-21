let obj1 = {
    name: 'xiaoming',
    job: 'teacher',
    company: 'baidu'
}
obj1.hometown = 'beijing';

let a = 1;
// 拷贝
let b = a;
b = 3;
// 引用
let obj2 = obj1;

obj2.name = 'xiaohong';

console.log(obj1, obj2);
console.log(a, b);
