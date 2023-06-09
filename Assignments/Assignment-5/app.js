document.write("<h1>Assignment-5</h1>")
document.write("<h1>MATH EXPRESSIONS</h1><br>")


// chapter 5

// 1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.
var Num1 = 4
var Num2 = 6
var res = Num1 + Num2
document.write("<br> Sum of " + Num1 + " and " + Num2 + " is " + res + "<br><br>")

// 2. Repeat task1 for subtraction, multiplication, division &
// modulus.
//Substraction
var Num1 = 3
var Num2 = 2
var res = Num1 - Num2
document.write("<br> Sum of " + Num1 + " and " + Num2 + " is " + res + "<br>")
//Multiplication
var Num1 = 9
var num2 = 5
var res = Num1 * Num2
document.write("<br> Sum of " + Num1 + " and " + Num2 + " is " + res + "<br>")

// division
var Num1 = 34
var Num2 = 5
var res = Num1 / Num2
document.write("<br> Sum of " + Num1 + " and " + Num2 + " is " + res + "<br>")
//Modulus
var Num1 = 100
var Num2 = 6
var res =Num1 % Num2
document.write("<br>" + Num1 + " % " + Num2 + " is " + res + "<br>")

// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial
// value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value
// after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
// k. Show the remainder after dividing the variable’s valueby 3.
// l. Output : “The remainder is : 0”

var Num;
document.write("<br>Value after variable declaration is:"+ Num  +"</br><br>");
Num = 6;
document.write("Initial Value is :" + Num +"</br>");
Num++;
document.write("Value after increment is " + Num++ + "</br>");
Num +=9;
document.write("Value after addition is: " + Num + "<br>");
Num--;
document.write("Value after decrement is: " + Num + "<br>");
var rem = Num % 4;
document.write("The remainder is: " + rem + "<br>");

// 4. Cost of one movie ticket is 600 PKR. Write a script to
// store
// ticket price in a variable & calculate the cost of buying 5
// tickets
// to a movie. Example output:

var ticket;
 ticket = 600;
var buytickets =  5;
 ticket = 600 * 5
document.write("Total cost to buy " + buytickets + " a movie ticket is " + ticket  + " PKR" + "<br><br>");

// 5. Write a script to display multiplication table of any number in your browser. E.g

for (var index = 1; index <= 10; index++) {
    document.write("4x"+ index + " = " + 4*index  + "<br><br>")
  }

  // 6. The Temperature Converter: It’s hot out! Let’s make 
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.

//a
var Inctemp = 25

//b
var convertToInf = (Inctemp  * 9/5) + 32
var res = (convertToInf)
document.write(Inctemp + "°C is" + " " + res  + " " + " °F"+ "<br/>")

//c
var Inftemp = 70

//d
var convertToInc = (Inftemp-32)*5/9
var res =(convertToInc)
document.write(Inftemp + "°F is" + " " + res  + " " + " °C" + "<br><br>")

// 7. Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variablesa. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.

// a
var priItem1 = 650
// b
var quanItem1 = 3
// c
var priItem2= 100
// d
var quanItem2 = 7
// e
var shippingCharges = 100
// f
var totalcost =(priItem1 * quanItem1 + priItem2 * quanItem2 + shippingCharges)
document.write("Price of item 1 is " + priItem1 +"<br/>"+ "Quantity of item 1 is " + quanItem1 +"<br/>"+ "Price of item 2 is " + priItem2 +"<br/>"+ "Quantity of item 2 is " + quanItem2 +"<br/>"+ "Shipping charges is " + shippingCharges +"<br/>"+"Total cost of your order is " +" "+totalcost +"<br><br>")

// 8. Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser


 var Totmarks= 980
 var Obtmarks = 804
 var percentage =(Obtmarks/Totmarks*100)
 document.write("Total Marks:"+" "+ Totmarks +"<br/>"+"Marks Obtained:"+" "+ Obtmarks +"<br/>"+"Percentage:"+" "+percentage + "%"+ "<br><br>")

// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rup

var Totdollers = 10;
var dollerconvertPKR = 104.80;
var TotsaudiRiyals = 25;
var saudiRiyalsconvertPKR = 28;
var res = (Totdollers * dollerconvertPKR + TotsaudiRiyals * saudiRiyalsconvertPKR)
document.write("Total Currency in PKR:"+" "+ res + "<br><br>")

// 10. Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

var Num = 45
var res =(((Num+5)*10)/2)
document.write("Result"+" "+ res + "<br><br>")

// // 11. The Age Calculator: Forgot how old someone is? 
// // Calculate it!

// a
var CurYear = 2023;
// b
var BirYear = 2004;
// c
var Myage = (CurYear - BirYear);
document.write("Current Year:"+ CurYear +"<br/>"+"Birth Year:"+ BirYear +"<br/>"+"They are either " + Myage +" " + "or"+" " +(Myage-1) +" "+ "years old" + "<br><br>");

// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

var radius = 20
var Circumference = 2 * 3.142 * radius;
var area =  3.142 * radius ** 2;
document.write( "Radius of a circle " + radius + "<br>" +"The circumference is " + Circumference + "<br> "+ "The area is: " +area +"<br><br>")

// 13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need
// NNNN to last you until the ripe old age of NN”.

//a
var  snack = "Opus"
document.write("snack " +snack+"<br>")

//b
var  age = 19

document.write("Current Age "+age +"<br>" )

//c
var maxage = 67
document.write("maxage " +maxage+"<br>")

//d
var estimatedAmount = 3
document.write("Amount Of Snack per day: "+estimatedAmount+"<br>")
//e
var res = (maxage - age) * 365 * estimatedAmount;
document.write ("You will need "+ res +" " +"Opus to last you until the ripe old age of "+ maxage + "." + "<br><br>")
