JavaScript String [38 exercises with solution]

/*==============================
1. Write a JavaScript function to check whether an `input` is a string or not. Go to the editor
Test Data :
console.log(is_string('w3resource'));
true
console.log(is_string([1, 2, 4, 0]));
false
==============================*/
function isString(str){
    return typeOf str === "string";
}

if (Object.prototype.toString.call(input) === '[object Array]'){}

//jQuery
if (Array.isArray)
    return Array.isArray(input);
if ($.isArray(input)){}

//fastest
if (Array === obj.constructor){}

if (myArray instanceof Array){}

/*==============================

2. Write a JavaScript function to check whether a string is blank or not. Go to the editor
Test Data :
console.log(is_Blank(''));
console.log(is_Blank('abc'));
true
false
==============================*/
function checkStrBlank(str){
    str.length === 0 ? true : false;
}


/*==============================

3. Write a JavaScript function to split a string and convert it into an array of words.
Test Data :
console.log(string_to_array("Robin Singh"));
["Robin", "Singh"]
==============================*/



/*==============================

4. Write a JavaScript function to remove specified number of characters from a string.
Test Data :
console.log(truncate_string("Robin Singh",4));
"Robi"
==============================*/
function removeNumChar(str, n){
    if (str.constructor === Array && n > 0){
        return str.splice(0, n);
    }
}


/*==============================

5. Write a JavaScript function to convert a string in abbreviated form.
Test Data :
console.log(abbrev_name("Robin Singh"));
"Robin S."
==============================*/
function toAbbreviated(str){
    var arr = str.split(' ');
    if (arr.length >1){
        return arr[0] + " " + arr[1].charAt(0) + "."
    }
    return arr[0];
}
console.log(toAbbreviated("Robin Singh"));

/*==============================

6. Write a JavaScript function to hide email addresses to protect from unauthorized user.
Test Data :
console.log(protect_email("robin_singh@example.com"));
"robin...@example.com"
==============================*/
function protectEmail(str){
    var regx = /(\w)(\_\w)(@\w)/;
    if (str.length > 0){
        return str.replace(regx, '$1...$3'); ///?????
    }
    return "invalid entry";
}
function protectEmail2(str){
    var arr = str.split(@);
    var partial = arr[0].substring(0, arr[0].length / 2);
    return partial + "...@" + arr[1];
}
console.log(protectEmail2("robin_singh@example.com"));

/*==============================

7. Write a JavaScript function to parameterize a string.
Test Data :
console.log(string_parameterize("Robin Singh from USA."));
"robin-singh-from-usa"
==============================*/
var parameterizeStr = function(str){
    return str.split(' ').join('-');
}

console.log(parameterizeStr("Robin Singh from USA."));
/*==============================

8. Write a JavaScript function to capitalize the first letter of a string.
Test Data :
console.log(capitalize('js string exercises'));
"Js string exercises"
==============================*/



/*==============================

9. Write a JavaScript function to capitalize the first letter of each word in a string.
Test Data :
console.log(capitalize_Words('js string exercises'));
"Js String Exercises"
==============================*/



/*==============================

10. Write a JavaScript function that takes a string which has lower and upper case
letters as a parameter and converts upper case letters to lower case, and lower case
letters to upper case.
Test Data :
console.log(swapcase('AaBbc'));
"aAbBC"
==============================*/
var swapcase = function(str){
    return str.replace(/([a-z]+) | ([A-Z]+)/g, function(match, char){
        return char ? match.toUpperCase() : match.toLowerCase();
    })
};
console.log(swapcase('AaBbc'));

/*==============================

11. Write a JavaScript function to convert a string into camel case.G
Test Data :
console.log(camelize("JavaScript Exercises"));
console.log(camelize("JavaScript exercises"));
console.log(camelize("JavaScriptExercises"));
"JavaScriptExercises"
"JavaScriptExercises"
"JavaScriptExercises"
==============================*/
function camelize(str){
    var arr = str.split(' ');
    for (var i =0; i<arr.length; i++){
        arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
    }
    return arr.join('');
}
console.log(camelize("JavaScript Exercises"));
console.log(camelize("JavaScript exercises"));
console.log(camelize("JavaScriptExercises"));

function camelize2(str){
    return str.replace(/W+(.)/g, function(match, ch){
        return ch.toUpperCase();
    });
}

