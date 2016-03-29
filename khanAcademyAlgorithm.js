//Khan Academy

//binary search
/* Returns either the index of the location in the array,
  or -1 if the array did not contain the targetValue */
var doSearch = function(array, targetValue) {
    var min = 0;
    var max = array.length - 1;
    var guess;
    while(min <= max){
        guess = Math.floor((max+min)/2);
        console.log(guess);
        console.log(array[guess]);
       if (array[guess] === targetValue){
        return guess;
       }else if (array[guess] < targetValue) {
           min = guess + 1;
       }else {
           max = guess - 1;
       }
    }
    return -1;
};

var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37,
        41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

var result = doSearch(primes, 73);
console.log("Found prime at index " + result);

//Program.assertEqual(doSearch(primes, 73), 20);


//selection sort
var swap = function(array, firstIndex, secondIndex) {
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
};

var indexOfMinimum = function(array, startIndex) {

    var minValue = array[startIndex];
    var minIndex = startIndex;

    for(var i = minIndex + 1; i < array.length; i++) {
        if(array[i] < minValue) {
            minIndex = i;
            minValue = array[i];
        }
    }
    return minIndex;
};

var selectionSort = function(array) {
    var position;
    for (var j=0; j<array.length; j++) {
        position = indexOfMinimum(array, j);
        swap(array, j, position);
    }
};

var array = [22, 11, 99, 88, 9, 7, 42];
selectionSort(array);
println("Array after sorting:  " + array);
Program.assertEqual(array, [7, 9, 11, 22, 42, 88, 99]);


//insertion sort
var insert = function(array, rightIndex, value) {
    for(var j = rightIndex;
        j >= 0 && array[j] > value;
        j--) {
        array[j + 1] = array[j];
    }
    array[j + 1] = value;
};

var insertionSort = function(array) {
    for(var i=1; i<array.length; i++){
        insert(array, i-1, array[i]);
    }
};

var array = [22, 11, 99, 88, 9, 7, 42];
insertionSort(array);
println("Array after sorting:  " + array);
Program.assertEqual(array, [7, 9, 11, 22, 42, 88, 99]);

var array = [2, 55, 19, 8, 99, 7, -12];
insertionSort(array);
println("Array after sorting:  " + array);
Program.assertEqual(array, [-12,2,7,8,19,55,99]);


//iterative factorial
var factorial = function(n) {
    var result = 1;
    for (var i=1; i<=n; i++){
        result *= i;
    }

    return result;
};

println("The value of 5! should be " + 5*4*3*2*1);
println("The value of 5! is " + factorial(5));
println("The value of 0! should be 1");
println("The value of 0! is " + factorial(0));

Program.assertEqual(factorial(5), 120);
Program.assertEqual(factorial(0), 1);
Program.assertEqual(factorial(6), 720);
Program.assertEqual(factorial(3), 6);

//recursive factorial
var factorial = function(n) {
    // base case:
    if (n === 0) {
        return 1;
    }
    // recursive case:
    return n * factorial(n-1);
};

println("The value of 0! is " + factorial(0) + ".");
println("The value of 5! is " + factorial(5) + ".");

Program.assertEqual(factorial(0), 1);
Program.assertEqual(factorial(5), 120);
Program.assertEqual(factorial(7), 5040);
Program.assertEqual(factorial(4), 24);

//is string palindrome?
// Returns the first character of the string str
var firstCharacter = function(str) {
    return str.slice(0, 1);
};

// Returns the last character of a string str
var lastCharacter = function(str) {
    return str.slice(-1);
};

// Returns the string that results from removing the first
//  and last characters from str
var middleCharacters = function(str) {
    return str.slice(1, -1);
};

var isPalindrome = function(str) {
    // base case #1
    if (str.length === 0 || str.length === 1) {
        return true;
    }

    // base case #2
    // recursive case
    if (firstCharacter(str) !== lastCharacter(str)) {
        return false;
    }else {
        return isPalindrome(middleCharacters(str));
    }
};

var checkPalindrome = function(str) {
    println("Is this word a palindrome? " + str);
    println(isPalindrome(str));
};

checkPalindrome("a");
Program.assertEqual(isPalindrome("a"), true);
checkPalindrome("motor");
Program.assertEqual(isPalindrome("motor"), false);
checkPalindrome("rotor");
Program.assertEqual(isPalindrome("rotor"), true);
Program.assertEqual(isPalindrome(""), true);
Program.assertEqual(isPalindrome("hi there"), false);


//recursive power
var isEven = function(n) {
    return n % 2 === 0;
};

var isOdd = function(n) {
    return !isEven(n);
};

