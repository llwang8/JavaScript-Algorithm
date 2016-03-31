
//JavaScript Math [43 exercises with solution]

/*==============================

1. Write a JavaScript function to convert a number from one base to another.
Note : Both bases must be between 2 and 36.
Test Data :
console.log(base_convert('E164',16,8));
console.log(base_convert(1000,2,8));
"160544"
"10"
==============================*/
function baseConvert(obj, begBase, endBase ){
    if (begBase < 2  && endBase > 36){
        throw new Error("Bases are not valid");
    }else {
        return parseInt(obj, begBase).toString(endBase);
    }
}
console.log(baseConvert('E164',16,8));
console.log(baseConvert(1000,2,8));
/*==============================
2. Write a JavaScript function to convert a binary number to a decimal number.
Test Data :
console.log(bin_to_dec('110011'));
console.log(bin_to_dec('100'));
51
4
==============================*/
function binaryToFloat(str){
    return parseFloat(parseInt(str, 2));
}
console.log(binaryToFloat('110011'));
console.log(binaryToFloat('100'));

/*==============================
3. Write a JavaScript function to convert a decimal number to binary, hexadecimal or octal
number.
Test Data :
console.log(dec_to_bho(120,'B'));
console.log(dec_to_bho(120,'H'));
console.log(dec_to_bho(120,'O'));
"1111000"
"78"
"170"
==============================*/
function decimalToBinHexOct(num, type){
    if (n < 0){
        return ("must be a positive number");
    }
    switch (type){
        case "B":
            return num.toString(2);
        case "H":
            return num.toString(16);
        case "O":
            return num.toString(8);
    }
}
console.log(decimalToBinHexOct(120,'B'));
console.log(decimalToBinHexOct(120,'H'));
console.log(decimalToBinHexOct(120,'O'));

/*==============================
4. Write a JavaScript function to generate a random integer.
Test Data :
console.log(rand(20,1));
console.log(rand(1,10));
console.log(rand(6));
console.log(rand());
15
5
1
0
==============================*/
function randomNum(){
    if (arguments.length >= 2){
        var uRange = Math.max(arguments[0], arguments[1]);
        var lRange = Math.min(arguments[0], arguments[1]);
        return Math.floor(Math.random() * (uRange - lRange + 1));
    }else if (arguments.length === 1){
        return Math.floor(Math.random() * arguments[0] + 1);
    }else {
        return Math.floor(Math.random());
    }
}
console.log(randomNum(20,1));
console.log(randomNum(1,10));
console.log(randomNum(6));
console.log(randomNum());

/*==============================
5. Write a JavaScript function to format a number up to specified decimal places.
Test Data :
console.log(decimals(2.100212, 2));
console.log(decimals(2.100212, 3));
console.log(decimals(2100, 2));
"2.10"
"2.100"
"2100.00"
==============================*/
function formatDecimal(num, d){
    if (typeof num === 'number' && typeof d === 'number'){
        num = parseFloat(num) || 0;
        return num.toFixed(d);
    }else {
        return false;
    }
}
console.log(formatDecimal(2.100212, 2));
console.log(formatDecimal(2.100212, 3));
console.log(formatDecimal(2100, 2));

/*==============================

6. Write a JavaScript function to find the highest value in an array.
Test Data :
console.log(max([12,34,56,1]));
console.log(max([-12,-34,0,-56,-1]));
56
0
==============================*/
function maxInArray(input){
    if (toString.call(input) !== "[object Array]"){
        return false;
    }
    return Math.max.apply(null, input);
}
console.log(maxInArray([12,34,56,1]));
console.log(maxInArray([-12,-34,0,-56,-1]));

/*==============================

7. Write a JavaScript function to find the lowest value in an array.
Test Data :
console.log(min([12,34,56,1]));
console.log(min([-12,-34,0,-56,-1]));
1
-56
==============================*/
function minInArray(input){
    if (toString.call(input) !== "[object Array]"){
        return false;
    }
    return Math.min.apply(null, input);
}
console.log(minInArray([12,34,56,1]));
console.log(minInArray([-12,-34,0,-56,-1]));

