//     1. Declare and initialize an empty multidimensional array.
// (Array of arrays)

var myarr = [[],[]]
// 2. Declare and initialize a multidimensional array
// representing the following matrix:
var Matrix = [
  [0, 1, 2, 3],
  [0, 1, 2, 1],
  [2, 1, 0, 1]
]
console.log(Matrix )

// 3. Write a program to print numeric counting from 1 to 10.
for (var index = 1; index <= 10; index++) {
  document.write( index + "<br><br>")
}


// 4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.

var TableNum = +prompt("Enter any number to multiplication table")
var TableLength = +prompt("Enter the length of multiplication table")
document.write("Multipliy Table of " + TableNum)
document.write("<br>Length " + TableLength)
for (var index = 1; index <= TableLength; index++) {
    var Elem = TableNum * index;
    document.write("<br>" + TableNum + "x" + index + "=" + Elem + "<br><br>")
}


// 5. Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]

var Fruits = ["apple", "banana", "mango", "orange", "strawberry"]
for (var index = 0; index < Fruits.length; index++) {
    var elem = Fruits[index];
    console.log(elem)
    document.write("<br>" + elem + "<br>")
}
for (var index = 0; index < Fruits.length; index++) {
    var eleme=Fruits[index];
    document.write("<br>Element at index " + index + " is " + elem + "<br>")
}

// 6. Generate the following series in your browser. See
// example output.
// a. 
for( var i=1; i<=15; i++)
 document.write(i + "<br><br>")
// b. 
for( var i=1; i>=15; i++)
 document.write(i + "<br><br>")
// c. 
 var Num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 var length = Num.length;
 for (let i = 0; i < length; i++) {
   Num[i] *= 2;
 }
 document.write(Num + "<br><br>")
// d. 
 var Num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 var length = Num.length;
 for (let i = 0; i < length; i++) {
   Num[i] /= 2;
 }
 document.write(Num + "<br><br>")
// e. 
var series = [];
for (var i = 2; i <= 20; i += 2) {
  series.push(i + "k");
}
document.write(series + "<br><br>")

// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:

var Bakery = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt("Welcome to ABC Bakery, what do you want to order sir\ma,am");
var selectItem = "";
var Index = -1;
for (var i = 0; i < Bakery.length; i++) {
  if (Bakery[i].toLowerCase() === userInput.toLowerCase()) {
    selectItem = Bakery[i];
    Index = i;
    break;
  }
}
if (Index !== -1) {
  alert(selectItem + " is available at index " + Index + " in our bakery.");
} else {
  alert("We are Sorry, " + userInput + " is not available in our bakery.");
}

// 8. Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12].

 var Num = [24, 53, 78, 91, 12];

 var res = Num[0];
 for (var i=0; i < Num.length; i++) {
     if (Num[i] > res) {
         result = Num[i];
     }
 }

 console.log("Largest number is: " + res);

// 9. Write a program to identify the smallest number in the
// given array.
// A = [24, 53, 78, 91, 12]
var Num = [24, 53, 78, 91, 12];

 var small = Num[0];

 for (var i = 1; i < Num.length; i++) {

 if (Num[i] < smallest) {
     small = Num[i];
   }
   console.log(small);
 var res = Num[0];
 for (var i=0; i < Num.length; i++) {
     if (Num[i] < res) {
         res = Num[i];
     }
 }}

 console.log("Smallest number is: " + res);

// 10. Write a program to print multiples of 5 ranging 1 to
// 100.


var multiple = []
for (var index = 1; index <= 20; index++) {
  multiple.push(5 * index)
}
document.write("<br> " +multiple)