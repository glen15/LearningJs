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
        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User('Steve', 'job', -1);
console.log(user1.age);

// 3. Fields (public, private) 최신기술!
class Experiment {
    publicField = 2;
    #privateField = 0; // 외부에서 접근 불가능
}
const experiment = new Experiment();
console.log(experiment.publicField); // 2
console.log(experiment.privateField); // undefined

// 4. Static properties and methods // object와 상관없이 class 자체에 연결해두는 것들
class Article {
    static publisher = 'Glen';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }
    
    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
console.log(article1.articleNumber); // 1
console.log(Article.publisher); // Glen
Article.printPublisher(); // Glen
console.log(Article); // [class Article] { publisher: 'Glen' }
console.log(article1); // Article { articleNumber: 1 }

// 5. Inheritance // 상속 : 하나의 class를 다른 class로 확장시키는 방법
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    
    draw() {
        console.log(`drawing ${this.color} color!`);
    }

    getArea() {
        return this.width * this.height;
    }
}   

class Rectangle extends Shape {}
class Triangle extends Shape {
    draw() {
        super.draw(); // 상속해준 부모의 darw 그대로 가져오기
        console.log('triangle');
    }
    getArea() { // 바꾸고 싶은애만 따로 over writing 가능!
        return (this.width * this.height) / 2;
    }
}
const rectangle = new Rectangle(20, 20, 'blue');
const triangle = new Triangle(20, 20, 'red');

console.log(rectangle.draw());
console.log(triangle.draw());

console.log(rectangle.getArea()); // 400
console.log(triangle.getArea()); // 200