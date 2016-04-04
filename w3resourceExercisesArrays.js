//JavaScript array [41 exercises with solution]

/*==============================

1. Write a JavaScript function to check whether an `input` is an array or not.
console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));
false
true
==============================*/
function isArray(input){
  return toString.call(input) === "[object Array]";
}


/*==============================

2. Write a JavaScript function to clone an array. Go to the editor
Test Data :
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));
[1, 2, 4, 0]
[1, 2, [4, 0]]
==============================*/
function cloneArray(arr){
  return arr.slice(0);
}


/*==============================

3. Write a JavaScript function to get the first element of an array. Passing a
parameter 'n' will return the first 'n' elements of the array.
Test Data :
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));
Expected Output :
7
[]
[7, 9, 0]
[7, 9, 0, -2]
[]
==============================*/
function first(arr, n){
  if (array == null){
    return void 0;
  }
  if (n == null){
    return arr[0];
  }
  if (n < 0){
    return [];
  }
  return arr.slice(0, n);
}


/*==============================

4. Write a JavaScript function to get the last element of an array. Passing a
parameter 'n' will return the last 'n' elements of the array.
Test Data :
console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2],3));
console.log(last([7, 9, 0, -2],6));
Expected Output :
-2
[9, 0, -2]
[7, 9, 0, -2]
==============================*/
function last(arr, n){
  if (arr == null){
    return void 0;
  }
  if (n == null){
    return arr.pop();
  }
  if (n < 0){
    return []
  }
  return arr.slice(-n);
}
console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2],3));
console.log(last([7, 9, 0, -2],6));

/*==============================

5. Write a simple JavaScript program to join all elements of the following array
into a string. Go to the editor
Sample array : myColor = ["Red", "Green", "White", "Black"];
Expected Output :
"Red,Green,White,Black"
"Red,Green,White,Black"
"Red+Green+White+Black"
==============================*/
function join(arr){
  return arr.toString();
}


/*==============================

6. Write a JavaScript program which accept a number as input and insert dashes
(-) between each two even numbers. For example if you accept 025468 the output
should be 0-254-6-8.
==============================*/
function insertDashes(num){
  var result = "";
  var arr = num.toString().split('');
  result = arr[0];
  for (var i=1; i<arr.length; i++){
    if (isEven(arr[i-1]) && isEven(arr[i])){
      result += "-" + arr[i];
    }
  }
  return result;
}
function isEven(n){
  return (n % 2 === 0);
}

/*==============================

7. Write a JavaScript program to sort the items of an array. Go to the editor
Sample array : var arr1 = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ];
Sample Output : -4,-3,1,2,3,5,6,7,8
==============================*/



/*==============================

8. Write a JavaScript program to find the most frequent item of an array.

Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
Sample Output : a ( 5 times )
==============================*/



/*==============================

9. Write a JavaScript program which accept a string as input and swap the case
of each character. For example if you input 'The Quick Brown Fox' the output should
be 'tHE qUICK bROWN fOX'. Go to the editor
==============================*/
function swapCase(str){
  var arr = str.split('');
  for (var i=0; i<arr.length; i++){
    arr[i] = switch(arr[i]);
  }
  return arr.join('');
}
function switch(c){
  if (c.toLowerCase(c) === c){
    return c.toUpperCase();
  }
  if (c.toUpperCase(c) === c){
    return c.toLowerCase();
  }
}

//another solution
str = 'c';
var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var LOWER = 'abcdefghijklmnopqrstuvwxyz';
var result = [];

  for(var x=0; x<str.length; x++)
  {
    if(UPPER.indexOf(str[x]) !== -1)
    {
      result.push(str[x].toLowerCase());
    }
    else if(LOWER.indexOf(str[x]) !== -1)
    {
      result.push(str[x].toUpperCase());
    }
    else
    {
      result.push(str[x]);
    }
  }
console.log(result.join(''));

/*==============================

10. Write a JavaScript program which prints the elements of the following array.

Note : Use nested for loops.
Sample array : var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14],
[3, 10, 26, 7]];
Sample Output :
"row 0"
" 1"
" 2"
" 1"
" 24"
"row 1"
------
------
==============================*/



/*==============================

11. Write a JavaScript program to find the sum of squares of a numeric vector.

==============================*/
function sumOfSquare(arr){
  var sum = 0, i=arr.length;
  while (i--){
    sum += Math.pow(arr[i], 2);
  }
  return sum;
}

