function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.sayName = function () {
    console.log(this.name);
}

function ObjectFactory() {
    // console.log(arguments, arguments.length);
    const obj = new Object(); // 空对象创建
    const Constructor = [].shift.call(arguments); // 取出第一个参数，构造函数
    // 为什么不用arguments[0]? arguments是类数组 没有数组的方法(shift,pop,push等) 无法取出第一个参数
    // console.log(Constructor);
    obj.__proto__ = Constructor.prototype; // 手动__proto__ 指向 Person.prototype
    Constructor.apply(obj, arguments); // 手动绑定this 指向新对象，给新对象添加属性
    // console.log(obj);
    return obj;
}

let awei = ObjectFactory(Person, 'awei', 20);
console.log(awei.name);
awei.sayName();