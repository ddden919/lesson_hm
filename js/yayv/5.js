const xc = {
    name: 'xvchao',
    playBasketball: function () {
        console.log('打篮球');
    }
}

function Person(name, age) {
    console.log(this);
    this.name = name;
    this.age = age;
}

Person.prototype = xc;


// 原型在哪

const wu = new Person('wu', 18);
wu.playBasketball();
console.log(wu.__proto__ === xc);