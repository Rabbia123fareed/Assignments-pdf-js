document.write("<h1>Assignment-3</h1>")
document.write(" <h2>VARIABLES FOR NUMBERS</h2><br>")

// chapter 3

//1. Declare a variable called age & assign to it your age. Show your age in an alert box.
var age = " 19 "
alert("I am "+age+" year old")


//2. Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her number of visits on your web page. For example: “You have visited this site N times”.

var visitsites = 0;
    if (localStorage.getItem("visitsites")) {
        visitsites = localStorage.getItem("visitsites")
    }
visitsites++;
localStorage.setItem("visitsites", visitsites);
 
 alert("You have visited this site " + visitsites + " times");


//3. Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser:
var birthYear = "My Birthyear is 2004" 
document.write(birthYear+"<br>");
document.write("\nData type of my declared variable is number <br>")

// 4. A visitor visits an online clothing store www.xyzClothing.com . Write a script to store in variables the following information:
// a. Visitor’s name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to
// order
// Show the following message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”.
var visitorname = "John Doe"
var  products = "T-shirt"
var quant = "5"
document.write( visitorname  +  " done order"  + "  " + quant  + "  "+ products  +  " from  www.xyzClothing.store  ")

