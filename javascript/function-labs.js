// function declaration.

function helloWorld() {
    alert("Hello JS Devs");
}

//anonymous function expression

var x= function() {
    alert("Hello JS Devs");
};

// named function expression

var y= function hello() {
    alert("Hello JS Devs");
};

// functions within objects
// var greeting = {};
var greeting = Object.create(null);
greeting.helloWorld = function() {
    alert("hello devs. I am being called from an object");
};

// function Person(firstname, lastName) {
//     this.firstname = firstname;
//     this.lastName = lastName;
// }
// Person.prototype.getName = function() {
//     return `${this.firstname} ${this.lastName}`;
// }

// var p1 =new Person("Kumanan", "Murugesan");
// console.log(p1.getName());