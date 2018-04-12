let myStr = 'some string value';
// myStr = 5;
const array = [99, 'cat', 'dog', 'horse'];
// Array
array.push(5);
array.push(true);
// array.push({}); // invalid
const first = array[0];
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHello() {
        console.log(`hello ${this.name}, you are ${this.age} years old`);
        return this.name;
    }
}
// function User() {
// this.name = name;
// }
const user = new User('Jason', 99);
user.sayHello();
class Person extends User {
    constructor(name, age = 33) {
        super(name, age);
    }
}
const person1 = new Person('Person', 25);
const person = {
    name: 'Json',
    age: 34,
};
person.age = 34;
function map(array, callback) {
    const results = [];
    for (let index = 0; index < array.length; index++) {
        results.push(callback(array[index], index));
    }
    return results;
}
const strArray = ['5', '3', '2', '10'];
const result = map(strArray, (element) => parseInt(element, 10));
