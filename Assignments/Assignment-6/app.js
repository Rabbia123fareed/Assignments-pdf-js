document.write("<h1>Assignment-6<h1>")
document.write("MATH EXPRESSIONS<br><br>")



// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your browser
var a = 10;
document.write("The value of a is: " + a + "<br><br>");

// ++a
++a;
document.write("The value of ++a is: " + a + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

// a++
a++;
document.write("The value of a++ is: " + a + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

// --a
--a;
document.write("The value of --a is: " + a + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

// a--
a--;
document.write("The value of a-- is: " + a + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");



// What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;
var a = 2,
  b = 1;
var result = --a - --b + ++b + b--;

// stage 1
--a; 
document.write("The prefix decrement operator decreases the value of a by 1, resulting in a being equal to 1.<br>") 

// stage 2
--a - --b; 
document.write("The prefix decrement operator decreases the value of a by 1 (resulting in a being equal to 0) and the prefix decrement operator decreases the value of b by 1 (resulting in b being equal to 0). The subtraction operator then subtracts the value of b (0) from the value of a (0), resulting in 0.<br>") 
// stage 3
--a - --b + ++b; 
document.write("The prefix decrement operator decreases the value of a by 1 (resulting in a being equal to -1), the prefix decrement operator decreases the value of b by 1 (resulting in b being equal to -1), and the prefix increment operator increases the value of b by 1 (resulting in b being equal to 0). The addition operator then adds the value of b (0) to the result of the previous stage (0), resulting in 0.<br>") 
// stage 4
--a - --b + ++b + b--; 
document.write("The prefix decrement operator decreases the value of a by 1 (resulting in a being equal to -2), the prefix decrement operator decreases the value of b by 1 (resulting in b being equal to -2), the prefix increment operator increases the value of b by 1 (resulting in b being equal to -1), and the postfix decrement operator decreases the value of b by 1 (resulting in b being equal to -2). The addition operator then adds the value of b (-2) to the result of the previous stage (0), resulting in -2.<br>") 

// 3. Write a program that takes input a name from user &
// greet the user.
// Prompt user for their name
var username = prompt("Enter your name ");

// Greet the user
if (username) {
  alert("Hello, " + username + "!");
} else {
  alert("Hello there!");
}

// 5. Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.
// Prompt user for a number
var Num = prompt("Enter a number to display its multiplication newTable:");
if (Num === null || isNaN(Num)) {
  Num = 5;
}
var newTable = "<newTable>";
for (var i = 1; i <= 10; i++) {
  newTable += "<tr><td>" + Num + " x " + i + " = </td><td>" +  Num * i + "</td></tr>"+ "<br>";
}
newTable += "</newTable>";
document.write("<h2>Multiplication newTable of " + Num + "</h2>");
document.write(newTable);


//6. Take
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)

// a
var sub1 = prompt("Enter name of first subject:");
var sub2 = prompt("Enter name of second subject:");
var sub3 = prompt("Enter name of third subject:");

// b
var TotMarks = 100;

// c
var Marks1 = +prompt("Enter obtained marks for " + sub1 + ":");
var Marks2 = +prompt("Enter obtained marks for " + sub2 + ":");
var Marks3 = +prompt("Enter obtained marks for " + sub3 + ":");

// d
var TotalObtainedMarks =
  parseFloat(Marks1) + parseFloat(Marks2) + parseFloat(Marks3);
var percentage = (TotalObtainedMarks / (TotMarks * 3)) * 100;

// e
var table = "<table>";
table += "<tr><td>Subject</td><td>Total Marks</td><td>Obtained Marks</td></tr>";
table += "<tr><td>" + sub1 + "</td><td>" + TotMarks + "</td><td>" + Marks1 + "</td></tr>";
table += "<tr><td>" + sub2 + "</td><td>" + TotMarks + "</td><td>" + Marks2 + "</td></tr>";
table += "<tr><td>" + sub3 + "</td><td>" + TotMarks + "</td><td>" + Marks3 + "</td></tr>";
table += "<tr><td></td><td><b>Total Marks:</b></td><td><b>" + TotMarks * 3 + "</b></td></tr>";
table += "<tr><td></td><td><b>Obtained Marks:</b></td><td><b>" + TotalObtainedMarks +"</b></td></tr>" 
table += "<tr><td></td><td><b>Percentage:</b></td><td><b>" + percentage + "%</b></td></tr>";
table += "</table>";

// Display the result on the webpage
document.write("<h2>Result:</h2>");
document.write(table);