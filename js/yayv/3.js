function Person(name, age) {
    console.log(this);
    this.name = name;
    this.age = age;
}

Person('wen', 18); // 构造函数没有new 调用，普通函数方式运行
const dys = new Person('chao', 20);// 构造函数方式运行
const dyf = new Person('liu', 20);