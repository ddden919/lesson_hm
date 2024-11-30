// constructor 
function Person(name, age) {
    console.log(this);
    this.name = name;
    this.age = age;
}

// 每个函数都有一个原型对象
Person.prototype = {
    eat:function() {
        console.log(`${this.name}在吃饭`)
    }

}

const cxk = new Person('cxk', 18);
cxk.eat()

const dyf = new Person('liu', 20);
dyf.eat()
