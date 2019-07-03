function showPrimes(n) {
  for (let i = 2; i < n; i++) {

    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }

    console.log(); // a prime
  }
}

function printPrime(numbers) {
  var primeNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    console.log(element);

  }
}

printPrime([2,6,8,67,33,22,89]);