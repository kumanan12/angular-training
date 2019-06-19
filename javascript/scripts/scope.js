// @ts-nocheck
// function add(number1, number2){
//     var sum = number1 + number2;
//     return sum;
// }

// var total = add(2,4);

// var total = 0;


function sumOfNumbers(numbers) {
    var sum = 0;
    for (let index = 0; index < numbers.length; index++) {
        const number = numbers[index];
        sum = sum + number;
    }
    total = sum;
    return sum;
}

// var result = sumOfNumbers([1,2,3]);
 sumOfNumbers([1,2,3]);
console.log(total);
