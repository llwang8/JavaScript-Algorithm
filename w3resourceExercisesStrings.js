JavaScript String [38 exercises with solution]

/*==============================
1. Write a JavaScript function to check whether an `input` is a string or not. Go to the editor
Test Data :
console.log(is_string('w3resource'));
true
console.log(is_string([1, 2, 4, 0]));
false
==============================*/



/*==============================

2. Write a JavaScript function to check whether a string is blank or not. Go to the editor
Test Data :
console.log(is_Blank(''));
console.log(is_Blank('abc'));
true
false
==============================*/



/*==============================

3. Write a JavaScript function to split a string and convert it into an array of words. Go to the editor
Test Data :
console.log(string_to_array("Robin Singh"));
["Robin", "Singh"]
==============================*/



/*==============================

4. Write a JavaScript function to remove specified number of characters from a string. Go to the editor
Test Data :
console.log(truncate_string("Robin Singh",4));
"Robi"
==============================*/



/*==============================

5. Write a JavaScript function to convert a string in abbreviated form. Go to the editor
Test Data :
console.log(abbrev_name("Robin Singh"));
"Robin S."
==============================*/



/*==============================

6. Write a JavaScript function to hide email addresses to protect from unauthorized user. Go to the editor
Test Data :
console.log(protect_email("robin_singh@example.com"));
"robin...@example.com"
==============================*/



/*==============================

7. Write a JavaScript function to parameterize a string. Go to the editor
Test Data :
console.log(string_parameterize("Robin Singh from USA."));
"robin-singh-from-usa"
==============================*/



/*==============================

8. Write a JavaScript function to capitalize the first letter of a string. Go to the editor
Test Data :
console.log(capitalize('js string exercises'));
"Js string exercises"
==============================*/



/*==============================

9. Write a JavaScript function to capitalize the first letter of each word in a string. Go to the editor
Test Data :
console.log(capitalize_Words('js string exercises'));
"Js String Exercises"
==============================*/



/*==============================

10. Write a JavaScript function that takes a string which has lower and upper case letters as a parameter and converts upper case letters to lower case, and lower case letters to upper case. Go to the editor
Test Data :
console.log(swapcase('AaBbc'));
"aAbBC"
==============================*/



/*==============================

11. Write a JavaScript function to convert a string into camel case.Go to the editor
Test Data :
console.log(camelize("JavaScript Exercises"));
console.log(camelize("JavaScript exercises"));
console.log(camelize("JavaScriptExercises"));
"JavaScriptExercises"
"JavaScriptExercises"
"JavaScriptExercises"
==============================*/



/*==============================

12. Write a JavaScript function to uncamelize a string. Go to the editor
Test Data :
console.log(uncamelize('helloWorld'));
console.log(uncamelize('helloWorld','-'));
console.log(uncamelize('helloWorld','_'));
"hello world"
"hello-world"
"hello_world"
==============================*/



/*==============================

13. Write a JavaScript function to concatenates a given string n times (default is 1). Go to the editor
Test Data :
console.log(repeat('Ha!'));
console.log(repeat('Ha!',2));
console.log(repeat('Ha!',3));
"Ha!"
"Ha!Ha!"
"Ha!Ha!Ha!"
==============================*/



/*==============================

14. Write a JavaScript function to insert a string within a string at a particular position (default is 1).Go to the editor
Test Data :
console.log(insert('We are doing some exercises.'));
console.log(insert('We are doing some exercises.','JavaScript '));
console.log(insert('We are doing some exercises.','JavaScript ',18));
"We are doing some exercises."
"JavaScript We are doing some exercises."
"We are doing some JavaScript exercises."
==============================*/



/*==============================

15. Write a JavaScript function to humanized number (Formats a number to a human-readable string.) with the correct suffix such as 1st, 2nd, 3rd or 4th. Go to the editor
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



/*==============================

16. Write a JavaScript function to truncates a string if it is longer than the specified number of characters. Truncated strings will end with a translatable ellipsis sequence ("…") (by default) or specified characters. Go to the editor
Test Data :
console.log(text_truncate('We are doing JS string exercises.'))
console.log(text_truncate('We are doing JS string exercises.',19))
console.log(text_truncate('We are doing JS string exercises.',15,'!!'))
"We are doing JS string exercises."
"We are doing JS ..."
"We are doing !!"
==============================*/



/*==============================

17. Write a JavaScript function to chop a string into chunks of a given length. Go to the editor
Test Data :
console.log(string_chop('w3resource'));
console.log(string_chop('w3resource',2));
console.log(string_chop('w3resource',3));
["w3resource"]
["w3", "re", "so", "ur", "ce"]
["w3r", "eso", "urc", "e"]
==============================*/



/*==============================

18. Write a JavaScript function to count the occurrence of a substring in a string. Go to the editor
Test Data :
console.log(count("The quick brown fox jumps over the lazy dog", 'the'));
Output :
2
console.log(count("The quick brown fox jumps over the lazy dog", 'fox',false));
Output :
1

==============================*/



/*==============================

19. Write a JavaScript function to escape a HTML string. Go to the editor
Test Data :
console.log(escape_HTML('<a href="javascript-string-exercise-17.php" target="_blank">'));
Output :
"&lt;a href=&quot;javascript-string-exercise-17.php&quot; target=&quot;_blank&quot;&gt;"

==============================*/