/*==============================
12. Write a JavaScript program to compute the sum and product of an array of integers.
==============================*/



/*==============================

13. Write a JavaScript program to add items in an blank array and display the items.

Sample Screen :
add elements in an blank array

==============================*/
arr[x] = document.getElementById('text1').value;

document.getElementById('result').innerHTML = res;
/*==============================
14. Write a JavaScript program to remove duplicate items from an array (ignore case
sensitivity).
==============================*/
function removeDuplicates(arr){
  for (var i=0; i<arr.length; i++){
    while (i !== arr.lastIndexOf(arr[i])){///////?????
      arr.splice(arr.lastIndexOf(arr[i], 1));
    }
  }
  return arr;
}
var Mynum = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];
result = removeDuplicates(Mynum);
console.log(Mynum);
console.log(result);

function removeDuplicates2(arr){
  var result = {};
  for (var i=0; i<arr.length; i++){
    if (result[arr[i]]){
      result[arr[i]] += 1;
    }else {
      result[arr[i]] = 1;
    }
  }
  return Object.keys(result);
}
var Mynum = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];
result = removeDuplicates2(Mynum);
console.log(Mynum);
console.log(result);

/*==============================

15. We have the following arrays :
color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
o = ["th","st","nd","rd"]
Write a JavaScript program to display the colors in the following way :
"1st choice is Blue ."
"2nd choice is Green."
"3rd choice is Red."
- - - - - - - - - - - - -
Note : Use ordinal numbers to tell their position.
==============================*/



/*==============================

16. Find the leap years in a given range of years.
==============================*/
function leapyear(m, n){

}


/*==============================

17. Write a JavaScript program to shuffle an array.
==============================*/



/*==============================

18. Write a JavaScript program to perform a binary search.
Note : A binary search or half-interval search algorithm finds the position of a
specified input value within an array sorted by key value.
Sample array :
var items = [1, 2, 3, 4, 5, 7, 8, 9];
Expected Output :
console.log(binary_Search(items, 1)); //0
console.log(binary_Search(items, 5)); //4
==============================*/



/*==============================

19. There are two arrays with individual values, write a JavaScript program to
compute the sum of each individual index value from the given arrays.

Sample array :
array1 = [1,0,2,3,4];
array2 = [3,5,6,7,8,13];
Expected Output :
[4, 5, 8, 10, 12, 13]
==============================*/



/*==============================

20. Write a JavaScript program to find duplicate values in a JavaScript array.

==============================*/
function findDuplicate(arr){
  var result = [];
  for (var i=0; i<arr.length; i++){
    if (i !== arr.lastIndexOf(arr[i])){
      if (result.indexOf(arr[i]) < 0){
        result.push(arr[i]);
      }
    }
  }
  return result;
}


/*==============================

21. Write a JavaScript program to flatten a nested (any depth) array. If you pass
shallow, the array will only be flattened a single level.
Sample Data :
console.log(flatten([1, [2], [3, [[4]]],[5,6]]));
[1, 2, 3, 4, 5, 6]
console.log(flatten([1, [2], [3, [[4]]],[5,6]], true));
[1, 2, 3, [[4]], 5, 6]
==============================*/
function flatten(arr, shallow, r){
  if (!r){
    r = [];
  }
  if (shallow){
    return r.concat.apply(r, arr);
    //return r.push.apply(a);
  }
  for (var i=0; i<arr.length; i++){
    if (arr[i].constructor == Array){
      flatten(arr[i], shallow, r);
    }else {
      r.push(arr[i]);
    }
  }
  return r;
}
console.log(flatten([1, [2], [3, [[4]]],[5,6]]));

console.log(flatten([1, [2], [3, [[4]]],[5,6]], true));

/*==============================

22. Write a JavaScript program to compute the union of two arrays.
Sample Data :
console.log(union([1, 2, 3], [100, 2, 1, 10]));
[1, 2, 3, 10, 100]
==============================*/
function unionOfArray(arr1, arr2){

  if(arr1.length < 0){
    return arr2;
  }
  if (arr2.length < 0){
    return arr1;
  }
  var result = [arr1];
  var len = arr2.length;
  for (var i=0; i<len; i++){
    if (result.indexOf(arr2[i]) < 0){
      result.push(arr2[i]);
    }
  }
  return result;
}
console.log(unionOfArray([1, 2, 3], [100, 2, 1, 10]));