/*==============================

12. Write a JavaScript function to uncamelize a string.
Test Data :
console.log(uncamelize('helloWorld'));
console.log(uncamelize('helloWorld','-'));
console.log(uncamelize('helloWorld','_'));
"hello world"
"hello-world"
"hello_world"
==============================*/
function uncamelize(str, d){
    if (typeof d === 'undefined'){
        d = " ";
    }
    var newStr = str.replace(/[A-Z]/g, function(match, char){
        return d + char.toLowerCase();
    });
    return newStr.replace("/^" + d + "/", ""):
}
console.log(uncamelize('helloWorld'));
console.log(uncamelize('helloWorld','-'));
console.log(uncamelize('helloWorld','_'));

/*==============================

13. Write a JavaScript function to concatenates a given string n times (default is 1).
Test Data :
console.log(repeat('Ha!'));
console.log(repeat('Ha!',2));
console.log(repeat('Ha!',3));
"Ha!"
"Ha!Ha!"
"Ha!Ha!Ha!"
==============================*/
function repeatStr(str, n){
    if (typeof n === 'undefined'){
        n = 1;
    }
    return n < 1 ? '' : new Array(n+1).join(str);
    //return str.repeat(n);
}


/*==============================

14. Write a JavaScript function to insert a string within a string at a particular
position (default is 1).
Test Data :
console.log(insert('We are doing some exercises.'));
console.log(insert('We are doing some exercises.','JavaScript '));
console.log(insert('We are doing some exercises.','JavaScript ',18));
"We are doing some exercises."
"JavaScript We are doing some exercises."
"We are doing some JavaScript exercises."
==============================*/
function insertStr(str, addStr, index){
    if (typeof addStr == 'undefined'){
        addStr = '';
    }
    if (typeof index == 'undefined'){
        index = 0;
    }
    if (Object.prototype.toString.call(str) ==="[object String]"){
        //str.splice(index, 0, addStr);
        //return str;
        return str.slice(0, index) + addStr + str.slice(index);
    }

}
console.log(insertStr('We are doing some exercises.'));
console.log(insertStr('We are doing some exercises.','JavaScript '));
console.log(insertStr('We are doing some exercises.','JavaScript ',18));

/*==============================

15. Write a JavaScript function to humanized number (Formats a number to a human-readable
string.) with the correct suffix such as 1st, 2nd, 3rd or 4th.
Test Data :
console.log(humanize_format());
console.log(humanize_format(1));
console.log(humanize_format(8));
console.log(humanize_format(301));
console.log(humanize_format(402));
"1st"
"8th"
"301st"
"402nd"
==============================*/
function humanizedNum(num){
    if (typeof num == 'undefined'){
        return "undefined number input";
    }
    var arrNum = num.toString().split('');
    var n = arrNum[-1];
    switch (n){
        case "1":
            n = "1st";
            break;
        case "2":
            n = "2nd";
            break;
        case "3":
            n = "3rd";
            break;
        default:
            n = n + "th";
    }
    arrNum[arrNum.length-1] = n;
    return arrNum.join('');
}
console.log(humanizedNum());
console.log(humanizedNum(1));
console.log(humanizedNum(8));
console.log(humanizedNum(301));
console.log(humanizedNum(402));
/*==============================

16. Write a JavaScript function to truncates a string if it is longer than the
specified number of characters. Truncated strings will end with a translatable
ellipsis sequence ("…") (by default) or specified characters.
Test Data :
console.log(text_truncate('We are doing JS string exercises.'))
console.log(text_truncate('We are doing JS string exercises.',19))
console.log(text_truncate('We are doing JS string exercises.',15,'!!'))
"We are doing JS string exercises."
"We are doing JS ..."
"We are doing !!"
==============================*/
function truncateStr(str, pos, addon){
    if (addon == null){
        addon = "...";
    }
    if (pos == null){
        pos = 0;
    }
    var result = str.slice(0, pos);
    return result + " " + addon;
}
console.log(truncateStr('We are doing JS string exercises.'))
console.log(truncateStr('We are doing JS string exercises.',19))
console.log(truncateStr('We are doing JS string exercises.',15,'!!'))

