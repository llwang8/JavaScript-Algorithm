//w3resource.com  Exercises:
//JavaScript Recursion [9 exercises with solution]

/*==============================
Use recursion to solve the following exercises.

1. Write a JavaScript program to calculate the factorial of a number.
In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all
positive integers less than or equal to n. For example, 5! = 5 x 4 x 3 x 2 x 1 = 120
==============================*/
function factorial(num){
    if (num === 1) {
        return 1;
    }
    if (num <= 0){
        return "invalid entry";
    }
    return num * factorial(num - 1);
}
console.log(factorial(5));

/*==============================

2. Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers.
==============================*/
function greatestCommonDivisor(m,n){
    var result = [];
    var count = m > n ? m/2 : n/2;
    for (var i=1; i <= count; i++) {
        if (m % i === 0 && n % i === 0){
            result.push(i);
        }
    }
    return result.reduce(function(greatest, current){
        return greatest < current ? current : greatest;
    });
}
console.log(greatestCommonDivisor(2154, 458));

function gcd(a, b){
    if(!b){
        return a;
    }
    return gcd(b, a%b);
}
/*==============================

3. Write a JavaScript program to get the integers in range (x, y).
Example : range(2, 9)
Expected Output : [3, 4, 5, 6, 7, 8]
==============================*/
var range = function(begNum, endNum){
    if(endNum - begNum === 2){
        return [begNum + 1];
    }else {
        var list = range(begNum, endNum - 1);
        list.push(endNum - 1);
        return list;
    }
};
console.log(range(2,9));
/*==============================

4. Write a JavaScript program to compute the sum of an array of integers.
Example : var array = [1, 2, 3, 4, 5, 6]
Expected Output : 21
==============================*/
var recursiveSum = function (arr){
    if (arr.length === 1){
        return arr[0];
    }else {
        return arr.pop() + recursiveSum(arr);
    }
}
console.log(recursiveSum([1, 2, 3, 4, 5, 6]));
/*==============================

5. Write a JavaScript program to compute the exponent of a number.
Note : The exponent of a number says how many times the base number is used as a factor.
82 = 8 x 8 = 64. Here 8 is the base and 2 is the exponent.
==============================*/
var recursiveExponent = function(num, base){
    if (num == base) {
        return 1;
    }else {
        return 1 + recursiveExponent(num/base, base);
    }
}
console.log(recursiveExponent(729, 9));
/*==============================

6. Write a JavaScript program to get the first n Fibonacci numbers.
Note : The Fibonacci Sequence is the series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, . . .
Each subsequent number is the sum of the previous two.
==============================*/
var fibonacciArr = function(n){
    if (n == 1){
        return [0, 1];
    }else {
        var list = fibonacciArr(n-1);
        list.push(list[list.length-1] + list[list.length-2]);
        return list;
    }
}
console.log(fibonacciArr(10));
/*==============================

7. Write a JavaScript program to check whether a number is even or not.
==============================*/
function isEven(num){
    return num % 2 === 0 ? true : false
}
function isEvenRecursive(num){
    if(num < 0){
        num = Math.abs(num);
    }
    if(num === 0){
        return true;
    }
    if (num === 1){
        return false;
    }else {
        num = num -2;
        return isEvenRecursive(num);
    }
}
console.log(isEvenRecursive(234)); //true
console.log(isEvenRecursive(-45)); // false

/*==============================

8. Write a JavaScript program for binary search.
Sample array : [0,1,2,3,4,5,6]
console.log(l.br_search(5)) will return '5'
==============================*/
Array.prototype.binarySearch = function(target){
    var middle = parseInt(this.length / 2);
    if (target == this[middle]){
        return middle;
    }
    if(target > this[middle]){
        return middle + this.slice(middle, this.length).binarySearch(target);
    }else {
        return this.slice(0, middle).binarySearch(target);
    }
}

arr = [0,1,2,3,4,5,6];

console.log(arr.binarySearch(5));
/*==============================

9. Write a merge sort program in JavaScript.
Sample array : [34,7,23,32,5,62]
Sample output : [5, 7, 23, 32, 34, 62]
==============================*/
Array.prototype.mergeSort = function(){
    if (this.length === 1){
        return this;
    }
    var half = parseInt(this.length/2);
    var left = this.slice(0, half).mergeSort();
    var right = this.slice(half, this.length).mergeSort();
    var merge = function(left, right){
        var array = [];
        while (left.length > 0 && right.length > 0){
            array.push(left[0] <= right[0] ? left.shift() : right.shift() );
        }
        return array.concat(left).concat(right);
    };
    return merge(left, right);

}
var arr = [34,7,23,32,5,62];
console.log(arr.mergeSort());

/*==============================