/*==============================

23. Write a JavaScript function to find the difference of two arrays.
Test Data :
console.log(difference([1, 2, 3], [100, 2, 1, 10]));
["3", "10", "100"]
console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));
["6"]

==============================*/
function arrDiff(arr1, arr2){
  if (arr1){
    arr1 = flatten(arr1)
  }
  if (arr2){
    arr2 = flatten(arr2);
  }
  var result = [];
  for (var i=0; i<arr1.length; i++){
    if(arr2.indexOf(arr1[i]) < 0){
      result.push(arr1[i]);
    }
  }
  for (i=0; i<arr2.length; i++){
    if(arr1.indexOf(arr2[i]) < 0) {
      result.push(arr2[i]);
    }
  }
  return result;
}
console.log(arrDiff([1, 2, 3], [100, 2, 1, 10]));
console.log(arrDiff([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));

/*==============================

24. Write a JavaScript function to remove. 'null', '0', '""', 'false',
'undefined' and 'NaN' values from an array. Go to the editor
Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]
Expected result : [15, -22, 47]
==============================*/
function removeFalsy(arr){
  var result = [];
  for (var i=0; i<arr.length; i++){
    if(arr[i]) {                      //truthy value
      result.push(arr[i]);
    }
  }
  return result;
}
var arr = [NaN, 0, 15, false, -22, '',undefined, 47, null]
console.log(removeFalsy(arr));
/*==============================

25. Write a JavaScript function to sort the following array of objects
by title value. Go to the editor
Sample object :

var library = [
   { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
   { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
   { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of
   The Hunger Games', libraryID: 3245}
   ];
Expected result :

[[object Object] {
  author: "Suzanne Collins",
  libraryID: 3245,
  title: "Mockingjay: The Final Book of The Hunger Games"
}, [object Object] {
  author: "Bill Gates",
  libraryID: 1254,
  title: "The Road Ahead"
}, [object Object] {
  author: "Steve Jobs",
  libraryID: 4264,
  title: "Walter Isaacson"
}]
==============================*/
function sortObjByTitleValue(arr){
  return arr.sort(function(a, b){
    return a.title.length - b.title.length;
  });
}
console.log(sortObjByTitleValue(library));

/*==============================
26. Write a JavaScript program to find a pair of elements (indices of
the two numbers) from an given array whose sum equals a specific target
number.
Input: numbers= [10,20,10,40,50,60,70], target=50
Output: 3, 4

==============================*/
function sumOfElemToTarget(arr, target){
  var result = [];
  for (var i=0; i<arr.length; i++){
    var num = target - arr[i];
    if (arr.indexOf(num) >= 0 && arr.indexOf(num) > i) {
      result.push([i, arr.indexOf(num)]);
    }
  }
  return result;
}
var input = [10,20,10,40,50,60,70], target = 50;
console.log(sumOfElemToTarget(input, target));

/*==============================

27. Write a JavaScript function to retrieve the value of a given property
from all elements in an array.
Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]
Expected result : [15, -22, 47]
==============================*/
function retrieveValue(arr){
  return arr.filter(function(a){
    if (a){
      return a;
    }
  })
}
var array = [NaN, 0, 15, false, -22, '',undefined, 47, null];
console.log(retrieveValue(array));

/*==============================

28. Write a JavaScript function to find the longest common starting substring
in a set of strings. Go to the editor

Sample array : console.log(longest_common_starting_substring(['go', 'google']));
Expected result : "go"

==============================*/
function longestCommonSubstr(arr){
  var result = [];
  var substr = "";
  var str1 = arr[0];
  var str2 = arr[1];
  var len = Math.min(str1.length, str2.length);
  for (var i=0; i<len; i++){
    if(str1[i] == str2[i]){
      substr += str1[i];
    }else {
      if (substr.length > 0){
        result.push(substr);
      }
      substr = "";
    }
  }
  if (result.length > 0){
    result = result.reduce(function(longest, cur){
      if (longest.length < cur.length){
        return cur;
      }else {
        return longest;
      }
    });
  }
  return result;
}

console.log(longestCommonSubstr(['go', 'google']));
console.log(longestCommonSubstr(['SQLInjection', 'SQLTutorial']));
console.log(longestCommonSubstr(['abcd', '1234']));
/*==============================

29. Write a JavaScript function to fill an array with values (numeric, string
with one character) on supplied bounds. Go to the editor

Test Data :
console.log(num_string_range('a', "z", 2));
["a", "c", "e", "g", "i", "k", "m", "o", "q", "s", "u", "w", "y"]

==============================*/
function produceRange(start, end, step){
  var range = [];
  if (step === 0 || typeof start == undefined || typeof end == undefined){
    return false;
  }
  if (end < start){
    step = -step;
  }
  if (typeof start == 'number'){
    while(step > 0 ? start <= end : start >= end){
      range.push(start);
      start += step;
    }
  }else if (typeof start == 'string'){
      if (start.length != 1 || end.length != 1){
        throw TypeError ("Only Strings with one character are supported.");
      }
      star = start.charCodeAt(0);
      end = end.charCodeAt(0);
      while(step > 0 ? start <= end : start >= end){
        range.push(String.fromCharCode(start));
        start += step;
      }
  }else {
    throw TypeError("Only Strings with one character are supported.");
  }
  return range;
}
console.log(produceRange('a', "z", 2));
console.log(produceRange("Z", "A", 2));
console.log(produceRange(0, -5, 1));
console.log(produceRange(0, 25, 5));
console.log(produceRange(20, 5, 5));

/*==============================
30. Write a JavaScript function to merge two arrays and removes all duplicates
elements. Go to the editor

Test data :
var array1 = [1, 2, 3];
var array2 = [2, 30, 1];
console.log(merge_array(array1, array2));
[3, 2, 30, 1]

==============================*/



/*==============================

31. Write a JavaScript function to remove a specific element from an array.
Test data :
console.log(remove_array_element([2, 5, 9, 6], 5));
[2, 9, 6]
==============================*/



/*==============================

32. Write a JavaScript function to find an array contains a specific element.
Test data :

==============================*/



/*==============================

33. Write a JavaScript script to empty an array keeping the original.

==============================*/



/*==============================

34. Write a JavaScript function to get nth largest element from an unsorted array.

Test Data :
console.log(nthlargest([ 43, 56, 23, 89, 88, 90, 99, 652], 4));
89

==============================*/



/*==============================

35. Write a JavaScript function to get a random item from an array.

==============================*/



/*==============================

36. Write a JavaScript function to create a specified number of elements with pre-filled
numeric value array.

Test Data :
console.log(array_filled(6, 0));
[0, 0, 0, 0, 0, 0]
console.log(array_filled(4, 11));
[11, 11, 11, 11]

==============================*/
function arrayFill(n, val){
  return Array.apply(null, Array(n)).map(Number.prototype.valueOf, val);
}


/*==============================

37. Write a JavaScript function to create a specified number of elements with
pre-filled string value array.

Test Data :
console.log(array_filled(3, 'default value'));
["default value", "default value", "default value"]
console.log(array_filled(4, 'password'));
["password", "password", "password", "password"]
==============================*/
function arrayFill2(n, str){
  return Array.apply(null, Array(n)).map(Array.prototype.valueOf, str);
}


/*==============================

38. Write a JavaScript function to move an array element from one position to another.

Test Data :
console.log(move([10, 20, 30, 40, 50], 0, 2));
[20, 30, 10, 40, 50]
console.log(move([10, 20, 30, 40, 50], -1, -2));
[10, 20, 30, 50, 40]
==============================*/
function movePosition(arr, start, end){
  while(start < 0){
    start += arr.length;
  }
  while (end < 0){
    end += arr.length;
  }
  if (end >= arr.length){
    end -= arr.length;
  }
  var temp = arr[start];
  arr.splice(start, 1);
  arr.splice(end, 0, temp);
  return arr;
}
console.log(movePosition([10, 20, 30, 40, 50], 0, 2));
console.log(movePosition([10, 20, 30, 40, 50], -1, -2));

/*==============================

39. Write a JavaScript function to filter false, null, 0 and blank values from an array.

Test Data :
console.log(filter_array_values([58, '', 'abcd', true, null, false, 0]));
[58, "abcd", true]
==============================*/



/*==============================

40. Write a JavaScript function to generate an array of specified length, filled with
integer numbers, increase by one from starting position.

Test Data :
console.log(array_range(1, 4));
[1, 2, 3, 4]
console.log(array_range(-6, 4));
[-6, -5, -4, -3]
==============================*/



/*==============================

41. Write a JavaScript function to generate an array between two integers of 1 step length.

Test Data :
console.log(rangeBetwee(4, 7));
[4, 5, 6, 7]
console.log(rangeBetwee(-4, 7));
[-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]

==============================*/



/*==============================