/*==============================

17. Write a JavaScript function to chop a string into chunks of a given length.
Test Data :
console.log(string_chop('w3resource'));
console.log(string_chop('w3resource',2));
console.log(string_chop('w3resource',3));
["w3resource"]
["w3", "re", "so", "ur", "ce"]
["w3r", "eso", "urc", "e"]
==============================*/
function chopStr(str, n){
    var result = [];
    if (n === null){
        return str;
    }
    for (var i=0; i+n<str.length; i+=n){  ///???
        result.push(str.slice(i, n));
        console.log("result: " + result);
        console.log("str: " + str);
    }
    if (i+n <str.length){
        result.push(str.slice(i+n));
    }
}
console.log(chopStr('w3resource'));
console.log(chopStr('w3resource',2));
console.log(chopStr('w3resource',3));

/*==============================

18. Write a JavaScript function to count the occurrence of a substring in a string.
Test Data :
console.log(count("The quick brown fox jumps over the lazy dog", 'the'));
Output :
2
console.log(count("The quick brown fox jumps over the lazy dog", 'fox',false));
Output :
1

==============================*/
function occurrenceSubstr(str, substr){
    if (str == null || substr == null){
        return "invalid entry";
    }
    var result = [];
    //var regx = '/' + substr + '/gi';
    result = str.match(new RegExp(substr, "gi"));
    return result.length;
}
console.log(occurrenceSubstr("The quick brown fox jumps over the lazy dog", 'the'));
console.log(occurrenceSubstr("The quick brown fox jumps over the lazy dog", 'fox',false));

/*==============================

19. Write a JavaScript function to escape a HTML string.
Test Data :
console.log(escape_HTML('<a href="javascript-string-exercise-17.php" target="_blank">'));
Output :
"&lt;a href=&quot;javascript-string-exercise-17.php&quot; target=&quot;_blank&quot;&gt;"

==============================*/
function escapeHTML(str){
    'use strict'
    return str.replace(/[&<>"]/g, function(match){
        var charReplacement = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quote;'
        };
        return charReplacement[match] || match;
    });
}



console.log(escapeHTML('<a href="javascript-string-exercise-17.php" target="_blank">'))

/*==============================

20. Write a JavaScript function that can pad (left, right) a string to get to a determined
length.
Test Data :
console.log(formatted_string('0000',123,'l'));
console.log(formatted_string('00000000',123,''));
Output :
"0123"
"12300000"

==============================*/
function padStr(sample, str, type){
    var len = sample.length;
    str = str.toString();
    if(len < str.length){
        return str;
    }
    if (type.length === 0){
        type = 'r';
    }
    var padding = sample.slice(0, len - str.length);
    if (type == 'l'){
        return padding + str;
    }else if (type == 'r'){
        return str + padding;
    }
}
console.log(padStr('0000',123,'l'));
console.log(padStr('00000000',123,''));

/*==============================

21. Write a JavaScript function to repeat a string a specified times.
Test Data :
console.log(repeat_string('a', 4));
console.log(repeat_string('a'));
Output :
"aaaa"
"Error in string or count."

==============================*/
function repeatStr(str, n){
    if (n == null || str.length === 0 || count === 'infinite'){
        return "Error in string or count";
    }
    return str.repeat(n);
    //return Array(n + 1).join(str);
}
console.log(repeatStr('a', 4));
console.log(repeatStr('a'));

/*==============================

22. Write a JavaScript function to get a part of a string after a specified character.
Test Data :
console.log(subStrAfterChars('w3resource: JavaScript Exercises', ':','a'));
console.log(subStrAfterChars('w3resource: JavaScript Exercises', 'E','b'));
Output :
"w3resource"
"xercises"
==============================*/
function subStrAfterChars(str, char, pos){
    if (str.length > ){
        if (pos == 'a'){
            return str.substr(0, str.indexOf(char));
        }else if (pos == 'b'){
            return str.substr(str.indexOf(char) + 1);
        }else {
            return str;
        }
    }else {
        return "invalid entry";
    }
}
console.log(subStrAfterChars('w3resource: JavaScript Exercises', ':','a'));
console.log(subStrAfterChars('w3resource: JavaScript Exercises', 'E','b'));

/*==============================
23. Write a JavaScript function to strip leading and trailing spaces from a string.
Test Data :
console.log(strip('w3resource '));
console.log(strip(' w3resource'));
console.log(strip(' w3resource '));
Output :
"w3resource"
"w3resource"
"w3resource"

==============================*/
function stripStrLeadingTrailingSpace(str){
    if (str.length > 0){
        return str.trim();
        //return str.replace(/^\s+|\s+$, '');
    }
}


