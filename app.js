//Chapter 21-25
//Question 1
// var firstName = prompt("Enter first name: ");
// var lastName = prompt("Enter last name: ");
// var fullName = firstName + "" + lastName;
// alert("Hello "+fullName);
// //Question 2
// var model = prompt("Enter your favourite mobile phone model: ");
// document.write("My favourite phone is: "+model);
// var stringLength = model.length;
// document.write("<br>Length of string: "+stringLength);
// //Question 3
// var str1 = "Pakistani";
// var ind = str1.indexOf("n");
// document.write("<br>String: "+str1);
// document.write("<br>Index of 'n': "+ind);
// //Question 4
// var str1 = "Hello World";
// var lastInd = str1.lastIndexOf("l");
// document.write("<br>String: "+str1);
// document.write("<br>Last index of 'l': "+lastInd);
// //Question 5
// var str1 = "Pakistani";
// var charInd = str1.charAt(3);
// document.write("<br>String: "+str1);
// document.write("<br>Character at Index 3 : "+charInd);
// //Question 6
// var firstName = prompt("Enter first name: ");
// var lastName = prompt("Enter last name: ");
// var fullName = firstName.concat(lastName);
// alert("Hello "+fullName);
// //Question 7
// var city = "Hyderabad";
// var repStr = city.replace("Hyder","Islam");
// document.write("<br>City: "+city);
// document.write("<br>After replacement: "+repStr);
// //Question 8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var repStr = message.replace(/and/g,"&");
// document.write("<br>Message: "+message);
// document.write("<br>After replacement: "+repStr);
// //Question 9
// var value = "472";
// document.write("<br>Value: "+value);
// if(typeof value == "string")
// {
//     document.write("<br>Type: String");
// }
// else
// {
//     document.write("<br>Type: Number");
// }
// value = parseInt(value);
// document.write("<br>Value: "+value);
// if(typeof value == "string")
// {
//     document.write("<br>Type: String");
// }
// else
// {
//     document.write("<br>Type: Number");
// }
// //Question 10
// var userInput = prompt("Enter any string: ");
// document.write("<br>User Input: "+userInput);
// userInput = userInput.toUpperCase();
// document.write("<br>Upper case: "+userInput);
//Question 11
// var str2 = prompt("Enter any string: ");
// document.write("<br>User Input: "+str2);
// var first = str2.slice(0,1);
// first = first.toUpperCase();
// var remaining = str2.slice(1);
// document.write("<br>Title case: "+first+remaining);
// //Question 12
// var num = 35.36;
// document.write("<br>Number: "+num);
// var str2 = num.toString();
// document.write("<br>Result: "+str2);
//Question 13
// var userName = prompt("Enter user name: ");
// for(var i=0;i<userName.length;i++)
// {
//     if(userName[i] == "!" || userName[i] == "@" || userName[i] == "," || userName[i] == ".")
//     {
//         alert("Enter a valid username.");
//         break;
//     }
//     else
//     {
//         alert("Username: "+userName);
//     }
// }
//Question 14
// var A = ["cake","apple pie","cookie","chips","patties"];
// var uInput = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
// uInput = uInput.toLowerCase();
// var items = A.indexOf(uInput);
// if(A.indexOf(uInput) != -1)
// {
//         alert(uInput+" is available at index "+items+" in our bakery.");
// }
// else
// {
//     alert(uInput+" is not available in our bakery.");
// }
//Question 15
// var pass = prompt("Enter your password: ");
// if(pass.slice(0,1)>='0'&&pass.slice(0,1)<='9')
// {
//     alert("Password can not begin with a number.");
// }
// else if(pass.length>=6)
// {
//     alert(pass);
// }
// else if(pass>='a'&&pass<='z'||pass>='A'&&pass<='Z'||pass>='0'&&pass<='9')
// {
//     alert(pass);
// }
// else
// {
//     alert("Please enter a valid password.");
// }
//Question 16
// var university = "University of Karachi";
// var uni = university.split("");
// for(var i=0;i<university.length;i++)
// {
//     document.write("<br>"+uni[i]);
// }
//Question 17
// var userInput = prompt("Enter something: ");
// document.write("<br>"+userInput);
// document.write("<br>Last character of input: "+userInput.charAt(userInput.length - 1));
//Question 18
// var str1 = "The quick brown fox jumps over the lazy dog";
// document.write("<br>"+str1);
// str1 = str1.toLowerCase();
// var str1Len = str1.length;
// var searchFor = "the";
// var indexOfSearch = str1.indexOf(searchFor);
// var countWord = 0;
// for (var i = 0; i < str1Len; i++) 
// {
// if (str1.indexOf(str1.charAt(i)) === indexOfSearch) 
// {
//     countWord++
// }
// }
// document.write("<br>There are "+countWord+" occurences of the word 'the'.");
//Chapter 26-30
//Question 1
// var num = +prompt("Enter a number: ");
// document.write("<br>Number: "+num);
// document.write("<br>Round off value: "+Math.round(num));
// document.write("<br>Floor value: "+Math.floor(num));
// document.write("<br>Ceil value: "+Math.ceil(num));
//Question 2
// var num = +prompt("Enter a negative floating point number: ");
// document.write("<br>Number: "+num);
// document.write("<br>Round off value: "+Math.round(num));
// document.write("<br>Floor value: "+Math.floor(num));
// document.write("<br>Ceil value: "+Math.ceil(num));
//Question 3
// var num = +prompt("Enter any number: ");
// document.write("<br>The absolute value of "+num+" is "+Math.abs(num));
// //Question 4
// var dice = Math.random();
// dice = dice * 10;
// dice = dice.toFixed(0);
// document.write("<br>Random dice value: "+dice);
//Question 5
// var user1 = Math.random();
// user1 = user1.toFixed(0);
// var user2 = Math.random();
// user2 = user2.toFixed(0);
// if(user1 == "0")
// {
//     document.write("<br>"+user1);
//     document.write("<br>Random coin value: Heads");
// }
// else
// {
//     document.write("<br>"+user1);
//     document.write("<br>Random coin value: Tails");
// }
// if(user2 == "0")
// {
//     document.write("<br>"+user2);
//     document.write("<br>Random coin value: Heads");
// }
// else
// {
//     document.write("<br>"+user2);
//     document.write("<br>Random coin value: Tails");
// }
// //Question 6
// var randNum = Math.random();
// randNum = randNum * 100;
// randNum = randNum.toFixed(0);
// document.write("<br>Random number between 1 & 100: "+randNum);
//Question 7
// var weight = prompt("Enter your weight in kilograms: ");
// weight = parseFloat(weight);
// document.write("<br>The weight of user is: "+weight+" kilograms");
//Question 8
// var num1 = Math.random();
// num1 = num1*10;
// num1 = num1.toFixed(0);
// var num2 = +prompt("Enter a number between 1 and 10: ");
// if(num2 == num1)
// {
//     alert("Congrats you guessed it correct!");
// }
// else
// {
//     alert("Try again!");
// }
//Chapter 31-34
//Question 1
// document.write("<br>"+Date());
//Question 2
// var date = new Date();
// var month = new Array();
// month[0] = "January";
// month[1] = "February";
// month[2] = "March";
// month[3] = "April";
// month[4] = "May";
// month[5] = "June";
// month[6] = "July";
// month[7] = "August";
// month[8] = "September";
// month[9] = "October";
// month[10] = "November";
// month[11] = "December";
// var currentMonth = month[date.getMonth()];
// alert(currentMonth);
//Question 3
// var date = new Date();
// var day = new Array();
// day[0] = "Sunday";
// day[1] = "Monday";
// day[2] = "Tuesday";
// day[3] = "Wednesday";
// day[4] = "Thursday";
// day[5] = "Friday";
// day[6] = "Saturday";
// var today = day[date.getDay()];
// today = today.slice(0,3);    
// alert("Today is "+today);
//Question 4
// var date = new Date();
// var today = date.getDay();
// if(today == "0" || today == "6")
// {
//     alert("It's Fun day");
// }
//Question 5
// var date = new Date();
// var day = date.getDate();
// if(day < 16)
// {
//     document.write("First fifteen days of the month");
// }
// else
// {
//     document.write("Last fifteen days of the month");
// }
//Question 6
// var date = new Date();
// document.write("Current Date: "+date);
// var millisec = date.getTime();
// document.write("<br>Elapsed milliseconds since January,1 1970: "+millisec);
// var minutes = millisec / (1000 * 60 * 60);
// document.write("<br>Elapsed minutes since January,1 1970: "+minutes);
// Question 7
// var date = new Date();
// var time = date.getHours();
// if(time < 12)
// {
//     alert("It's AM");
// }
// else
// {
//     alert("It's PM");
// }
// Question 8
// var LaterDate = new Date();
// LaterDate.setDate(214);
// document.write("Later Date: "+LaterDate);
//Question 9
// var date = new Date("April 25,2020");
// var days = new Date();
// var milli = date.getTime();
// var millisec = days.getTime();
// var noOfDays = millisec - milli;
// noOfDays = noOfDays/(1000*24*60*60);
// noOfDays = Math.floor(noOfDays);
// document.write("<br>"+noOfDays+" days have passed since 1st Ramadan,2020");
// Question 10
// var date = new Date("Sat Dec 05 2015 22:50:16 GMT+0500 (PKT)");
// document.write("<br>On reference date "+date);
// var newDate = new Date("Jan 01,2015");
// date = date.getTime();
// newDate = newDate.getTime();
// var sec = date - newDate;
// sec = sec/(1000*60);
// sec = Math.ceil(sec);
// document.write("<br>"+sec+" seconds had passed since beginning of 2015"); 
// Question 11
// var date = new Date();
// document.write("<br>Current date: "+date);
// var hours = date.getHours();
// hours = hours - 1;
// date.setHours(hours);
// document.write("<br>1 hour ago, it was "+date);
// Question 12
// var date = new Date();
// alert("Current Date: "+date);
// var year = date.getFullYear();
// year = year - 100;
// date.setFullYear(year);
// alert(date);
// Question 13
// var age = +prompt("Enter your age: ");
// document.write("<br>Your age is: "+age);
// var date = new Date();
// date = date.getFullYear();
// date = date - age;
// document.write("<br>Your birth year is: "+date);
// Chapter 35-38
// Question 1
// function currentDT()
// {
//     var date = new Date();
//     document.write("<br>"+date);
// }
// currentDT();
// Question 2
// function greeting(firstName,lastName)
// {
//     alert("Hello "+firstName+""+lastName);
// }
// var firstName = prompt("Enter your first name: ");
// var lastName = prompt("Enter your last name: ");
// greeting(firstName,lastName);
//Question 3
// function sum(num1,num2)
// {
//     alert("Sum of "+num1+"+"+num2+"="+result);
// }
// var num1 = +prompt("Enter first number: ");
// var num2 = +prompt("Enter second number: ");
// var result = num1+num2;
// sum(num1,num2);
// Question 4
// function calculator(num1,operator,num2)
// {
//     var result = 0;
//     if(operator == "+")
//     {
//         result = num1+num2;
//     }
//     else if(operator == "-")
//     {
//         result = num1-num2;
//     }
//     else if(operator == "*")
//     {
//         result = num1*num2;
//     }
//     else if(operator == "/")
//     {
//         result = num1/num2;
//     }
//     else if(operator == "%")
//     {
//         result = num1%num2;
//     }
//     else
//     {
//         result = "Invalid Operator";
//     }
//     document.write(num1+operator+num2+"="+result);
// }
// var num1 = +prompt("Enter first number: ");
// var operator = prompt("Enter operator: ");
// var num2 = +prompt("Enter second number: ");
// calculator(num1,operator,num2);
//Question 5
// function square(num)
// {
//     alert(result);
// }
// var num = +prompt("Enter a number: ");
// result = num * num;
// square(num);
//Question 6
// function factorial(num)
// {   
//     if(num > 1)
//     {
//         return num * factorial(num-1);
//     }
//     else
//     {
//         return 1;
//     }
// }
// var num = +prompt("Enter a number: ");
// document.write("Factorial of "+num+" is "+factorial(num));
//Question 7
// function counting(start,end)
// {
//     for(var i=start;i<=end;i++)
//     {
//         document.write(i);
//         document.write("<br>");
//     }
// }
// var start = +prompt("Enter starting number for counting: ");
// var end = +prompt("Enter ending number for counting: ");
// counting(start,end);
//Question 8
// function hypotenuse(result)
// {
//     var hypotenuse = result;
//     document.write(hypotenuse);
// }
// function square(base,perpendicular)
// {
//     base = base * base;
//     perpendicular = perpendicular * perpendicular;
//     result = base + perpendicular;
// }
// var base = +prompt("Enter base to calculate hypotenuse: ");
// var perpendicular = +prompt("Enter perpendicular to calculate hypotenuse: ");
// square(base,perpendicular);
// hypotenuse(result);
// Question 9
// function area(width,height)
// {
//     var a = width * height;
//     document.write("<br>The area of rectangle is: "+a);
// }
// var width = +prompt("Enter the width of rectangle: ");
// var height = +prompt("Enter the height of rectangle: ");
// area(width,height);
// function area(width,height)
// {
//     var a = width * height;
//     document.write("<br>The area of rectangle is: "+a);
// }
// area(5,8);
//Question 10
// function check(str1)
// {
//     var check = "";
//     for(var i=str1.length - 1;i>=0;i--)
//     {
//         check+=str1[i];
//     }
//     if(check === str1)
//     {
//         document.write("<br>"+str1+" is a palindrome word")
//     }
//     else
//     {
//         document.write("<br>"+str1+" is not a palindrome word.")
//     }
// }
// var str1 = prompt("Enter a string to check whether its palindrome word or not:");
// check(str1);
//Question 11
// function upper(str1)
// {
//     var arr1 = str1.split(' ');
//     var arr = [];
//     for(var i=0;i<arr1.length;i++)
//     {
//         arr.push(arr1[i].charAt(0).toUpperCase()+arr1[i].slice(1));
//     }
//     return arr.join(' ');
// }
// var str1 = prompt("Enter any string: ");
// document.write(upper(str1));
// Question 12
// function longest(str1)
// {
//     var arr1 = str1.split(' ');
//     document.write(arr1);
//     for(var i=0;i<=arr1.length;i++)
//     {
//         if(arr1[i].length > arr1[i+1].length)
//         {
//             document.write(arr1[i]);
//         }
//     }
// }
// var str1 = prompt("Enter any string: ");
// longest(str1);
// Question 13
// function occur(str1,letter)
// {
//     for(var i=0;i<str1.length;i++)
//     {
//         if(str1[i] == letter)
//         {
//             count = count + 1;
//         }
//     }
//     document.write("The letter "+letter+" appeared "+count+" times in the string");
// }
// var str1 = prompt("Enter any string: ");
// var letter = prompt("Enter any letter of the string to know its number of occurence: ");
// var count = 0;
// occur(str1,letter);
//Question 14
// function calcCircumference(rad)
// {
//     var result = 2 * 3.142 * rad;
//     document.write("The Circumference of circle is: "+result);
// }
// function calcArea(rad)
// {
//     var result = 3.142 * rad * rad;
//     document.write("<br>The Area of circle is: "+result);
// }
// var rad = +prompt("Enter the radius of the circle: ");
// calcCircumference(rad);
// calcArea(rad);