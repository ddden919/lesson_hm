function Person(name, age) {
    this.name = name;
    this.age = age;

}
Person.prototype.name = '孔子';
Person.prototype.hometown = '山东';
let person1 = new Person('孟子', 18);
let person2 = new Person('庄子', 18);
console.log(person1 === person2);
console.log(person1.name, person1.hometown, person2.name);