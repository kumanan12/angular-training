function getHugeData() {
    // get data from http.
    var promise1 = new Promise(function (resolve, reject) {
        setTimeout(function () {
            reject('in valid data');
        }, 300);
    });
    return promise1;  
    
}


var hugeDataPromise = getHugeData();


try {
    hugeDataPromise.then(function (value) {
        console.log(value);
        // expected output: "foo"
    }, function (err) {
        console.log(err);

    });

} catch (error) {

}
console.log(hugeDataPromise);
// expected output: [object Promise]