//Q9: Write a simple program that checks if a person is eligible for a CNIC(show a message with the person's name)

import inquirer from "inquirer";

let user = await inquirer.prompt([
    {
        name:"name",
        type:"input",
        message:"Enter your name:"
    },
    {
        name:"age",
        type:"number",
        message:"Enter your age:"
    }
])

if(user.age >= 18){
    console.log(`Hi ${user.name}! You are Eligible for CNIC`);
}else{
    console.log(`Hi ${user.name}! You are not Eligible for CNIC`);
}