/*==============================

8. Write a JavaScript function to get the greatest common divisor (gcd) of two integers.
Note :
According to Wikipedia - In mathematics, the greatest common divisor (gcd) of two or more
integers, when at least one of them is not zero, is the largest positive integer that
divides the numbers without a remainder. For example, the GCD of 8 and 12 is 4.

Test Data :
console.log(gcd_two_numbers(12, 13));
console.log(gcd_two_numbers(9, 3));
Output :
1
3
==============================*/
function gcdTwoNum(m, n){
    var result = [];
    var limit = Math.max(Math.min(m, n), Math.floor(Math.max(m, n)/2));
    for (var i=1; i<=limit; i++ ){
        if(m % i === 0 && n % i === 0){
            result.push(i);
        }
    }
    return Math.max.apply(null, result);
}

function gcdTwoNum2(m, n){
    if (typeof m !== 'number' && typeof n !== 'number'){
        return false;
    }
    m = Math.abs(m);
    n = Math.abs(n);
    while (n){
        var t = n;
        n = m%n;
        m = t;
    }
    return m;
}
console.log(gcdTwoNum(12, 13));
console.log(gcdTwoNum(9, 3));

/*==============================

9. Write a JavaScript function to find the GCD (greatest common divisor) of more than 2
integers.
Test Data :
console.log(gcd_more_than_two_numbers([3,15,27]));
console.log(gcd_more_than_two_numbers([5,10,15,25]));
Output :
3
5
==============================*/
function gcdMoreThanTwoNum(input){
    if (toString.call(input) !== "[object Array]"){
        return false;
    }
    var len, a, b;
    len = input.length;
    if (!len){
        return null;
    }
    a = input[0];
    for (var i=1; i<len; i++){
        b = input[i];
        a = gcdTwoNum(a, b);
    }
    return a;
}

/*==============================

10. Write a JavaScript function to get the least common multiple (LCM) of two numbers.
Note :
According to Wikipedia - A common multiple is a number that is a multiple of two or more
integers. The common multiples of 3 and 4 are 0, 12, 24, .... The least common multiple
(LCM) of two numbers is the smallest number (not zero) that is a multiple of both.
Test Data :
console.log(lcm_two_numbers(3,15));
console.log(lcm_two_numbers(10,15));
Output :
15
30
==============================*/
function lcmOfTwo(m, n){
    //check type is number
    return (!m || !n) ? 0 : Math.abs(m * n) / gcdTwoNum(m, n);
}


/*==============================

11. Write a JavaScript function to get the least common multiple (LCM) of more than 2
integers. Go to the editor
Test Data :
console.log(lcm_more_than_two_numbers([100,90,80,7]));
console.log(lcm_more_than_two_numbers([5,10,15,25]));
Output :
25200
150
==============================*/



/*==============================

12. Write a JavaScript function to find out if a number is a natural number or not.
Note :
Natural numbers are whole numbers from 1 upwards : 1, 2, 3, and so on ... or from 0
upwards in some area of mathematics: 0, 1, 2, 3 and so on ...
No negative numbers and no fractions.
Test Data :
console.log(is_Natural(-15));
console.log(is_Natural(1));
console.log(is_Natural(10.22));
console.log(is_Natural(10/0));
Output :
false
true
false
false
==============================*/
function isNatualNum(n){
    if (typeof n !== 'number'){
        return "not a number";
    }
    return (n > 0.0) && (Math.abs(n) === n) && (n !== 'infinite');
}


/*==============================

13. Write a JavaScript function to test if a number is a power of 2.
Test Data :
console.log(power_of_2(16));
console.log(power_of_2(18));
console.log(power_of_2(256));
Output :
true
false
true
==============================*/
function isPowerOf2(n){
    if (typeof n !== 'number'){
        return "not a number";
    }
    if (n === 2){
        return true;
    }else if (n > 1) {
        return isPowerOf2(n/2);
    }
    return false;
}
console.log(isPowerOf2(16));
console.log(isPowerOf2(18));
console.log(isPowerOf2(256));

