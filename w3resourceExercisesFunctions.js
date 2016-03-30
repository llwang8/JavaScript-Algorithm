//w3resource.com  Exercises:
//JavaScript functions [29 exercises with solution]

/*==============================
1. Write a JavaScript function that reverse a number. Go to the editor
Example x = 32243;
Expected Output : 34223
==============================*/
 function reverseNum(num){
    return( String(num).split('').reverse().join(''));
}
reverseNum(12345);

/*==============================
2. Write a JavaScript function that checks whether a passed string is palindrome or not?
A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g.,
madam or nurses run.
==============================*/
function checkPalindrome(strEntry){
   var str = strEntry.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '');
   var n = str.length;
   if (n === 0) {
        alert("no string found.");
        return false;
   }
   if (n === 1) {
        alert("Entry is a parlingdrom.");
        return false;
   }
   var count = Math.floor(n/2);
   for (var i=0; i<count; i++){
    if (str.charAt(i) != str.charAt(n-1-i){
        return false;
    }
    return true;
   }
}
function checkPalindrome2(strEntry){
    var str = strEntry.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '');
    if (str.length === 0)  {
        alert("no string found.");
        return false;
    } else if (str.length === 1){
        alert("Entry is a parlingdrom.");
        return true;
    }
    var reverseStr = str.split('').reverse().join('');
    if (str == reverseStr){
        return true;
    }else {
        return false;
    }
}
console.log(checkPalindrome("madam"));
/*==============================
3. Write a JavaScript function that generates all combinations of a string. Go to the editor
Example string : 'dog'
Expected Output : d,do,dog,o,og,g
==============================*/
function generateCombination(strEntry){
    var str = strEntry.toLowerCase().replace(/\s+/g, '').split('');
    var result = [];
    var n = str.length;
    for (var i=0; i<n, i++){

    }

}

/*==============================
4. Write a JavaScript function that returns a passed string with letters in alphabetical order.
Example string : 'webmaster'
Expected Output : 'abeemrstw'
Assume punctuation and numbers symbols are not included in the passed string.
==============================*/
function alphaSort(str){
    return str.split('').sort().join('');
}

/*==============================
5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of
each word of the string in upper case. Go to the editor
Example string : 'the quick brown fox'
Expected Output : 'The Quick Brown Fox '
==============================*/
function capitalizeWordInSentence(str){
    str = str.split(' ');
    for (var i=0; i<str.length; i++){
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
}
console.log(capitalizeWordInSentence('the quick brown fox'));
/*==============================
6. Write a JavaScript function that accepts a string as a parameter and find the longest word within
the string. Go to the editor
Example string : 'Web Development Tutorial'
Expected Output : 'Development'
==============================*/
function findLongestWord(phrase){
    var str = phrase.split(' ');
    var maxL = 0;
    var maxIndex = 0;
    for (var i=0; i<str.length; i++){
        if (str[i].length > maxL){
           maxL = str[i].length;
           maxIndex = i;
        }

    }
    return str[maxIndex];
}
console.log(findLongestWord('Web Development Tutorial'));
/*==============================
7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels
within the string. Go to the editor
Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as
vowel here.
Example string : 'The quick brown fox'
Expected Output : 5
==============================*/
function countVowels(str){
    return str.replace(/[^aeiou]+/gi, '').length;
}
countVowels('The quick brown fox');
/*==============================
8. Write a JavaScript function that accepts a number as a parameter and check the number is prime
or not.
Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors
her than 1 and itself.
Click me to see the solution
==============================*/
function checkIfPrime(num){
    for (var i=2; i<num; i++){
        if (num % i === 0){
            return false;
        }
        return true;
    }
}
console.log(checkIfPrime(7));
/*==============================
9. Write a JavaScript function which accepts an argument and returns the type. Go to the editor
Note : There are six possible values that typeof returns: object, boolean, function, number,
string, and undefined.

==============================*/
function checkType(entry){
    return typeof entry;

}
console.log(checkType([6,7]));
/*==============================
10. Write a JavaScript function which returns the n rows by n columns identity matrix.
==============================*/
function identityMatrix(n){
    var result = "";
    for (var i=0; i<n; i++){
        for (var j=0; j<n; j++){
            if (i == j){
                result += 1;
            }else {
                result += 0;
            }
        }
        result += "\n";
    }
    console.log(result);
}
identityMatrix(5);
/*==============================
11. Write a JavaScript function which will take an array of numbers stored and find the second
lowest and second greatest numbers, respectively.
Sample array : [1,2,3,4,5]
Expected Output : 2,4
==============================*/


/*==============================
12. Write a JavaScript function which says whether a number is perfect.
According to Wikipedia : In number theory, a perfect number is a positive integer that is equal
to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding
the number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that
is half the sum of all of its positive divisors (including itself).
Example : The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors,
and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors:
 ( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by
 the perfect numbers 496 and 8128.
==============================*/
function findPerfectNumberUpTo(n){
    var divisorsSum = 0;
    var result = [];
    for (var i=1; i<n; i++){
        if (checkIfPerfectNumber(i)){
            result.push(i);
        }
    }
    return result;
}
function checkIfPerfectNumber(n){
    var divisorsSum = 0;
    for (var i=1; i<=Math.floor(n/2); i++){
       if (n % i === 0){
                divisorsSum += i;
            }
        }
        if (i == 2 * divisorsSum){
            return true;
        }
    }
    return false;
}
console.log(findPerfectNumberUpTo(30));

