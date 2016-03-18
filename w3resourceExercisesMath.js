
JavaScript Math [43 exercises with solution]

[An editor is available at the bottom of the page to write and execute the scripts.]

1. Write a JavaScript function to convert a number from one base to another. Go to the editor
Note : Both bases must be between 2 and 36.
Test Data :
console.log(base_convert('E164',16,8));
console.log(base_convert(1000,2,8));
"160544"
"10"
Click me to see the solution

2. Write a JavaScript function to convert a binary number to a decimal number. Go to the editor
Test Data :
console.log(bin_to_dec('110011'));
console.log(bin_to_dec('100'));
51
4
Click me to see the solution

3. Write a JavaScript function to convert a decimal number to binary, hexadecimal or octal number. Go to the editor
Test Data :
console.log(dec_to_bho(120,'B'));
console.log(dec_to_bho(120,'H'));
console.log(dec_to_bho(120,'O'));
"1111000"
"78"
"170"
Click me to see the solution

4. Write a JavaScript function to generate a random integer. Go to the editor
Test Data :
console.log(rand(20,1));
console.log(rand(1,10));
console.log(rand(6));
console.log(rand());
15
5
1
0
Click me to see the solution

5. Write a JavaScript function to format a number up to specified decimal places. Go to the editor
Test Data :
console.log(decimals(2.100212, 2));
console.log(decimals(2.100212, 3));
console.log(decimals(2100, 2));
"2.10"
"2.100"
"2100.00"
Click me to see the solution

6. Write a JavaScript function to find the highest value in an array. Go to the editor
Test Data :
console.log(max([12,34,56,1]));
console.log(max([-12,-34,0,-56,-1]));
56
0
Click me to see the solution

7. Write a JavaScript function to find the lowest value in an array. Go to the editor
Test Data :
console.log(min([12,34,56,1]));
console.log(min([-12,-34,0,-56,-1]));
1
-56
Click me to see the solution

8. Write a JavaScript function to get the greatest common divisor (gcd) of two integers. Go to the editor
Note :
According to Wikipedia - In mathematics, the greatest common divisor (gcd) of two or more integers, when at least one of them is not zero, is the largest positive integer that divides the numbers without a remainder. For example, the GCD of 8 and 12 is 4.

Test Data :
console.log(gcd_two_numbers(12, 13));
console.log(gcd_two_numbers(9, 3));
Output :
1
3
Click me to see the solution

9. Write a JavaScript function to find the GCD (greatest common divisor) of more than 2 integers. Go to the editor
Test Data :
console.log(gcd_more_than_two_numbers([3,15,27]));
console.log(gcd_more_than_two_numbers([5,10,15,25]));
Output :
3
5
Click me to see the solution

10. Write a JavaScript function to get the least common multiple (LCM) of two numbers. Go to the editor
Note :
According to Wikipedia - A common multiple is a number that is a multiple of two or more integers. The common multiples of 3 and 4 are 0, 12, 24, .... The least common multiple (LCM) of two numbers is the smallest number (not zero) that is a multiple of both.
Test Data :
console.log(lcm_two_numbers(3,15));
console.log(lcm_two_numbers(10,15));
Output :
15
30
Click me to see the solution

11. Write a JavaScript function to get the least common multiple (LCM) of more than 2 integers. Go to the editor
Test Data :
console.log(lcm_more_than_two_numbers([100,90,80,7]));
console.log(lcm_more_than_two_numbers([5,10,15,25]));
Output :
25200
150
Click me to see the solution

12. Write a JavaScript function to find out if a number is a natural number or not. Go to the editor
Note :
Natural numbers are whole numbers from 1 upwards : 1, 2, 3, and so on ... or from 0 upwards in some area of mathematics: 0, 1, 2, 3 and so on ...
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
Click me to see the solution

13. Write a JavaScript function to test if a number is a power of 2. Go to the editor
Test Data :
console.log(power_of_2(16));
console.log(power_of_2(18));
console.log(power_of_2(256));
Output :
true
false
true
Click me to see the solution

14. Write a JavaScript function to round a number to a given decimal places. Go to the editor
Test Data :
console.log(precise_round(12.375,2));
console.log(precise_round(12.37499,2));
console.log(precise_round(-10.3079499, 3));
Output :
"12.38"
"12.37"
"-10.308"
Click me to see the solution

15. Write a JavaScript function to check whether a value is an integer or not. Go to the editor
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
Click me to see the solution

16. Write a JavaScript function to check to check whether a variable is numeric or not. Go to the editor
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
Click me to see the solution

17. Write a JavaScript function to calculate the sum of values in an array. Go to the editor
Test Data :
console.log(sum([1,2,3]));
console.log(sum([100,-200,3]));
console.log(sum([1,2,'a',3]));
Output :
6
-97
6
Click me to see the solution

18. Write a JavaScript function to calculate the product of values in an array. Go to the editor
Test Data :
console.log(product([1,2,3]));
console.log(product([100,-200,3]));
console.log(product([1,2,'a',3]));
Output :
6
-60000
6
Click me to see the solution

19. Create a Pythagorean function in JavaScript. Go to the editor
Note : The Pythagorean Theorem tells us that the relationship in every right triangle is : c2 = a2 + b2, where c is the hypotenuse and a, b are two legs of the triangle.
Test Data :
console.log(pythagorean_theorem(2, 4));
console.log(pythagorean_theorem(3, 4));
Output :
4.47213595499958
5
Click me to see the solution

