//Q7: Write a simple number guessing game.Provide a selected number and guuess.Based on those numbers,give players clues if their guess is higher ,lower or currect.
import inquirer from "inquirer";

let condition = true;
while(condition){
    let randomNumber = Math.floor(Math.random()*6);
    function guess_number(){
        
        let numbers = [];
        numbers.push(randomNumber);
        while(numbers.length <3){
            let randoms = Math.floor(Math.random()*6)
            if(!numbers.includes(randoms)){
                numbers.push(randoms)
            }
        }
        console.log(`List:`, numbers.sort());
        

    }

    guess_number();

    let user = await inquirer.prompt({name:"num",type:"number",message:"Guess number from above list:"});

    if(user.num > randomNumber){
        console.log("Your Guess is Higher");
    }else if(user.num < randomNumber){
        console.log("Your Guess is Lower");
    }else{
        console.log("Your Guess is Correct");
        condition = false;
    }
}