function power_of_2(n) {
 if (typeof n !== 'number')
      return 'Not a number';

    return n && (n & (n - 1)) === 0;
}

/*==============================

14. Write a JavaScript function to round a number to a given decimal places.
Test Data :
console.log(precise_round(12.375,2));
console.log(precise_round(12.37499,2));
console.log(precise_round(-10.3079499, 3));
Output :
"12.38"
"12.37"
"-10.308"
==============================*/
function preciseRound(num, d){
    if (typeof num !== 'number' || typeof d !== 'number'){
        return "not a number";
    }
    return num.toFixed(d);
}
console.log(preciseRound(12.375,2));
console.log(preciseRound(12.37499,2));
console.log(preciseRound(-10.3079499, 3));

/*==============================

15. Write a JavaScript function to check whether a value is an integer or not.
Note : Integer - A number which is not a fraction; a whole number.
Test Data :
console.log(is_Int(23));
console.log(is_Int(4e2));
console.log(is_Int(NaN));
console.log(is_Int(23.75));
console.log(is_Int(-23));
Output :
true
true
false
false
true
==============================*/
function isInteger(n){
    if (typeof n !== 'number'){
        return "not a number";
    }
    return !isNaN(num) &&
         parseInt(Number(num)) == num &&
         !isNaN(parseInt(num, 10));
}
console.log(isInteger(23));
console.log(isInteger(4e2));
console.log(isInteger(NaN));
console.log(isInteger(23.75));
console.log(isInteger(-23));

/*==============================

16. Write a JavaScript function to check to check whether a variable is numeric or not.
Test Data :
console.log(is_Numeric(12));
console.log(is_Numeric('abcd'));
console.log(is_Numeric('12'));
console.log(is_Numeric(' '));
console.log(is_Numeric(1.20));
console.log(is_Numeric(-200));
Output :
true
false
true
false
true
true
==============================*/
function isNumeric(num){
    return !isNaN(parseFloat(num)) && isFinite(num);
}

/*==============================

17. Write a JavaScript function to calculate the sum of values in an array.
Test Data :
console.log(sum([1,2,3]));
console.log(sum([100,-200,3]));
console.log(sum([1,2,'a',3]));
Output :
6
-97
6
==============================*/
function sumOfArray(arr){
    if (toString.call(arr) !== "[object Array]"){
        return false;
    }
    return arr.reduce(function(sum, cur){
        if (isNaN(cur)){
            return sum;
        }
        return sum += cur;
    });
}
console.log(sumOfArray([1,2,3]));
console.log(sumOfArray([100,-200,3]));
console.log(sumOfArray([1,2,'a',3]));

/*==============================

18. Write a JavaScript function to calculate the product of values in an array.
Test Data :
console.log(product([1,2,3]));
console.log(product([100,-200,3]));
console.log(product([1,2,'a',3]));
Output :
6
-60000
6
==============================*/
function productOfArray(arr){
    if (toString.call(arr) !== "[object Array]"){
        return false;
    }
    return arr.reduce(function(product, cur){
        if (isNaN(cur)){
            return product;
        }
        return product *= cur;
    });
}
console.log(productOfArray([1,2,3]));
console.log(productOfArray([100,-200,3]));
console.log(productOfArray([1,2,'a',3]));


/*==============================

19. Create a Pythagorean function in JavaScript. Go to the editor
Note : The Pythagorean Theorem tells us that the relationship in every right triangle is :
c2 = a2 + b2, where c is the hypotenuse and a, b are two legs of the triangle.
Test Data :
console.log(pythagorean_theorem(2, 4));
console.log(pythagorean_theorem(3, 4));
Output :
4.47213595499958
5
==============================*/
function pythagorean(x, y){
    if ((typeof x !== 'number') || (typeof y !== 'number')) {
        return false;
    }
    return Math.sqrt(x*x + y*y);
}


