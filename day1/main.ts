
let myStr = 'some string value';

// myStr = 5;

const array: Array<stringNumBool> = [99, 'cat', 'dog', 'horse'];

// Array

array.push(5);
array.push(true);
// array.push({}); // invalid

const first: number = array[0] as number;

type stringNumBool = string | number | boolean;

class User implements IPerson  {


  constructor(public name: string, public age: number) {
  }

  sayHello(): string {
    console.log(`hello ${this.name}, you are ${ this.age } years old`);

    return this.name;
  }
}

// function User() {
// this.name = name;
// }

const user = new User('Jason', 99);

user.sayHello();


class Person extends User {

  constructor(name: string, age: number = 33) {
    super(name, age);
  }
}

const person1 = new Person('Person', 25);

interface IPerson {
  name: string;
  age: number;
}

const person: IPerson = {
  name: 'Json',
  age: 34,
};
person.age = 34;


function map<T, TResult>(array: T[], callback: (element: T, index: number) => TResult) {
  const results: TResult[] = [];

  for (let index = 0; index < array.length; index++) {
    results.push(callback(array[index], index));
  }

  return results;
}

const strArray = ['5', '3', '2', '10'];

const result = map(strArray, (element) => parseInt(element, 10));

map(result, (element) => element * element);
