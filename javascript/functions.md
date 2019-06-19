# functions continued ...

## callback function


 >  callback - Calls the function back after some work is done by the function.


```
function updateTime() {
    var currentDate = new Date();
    var hour = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();
    var timeElement = document.getElementById("time");
    timeElement.innerText = `${hour}:${minutes}:${seconds}`;

}

// calls updateTime() after 1000 millescond and for every 1000 millseconds
setInterval(updateTime, 1000); 

function onDocumentLoaded() {
    console.log("document loaded");
}


setTimeout()
setIntervel()

// calls the onDocumentLoaded after the window is loaded.
window.onload = onDocumentLoaded;

 ```

 > setTimeout, setInterval area global builtins function which accepts two arguments


## comparing things in JavaScript (== or ===)

> == means comparing only the value 

```
    var x = 2;
    var y = "2";
    if(x == y) {
        console.log("x and y are equal");
    }else {
        console.log("x and y are not equal");

    }
```
> === means comparing the value and the type



## Class



 functions are a block of group of statements that are executed 

```
function add(number1, number2) {
    return number1 + number2;
}
```

``` var x = 10 ```
> This is a uote
q

## How to guide

