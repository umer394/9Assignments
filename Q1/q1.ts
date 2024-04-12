//Q1: Write a program that checks whether the given number is positive or negative
import inquirer from "inquirer";

console.log("Enter any number and check whether the number is positive or negative");
let answer = await inquirer.prompt(
    {name:"given",type:"number",message:"Enter Your Number: "}
);

if(answer.given > 0){
    console.log("Your Given Number is Positive");
}else if(answer.given == 0){
    console.log("Zero (0) is considered neither positive nor negative. It's a neutral number that represents the absence of quantity or value");
}else{
    console.log("Your Given Number is Negative");
}