/*==============================

24. Write a JavaScript function to truncate a string to a certain number of words.
Test Data :
console.log(truncate('The quick brown fox jumps over the lazy dog', 4));
Output :
"The quick brown fox"
==============================*/
function truncateStr(str, n){
    return str.split(' ').slice(0,n).join('');
}
console.log(truncateStr('The quick brown fox jumps over the lazy dog', 4));
/*==============================

25. Write a JavaScript function to alphabetize a given string.
Alphabetize string : An individual string can be alphabetized. This rearranges the letters
so they are sorted A to Z.
Test Data :
console.log(alphabetize_string('United States'));
Output :
"SUadeeinsttt"

==============================*/
function alphabetizeStr(str){
    return str.split('').sort().join('').trim();
}

console.log(alphabetizeStr('United States'));
/*==============================

26. Write a JavaScript function to remove the first occurrence of a given 'search string'
from a string.
Test Data :
console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the'));
Output :
"The quick brown fox jumps over lazy dog"
==============================*/
function removeStr(str, substr){
    var len = substr.length;
    var index = str.indexOf(substr);
    var newStr = str.slice(0,index) + str.slice(index + len);
    return newStr.replace(/(\s{2})/, ' ');
}

console.log(removeStr("The quick brown fox jumps over the lazy dog", 'the'));
/*==============================

27. Write a JavaScript function to convert ASCII to Hexadecimal format.
Test Data :
console.log(ascii_to_hexa('12'));
console.log(ascii_to_hexa('100'));
Output :
"3132"
"313030"

==============================*/
function asciiToHex(str){
    var hex, result = [];
    for (var i=0; i<str.length; i++){
        hex = Number(str.charCodeAt(i).toString(16));
        result.push(hex);
    }
    return result.join('');
}
console.log(asciiToHex('12'));
console.log(asciiToHex('100'));

/*==============================

28. Write a JavaScript function to convert Hexadecimal to ASCII format.
Test Data :
console.log(hex_to_ascii('3132'));
console.log(hex_to_ascii('313030'));
Output :
"12"
"100"

==============================*/
function hexToAscii(strHex){
    var result = "";
    var str = strHex.toString();
    for (var i=0; i<str.length; i+=2){
        result += String.fromCharCode(parseInt(str.substr(i, 2), 16));
         str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
    }
    return result;
}
console.log(hexToAscii('3132'));
console.log(hexToAscii('313030'));

/*==============================

29. Write a JavaScript function to find a word within a string.
Test Data :
console.log(search_word('The quick brown fox', 'fox'));
console.log(search_word('aa, bb, cc, dd, aa', 'aa'));
Output :
"'fox' was found 1 times."
"'aa' was found 2 times."

==============================*/
function searchWord(str, word){
    var result = 0;
    result = str.match(new RegExp(word, "gi")).length;
    result += result > 1 ? " times." : " time.";
    return word + " was found " + result;
}
console.log(searchWord('The quick brown fox', 'fox'));
console.log(searchWord('aa, bb, cc, dd, aa', 'aa'));

/*==============================

30. Write a JavaScript function check if a string ends with specified suffix.
Test Data :
console.log(string_endsWith('JS PHP PYTHON','PYTHON'));
true
console.log(string_endsWith('JS PHP PYTHON',''));
false
==============================*/
function strEndWithSuffix(str, word){
    if (word === null || word == '' || str === null || str == ''){
        return false;
    }
    var reg = / + word + $/;
    var arr = str.split(' ');
    return arr[arr.length-1].search(word) != -1 ? true : false;

}
console.log(strEndWithSuffix('JS PHP PYTHON','PYTHON'));
console.log(strEndWithSuffix('JS PHP PYTHON',''));

/*==============================

31. Write a JavaScript function to escapes special characters (&, <, >, ', ") for use in HTML.
Test Data :
console.log(escape_html('PHP & MySQL'));
"PHP &amp; MySQL"
console.log(escape_html('3 > 2'));
"3 &gt; 2"
==============================*/
function escapeSpecialChar(str){
    if (str === '' || str === null){
        return false;
    }else {
        str = str.toString();
    }
    var charReplacement = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quote;',
            "'": '&#039;'
            };
    return str.replace(/[&<>"']/, function(char){
            return charReplacement[char];
    });

}
console.log(escapeSpecialChar('PHP & MySQL'));
console.log(escapeSpecialChar('3 > 2'))