/*==============================

20. Write a JavaScript program to evaluate binomial coefficients.
Note :
Binomial coefficient : According to Wikipedia - In mathematics, binomial coefficients are
a family of positive integers that occur as coefficients in the binomial theorem. They are
indexed by two nonnegative integers; the binomial coefficient indexed by n and k is usually
written \tbinom nk. It is the coefficient of the x k term in the polynomial expansion of the
binomial power (1 + x) n. Under suitable circumstances the value of the coefficient is given
by the expression :

Arranging binomial coefficients into rows for successive values of n, and in which k ranges
from 0 to n, gives a triangular array called Pascal's triangle.

Test Data :
console.log(binomial(8,3));
console.log(binomial(10,2));
Output :
56
45
==============================*/



/*==============================

21. Write a JavaScript function that Convert an integer into a Roman Numeral in javaScript.

==============================*/
function integerToRoman(n){
    var roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    var value = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var result = "";
    for (var i=0; i<value.length; i++){
        while(n >= value[i]){
            result += roman[i];
            n -= value[i];
        }
    }
    return result;
}

console.log(integerToRoman(1136));
/*==============================

22. Write a JavaScript function that Convert Roman Numeral to Integer.
==============================*/
function romanToInteger(str){
    if (str.length < 0){
        return -1;
    }
    var len = str.length;
    var result = charToInt(str[0]);
    var pre, cur, i;
    for (i=1; i<len; i++){
        cur = charToInt(str[i]);
        pre = charToInt(str[i-1]);
        if (pre >= cur){
            result += cur;
        }else {
            result += cur - pre * 2;
        }
    }
    return result;
}

function charToInt(c){
    switch(c){
        case "I": return 1;
        case "V": return 5;
        case "X": return 10;
        case "L": return 50;
        case "C": return 100;
        case "D": return 500;
        case "M": return 1000;
        default: return -1;
    }
}

console.log(romanToInteger("MCXXXIV"));

/*==============================

23. Write a JavaScript function to create a UUID identifier.
Note :
According to Wikipedia - A universally unique identifier (UUID) is an identifier
standard used in software construction. A UUID is simply a 128-bit value. The meaning
of each bit is defined by any of several variants. For human-readable display, many
systems use a canonical format using hexadecimal text with inserted hyphen characters.
For example : de305d54-75b4-431b-adb2-eb6b9e546014
==============================*/
function create_UUID(){
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (dt + Math.random()*16)%16 | 0;
        dt = Math.floor(dt/16);
        return (c=='x' ? r :(r&0x3|0x8)).toString(16);
    });
    return uuid;
}

console.log(create_UUID());


/*==============================

24. Write a JavaScript function to round a number to a specified number of digits and strip
extra zeros (if any). Go to the editor
Test Data :
var a = -4.55555;
console.log(result);
-4.5556
var a = 5.0001000;
console.log(result);
5.0001
==============================*/
function stripZero(num){
    return parseFloat(a.toFixed(4));
}


/*==============================

25. Write a JavaScript function to make currency math (add, subtract, multiply, division etc.)
Test Data :
n1 = '$40.24', n2 = '$21.57';
==============================*/
var n1 = '$40.24';
var n2 = '$21.57';
var regp = /[^0-9]+/g
n1 = parseFloat(n1.replace(regp, ''));
n2 = parseFloat(n2.replace(regp, ''));


/*==============================

26. Write a JavaScript function to calculate the nth root of a number.
Test Data :
console.log(nthroot(64, 2));
8
console.log(nthroot(64, -2));
0.125
==============================*/ //???????????
function nthroot(x, n)
   {
    ng = n % 2;
    if((ng == 1) || x<0)
       x = -x;
    var r = Math.pow(x, 1 / n);
    n = Math.pow(r, n);

    if(Math.abs(x - n) < 1 && (x > 0 === n > 0))
      return ng ? -r : r;
   }
console.log(nthroot(64, 2));
console.log(nthroot(64, -2));

