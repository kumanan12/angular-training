// Write your functions here and refer this file in the html.
function calculateBMI(){
    var height = document.getElementById("height").value;
    var weight = document.getElementById("weight").value;
    var bmi = weight/(height*height);
    document.getElementById("results").innerHTML = bmi;
    if(bmi<25){
        document.getElementById("results1").innerHTML = "You are normal"; 
    } else if(bmi>25 && bmi<30){
        document.getElementById("results1").innerHTML = "you are overweight"; 
    } else {
        document.getElementById("results1").innerHTML = "you are obese";
    }
}



