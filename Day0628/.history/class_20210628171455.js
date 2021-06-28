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
    }
    // methods
    speak() {
        console.log(`${this.name}: hello!`);
    }
}

const glen = new Person('glen', 31);
console.log(glen); //Person { name: 'glen', age: 31 }
console.log(glen.name);
console.log(glen.age);
