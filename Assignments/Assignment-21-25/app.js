// 1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.
var FirstName = prompt("Enter your First name")
 var lastName = prompt("Enter your last name")
 var FullName = (FirstName + " " + lastName)
 alert("Hello" + FullName )
// 2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser

 var userInput = prompt ("Enter your favorite mobile phone model")
  for(var i=0; i > length.userInput; i++)
 alert(userInput)
// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .
var word = "Pakistani"
var index = word.indexOf("n");
document.write("The index of 'n' is " + index + "<br>");
// 4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.

var lastword = "Hello World";
var lastInd = -1;
for (var i = 0; i < lastword.length; i++) {
  if (lastword[i] === "l") {
    lastInd = i;
  }
}
document.write("The last index of 'l'  is: " + lastInd + "<br>");


// 5. Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.

var word = "Pakistani";
var char = word.charAt(3);
document.write( "The character at the 3rd index in the word 'Pakistani' is: " + char + "<br><br>");

// 6. Repeat Q1 using string concat() method.

 var FirstName = prompt("Enter your First name")
 var lastName = prompt("Enter your last name")
 var FullName = FirstName.concat(lastName);
 alert("Hello " + FullName);
// 7. Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.

var city1 = "Hyderabad"
var city2 = "Hyder"
var city3 = "Islam"
var Replacement = city1.replace(city2, city3)
document.write("City  " + city1 + "<br>")
document.write("After replacement  " + Replacement + "<br><br>")


// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and
// football together.”;
var massage = ("Ali and Sami are best friends.They play cricket & football together.")
var replacement = massage.replace(/and/g, "&")
document.write("message   " + massage)
document.write("After Replacement " + replacement)

// 9. Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.
var string = "472";
var Num = Number(string)
document.write("Value: " + string + "<br>")
document.write("Type of value: " + typeof string + "<br>")
document.write("Value: " + Num + "<br>")
document.write("Type of value: " + typeof Num + "<br><br>")
// 10. Write a program that takes user input. Convert and
// show the input in capital letters.
 var userInput= prompt("Enter Your Name");
 var userName = userInput.toLowerCase();
 var capitalized = userName.slice(0,1);
 var capital = capitalized.toUpperCase();
 alert (capital+userName.slice(1));
//  11. Write a program that takes user input. Convert and
// show the input in title case.
var userInput= prompt("Enter Your Name");
var userName = userInput.toLowerCase();
alert (userName);

// 12. Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.
 var Num = "35.36";
 Num.pop(3);
 document.write(Num)
// 13. Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .
// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64

var userName = prompt("Please enter your name")
var SpecialChar = false
for (var index = 0; index < userName.length; index++) {
  var Elem = userName.charCodeAt(index)
  if (Elem === 33 || Elem === 44 || Elem === 46 || Elem === 64) {
    SpecialChar = true
    break;
  }
}
if (SpecialChar) {
  alert("Please enter a valid Username")
} else {
  alert("Username Accepted")
}

// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example:

var Bakery = ["cake", "apple pie", "cookie", "chips", "patties"]
var userInput = prompt("Welcome to ABC Bakery, what do you want to order?")
var selectItem = ""
var Index = -1
for (var i = 0; i < Bakery.length; i++) {
  if (Bakery[i].toLowerCase() === userInput.toLowerCase()) {
    selectItem = Bakery[i]
    Index = i
    break;
  }
}
if (Index !== -1) {
  alert(selectItem + " is available at index " + Index + " in our bakery.")
} else {
  alert("We are Sorry, " + userInput + " is not available in our bakery.")
}

// 15. Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.

var password = prompt("Enter a password alphabets and numbers, is at least 6 characters long ")
var Alphabet = false
var Num = false
var startAlphabet = false
for (var i = 0; i < password.length; i++) {
  var charCode = password.charCodeAt(i)
  if (charCode >= 48 && charCode <= 57) {
    Num = true
  } else if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
    Alphabet = true
    if (i == 0) {
      startAlphabet = true
    
}}
if (password.length < 6) {
  document.write(" Entered Password: " + password)
 // document.write(" Invalid password. Password must be at least 6 characters long. <br> Please enter a valid password")
} else if (!Alphabet || !Num) {
  document.write("Passward cannot be longer <br>")
} else if (startAlphabet == false) {
  document.write(" Please enter a valid password <br>")
} else {
  document.write(" Valid password!")
}}

// 16. Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.
 var uni = "University of Karachi";
var arr = uni.split(" ");
document.write("Array Elements " + arr.join(", ")); 
// 17. Write a program to display the last character of a user
// input.

var userInput = prompt("Enter a string ");
var lastChar = userInput.charAt(userInput.length - 1);
alert("Last character: " + lastChar);

// 18. You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string 
var string = "The quick brown fox jumps over the lazy dog";
var word = "the";
var count = 0;
var lowercaseString = string.toLowerCase();
var words = lowercaseString.split(" ");
for (var i = 0; i < words.length; i++) {
  if (words[i] === word.toLowerCase()) {
    count++;
  }
}
alert("There are" + word + "of the word " + count);