var power = function(x, n) {
    println("Computing " + x + " raised to power " + n + ".");
    // base case
    if (n === 0) {return 1;}
    // recursive case: n is negative
    // recursive case: n is odd
    // recursive case: n is even
    if (n < 0) {
        return 1/power(x, -n);
    }else if (isOdd(n)) {
        return x * power(x, n-1);
    }else {
        var halfPower = power(x, n/2);
        return halfPower * halfPower;
    }

};

var displayPower = function(x, n) {
    println(x + " to the " + n + " is " + power(x, n));
};

displayPower(3, 0);
Program.assertEqual(power(3, 0), 1);
displayPower(3, 1);
Program.assertEqual(power(3, 1), 3);
displayPower(3, 2);
Program.assertEqual(power(3, 2), 9);
displayPower(3, -1);
Program.assertEqual(power(3, -1), 1/3);
displayPower(5, 2);
Program.assertEqual(power(5, 2), 25);
displayPower(5, -1);
Program.assertEqual(power(5, -1), 0.2);

//recursive art
var drawShape = function(x, y, radius) {

    fill(255, 0, 247);
    stroke(4, 69, 66);
    ellipse(x, y, radius, radius/3);
    fill(0, 21, 255);
    var newRadius = radius/2;
    if (newRadius >= 2) {
        drawShape(x, y, newRadius);
    }
};
background(0, 51, 255);
drawShape(width/2, height/6, 380);
drawShape(width/2, height/5, 280);
drawShape(width/2, height/4, 180);
drawShape(width/2, height/3, 80);
drawShape(width/2, height/2, 80);


//merge sort
// Takes in an array that has two sorted subarrays,
//  from [p..q] and [q+1..r], and merges the array
var merge = function(array, p, q, r) {
    var lowHalf = [];
    var highHalf = [];

    var k = p;
    var i;
    var j;
    for (i = 0; k <= q; i++, k++) {
        lowHalf[i] = array[k];
    }
    for (j = 0; k <= r; j++, k++) {
        highHalf[j] = array[k];
    }

    k = p;
    i = 0;
    j = 0;

    while(i < lowHalf.length && j < highHalf.length){
     if (lowHalf[i] < highHalf[j]){
        array[k] = lowHalf[i];
        k++;
        i++;
     }else {
        array[k] = highHalf[j];
        k++;
        j++;
     }
    }


    // Once one of lowHalf and highHalf has been fully copied
    //  back into array, copy the remaining elements from the
    //  other temporary array back into the array
    while(i < lowHalf.length){
        array[k] = lowHalf[i];
        k++;
        i++;
    }
    while(j < highHalf.length){
        array[k] = highHalf[j];
        k++;
        j++;
    }

};


var array = [3, 7, 12, 14, 2, 6, 9, 11];
merge(array, 0,
    Math.floor((0 + array.length-1) / 2),
    array.length-1);
println("Array after merging: " + array);
//Program.assertEqual(array, [2, 3, 6, 7, 9, 11, 12, 14]);


// Takes in an array and recursively merge sorts it
var mergeSort = function(array, p, r) {
    var q = floor((p+r)/2);
    if (p !== r){
        mergeSort(array, p, q);
        mergeSort(array, q+1, r);
        merge(array, p, q, r);
    }
};

var array = [14, 7, 3, 12, 9, 11, 6, 2];
mergeSort(array, 0, array.length-1);
println("Array after sorting: " + array);
Program.assertEqual(array, [2, 3, 6, 7, 9, 11, 12, 14]);


//quicksort
// Swaps two items in an array, changing the original array
var swap = function(array, firstIndex, secondIndex) {
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
};

var partition = function(array, p, r) {
    // Compare array[j] with array[r], for j = p, p+1,...r-1
    // maintaining that:
    //  array[p..q-1] are values known to be <= to array[r]
    //  array[q..j-1] are values known to be > array[r]
    //  array[j..r-1] haven't been compared with array[r]
    // If array[j] > array[r], just increment j.
    // If array[j] <= array[r], swap array[j] with array[q],
    //   increment q, and increment j.
    // Once all elements in array[p..r-1]
    //  have been compared with array[r],
    //  swap array[r] with array[q], and return q.
    var q = p;
    for(var j=p; j<r; j++){
        if (array[j] <= array[r]){
            swap(array, j, q);
            q++;
        }
    }
    swap(array, q, r);
    return q;
};

var array = [9, 7, 5, 11, 12, 2, 14, 3, 10, 4, 6];
var q = partition(array, 0, array.length-1);
println("Array after partitioning: " + array);
Program.assertEqual(q, 4);
Program.assertEqual(array, [5, 2, 3, 4, 6, 7, 14, 9, 10, 11, 12]);

array = [5, -2, 3, 0, 6, 71, -11, 39, 10, 81, 12];
var q = partition(array, 0, array.length-1);
println("Array after partitioning: " + array);
Program.assertEqual(q, 7);
Program.assertEqual(array, [5,-2,3,0,6,-11,10,12,71,81,39]);





