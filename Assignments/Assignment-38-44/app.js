// 1. Write a custom function power ( a, b ), to calculate the value of
// a raised to b.

function power(a, b) {
    var res = a ** b
    document.write(` ${a} raised to power ${b} is ${res}` + "<br>")
    document.write( a + " raised to power " + b + " is " + res + "<br>");
    return res
  }
  power(1, 5)
  
  
  // 2. Any year is entered through the keyboard. Write a function to
  // determine whether the year is a leap year or not.
  // Leap years ..., 2012, 2016, 2020, …
  
  function Checkleapyear()
  {
  var x ;
  x = parseInt(prompt("Enter current year"));
  if(x%4==0) {
     alert("This is a leap year" , x);
  }
  else {
     alert("This is not leap year" ,x)
  }
  }
  Checkleapyear()
  
  // 3. If the lengths of the sides of a triangle are denoted by a, b, and
  // c, then area of triangle is given by
  // area = S(S − a)(S − b)(S − c)
  // where, S = ( a + b + c ) / 2
  // Calculate area of triangle using 2 functions
  
  
  function cal(a, b, c) {
    return (a + b + c) / 2
  }
  function calArea(a, b, c) {
    var S = cal(a, b, c)
    var area = Math.sqrt(S * (S - a) * (S - b) * (S - c))
    document.write(` A = ${a}, B = ${b}, C = ${c} and S = ${S}` + "<br>")
    document.write(` The Area of the triangle is ${area}` + "<br>")
    document.write(" A = " + a + ", B = " + b + ", C = " + c + " and S = " + S + "<br>");
    document.write(" The Area of the triangle is " + area + "<br>");
  
  }
  var side1 = 5
  var side2 = 7
  var side3 = 9
  calArea(side1, side2, side3)

  
  // 4. Write a function that receives marks received by a student in 3
  // subjects and returns the average and percentage of these
  // marks. there should be 3 functions one is the mainFunction
  // and other are for average and percentage. Call those functions
  // from mainFunction and display result in mainFunction.
  
  function calAvg(sub1, sub2, sub3) {
    var TotalMarks = sub1 + sub2 + sub3
    var avg = TotalMarks / 3
    return avg.toFixed(2)
  }
  function calPercentage(sub1, sub2, sub3) {
    var TotalMarks = sub1 + sub2 + sub3
    var maxMarks = 300
    var percentage = (TotalMarks / maxMarks) * 100
    return percentage.toFixed(2)
  }
  function mainFunction(sub1, sub2, sub3) {
    var average = calAvg(sub1, sub2, sub3)
    var percentage = calPercentage(sub1, sub2, sub3)
    document.write(" Average: " + average + "<br>");
    document.write(" Percentage: " + percentage + "%" + "<br>");
  }
  var sub1 = 77
  var sub2 = 87
  var sub3 = 78
  mainFunction(sub1, sub2, sub3)

  
  // 5. You have learned the function indexOf. Code your own custom
  // function that will perform the same functionality. You can code
  // for single character as of now.
  
  function customIndex(str, char) {
  
  
      for (var index = 0; index < str.length; index++) {
        if (str[index] === char) {
          return index
        }
      }
    }
  var sen = "Hello World"
  var index = customIndex(sen, "W")
  document.write(` String: ${sen}` + "<br>")
  document.write(" String: " + sen + "<br>");
  document.write(" Char to find 'W'" + "<br>")
  document.write("Index of 'W' is " + index + "<br><br>")
 
  
  // 6. Write a function to delete all vowels from a sentence. Assume
  // that the sentence is not more than 25 characters long.
  
  
  function delVowels(sen) {
    var vowels = ['a', 'e', 'i', 'o', 'u']
    var res = ''
  
    for (var index = 0; index < sen.length; index++) {
      var char = sen[index].toLowerCase();
      if (!vowels.includes(char)) {
        res += sen[index]
      }
    }
    return res
  }
  var sen = "This is a test sentence"
  var res = delVowels(sen)
  document.write(" String: " + sen +"<br>")
  document.write(" Vowels removed: " + res +"<br>")
 
  
  // 7. Write a function with switch statement to count the number of
  // occurrences of any two vowels in succession in a line of text.
  // For example, in the sentence
  // “Pleases read this application and give me gratuity”
  // Such occurrences are ea, ea, ui.
  
  function countVowels(text) {
    var vowels = ['a', 'e', 'i', 'o', 'u']
    var count = 0
  
    text = text.toLowerCase()

    for (var index = 0; index < text.length; index++) {
      var curChar = text[index];
      var nextChar = text[index + 1];
  
      switch (curChar) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
          if(vowels.includes(nextChar)){
          if (vowels.includes(nextChar)) {
            count++
            console.log(curChar, nextChar);
          }
          break;
      
  
        Default;
          break;
        }
      }
    }
    return count
  }
  var sen = "Pleases read this application and give me gratuity"
  var count = countVowels(sen)
  document.write(" Sentence "+ sen +"<br>")
  document.write(" Number of Occurrences "+ count +"<br>")
  document.write(" Sentence " + sen)
  document.write(" Number of Occurrences " + count +"<br>")

  
  // 8. The distance between two cities (in km.) is input through the
  // keyboard. Write four functions to convert and print this
  // distance in meters, feet, inches and centimeters.
  
  
  var userInput = prompt("Enter the distance in KM")
  function Meters(km) {
    return km * 1000
  }
  function Feet(km) {
    return km * 3280.84
  }
  function Inches(km) {
    return km * 39370.1 
    return km * 39370.1
  }
  function Centimeters(km) {
    return km * 100000
  }
  document.write("Distance in Kilo Meters: " + userInput + "km" + "<br>");
  document.write("Distance in Meters: " + Meters(userInput) + "m" + "<br>");
  document.write("Distance in Feet: " + Feet(userInput) + "ft" + "<br>");
  document.write("Distance in Inches: " + Inches(userInput) + "In" + "<br>");
  document.write("Distance in Centimeters: " + Centimeters(userInput) + "cm" + "<br>");

  
  
  // 9. Write a program to calculate overtime pay of employees.
  // Overtime is paid at the rate of Rs. 12.00 per hour for every hour
  // worked above 40 hours. Assume that employees do not work
  // for fractional part of an hour.
  
  function calOvertimePay(hours) {
    var regHours = 40
    var overtimeRate = 12.00
    if (hours > regHours) {
      var timeHours = hours - regHours
      var timePay = timeHours * timeRate
      return timePay
    }
    return 0
  }
  var hoursWork = 45
  document.write("Regular Hours: 40<br>")
  document.write("Overtime Rate: 12.00<br>")
  document.write("Hours Worked: " + hoursWork+ "<br>")
  document.write("Overtime Pay: " + calOvertimePay(hoursWork)+ "<br>")

  
  // 10. A cashier has currency notes of denominations 10, 50 and
  // 100. If the amount to be withdrawn is input through the
  // keyboard in hundreds, find the total number of currency notes
  // of each denomination the cashier will have to give to the withdrew
  
  document.write("Calculate Curreny Note")
  var hundreds = prompt("Enter amount to withdraw")
  function calCurrencyNotes(amountHundreds) {
    var note100 = Math.floor(amountHundreds / 100)
    amountHundreds %= 100
    var note50 = Math.floor(amountHundreds / 50)
    amountHundreds %= 50
    var note10 = Math.floor(amountHundreds / 10)
    return {
      note100,
      note50,
      note10
    }
  }
  var notes = calCurrencyNotes(hundreds)
  document.write("Amount to withdraw: " + hundreds + "<br>")
  document.write("Number of 100 Notes: " + notes.note100 + "<br>")
  document.write("Number of 50 Notes: " + notes.note50 + "<br>")
  document.write("Number of 10 Notes: " + notes.note10 + "<br>")
  