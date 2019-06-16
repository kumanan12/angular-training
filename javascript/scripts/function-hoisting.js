// var radius = 5;
// var area = circleArea(radius);
// console.log(area);

// function circleArea(r) {
//     var a = Math.PI * r * r;
//     return a;
// }

// var car = {
//     make : "Nissan",
//     model : 'Altima',
//     year : 1999,
//     isJunk: false,
//     isStarted: false,
//     start: function() {
//         this.isStarted = true;
//         console.log("car started");
//     },
//     stop: function () {
//         this.isStarted = false;
//         console.log("car is stopped");
//     },
//     owner: {
//         name: 'Kumanan'
//     }
// };

// var car1 = Object.create(null);
// car1.owner = Object.create(null);
// car1.owner.name = "Kumanan";

function Car(make, model,year,isJunk,isStarted) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.isStarted = isStarted;
    this.isJunk = isJunk;
    
}

Car.prototype.start = function() {
    this.isStarted = true;
    console.log("car is started");
};

Car.prototype.stop = function() {
    this.isStarted = false;
    console.log("car is stopped");
};

var car1 = new Car('Honda','civic',2000, false,  false);
var car2 = new Car('Toyota','carolla',2019, false,  false);
console.log(car1.start());


function validate() {
    var name = document.getElementById("name");
    if( name.innerText === '') {
        alert('name is required');
    }

}
// console.log(car);