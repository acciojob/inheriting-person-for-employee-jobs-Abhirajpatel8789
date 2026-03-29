function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
};
window.Person = Person;

function Employee(name, age, jobTitle) {
    Person.call(this, name, age); // ✅ Fix: Person.call, not Employee.call
    this.jobTitle = jobTitle;
}
Employee.prototype = Object.create(Person.prototype); // ✅ Add: inherit Person's methods
Employee.prototype.constructor = Employee;            // ✅ Add: fix constructor reference

Employee.prototype.jobGreet = function() {
     console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
};

// Do not change code below this line
window.Employee = Employee;

const person = new Person("Alice", 25);
person.greet();
const employee = new Employee("Bob", 30, "Manager");
employee.jobGreet();