/*==============================
13. Write a JavaScript function to compute the factors of a positive integer.

==============================*/


/*==============================
14. Write a JavaScript function to convert an amount to coins.
Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.
Output : 25, 10, 10, 1

==============================*/
function amountToCoins(amount){
    var result = [];
    var coins = [25, 10, 5, 2, 1];
    for (var i=0; i<coins.length; i++){
        while (amount >= coins[i]){
            amount -= coins[i];
            result.push(coins[i]);
        }
    }
    return result;
}
console.log(amountToCoins(46));

/*==============================
15. Write a JavaScript function to compute the value of bn where n is the exponent and b is
the bases. Accept b and n from the user and display the result.

==============================*/
function computeExponetial(b, n){
    var result = 1;
    if (b != null  && n != null){
        for (var i=1; i<=n; i++){
            result *= b;
        }
    }
    console.log(result);
}
computeExponetial(3, 2);
/*==============================
16. Write a JavaScript function to extract unique characters from a string.
Example string : "thequickbrownfoxjumpsoverthelazydog"
Expected Output : "thequickbrownfxjmpsvlazydg"
==============================*/
function uniqueChar(str){
    var unique = '';
    for (var i=0; i<str.length; i++){
        if (unique.indexOf(str.charAt(i)) === -1){
            unique += str[i];
        }
    }
    return unique;
}
console.log(uniqueChar("thequickbrownfoxjumpsoverthelazydog"));
/*==============================
17. Write a JavaScript function to  get the number of occurrences of each letter in specified string.
==============================*/


/*==============================
18. Write a function for searching JavaScript arrays with a binary search.
Note : A binary search searches by splitting an array into smaller and smaller chunks until it finds
the desired value.
==============================*/
function binarySearch(arr, num){
    var res;
    var middleIndex = Math.floor(arr.length/2);
    if (arr.length === 0){
        return null;
    }
    if (num = arr[middleIndex]){
        return middleIndex;
    }else if (num > arr[middleIndex]){
        res = binarySearch(arr.slice(middleIndex+1), num);
        if (res == null){
            return null;
        }else {
            return middleInex + 1 + res;
        }
    }else if (num < arr[middleIndex]) {
        binarySearch(arr.slice(0, middleIndex), num);
    }
}
console.log(binarySearch([1, 2, 3, 4, 5], 3));

/*==============================
19. Write a JavaScript function that returns array elements larger than a number.
==============================*/


/*==============================
20. Write a JavaScript function that generates a string id (specified length) of random characters.
Sample character list : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
==============================*/
function randomeChars(n){
    var result = "";
    var charList = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for(var i=0; i<n; i++) {
        var rand = Math.floor(Math.random() * charList.length + 1);
    }
    result += str.charAt(rand);
}
console.log(randomeChar());
/*==============================
21. Write a JavaScript function to get all possible subset with a fixed length (for example
2) combinations in an array.
Sample array : [1, 2, 3] and subset length is 2
Expected output : [[2, 1], [3, 1], [3, 2], [3, 2, 1]]
==============================?????????????*/
//permutation way
function subset(arr, n){
    var result = [];
    var j, i, k;
    k = 1;
    while(k <= n){
        if (k === 1){
            result = arr;
            return result;
        }

        sub = subset(arr, n-1);
        console.log("sub: " + sub);
        for (i=0; i<arr.length; i++){
            for (j=0; j<sub.length; j++ ){
                if(typeof sub[j] !== 'object' ){
                    if (toString(sub[j]).indexOf(arr[i]) < 0){
                        result.push([arr[i], sub[j]]);
                    }
                }else{
                    if (sub[j].indexOf(arr[i]) < 0){
                        result.push(sub[j].push(arr[i]));
                    }
                }
            }
        }
        k++;
    }
    return result;
}
console.log(subset([1,2,3], 2));
//heap's way
function subsetHeap(arr, n){

}
console.log(subsetHeap([1,2,3], 2));

