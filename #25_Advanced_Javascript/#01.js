function Person(name, age) {
    //'this' to refer to the new object being created
    this.name = name;
    this.age = age;
  
    //the sayHello method
    this.sayHello = function() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

const person1 = new Person("Alice", 30);
person1.sayHello(); // Output: Hello, my name is Alice and I am 30 years old.

const person2 = new Person("Bob", 25);
person2.sayHello(); // Output: Hello, my name is Bob and I am 25 years old.