20. Write a JavaScript program to evaluate binomial coefficients. Go to the editor
Note :
Binomial coefficient : According to Wikipedia - In mathematics, binomial coefficients are a family of positive integers that occur as coefficients in the binomial theorem. They are indexed by two nonnegative integers; the binomial coefficient indexed by n and k is usually written \tbinom nk. It is the coefficient of the x k term in the polynomial expansion of the binomial power (1 + x) n. Under suitable circumstances the value of the coefficient is given by the expression :

Arranging binomial coefficients into rows for successive values of n, and in which k ranges from 0 to n, gives a triangular array called Pascal's triangle.

Test Data :
console.log(binomial(8,3));
console.log(binomial(10,2));
Output :
56
45

Click me to see the solution

21. Write a JavaScript function that Convert an integer into a Roman Numeral in javaScript. Go to the editor

Click me to see the solution

22. Write a JavaScript function that Convert Roman Numeral to Integer. Go to the editor

Click me to see the solution

23. Write a JavaScript function to create a UUID identifier. Go to the editor
Note :
According to Wikipedia - A universally unique identifier (UUID) is an identifier standard used in software construction. A UUID is simply a 128-bit value. The meaning of each bit is defined by any of several variants. For human-readable display, many systems use a canonical format using hexadecimal text with inserted hyphen characters. For example : de305d54-75b4-431b-adb2-eb6b9e546014

Click me to see the solution

24. Write a JavaScript function to round a number to a specified number of digits and strip extra zeros (if any). Go to the editor
Test Data :
var a = -4.55555;
console.log(result);
-4.5556
var a = 5.0001000;
console.log(result);
5.0001
Click me to see the solution

25. Write a JavaScript function to make currency math (add, subtract, multiply, division etc.). Go to the editor
Test Data :
n1 = '$40.24', n2 = '$21.57';
Click me to see the solution

26. Write a JavaScript function to calculate the nth root of a number. Go to the editor
Test Data :
console.log(nthroot(64, 2));
8
console.log(nthroot(64, -2));
0.125
Click me to see the solution

27. Write a JavaScript function to calculate degrees between 2 points with inverse Y axis. Go to the editor
Test Data :
console.log(pointDirection(1, 0, 12, 0));
0
console.log(pointDirection(1, 0, 1, 10));
90
Click me to see the solution

28. Write a JavaScript function to round up an integer value to the next multiple of 5. Go to the editor
Test Data :
console.log(int_round5(32));
35
console.log(int_round5(137));
140
Click me to see the solution

29. Write a JavaScript function to convert a positive number to negative number. Go to the editor
Test Data :
console.log(pos_to_neg(15));
-15
Click me to see the solution

30. Write a JavaScript function to cast a square root of a number to an integer. Go to the editor
Test Data :
console.log(sqrt_to_int(17));
4
Click me to see the solution

31. Write a JavaScript function to get the highest number from three different numbers. Go to the editor
Test Data :
console.log(highest_of_three(-5, 4, 2));
4
Click me to see the solution

32. Write a JavaScript function to calculate the percentage (%) of a number. Go to the editor
Test Data :
console.log(percentage(1000, 47.12));
471.2
Click me to see the solution

33. Write a JavaScript function to convert degrees to radians. Go to the editor
Test Data :
console.log(degrees_to_radians(45));
0.7853981633974483

Click me to see the solution

34. Write a JavaScript function to convert radians to degrees. Go to the editor
Test Data :
console.log(radians_to_degrees(0.7853981633974483));
45

Click me to see the solution

35. Write a JavaScript function for the Pythagorean theorem. Go to the editor

According to Wikipedia : In mathematics, the Pythagorean theorem, also known as Pythagoras' theorem, is a relation in Euclidean geometry among the three sides of a right triangle. It states that the square of the hypotenuse (the side opposite the right angle) is equal to the sum of the squares of the other two sides. The theorem can be written as an equation relating the lengths of the sides a, b and c, often called the "Pythagorean equation".

Test Data :
console.log(pythagorean(4, 3));
5

Click me to see the solution

36. Write a JavaScript function which will return values that are powers of two. Go to the editor
Test Data :
console.log(isPower_of_two(64));
true
console.log(isPower_of_two(94));
false

Click me to see the solution

37. Write a JavaScript function to limit a value inside a certain range. Go to the editor
Note : If the value is higher than max it will return max. and if the value is smaller than min it will return the min.
Test Data :
console.log(value_limit(7, 1, 12));
7
console.log(value_limit(-7, 0, 12));
0
console.log(value_limit(15, 0, 12));
12

Click me to see the solution

38. Write a JavaScript function to check if a number is a whole number or has a decimal place. Go to the editor
Note : Whole Numbers are simply the numbers 0, 1, 2, 3, 4, 5, ... (and so on). No Fractions!
Test Data :
console.log(number_test(25.66));
"Number has a decimal place."
console.log(number_test(10));
"It is a whole number."

Click me to see the solution

39. Write a JavaScript function to print an integer with commas as thousands separators. Go to the editor
Test Data :
console.log(thousands_separators(1000));
"1,000"
console.log(thousands_separators(10000.23));
"10,000.23"
console.log(thousands_separators(100000));
"100,000"

Click me to see the solution

40. Write a JavaScript function to create random background color. Go to the editor

Click me to see the solution

41. Write a JavaScript function to count the digits of an integer. Go to the editor

Click me to see the solution

42. Write a JavaScript function to calculate the combination of n and r. Go to the editor
The formula is : n!/(r!*(n - r)!).
Test Data :
console.log(combinations(6, 2));
15
console.log(combinations(5, 3));
10

Click me to see the solution

43. Write a JavaScript function to get all prime numbers from 0 to a specified number. Go to the editor
Test Data :
console.log(primeFactorsTo(5));
[2, 3, 5]
console.log(primeFactorsTo(15));
[2, 3, 5, 7, 11, 13]