/*==============================
22. Write a JavaScript function that accepts two arguments, a string and a letter and the
function will count the number of occurrences of the specified letter within the string.
Sample arguments : 'w3resource.com', 'o'
Expected output : 2
==============================*/
function countOccurrences(string, letter){
    var count = 0;
    for (var i=0; i<string.length; i++){
        if (string.charAt(i) == letter){
            count += 1;
        }
    }
    return count;
}
console.log(countOccurrences('w3resource.com', 'o'));
/*==============================
23. Write a JavaScript function to find the first not repeated character.
Sample arguments : 'abacddbec'
Expected output : 'e'
==============================*/
function firstNonRepeatChar(string){
    var arr = string.split('');
    var result = arr.filter(function(char, index, obj){
        if (obj.indexOf(char) == obj.lastIndexOf(char)){
            return char;
        }
    });
    return result.shift();
}
console.log(firstNonRepeatChar('abacddbeck'));
/*==============================
24. Write a JavaScript function to apply Bubble Sort algorithm.
Note : According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a
simple sorting algorithm that works by repeatedly stepping through the list to be sorted,
comparing each pair of adjacent items and swapping them if they are in the wrong order".
Sample array : [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
Expected output : [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]
==============================*/
function bubbleSort(arr){
    var temp;
    if (arr.length == 0){
        return "non-valide entry.";
    }else if (arr.length == 1){
        return arr;
    }
    var count = arr.length;
    while (count > 0){
        for (var i=0; i<count; i++){
            if(arr[i] > arr[i+1]){
                temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
            }
        }
        count --;
    }
}
console.log(bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));
/*==============================
25. Write a JavaScript function that accept a list of country names as input and returns the
longest country name as output.
Sample function : Longest_Country_Name(["Australia", "Germany", "United States of America"])
Expected output : "United States of America"
==============================*/
function longestCountryName(arr){
    if (arr.length == 0){
        return "Invalid entry";
    }
    var maxLength = arr[0].length;
    return arr.filter(function(country, arr){
        if (maxLength < country.length){
            maxLength = country.length;
            return country;
        }
    });
}
function longestCountryName2(arrCountries) {
    return arrCountries.reduce(function(longestName, country){
        return longestName.length > country.length ? longestName : country;
    });
}
console.log(longestCountryName(["Australia", "Germany", "United States of America"]));
/*==============================
26. Write a JavaScript function to find longest substring in a given a string without repeating
characters.
==============================*/
function longestSubstringNoRepeatingChar(str){
    var result = [];
    var substr, i, count;
    var arr = str.split('');
    if (str.length == 0){
        return 'invalid entry';
    }
    count = 0;
    while (count < arr.length){
        substr = arr[count];

        for(i=count; i< arr.length-1; i++){
            if(substr.indexOf(arr[i+1]) == -1 ){
                substr += arr[i+1];
                if(i+1 === arr.length-1){
                  result.push(substr);
                }
            }else {
                result.push(substr);
                i = arr.length;
            }
        }
        count ++;
    }
    return result.reduce(function(longestStr, currentStr){
        return longestStr.length > currentStr.length ? longestStr : currentStr;
    });
}
console.log(longestSubstringNoRepeatingChar("google.com"));
/*==============================
27. Write a JavaScript function that returns the longest palindrome in a given string.

Note: According to Wikipedia "In computer science, the longest palindromic substring or longest
symmetric factor problem is the problem of finding a maximum-length contiguous substring of a
given string that is also a palindrome. For example, the longest palindromic substring of "bananas"
is "anana". The longest palindromic substring is not guaranteed to be unique; for example, in the
string "abracadabra", there is no palindromic substring with length greater than three, but there
are two palindromic substrings with length three, namely, "aca" and "ada".
In some applications it may be necessary to return all maximal palindromic substrings (that is,
all substrings that are themselves palindromes and cannot be extended to larger palindromic
substrings) rather than returning only one substring or returning the maximum length of a
palindromic substring.
==============================*/
function longestPalindrome(string){
    var result = [];
    var substr, i, count;
    var arr = string.split('');
    if (string.length == 0){
        return 'invalid entry';
    }
    count = 0;
    while (count < arr.length){
        substr = arr[count];
        for(i=count; i< arr.length-1; i++){
            substr += arr[i+1];
            if (checkIfPalindrome(substr)){
                result.push(substr);
            }
        }
        count ++;
    }
    return result.reduce(function(longestStr, currentStr){
        return longestStr.length > currentStr.length ? longestStr : currentStr;
    });
}

function checkIfPalindrome(str){
    if (str.length === 0)  {
        alert("no string found.");
        return false;
    } else if (str.length === 1){
        alert("Entry is a parlingdrom.");
        return true;
    }
    return str == str.split('').reverse().join('') ? true : false;
}

console.log(longestPalindrome("abracadabra"));
console.log(longestPalindrome("HYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDE"));

/*==============================
28. Write a JavaScript program to pass a 'JavaScript function' as parameter.
==============================*/
function base(n, func){
    func(n);
}
function calledFunc(num){
    console.log("another" + num);
}
base(5, calledFunc);
/*==============================
29. Write a JavaScript function to get the function name.
==============================*/
function  getFuncName(){
    console.log(arguments.callee.name);
}

/*==============================
