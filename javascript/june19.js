
// Write your functions here and refer this file in the html.

function onDocumentLoaded() {
    console.log("document loaded");
    setInterval(updateTime, 1000);
}

function updateTime() {
    var currentDate = new Date();
    var hour = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();
    var timeElement = document.getElementById("time");
    timeElement.innerText = `${hour}:${minutes}:${seconds}`;

}




window.onload = onDocumentLoaded;
// window.onload = changeHeader;        
// long add : adds two complicated numbers 
// parameters: n1: number , n2: number, fn: call back function
function longAdd(n1, n2, fn) {
    setTimeout(function (params) {
        const result =  n1 + n2;
        console.log(`the result is ${result}`);
        fn(result);
    }, 5000);

    console.log('inside long add');
}

function onLongAddCompleted(result) {
    console.log(`The result of the long add is ${result}`);
}

longAdd(2,3,onLongAddCompleted);