/*==============================

27. Write a JavaScript function to calculate degrees between 2 points with inverse Y axis.
Test Data :
console.log(pointDirection(1, 0, 12, 0));
0
console.log(pointDirection(1, 0, 1, 10));
90
==============================*/
function degreeBetween2Points(x1, y1, x2, y2){
    return Math.atan2(y2-y1, x2-x1) * 180 / Math.PI;
}
console.log(degreeBetween2Points(1, 0, 12, 0));
console.log(degreeBetween2Points(1, 0, 1, 10));

/*==============================

28. Write a JavaScript function to round up an integer value to the next multiple of 5.
Test Data :
console.log(int_round5(32));
35
console.log(int_round5(137));
140
==============================*/
function roundToNext5Multiple(num){
    return Math.ceil(num / 5) * 5;
}
console.log(roundToNext5Multiple(32));
console.log(roundToNext5Multiple(137));

/*==============================

29. Write a JavaScript function to convert a positive number to negative number.
Test Data :
console.log(pos_to_neg(15));
-15
==============================*/
function positiveToNegative(n){
    return n * (-1);
}


/*==============================

30. Write a JavaScript function to cast a square root of a number to an integer.
Test Data :
console.log(sqrt_to_int(17));
4
==============================*/
function sqrToInt(n){
    return parseInt(Math.sqrt(n));
}
console.log(sqrt_to_int(17));

/*==============================

31. Write a JavaScript function to get the highest number from three different
numbers.
Test Data :
console.log(highest_of_three(-5, 4, 2));
4
==============================*/



/*==============================

32. Write a JavaScript function to calculate the percentage (%) of a number.
Test Data :
console.log(percentage(1000, 47.12));
471.2
==============================*/
function numToPercentage(num, p){
    return (num * p / 100).toFixed(2);
}
console.log(numToPercentage(1000, 47.12));

/*==============================

33. Write a JavaScript function to convert degrees to radians.
Test Data :
console.log(degrees_to_radians(45));
0.7853981633974483

==============================*/
function degreeToRadians(n){
    return (n / 180 * Math.PI).toFixed(2);
}
console.log(degreeToRadians(45));

/*==============================

34. Write a JavaScript function to convert radians to degrees.
Test Data :
console.log(radians_to_degrees(0.7853981633974483));
45

==============================*/
function radiansToDegree(r){
    return r * 180 / Math.PI;
}
console.log(radiansToDegree(0.7853981633974483));

/*==============================

35. Write a JavaScript function for the Pythagorean theorem.

According to Wikipedia : In mathematics, the Pythagorean theorem, also known
as Pythagoras' theorem, is a relation in Euclidean geometry among the three
sides of a right triangle. It states that the square of the hypotenuse (the
side opposite the right angle) is equal to the sum of the squares of the other
two sides. The theorem can be written as an equation relating the lengths of
the sides a, b and c, often called the "Pythagorean equation".

Test Data :
console.log(pythagorean(4, 3));
5

==============================*/



/*==============================

36. Write a JavaScript function which will return values that are powers of two.

Test Data :
console.log(isPower_of_two(64));
true
console.log(isPower_of_two(94));
false

==============================*/
function isPowerOf2(n){
    return !isNaN(n) && (n & (n-1)) === 0;
}
console.log(isPowerOf2(64));
true
console.log(isPowerOf2(94));

/*==============================

37. Write a JavaScript function to limit a value inside a certain range.

Note : If the value is higher than max it will return max. and if the value
is smaller than min it will return the min.
Test Data :
console.log(value_limit(7, 1, 12));
7
console.log(value_limit(-7, 0, 12));
0
console.log(value_limit(15, 0, 12));
12

==============================*/
function limitInRange(num, l, h){
    if (num > h){
        return h;
    }else if (num < l){
        return l;
    }else {
        return num;
    }
}
console.log(limitInRange(7, 1, 12));

console.log(limitInRange(-7, 0, 12));

console.log(limitInRange(15, 0, 12));

