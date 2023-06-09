


// //1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”
var city = prompt("Enter a city name:");

if (city === "karachi") {
  alert("Welcome to the city of lights");
}

// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.

var Gender = prompt("Enter your gender (male or female):");

if (Gender === "male") {
  alert("Good Morning Sir");
} else if (Gender === "female") {
  alert("Good Morning Ma'am");
}

// 3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:
// Signal color Message
// Red Must Stop
// Yellow Ready to move
// Green Move now

var Trafcol = prompt("Enter any color of the traffic signal");

if (Trafcol === "red") {
  alert("Must Stop");
} else if (Trafcol === "yellow") {
  alert("Ready to move");
} else if (Trafcol === "green") {
  alert("Move nnow");
} else {
  alert(" Sorry Try agin!");
}

// 4. Write a program to take input remaining fuel in car (in
//     litres) from user. If the current fuel is less than 0.25litres,
//     show the message “Please refill the fuel in your car”
var fuel = prompt("Enter the remaining fuel in car (in litres)") ;
  if (fuel < 0.25) {
    alert("Please refill the fuel in your car.");
  }

//     5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.
// a. var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");}
// b. var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// c. var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// d. var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
//     alert("The cost equals");
// }
// e. if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }
// alert("The cost equals");
// }
// e. if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }
var a = 4;
if (++a === 5) {
  alert("given condition for variable a is true");
}

var b = 82;
if (b++ === 83) {
  alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13) {
  alert("condition 1 is true");
}
if (c === 13) {
  alert("condition 2 is true");
}
if (++c < 14) {
  alert("condition 3 is true");
}
if (c === 14) {
  alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
  alert("The cost equals");
}
if (true) {
  alert("True");
}
if (false) {
  alert("False");
}

if ("car" < "cat") {
  alert("car is smaller than cat");
}

// 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:
// Show the total marks, marks obtained, percentage, grade &
// remarks like:
var sub1Marks = +prompt("Enter your marks obtained in subject 1:");
var sub2Marks = +prompt("Enter your marks obtained in subject 2:");
var sub3Marks = +prompt("Enter  yourmarks obtained in subject 3:");
var TotalMarks = +prompt("Enter your total marks:");
var ObtMarks = sub1Marks + sub2Marks + sub3Marks;
var percentage = (ObtMarks / TotalMarks) * 100;
var Grade = "";
var rem = "";

if (percentage >= 80) {
  Grade = "A-one";
  rem = "Excellent";
} else if (percentage >= 70) {
  Grade = "A";
  rem = "Good";
} else if (percentage >= 60) {
  Grade = "B";
  rem = "You need to improve";
} else {
  Grade = "Fail";
  rem = "Sorry";
}
document.write("<h1>Marks Sheet</h1><br>");



document.write("Total Marks: " + TotalMarks + "<br>");
document.write("Obtained Marks: " + ObtMarks + "<br>");
document.write("Percentage: " + percentage.toFixed(2) + "%" + "<br>");
document.write("Grade: " + Grade + "<br>");
document.write("Remarks: " + rem + "<br>")


// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”
// Store a secret number (ranging from 1 to 10) in a variable.

 var secretNumber = 8

 var userInput = +prompt ("Guess any secretNumber between 1 to 10");
 if (userInput === 8) {
     alert("'Bingo'  correct answer")
 } else if (userInput>8) {
     alert (" Close enough to the correct answer ")
 }

// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.

var Num = +prompt("Enter a number:");
if (Num % 3 === 0) {
  alert("The number is divisible by 3.");
} else {
  alert("The number is not divisible by 3.");
}

// 9. Write a program that checks whether the given input is an
// even number or an odd number.
var Num = +prompt("Enter a number:");
if (Num % 2 === 0) {
  alert("The number is even.");
} else {
  alert("The number is odd.");
}

// 10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”
let Temp = parseInt(prompt("Enter the Temperature:"));
if (Temp > 40) {
  alert("It is too hot outside.");
} else if (Temp > 30) {
  alert("The Weather today is Normal.");
} else if (Temp > 20) {
  alert("Today's Weather is cool.");
} else if (Temp > 10) {
  alert("OMG! Today's weather is so Cool.");
} else {
  alert("The temperature is too low.");
}

// 11. Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user
var FirstNum = +prompt("Enter first number:");
var SecondNum = +prompt("Enter second number:");
var operation = prompt("Enter operation (+, -, *, /, %):");

var res;

if (operation === "+") {
  res = FirstNum + SecondNum;
} else if (operation === "-") {
  res = FirstNum - SecondNum;
} else if (operation === "*") {
  res = FirstNum * SecondNum;
} else if (operation === "/") {
  res = FirstNum / SecondNum;
} else if (operation === "%") {
  res = FirstNum % SecondNum;
} else {
  document.write("Invalid operation! <br>");
}

document.write("Result:" + res + "<br>");