/*==============================

20. Write a JavaScript function that can pad (left, right) a string to get to a determined length. Go to the editor
Test Data :
console.log(formatted_string('0000',123,'l'));
console.log(formatted_string('00000000',123,''));
Output :
"0123"
"12300000"

==============================*/



/*==============================

21. Write a JavaScript function to repeat a string a specified times. Go to the editor
Test Data :
console.log(repeat_string('a', 4));
console.log(repeat_string('a'));
Output :
"aaaa"
"Error in string or count."

==============================*/



/*==============================

22. Write a JavaScript function to get a part of a string after a specified character.Go to the editor
Test Data :
console.log(subStrAfterChars('w3resource: JavaScript Exercises', ':','a'));
console.log(subStrAfterChars('w3resource: JavaScript Exercises', 'E','b'));
Output :
"w3resource"
"xercises"
==============================*/



/*==============================
23. Write a JavaScript function to strip leading and trailing spaces from a string. Go to the editor
Test Data :
console.log(strip('w3resource '));
console.log(strip(' w3resource'));
console.log(strip(' w3resource '));
Output :
"w3resource"
"w3resource"
"w3resource"

==============================*/



/*==============================

24. Write a JavaScript function to truncate a string to a certain number of words. Go to the editor
Test Data :
console.log(truncate('The quick brown fox jumps over the lazy dog', 4));
Output :
"The quick brown fox"
==============================*/



/*==============================

25. Write a JavaScript function to alphabetize a given string. Go to the editor
Alphabetize string : An individual string can be alphabetized. This rearranges the letters so they are sorted A to Z.
Test Data :
console.log(alphabetize_string('United States'));
Output :
"SUadeeinsttt"

==============================*/



/*==============================

26. Write a JavaScript function to remove the first occurrence of a given 'search string' from a string. Go to the editor
Test Data :
console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the'));
Output :
"The quick brown fox jumps over lazy dog"
==============================*/



/*==============================

27. Write a JavaScript function to convert ASCII to Hexadecimal format. Go to the editor
Test Data :
console.log(ascii_to_hexa('12'));
console.log(ascii_to_hexa('100'));
Output :
"3132"
"313030"

==============================*/



/*==============================

28. Write a JavaScript function to convert Hexadecimal to ASCII format. Go to the editor
Test Data :
console.log(hex_to_ascii('3132'));
console.log(hex_to_ascii('313030'));
Output :
"12"
"100"

==============================*/



/*==============================

29. Write a JavaScript function to find a word within a string. Go to the editor
Test Data :
console.log(search_word('The quick brown fox', 'fox'));
console.log(search_word('aa, bb, cc, dd, aa', 'aa'));
Output :
"'fox' was found 1 times."
"'aa' was found 2 times."

==============================*/



/*==============================

30. Write a JavaScript function check if a string ends with specified suffix. Go to the editor
Test Data :
console.log(string_endsWith('JS PHP PYTHON','PYTHON'));
true
console.log(string_endsWith('JS PHP PYTHON',''));
false
==============================*/



/*==============================

31. Write a JavaScript function to escapes special characters (&, <, >, ', ") for use in HTML. Go to the editor
Test Data :
console.log(escape_html('PHP & MySQL'));
"PHP &amp; MySQL"
console.log(escape_html('3 > 2'));
"3 &gt; 2"
==============================*/



/*==============================

32. Write a JavaScript function to remove non-printable ASCII chars. Go to the editor
Test Data :
console.log(remove_non_ascii('äÄçÇéÉêPHP-MySQLöÖÐþúÚ'));
"PHP-MySQL"

==============================*/



/*==============================

33. Write a JavaScript function to remove non-word characters. Go to the editor
Test Data :
console.log(remove_non_word('PHP ~!@#$%^&*()+`-={}[]|\\:";\'/?><., MySQL'));
"PHP - MySQL"

==============================*/



/*==============================

34. Write a JavaScript function to convert a string to title case. Go to the editor
Test Data :
console.log(sentenceCase('PHP exercises. python exercises.'));
"Php Exercises. Python Exercises."
==============================*/



/*==============================

35. Write a JavaScript function to remove HTML/XML tags from string. Go to the editor
Test Data :
console.log(strip_html_tags('<p><strong><em>PHP Exercises</em></strong></p>'));
"PHP Exercises"

==============================*/



/*==============================

36. Write a JavaScript function to create a Zerofilled value with optional +, - sign. Go to the editor
Test Data :
console.log(zeroFill(120, 5, '-'));
"+00120"
console.log(zeroFill(29, 4));
"0029"

==============================*/



/*==============================

37. Write a JavaScript function to test case insensitive (except special Unicode characters) string comparison. Go to the editor
Test Data :
console.log(compare_strings('abcd', 'AbcD'));
true
console.log(compare_strings('ABCD', 'Abce'));
false
==============================*/



/*==============================

38. Write a JavaScript function to create a case-insensitive search. Go to the editor
Test Data :
console.log(case_insensitive_search('JavaScript Exercises', 'exercises'));
"Matched"
console.log(case_insensitive_search('JavaScript Exercises', 'Exercises'));
"Matched"
console.log(case_insensitive_search('JavaScript Exercises', 'Exercisess'));
"Not Matched"

==============================*/



/*==============================