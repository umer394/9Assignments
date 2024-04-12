// Create a Program to check a student's grade and percentage
const totalMarks = 550;
let studentMarks = 300;
let percentage = Math.floor(((studentMarks / totalMarks) * 100) * 1);
if (percentage >= 80) {
    console.log(`Your Percentage: ${percentage}\nYour Grade: A+`);
}
else if (percentage >= 70 && percentage < 80) {
    console.log(`Your Percentage: ${percentage}\nYour Grade: A`);
}
else if (percentage >= 60 && percentage <= 69) {
    console.log(`Your Percentage: ${percentage}\nYour Grade: B`);
}
else if (percentage >= 50 && percentage <= 59) {
    console.log(`Your Percentage: ${percentage}\nYour Grade: c`);
}
else {
    console.log(`Your Percentage: ${percentage}\nYour Grade: Failed`);
}
export {};
