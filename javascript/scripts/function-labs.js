// function declaration.

function helloWorld() {
    console.log("Hello world JS Devs");
    return undefined;
}

// helloWorld();

//anonymous function expression

var x= function() {
    console.log("Hello JS Devs");
};

x();

// named function expression

var y= function hello() {
    // console.log("Hello JS Devs");
    console.log("Hello JS Devs named func");

};

y();



// functions within objects
var greeting = {};
var person ={};
person.firstName = "Kumanan";
person.lastName = "Murugesan";
console.log(person);
// var greeting = Object.create(null);
greeting.helloWorld = function() {
    console.log("hello devs. I am being called from an object");
};

greeting.helloWorld();

function add(number1, number2) {
    return number1 + number2;
}

// function Person(firstname, lastName) {
//     this.firstname = firstname;
//     this.lastName = lastName;
// }
// Person.prototype.getName = function() {
//     return `${this.firstname} ${this.lastName}`;
// }

// var p1 =new Person("Kumanan", "Murugesan");
// console.log(p1.getName());

// npm i lite-server  -g

function calculateBMI(weight, height) {
    let bmi = weight / (height *height) ;
   console.log(`bmi is ${bmi}`);
    return bmi;
}

// const bmi1 = calculateBMI(80, 1.70);
// calculateBMI(60, 1.5);

// console.log(bmi1);
