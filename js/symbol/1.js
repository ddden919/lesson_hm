const classMates = {
    name: 'Alice',
    [Symbol('math')]: 95,
    [Symbol('science')]: 88
};

// 使用 for...in 遍历字符串类型的键
for (const key in classMates) {
    if (classMates.hasOwnProperty(key)) { // 确保只遍历自己的属性
        console.log(key, classMates[key]);
    }
}

// 获取所有 Symbol 类型的键
const syms = Object.getOwnPropertySymbols(classMates);
console.log(syms); // 输出: [Symbol(math), Symbol(science)]

// 使用 map 方法获取 Symbol 键对应的值
const data = syms.map(sym => classMates[sym]);
console.log(data); // 输出: [95, 88]

// 获取所有自身的属性描述符
console.log(Object.getOwnPropertyDescriptors(classMates));

// 获取特定属性的描述符
console.log(Object.getOwnPropertyDescriptor(classMates, Symbol('math')));