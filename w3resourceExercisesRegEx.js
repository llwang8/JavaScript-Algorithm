//w3resources
/*==============================
JavaScript Validation with regular expression [20 exercises with solution]
=================================
[An editor is available at the bottom of the page to write and execute the scripts.]

1. Write a JavaScript program to test the first character of a string is uppercase or not.
==============================*/
function testCapitalize(str){
    return str.match(/^[A-Z]+/) ? true : false;
}
testCapitalize('Abcdd');
/*==============================
2. Write a JavaScript program to check a credit card number.
Click me to see the solution
==============================*/
function checkCreditNum(str){
    return str.match(/^\d{12}$/) ? true : false;
}
console.log(checkCreditNum("121323cvgh457898"));
/*==============================
3. Write a pattern that matches e-mail addresses.
The personal information part contains the following ASCII characters.

Uppercase (A-Z) and lowercase (a-z) English letters.
Digits (0-9).
Characters ! # $ % & ' * + - / = ? ^ _ ` { | } ~
Character . ( period, dot or fullstop) provided that it is not the first or last character
and it will not come one after the other.
==============================*/
pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w)*(\.{2,3})+$/;

/*==============================
4. Write a JavaScript program to search a date within a string.
==============================*/
pattern = /^([0-1]|?\d)\/([0-3]?[0-9])\/([0-9]{2}?[0-9]{2})$/;

/*==============================

5. Write a JavaScript program that work as a trim function (string) using regular expression.

==============================*/
result = str.replace(/^\s|\s$/g, '');

/*==============================

6. Write a JavaScript program to count number of words in string.
Note :
- Remove white-space from start and end position.
- Convert 2 or more spaces to 1.
- Exclude newline with a start spacing.

==============================*/
str = document.getElementById("input");
str = str.replace(/(^\s*)|(\s*$)/gi, '');
str = str.replace(/[ ]{2}/gi, ' ');
str = str.replace(/\n /,'\n');
str.split(' ').length;
/*==============================

7. Write a JavaScript function to check whether a given value is IP value or not.
==============================*/
pattern = /^\d{3}\.\d{3}\.\d{2}\.\d{1}$/;

/*==============================

8. Write a JavaScript function to count the number of vowels in a given string.
Test Data :
console.log(alphabetize_string('United States'));
Output :
"SUadeeinsttt"
==============================*/
function countVowels(str){
    str.replace(/[^aeiou]/gi, '').split('').length;
}
console.log(countVowels('United States'));
/*==============================

9. Write a JavaScript function to check whether a given value is an valid url or not.

==============================*/


/*==============================

10. Write a JavaScript function to check whether a given value is alpha numeric or not.

==============================*/


/*==============================

11. Write a JavaScript function to check whether a given value is time string or not.

==============================*/


/*==============================

12. Write a JavaScript function to check whether a given value is US zip code or not.

==============================*/


/*==============================

13. Write a JavaScript function to check whether a given value is UK Post Code or not.

==============================*/


/*==============================

14. Write a JavaScript function to check whether a given value is Canada Post Code or not.

==============================*/


/*==============================

15. Write a JavaScript function to check whether a given value is a social security number or not.

==============================*/


/*==============================

16. Write a JavaScript function to check whether a given value is hexadecimal value or not.

==============================*/


/*==============================

17. Write a JavaScript function to check whether a given value is hexcolor value or not.

==============================*/


/*==============================

18. Write a JavaScript function to check whether a given value represents a domain or not.

==============================*/


/*==============================

19. Write a JavaScript function to check whether a given value is html or not.Go to the editor

==============================*/


/*==============================

20. Write a JavaScript function to check a given value contains alpha, dash and underscore.

==============================*/


/*==============================

21. Write a JavaScript function to print an integer with commas as thousands separators.

Test Data :
console.log(thousands_separators(1000));
"1,000"
console.log(thousands_separators(10000.23));
"10,000.23"
console.log(thousands_separators(100000));
"100,000"

==============================*/


/*==============================