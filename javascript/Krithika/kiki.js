function calculateBMI(weight, height) {
    let bmi = weight / (height *height) ;
   console.log(`bmi is ${bmi}`);
    return bmi;
}
calculateBMI(58,1.50);