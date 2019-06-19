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

var x = 2;
var y = "2";
if(x == y) {
    console.log("x and y are equal");
}else {
    console.log("x and y are not equal");

}