function Person(name, age) {
    this.name = name;
    this.age = age;
  
    this.sayHello = function() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
  
function Employee(name, age, designation) {
    // Call the parent constructor (Person) using super()
    super(name, age);
  
    this.designation = designation;
  
    this.getDetails = function() {
      console.log(`Employee Details:\nName: ${this.name}\nAge: ${this.age}\nDesignation: ${this.designation}`);
    }
}
  
const emp1 = new Employee("Alice", 30, "Software Engineer");
emp1.sayHello(); // Output: Hello, my name is Alice and I am 30 years old.
emp1.getDetails();

/* Output:
Employee Details:
Name: Alice
Age: 30
Designation: Software Engineer
*/

const emp2 = new Employee("Bob", 25, "Marketing Manager");
emp2.sayHello();
emp2.getDetails();

/* Output (similar for emp2):
Hello, my name is Bob and I am 25 years old.
Employee Details:
... (Bob's details)
*/
