'use strict';

// class : template
// object : instance of a class

// 1. Class declarations
class Person {
    // constructor
    constructor(name, age) {
        //fields
        this.name = name;
        this.age = age;
    }                                      // this 는 생성된 object
    // methods
    speak() {
        console.log(`${this.name}: hello!`);
    }
}
// Create object
const glen = new Person('glen', 31);
console.log(glen); // Person { name: 'glen', age: 31 }
console.log(glen.name); // glen
console.log(glen.age); // 31
glen.speak(); // glen: hello!

// 2. Getter & setters   예외적인 입력사항(실수같은거)를 막아주기 위해 사용(나이가 -1는 불가능하잖아)
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        this._age = value;
    }
}

const user1 = new User('Steve', 'job', -1);
console.log(user1.age);