// 1. Write a program that displays current date and time in
// your browser.

var current = new Date();
document.write(current + "PKT" +"<br><br>")
// 2. Write a program that alerts the current month in words.
// For example December.

function currentMonth() {
    var months = [ "January", "February", "March", "April", "May", "June", "July", "August","September","October", "November", "December", ];
    var now = new Date();
    var currentMonth = now.getMonth();
    var monthName = months[currentMonth];
    alert("Current Month: " + monthName);
  }
 currentMonth();
  


// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.

function CurrentDay() {
    var weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var now = new Date();
    var curDay = now.getDay();
    var day = weekdays[curDay];
    alert("Current Day: " + day);
  }
  CurrentDay();
  

// 4. Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.

function FunDay() {
    var now = new Date();
    var curDay = now.getDay();
    if (curDay === 6 || curDay === 0) {
      alert("It's Fun day");
    } else {
      alert("It's not Fun day");
    }
  }
  FunDay();

// 5. Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”

function checkDate() {
    var now = new Date();
    var curDate = now.getDate();
  
    // Check if the date is less than 16th
    if (curDate < 16) {
      alert("First fifteen days of the month");
    } else {
      alert("Last days of the month");
    }
  }
  checkDate();

// 6. Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.

var TodayDate = new Date();
var Todaymilli = TodayDate.getTime();
var TodayMin = TodayDate.getMinutes();
var Diff = Todaymilli - TodayMin;
var DiffMin = Diff/(1000*60*60);
var AccurateMin = Math.floor(DiffMin);


document.write("Current Date: " + TodayDate + "<br>");
document.write(" Elapsed milliseconds since midnight, Janury 1, 1970: " + Todaymilli + "<br>");
document.write(" Elapsed minutes since midnight, Janury 1, 1970: " + AccurateMin + "<br>")

// 7. Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.

var time = new Date();
var hours = time.getHours();
if (hours < 12) {
  console.log("It's AM");
} else {
  console.log("It's PM");
}
// 8. Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.
var latDate = new Date(2020, 11, 0);
console.log("Later Date:", latDate);


// 9. Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015

var RamadanStart = new Date(2023, 2, 22);
var FirstRamadan = new Date(2015, 5, 18);
var TimeDiff = Math.abs(RamadanStart.getTime() - FirstRamadan.getTime());
var DaysDiff = Math.ceil(TimeDiff / (1000 * 3600 * 24));

document.write("1st Ramdan is"+" "+ DaysDiff + "<br><br>")

// 10. Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.

var refDate = new Date();
var begi2015 = new Date(2015, 0, 1);
var TimeDiff = Math.abs(refDate.getTime() - begi2015.getTime());
var secDiff = Math.floor(TimeDiff / 1000);
document.write("Seconds elapsed since the beginning of 2015:" + secDiff + "<br><br>" );

// 11. Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.
var curDate = new Date()
var curDateTime = curDate
curDate.setHours(curDate.getHours() - 1)
var DateTime = curDate
document.write("Current Date and Time: " + curDateTime + "<br>")
document.write("1 Hour ago, it was : " + DateTime)

// 12. Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?

var curDate = new Date()
curDate.setFullYear(curDate.getFullYear() - 100)
var forDate = curDate
alert(curDate)

// 13. Write a program to ask the user about his age. Calculate
// and show his birth year in your browser.

var age = +prompt("Enter your age:")
var curYear = new Date().getFullYear()
var DOB = curYear - age
document.write("Your age: " + age +"<br>")
document.write("Your birth year is: " + DOB +"<br>")

// 14. Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,

var custName = prompt("Enter customer name:")
var curMonth = prompt("Enter current month:")
var numOfUnits = +prompt("Enter number of units:")
var charPerUnit = +prompt("Enter charges per unit:")
var latePaymentSurchargeRate = +prompt("Enter late payment surcharge rate (%):")

var netAmountPayable = (numOfUnits * charPerUnit).toFixed(2)
var latePayment = ((netAmountPayable * latePaymentSurchargeRate) / 100).toFixed(2)
var AmountPayable = (parseFloat(netAmountPayable) + parseFloat(latePayment)).toFixed(2)

document.write("<h2>K-Electric Bill</h2>")
document.write("Customer Name:</strong> " + custName + "<br>")
document.write("Month:</strong> " + curMonth + "<br>")
document.write("Number of Units:</strong> " + numOfUnits.toFixed(2) + "<br>")
document.write("Charges per Unit:</strong> $" + charPerUnit.toFixed(2) + "<br>")
document.write("Net Amount Payable (within Due Date):</strong> $" + netAmountPayable + "<br>")
document.write("Late Payment Surcharge:</strong> $" + latePayment + "<br>")
document.write("Gross Amount Payable (after Due Date):</strong> $" + AmountPayable + "<br>")
document.write("Charges per Unit:</strong> RS." + charPerUnit.toFixed(2) + "</p>")
document.write("Net Amount Payable (within Due Date):</strong> RS." + netAmountPayable + "<br>")
document.write("Late Payment Surcharge:</strong> RS." + latePayment + "<br>")
document.write("Gross Amount Payable (after Due Date):</strong> RS." + AmountPayable + "<br>")


