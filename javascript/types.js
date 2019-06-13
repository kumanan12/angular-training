// alert("hello world");
var age = 10;
let price = 19.99;
var customer = "Kumanan"; 
var singleQuoteCustomer = 'Bill';
var multiLineAddress = `This value uses backtick character
which allows multi line 
vaues`;
console.log(multiLineAddress);
let isLoggedIn = false;
let avatar = null;
var address;
let person = {
    firstName: "Kumanan",
    lastName: "Murugesan"
};

console.log(`
age: ${typeof age}
price: ${typeof price}
isLoggedIn: ${typeof isLoggedIn}
customer: ${typeof customer}
avatar: ${typeof avatar}  
adress: ${typeof address}
person: ${typeof person}

`);

// avatar: ${typeof avatar}  - typeof  null returns object which is a bug.
// use (avatar == null) to check for null
console.log("just now");
