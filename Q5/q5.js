//Q5: Write a program that greets the user based on the time of day.Display "Good Morning,"
//    "Good Afternoon," or "Good Evening" based on the time of day when you run the code.
function greetOntime() {
    let currentTime = new Date().getHours();
    if (currentTime >= 5 && currentTime < 12) {
        console.log("Good Morning");
    }
    else if (currentTime >= 12 && currentTime < 18) {
        console.log("Good Afternoon");
    }
    else if (currentTime >= 18 && currentTime < 21) {
        console.log("Good Evening");
    }
    else {
        console.log("Good Night");
    }
    console.log(currentTime);
}
greetOntime();
export {};
