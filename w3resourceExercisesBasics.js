//w3resource.com  Basic Exercises:
/*==============================
1. Write a JavaScript program to display the current day and time in the following format.
Sample Output : Today is : Friday.
Current time is : 4 PM : 50 : 22
==============================*/
var d = new Date();
var prepand;
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var hours = d.getHours() > 12 ? d.getHours() - 12 : d.getHours();
var minutes = d.getMinutes();
var seconds = d.getMinutes();
prepand = hours > 12 ? "PM" : "AM";
if (d.getHours === 12  && minutes === 0 && seconds === 0){
    prepand = "NOON";
}else if (d.getHours === 0 && minutes === 0 && seconds === 0){
    prepand = "MIDNIGHT"
}
console.log("Today is: " + days[d.getDay()] + "\nCurrent time is: " + hours + prepand + " : " + minutes + " : " + seconds);

/*==============================
2. Write a JavaScript program to print the contents of the current window.
==============================*/
//<button onClick="printCurrentPage()">Print Current Page</button>
function printCurrentPage(){
    Window.print();
}


/*==============================
3. Write a JavaScript program to get the current date.
Expected Output :
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
==============================*/
var result, today, month, date, year, temp;
today = new Date();
month = today.getMonth() + 1;
date = today.getDate();
year = today.getFullYear();
month = month >=10 ? month : "0" + month;
date = date >=10 ? date : "0" + date;
result = [];
result.push(month);
result.push(date);
result.push(year);
console.log(result.join("-"));
console.log(result.join("/"));
temp = result[0];
result[0] = result[1];
result[1] = temp;
console.log(result.join("-"));
console.log(result.join("/"));

/*==============================
4. Write a JavaScript program to find the area of a triangle where lengths of the three of its
sides are 5, 6, 7.
==============================*/
var s, a=5, b=6, c=7, area;
s = (a + b + c) / 3;
area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
console.log(area);
/*==============================
5. Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically
removing one letter from the end of the string and attaching it to the front.
==============================*/
//<pre id="target">w3resource </pre>
function animate_string(id){
    var element = document.getElementById(id);
    var textNode = element.childNodes[0];
    var text = textNode.data;
    setInterval(function(){
        text = text[text.length - 1] + text.substring(0);
        textNode.data = text;
    }, 100);
}

/*==============================
6. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian
calendar.
==============================*/
function leapYear(){

}

/*==============================
7. Write a JavaScript program to find 1st January be a Sunday between 2014 and 2050.
==============================*/

var d = new Date();
for (var year=2014; year<=2050; year++){
  d.setFullYear(year, 0, 1);
  if (d.getDay() === 0) {
    console.log(d.getFullYear());
  }
}

/*==============================
8. Write a JavaScript program where the program takes a random integer between 1 to 10, the user
is then prompted to input a guess number. If the user input matches with guess number, the program
will display a message "Good Work" otherwise display a message "Not matched".

==============================*/
function guessWhat(){
    var ramNum = Math.ceil(Math.random() * 10);
    var guess = prompt("Guess what is the secret number?");
    if (guess == ramNum) {
        alert("Good Work!");
    }else {
        alert("Not matched.");
    }
}
guessWhat();

/*==============================
9. Write a JavaScript program to calculate days left until next Christmas.
==============================*/
function asUTC(date){
    var result = new Date(date);
    result.setMinutes(result.getMinutes() - result.getTimezoneOffset());
    return result;
}
function daysBeforeChristmas(){
    var result;
    var today = new Date();
    var year = today.getFullYear();
    var millisecondsPerDay = 1000 * 60 * 60 * 24;
    christmasDay = new Date(year, 11, 25);

    if (today > christmasDay){
        christmas.setFullYear(christmas.getFullYear + 1);
    }

    result = (asUTC(christmasDay).getTime() - asUTC(today).getTime())/millisecondsPerDay;
    return parseInt(result);
    //console.log(parseInt(result));
}
daysBeforeChristmas();

/*==============================
10. Write a JavaScript program to calculate multiplication and division of two numbers
(input from user).
Sample form :
sample form
==============================*/


/*==============================
11. Write a JavaScript program to convert temperatures to and from celsius, fahrenheit.
[ Formula : c/5 = (f-32)/9 [ where c = temperature in celsius and f = temperature in fahrenheit ]
Expected Output :
60°C is 140 °F
45°F is 7.222222222222222°C
==============================*/


/*==============================
12. Write a JavaScript program to get the website URL (loading page).
==============================*/
alert(document.URL);

/*==============================
