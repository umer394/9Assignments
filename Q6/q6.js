//Q6: Write a program that calculates the Body Mass Index (BMI) and categorizes it.
function calculateBMI(weightInkg, heightInmeters) {
    let total = weightInkg / (heightInmeters ** 2);
    let BMI = total.toFixed(3);
    if (total < 18.5) {
        console.log(`Your BMI: ${BMI},You are underweight`);
    }
    else if (total <= 24.9) {
        console.log(`Your BMI: ${BMI},You are normal weight`);
    }
    else if (total < 29.9) {
        console.log(`Your BMI: ${BMI},You are overweight. You need excersice more.`);
    }
    else if (total < 34.9) {
        console.log(`Your BMI: ${BMI},You are obese`);
    }
    else if (total < 39.9) {
        console.log(`Your BMI: ${BMI},You are severely obese`);
    }
    else {
        console.log(`Your BMI: ${BMI},You are mobirbidly obese`);
    }
}
calculateBMI(58, 1.778);
export {};
