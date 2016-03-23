//w3resource.com  Exercises:
//JavaScript conditional statements and loops [ 12 exercises with solution]

/*==============================
1. Write a JavaScript program that accept two integers and display the larger.
==============================*/
function getLarger(n, m){
    return n > m ? n : m;
}

/*==============================

2. Write a JavaScript conditional statement to find the sign of product of three numbers.
Display an alert box with the specified sign.
Sample numbers : 3, -7, 2
Output : The sign is -
==============================*/
function displaySign(i,j,k){
    i*j*K > 0 ? alert("The sign is +") : alert("The sign is -");
}

/*==============================

3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to
how the result.
Sample numbers : 0, -1, 4
Output : 4, 0, -1
==============================*/
function sort(a, b, c){
    var arr = [];
    arr.push(a);
    arr.push(b);
    arr.push(c);
    arr.sort();
    alert(arr);
}

/*==============================

4. Write a JavaScript conditional statement to find the largest of five numbers. Display
an alert box to show the result.
Sample numbers : -5, -2, -6, 0, -1
Output : 0
==============================*/
function findMax(a, b, c, d, e){
    alert(Math.max(parseInt(a), parseInt(b), parseInt(c), parseInt(d), parseInt(e)));
}

/*==============================

5. Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will
check if the current number is odd or even, and display a message to the screen.
editor
Sample Output :
"0 is even"
"1 is odd"
"2 is even"
----------
----------
==============================*/
for (var i=0; i<=15; i++) {
    if (i%2 === 0){
        console.log(i " is even");
    }else {
        console.log(i " is odd");
    }

}
/*==============================

6. Write a JavaScript program which compute, the average marks of the following students
Then, this average is used to determine the corresponding grade.

Student Name    Marks
David   80
Vinoth  77
Divya   88
Ishitha 95
Thomas  68
The grades are computed as follows :

Range   Grade
<60 F
<70 D
<80 C
<90 B
<100    A
==============================*/
var students = [
    {name: "David", mark: 80},
    {name: "Vinoth", mark: 77},
    {name: "Divya",  mark: 88},
    {name: "Ishitha", mark: 95},
    {name: "Thomas", mark: 68}
    ];
var range = [{60: "F"}, {70: "D"}, {80: "C"}, {90: "B"}, {100: "A"}];

function grades(studentsArr){
    var sumMark = students.reduce(function(sum, cur){
        return sum += cur.mark;
    });
    var avgMark = sumMark / studentsArr.length;
    for (var i=0; i<studentsArr.length; i++){
        for (var j=0; j<range.length; j++){
            if (studentsArr[i].mark < parseInt(range[i].keys)){  //????
                studnetsArr[i].grade = range[i].valueOf;
                console.log(studentsArr[i].name + " : " + studentsArr[i].grade);
            }
        }
    }
    f
}
grades(students);

/*==============================

7. Write a JavaScript program which iterates the integers from 1 to 100. But for multiples
of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For
numbers which are multiples of both three and five print "FizzBuzz".
==============================*/
function fizzBuzz(){
    for (var i=1; i<=100; i++){
        if (i%3 === 0 && i%5 === 0){
            console.log("FizzBuzz");
        }else if (i%3 === 0) {
            console.log("Fizz");
        }else if (i%5 === 0){
            console.log("Buzz");
        }else {
            console.log(i);
        }
    }
}

fizzBuzz();
/*==============================

8. According to Wikipedia a happy number is defined by the following process :
"Starting with any positive integer, replace the number by the sum of the squares of its
digits, and repeat the process until the number equals 1 (where it will stay), or it loops
endlessly in a cycle which does not include 1. Those numbers for which this process ends in
1 are happy numbers, while those that do not end in 1 are unhappy numbers (or sad numbers)".
Write a JavaScript program to find and print the first 5 happy numbers.
==============================*/
function isHappyNum(n){
    if (n === 1){
        return true;
    }
    if (newNum === 58 || newNum === 4 || newNum == 37) {
         return false;
     }
    var n = n.toString().split('').reduce(function(sum, digit){
        sum += +digit * +digit;
    }, 0).join('');

    return isHappyNum(n);
}
var count = 5;
var num = 1;
var result = [];
while (count > 0){
    while (!isHappyNum(num)){
        num ++;
    };
    result.push(n);
    num ++;
    count --;
}
console.log(result);
/*==============================

9. Write a JavaScript program to find the armstrong numbers of 3 digits. Go to the editor
Note : An Armstrong number of three digits is an integer such that the sum of the cubes of
its digits is equal to the number itself. For example, 371 is an Armstrong number since
3**3 + 7**3 + 1**3 = 371.
==============================*/
for (var i=100; i<500; i++){
    var arr = i.toString().split('');
    var sumOfCube = arr[0]*arr[0]*arr[0] + arr[1]*arr[1]*arr[1] + arr[2]*arr[2]*arr[2];
    if (i == sumOfCube){
        console.log(i);
    }
}

/*==============================

10. Write a JavaScript program to construct the following pattern, using a nested for loop.

*
* *
* * *
* * * *
* * * * *
==============================*/
var n = 1;
var msg = "";
while (n < 5){
    for (var i=1; i<=n; i++ ){
        msg += "*";
    }
    console.log(msg);
    n += 1;
    msg = "";
}
/*==============================

11. Write a JavaScript program to compute the greatest common divisor (GCD) of two positive
integers.
==============================*/


/*==============================

12. Write a JavaScript program to sum the multiples of 3 and 5 under 1000.
==============================*/
var sum = 0;
for (var i=0; i<1000; i++){
    if (i%3 === 0 && i%5 === 0){
        sum += i;
    }
}
console.log(sum);
/*==============================