/*==============================

32. Write a JavaScript function to remove non-printable ASCII chars.
Test Data :
console.log(remove_non_ascii('äÄçÇéÉêPHP-MySQLöÖÐþúÚ'));
"PHP-MySQL"

==============================*/
function removeASCII(str){
    if (str === null || str === ''){
        return false;
    }
    str = str.toString();
    return str.replace(/[^\x20-\x7E]/g, '');

}
console.log(removeASCII('äÄçÇéÉêPHP-MySQLöÖÐþúÚ'));
"PHP-MySQL"

/*==============================

33. Write a JavaScript function to remove non-word characters.
Test Data :
console.log(remove_non_word('PHP ~!@#$%^&*()+`-={}[]|\\:";\'/?><., MySQL'));
"PHP - MySQL"

==============================*/
function removeNonWord(str){
    if (str === null || str === ''){
        return false;
    }
    str = str.toString();
    return str.replace(/[^a-zA-Z-\s]/g, '');
}
console.log(removeNonWord('PHP ~!@#$%^&*()+`-={}[]|\\:";\'/?><., MySQL'));

/*==============================

34. Write a JavaScript function to convert a string to title case.
Test Data :
console.log(sentenceCase('PHP exercises. python exercises.'));
"Php Exercises. Python Exercises."
==============================*/
function titleCase(str){
     if (str === null || str === ''){
        return false;
    }
    str = str.toString();
    var arr = str.split(' ');
    for (var i=0; i<arr.length; i++){
        arr[i] = arr[i].substr(0, 1).toUpperCase() + arr[i].substr(1).toLowerCase();
    }
    return arr.join(' ');
}
console.log(titleCase('PHP exercises. python exercises.'));

function titleCase2(str){
     if (str === null || str === ''){
        return false;
    }
    str = str.toString();
    return str.replace(/\w\S*/g, function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}
/*==============================

35. Write a JavaScript function to remove HTML/XML tags from string.
Test Data :
console.log(strip_html_tags('<p><strong><em>PHP Exercises</em></strong></p>'));
"PHP Exercises"

==============================*/
function removeHTMLtag(str){
    if (str === null || str === ''){
        return false;
    }
    str = str.toString();
    return str.replace(/<[^>]*>/g, '');

}
console.log(removeHTMLtag('<p><strong><em>PHP Exercises</em></strong></p>'));

/*==============================

36. Write a JavaScript function to create a Zerofilled value with optional +, - sign.
Test Data :
console.log(zeroFill(120, 5, '-'));
"+00120"
console.log(zeroFill(29, 4));
"0029"

==============================*/
function zerofilledValue(num, n, sign){
    if (num === null || n === null){
        return "invalid entry";
    }
    num = num.toString();
    var len = num.length;
    var result = Array(n-len+1).join(0) + num;
    return  sign === null ? result : sign + result; ///???
}
console.log(zerofilledValue(120, 5, '-'));
console.log(zerofilledValue(29, 4));

/*==============================

37. Write a JavaScript function to test case insensitive (except special Unicode
characters) string comparison.
Test Data :
console.log(compare_strings('abcd', 'AbcD'));
true
console.log(compare_strings('ABCD', 'Abce'));
false
==============================*/
function caseInsensitive(word1, word2){
    if (word1 === null || word2 === null){
        return false;
    }
    word1 = word1.toLowerCase();
    word2 = word2.toLowerCase();
    return word1.search(word2) !== -1 ? true : false;
}
console.log(caseInsensitive('abcd', 'AbcD'));
console.log(caseInsensitive('ABCD', 'Abce'));

/*==============================

38. Write a JavaScript function to create a case-insensitive search.
Test Data :
console.log(case_insensitive_search('JavaScript Exercises', 'exercises'));
"Matched"
console.log(case_insensitive_search('JavaScript Exercises', 'Exercises'));
"Matched"
console.log(case_insensitive_search('JavaScript Exercises', 'Exercisess'));
"Not Matched"

==============================*/
function caseInsensitiveSearch(str, word){
    if (str === null || word === null){
        return false;
    }
    str = str.toLowerCase();
    word = word.toLowerCase();
    return str.search(word) !== -1 ? "Matched" : "Not Matched";
}
console.log(caseInsensitiveSearch('JavaScript Exercises', 'exercises'));
console.log(caseInsensitiveSearch('JavaScript Exercises', 'Exercises'));
console.log(caseInsensitiveSearch('JavaScript Exercises', 'Exercisess'));

/*==============================