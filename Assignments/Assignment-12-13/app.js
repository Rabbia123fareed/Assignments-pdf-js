


// 1. Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).
var input = prompt("Enter a character:");
var charCode = input.charCodeAt(0);

if (charCode >= 48 && charCode <= 57) {
  alert(input + " is a number.");
} else if (charCode >= 65 && charCode <= 90) {
  alert(input + " is an uppercase letter.");
} else if (charCode >= 97 && charCode <= 122) {
  alert(input + " is a lowercase letter.");
} else {
  alert("Invalid input.");
}


// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.

var integer1 = +prompt("Enter the First number: ");
var integer2 = +prompt("Enter the Second number: ");

if (integer1 > integer2) {
  alert(integer1 + " is larger than " + integer2);
} else if (integer2 > integer1) {
  alert(integer2 + " is larger than " + integer1);
} else {
  alert(integer1 + " and " + integer2 + " are equal.");
}

// 3. Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.
var Num = prompt("Enter a Number:");

if (Num > 0) {
  alert(Num + " is a positive number");
} else if (Num < 0) {
  alert(Num + " is a negative number");
} else {
  alert(Num + " is zero");
}

// 4. Write a program that takes a character (i.e. string of
//     length 1) and returns true if it is a vowel, false otherwise
 var character = prompt("Enter a character:");
 character = character.toLowerCase();
 var vowels = ['a', 'e', 'i', 'o', 'u'];
 if (vowels.includes(character)) {
   alert("The character is a vowel.");
 } else {
   alert("The character is not a vowel.");
 }

//     5. Write a program that
//     a. Store correct password in a JS variable.
//     b. Asks user to enter his/her password
//     c. Validate the two passwords:
//     i. Check if user has entered password. If not, then
//     give message “ Please enter your password”
//     ii. Check if both passwords are same. If they are
//     same, show message “Correct! The password you
//     entered matches the original password”. Show
//     “Incorrect password” otherwise
    
   // a
   var correctPassword = "12345678";
   // b
   var userPassword = prompt("Enter your password:");
   // c
   if (userPassword === "") {
     // i.
     alert("Please enter your password");
   } else if (userPassword === correctPassword) {
     // ii. 
     alert("Correct! The password you entered matches the original password");
   } else {
     alert("Incorrect password");
   }  

//    6. This if/else statement does not work. Try to fix it:
//     var greeting;
//     var hour = 13;
//     if (hour < 18) {
//     greeting = "Good day";
//     else
//     greeting = "Good evening";
//     }
    

var greeting;
var hour = 13;
if (hour < 18) {
  alert( "Good day" + greeting);
} else {
 alert( "Good evening" + greeting);
}


//     7. Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements

var time = prompt("Enter time in 24-hour clock format (e.g. 1900 for 7pm):");
if (time >= '0000' && time < 1200) {
  alert("Good Morning!");
} else if (time >= 1200 && time < 1700) {
  alert("Good Afternoon!");
} else if (time >= 1700 && time < 2100) {
  alert("Good Evening!");
} else if (time >= 2100 && time <= 2359) {
  alert("Good Night!");
} else {
  alert(" Please enter time in 24-hour clock format (e.g. 1900 for 7pm)." );
}


