// 1. Write a function that displays current date & time in your
// browser.

function DateTime() {
  var now = new Date();
  var date = now.toDateString();
  var time = now.toLocaleTimeString();
  var dateTime = `${date} ${time}`;
  console.log(dateTime);
}
DateTime();

// 2. Write a function that takes first & last name and then it
// greets the user using his full name.

function welcomeuser()
{
  var FirstName = prompt("Enter your First name")
  var lastName = prompt("Enter your last name")
  var FullName = (FirstName + " " + lastName)
  alert("Hello" + FullName )
}
welcomeuser();
// 3. Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.
function addNum(Num1, Num2) {
  var sum = Num1 + Num2;
  return sum;
}
var Num1 = Number(prompt("Enter the first number:"));
var Num2 = Number(prompt("Enter the second number:"));
var sum = addNum(Num1, Num2);
console.log(` sum of ${Num1} and ${Num2} is ${sum}.`);

// 4. Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.

function calculator(Num1, Num2, operator) {
  var res;
  switch (operator) {
    case "+":
      res = Num1 + Num2;
      break;
    case "-":
      res = Num1 - Num2;
      break;
    case "*":
      res = Num1 * Num2;
      break;
    case "/":
      res = Num1 / Num2;
      break;
    default:
      res = "Invalid operator";
  }
  console.log(`The result of ${Num1} ${operator} ${Num2} is ${res}.`);
  return res;
}

calculator(8, 4, "+"); 
calculator(8, 4, "-"); 
calculator(8, 4, "*"); 
calculator(8, 4, "/"); 
calculator(8, 4, "%"); 


// 5. Write a function that squares its argument.
function square(Num) {
  var res = Num * Num;
  console.log(`The square of ${Num} is ${res}.`);
  return res;
}
square(3); 
square(9);
// 6. Write a function that computes factorial of a number.

function factorial(Numum) {
  var res = 1;
  for (var i = 1; i <= Numum; i++) {
    res *= i;
  }
  console.log(`factorial of ${Numum} is ${res}.`);
  return res;
}
factorial(3); 
factorial(19); 
// 7. Write a function that take start and end number as inputs
// & display counting in your browser.

function displayCount(stNum, endNum) {
  alert("Counting from " + stNum + " to " + endNum)
  for (var index = stNum; index <= endNum; index++) {
   console.log(index)
  }
}
displayCount(50 , 100)
// 8. Write a nested function that computes hypotenuse of a
// right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()


function calculateHyp(base, perpendicular) {
  function calculateSqu(value) {
    return value ** 2
  }
  var baseSqu = calculateSqu(base)
  var perpendicularSqu = calculateSqu(perpendicular)
  var hypotenuseSqu = baseSqu + perpendicularSqu
  return Math.sqrt(hypotenuseSqu)
}
var baseLength = 9
var perpendicularLength = 6
var hypotenuse = calculateHyp(baseLength, perpendicularLength)
document.write("Hypotenuse of right angle trianagle (base = " + baseLength + ", perpendicular = " + perpendicularLength + ")<br><br>  ")
// 9. Write a function that calculates the area of a rectangle.
//  A = width * height
//  Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables

function calArea(width, height) {
  var a = width * height
  return a
}
var area1 = calArea(4, 8)
document.write("Arguments passed as value (7, 10) area: " + area1 + "<br>")
var width = 4
var height = 8
var area2 = calArea(width, height)
document.write("Arguments passed as variables (5, 8) area: " + area2 + "<br>")



// 10. Write a JavaScript function that checks whether a passed
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as
// forward, e.g., madam.
function isPalindrome(str) {
     var len = str.length;
     for (var i = 0; i < len / 2; i++) {
       if (str[i] !== str[len - 1 - i]) {
         return false;
       }
     }
     return true;
   }
   var str1 = 'madam';
  
   document.write(isPalindrome() + str1);





// 11. Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'

// function capitalize_First_Letter(text) {
//    var words = text.split(" ");
//    for (let i = 0; i < words.length; i++) {
//      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
//    }
//    return words.join(" ");
//  }
//  var text = 'the quick brown fox';
//  var result = capitalize_First_Letter(text);
//  document.write(result); 

// 12. Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'

// function find_longest_word(str)
// {
//   var array1 = str.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];

//   for(var i = 1 ; i < array1.length ; i++)
//   {
//     if(result.length < array1[i].length)
//     {
//     result = array1[i];
//     } 
//   }
//   return result;
// }
// document.write(find_longest_word('Web Development Tutorial'));

// 13. Write a JavaScript function that accepts two arguments, a
// string and a letter and the function will count the number of 
// occurrences of the specified letter within the string.
// Sample arguments : 'JSResourceS.com', 'o'

// function char_count(str, letter) 
// {
//  var letter_Count = 0;
//  for (var i = 0; i < str.length; i++) 
//  {
//     if (str.charAt(i) == letter) 
//       {
//       letter_Count += 1;
//       }
//   }
//   return letter_Count;
// }

// document.write(char_count('JSResourceS.com', 'o'));

// 14. The Geometrizer
// Create 2 functions that calculate properties of a circle, using
// the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area
// is NN".
// Circumference of circle = 2πr
// Area of circle = πr2

// function calcCircumfrence(radius) {
//    var y = (Math.PI * radius) * 2;
//  document.write("The circumfrence is " + y + "." + "<br>");
//  }
//  function calcArea(radius) {
//    var x = (Math.PI * radius) * radius;
//  document.write("The area is " + x + ".");
//  }

//  calcCircumfrence(30);
//  calcArea(10);
