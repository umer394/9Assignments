//Q8: Write a simple calculator program.(+,-,*,/)
import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter First Number", type: "number", name: "firstNumber" },
  { message: "Enter Second Number", type: "number", name: "secondNumber" },
  {
    message: "Select one of the operators to perform action",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);

if (answer.operator === "Addition") {
  console.log("Your Value is: " + (answer.firstNumber + answer.secondNumber));
} else if (answer.operator === "Subtraction") {
  console.log("Your Value is: " + (answer.firstNumber - answer.secondNumber));
} else if (answer.operator === "Multiplication") {
  console.log("Your Value is: " + answer.firstNumber * answer.secondNumber);
} else if (answer.operator === "Division") {
  console.log("Your Value is: " + answer.firstNumber / answer.secondNumber);
} else {
  console.log("Please select valid operator");
}