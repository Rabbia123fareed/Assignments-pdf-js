
// 1. Declare an empty array using JS literal notation to store
// student names in future.
var stuNames = []; 
// 2. Declare an empty array using JS object notation to store
// student names in future.
var NewStu = new Array();
// 3. Declare and initialize a strings array.
var Fruits = ["Apple", "Banana", "Orange"];
// 4. Declare and initialize a numbers array.
var numbers = [1, 2, 3, 4, 5];
// 5. Declare and initialize a boolean array.
var booleanArray = [true, false, true, true];
// 6. Declare and initialize a mixed array.
var mixedArray = ["John", 25, true, "Orange", false]
// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:
var quali = [ "SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD",];
document.write("<h3> Qualifications:</h3>");
for (var i = 0; i < quali.length; i++) {
  document.write(quali[i] + "<br>");
}
// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:
var stuNames = ["Ali", "Kiran", "Kareem"];
var stuScores = [320, 450, 280];

// calculate percentage and display result
for (var i = 0; i < stuNames.length; i++) {
  var Percentage = (stuScores[i] / 500) * 100;
  document.write( "Score of " + stuNames[i] + " is " +  stuScores[i] + ". Percentage: " + Percentage +  "%<br>" );
}
// 9. Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.
// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.

var colors = ["Pink", "White", "Blue", "Yellow", "Black"];
document.write("Initial array" + colors + "<br><br>");

// a. 
var addbeginningcol = prompt( "Enter a color you want to add at the beginning of the array:");
colors.unshift(addbeginningcol);
document.write(" After adding a color at the beginning  " + colors + "<br><br>");

// b. 
var coladdend = prompt("Enter a color you want to add at the end of the array:");
colors.push(coladdend);
document.write( " After adding a color at the end " + colors + "<br><br>");

// c. 
colors.unshift("Red", "Green");
document.write(" After adding two more colors at the beginning" + colors + "<br><br>");

// d.
colors.shift();
document.write( " After deleting the first color " + colors + "<br><br>");

// e. 
colors.pop();
document.write( " After deleting the last color " + colors + "<br><br>");

// f.
var positioncol = prompt("Enter the position where you want to add the color (starting from 1)");
var addcolPosition = prompt( "Enter a color to add at position " + positioncol );
colors.splice(positioncol - 1, 0, addcolPosition);
document.write( "After adding a color at position " +positioncol + colors + "<br><br>");

// g. 
var positionDelCol = prompt( "Enter the position from where you want to delete the color(s) (starting from 1)");
var NumcolDelete = prompt( "Enter the number of colors you want to delete:");
colors.splice(positionDelCol - 1, NumcolDelete);

// Displaying the updated array in the browser
document.write(" After deleting " + NumcolDelete + " color(s) from position " + positionDelCol  + colors + "<br><br>");
// 10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort method

var scores = [24, 65, 87, 99 ];
scores.sort(function (a, b) {
  return a - b;
});
alert(scores);

// 11. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities  array

var cities = ["Karachi", "Multan", "Islamabad", "Hydrabad", "Peshawar"];
var CopyCities = cities.slice(0, 3);
alert(CopyCities);
// 12. Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)
var array = ["This", "is", "my", "cat"];
var res = array.join(" ");
alert(res);
// 13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)
var arr = [];
arr.push("value 1");
arr.push("value 2");
arr.push("value 3");
var first = arr.shift();
var Second = arr.shift();
var thrid = arr.shift();
alert(first);
alert(Second);
alert(thrid);
// 14. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last InFirst Out)
var values = []; 
values.push("value 1"); 
values.push("value 2"); 
values.push("value 3"); 

alert("Original array: " + values); 

var revValues = [];
while (values.length > 0) {
  revValues.push(values.pop()); 
}
alert("Reversed array: " + revValues); 
// 15. Write a program to store phone manufacturers (Apple,
//     Samsung, Motorola, Nokia, Sony & Haier) in an array.
//     Display the following dropdown/select menu in your
//     browser using document.write() method:
var phone = [ "Apple", "Samsung", "Motorola", "Nokia","Sony", "Haier",];

document.write("<select>");
for (var i = 0; i < phone.length; i++) {
  document.write("<option>" + phone[i] + "</option>");
}
document.write("</select>");
for( var i=1; i<=10; i++)
 console.log(i)