/*==============================

38. Write a JavaScript function to check if a number is a whole number or
has a decimal place.
Note : Whole Numbers are simply the numbers 0, 1, 2, 3, 4, 5, ... (and so on).
No Fractions!
Test Data :
console.log(number_test(25.66));
"Number has a decimal place."
console.log(number_test(10));
"It is a whole number."

==============================*/
function isWholeOrDecimal(num){
    if (parseInt(num) === num){
        return "whole num";
    }else {
        return "decimal num";
    }
}
console.log(nisWholeOrDecimal(25.66));

console.log(isWholeOrDecimal(10));

/*==============================

39. Write a JavaScript function to print an integer with commas as thousands
separators.
Test Data :
console.log(thousands_separators(1000));
"1,000"
console.log(thousands_separators(10000.23));
"10,000.23"
console.log(thousands_separators(100000));
"100,000"

==============================*/
function printIntWithCommas(num){
    num = num.toFixed(2);
    var n = num.split('.');
    var n1 = n[0];
    var n2 = n.length > 1 ? "." + n[1] : "";
    var regx = /(\d+)(\d{3})/;
    while (regx.test(n1)){
        n1 = n1.replace(regx, '$1' + ',' + '$2');
    }
    return n1 + n2;
}
console.log(printIntWithCommas(1000));
console.log(printIntWithCommas(10000.23));
console.log(printIntWithCommas(100000));

function thousands_separators(num)
  {
    var num_parts = num.toString().split(".");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return num_parts.join(".");
  }

console.log(thousands_separators(1000));
console.log(thousands_separators(10000.23));
console.log(thousands_separators(100000));

//another solution
var formatThousands = function(n, dp){
  var s = ''+(Math.floor(n)), d = n % 1, i = s.length, r = '';
  while ( (i -= 3) > 0 ) { r = ',' + s.substr(i, 3) + r; }
  return s.substr(0, i + 3) + r +
    (d ? '.' + Math.round(d * Math.pow(10, dp || 2)) : '');
};

//short solution
var n = 1234567890;
String(n).replace(/(.)(?=(\d{3})+$)/g,'$1,')
// "1,234,567,890"

/*==============================

40. Write a JavaScript function to create random background color.

==============================*/
function randomBackgroundColor(){
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    console.log(bgColor);
    document.body.style.background = bgColor;
}
randomBackgroundColor();


/*==============================

41. Write a JavaScript function to count the digits of an integer.
==============================*/
function countDigits(num){
    return num.toString().split('').length;
}
console.log(countDigits(12112));

console.log(countDigits(457));

function digits_count(n) {
  var count = 0;
  if (n > 1) ++count;

  while (n / 10 >= 1) {
    n /= 10;
    ++count;
  }

  return count;
}

/*==============================

42. Write a JavaScript function to calculate the combination of n and r.
The formula is : n!/(r!*(n - r)!).
Test Data :
console.log(combinations(6, 2));
15
console.log(combinations(5, 3));
10

==============================*/
function product_Range(a,b) {
  var prd = a,i = a;

  while (i++< b) {
    prd*=i;
  }
  return prd;
}


function combinations(n, r)
{
  if (n==r)
  {
    return 1;
  }
  else
  {
    r=(r < n-r) ? n-r : r;
    return product_Range(r+1, n)/product_Range(1,n-r);
  }
}


console.log(combinations(6, 2));
console.log(combinations(5, 3));


/*==============================

43. Write a JavaScript function to get all prime numbers from 0 to a
specified number.
Test Data :
console.log(primeFactorsTo(5));
[2, 3, 5]
console.log(primeFactorsTo(15));
[2, 3, 5, 7, 11, 13]

==============================*/
function primeFactorsTo(max)
{
    var store  = [], i, j, primes = [];
    for (i = 2; i <= max; ++i)
    {
        if (!store [i])
          {
            primes.push(i);
            for (j = i << 1; j <= max; j += i)
            {
                store[j] = true;
            }
        }
    }
    return primes;
}

console.log(primeFactorsTo(5));

console.log(primeFactorsTo(15));


/*==============================