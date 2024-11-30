// js 造人
// 对象字面量
let cao = {
    name:'小超'
}

let fan = {
    name: '小范',
    age:17
}

// class es6
class Person {
    constructor(name, age){
        this.name = name
        this.age = age
    }
    eat() {
        console.log(this.name + '在吃饭')
    }
    
}

let wei = new Person('小王',18)
let chao = new Person('超',18)


