//Algorithms and datastructure in JavaScript - misc. notes

//practice
function formatDate(userDate) {
   // format from M/D/YYYY to YYYYMMDD
  var arrDate = userDate.split('/');

  var result = "";
  for (var i=0; i<=1; i++){
    if (arrDate[i].length === 1){
      arrDate[i] = "0" + arrDate[i];
    }
  }
  result = arrDate[2] + arrDate[0] + arrDate[1];
  return result;
}
console.log(formatDate("2/3/2014"));



/*
===============================================================
Given a license plate string which contains letters and numbers, find the shortest word
in a dictionary that contains all of the letters in the license plate.

Example:
License plate: “123 PTS”
Dictionary: [“stripe”, “step”, “set”]
Answer: “step”
===============================================================
*/
var plate = “123 PTS”
var dic = [“stripe”, “step”, “set”];
Function letterToWord(plate){
    var letters=[], result=[], min, i, index;
    letters =plate.replace(/\d\S+/, “”).split(“”);
    for ( i=0; i<dic.length; i++){
        if (checkIn(dic[i]))
result.push(dic[i]);
}
if (result.length === 0)
    return “No dictionary word contains all license plate letters.”

min = result[0].length;
index = 0;
    for (i=0; i<result.length; i++){
    if (result[i].length < min)
        min = result[i].length;
        index = i;
}
return result[index];
}

function checkIn(word){
    for ( i=0; i< letters.length; i++){
        if(dic[i].indexOf(words[i]) == -1)
            return false;
    }
    return true;
}

//'m going to throw my hat in the ring with the iterative version of Heap's method of
//generating permutations. It took me a while to get right, as my reference source has
//a typo in the algorithm -_-.

function swap(chars, i, j) {
    var tmp = chars[i];
    chars[i] = chars[j];
    chars[j] = tmp;
}

function getAnagrams(input) {
    var counter = [],
        anagrams = [],
        chars = input.split(''),
        length = chars.length,
        i;

    for (i = 0; i < length; i++) {
        counter[i] = 0;
    }

    anagrams.push(input);
    i = 0;
    while (i < length) {
        if (counter[i] < i) {
            swap(chars, i % 2 === 1 ? counter[i] : 0, i);
            counter[i]++;
            i = 0;
            anagrams.push(chars.join(''));
        } else {
            counter[i] = 0;
            i++;
        }
    }

    return anagrams;
}

/*
There's a specfic reason you'll sometimes see ~ applied in front of $.inArray.

Basically,

~$.inArray("foo", bar)
is a shorter way to do

$.inArray("foo", bar) !== -1
$.inArray returns the index of the item in the array if the first argument is found,

and it returns -1 if its not found. This means that if you're looking for a boolean
of "is this value in the array?", you can't do a boolean comparison, since -1 is a
truthy value, and when $.inArray returns 0 (a falsy value), it means its actually
found in the first element of the array.

Applying the ~ bitwise operator causes -1 to become 0, and causes 0 to become `-1.
Thus, not finding the value in the array and applying the bitwise NOT results in a
falsy value (0), and all other values will return non-0 numbers, and will represent a
truthy result.

if (~$.inArray("foo", ["foo",2,3])) {
    // Will run
}
And it'll work as intended.
*/




parseInt( null, 24 ) === 23 // true
/*
It's converting null to the string "null" and trying to convert it. For radixes 0
through 23, there are no numerals it can convert, so it returns NaN. At 24, "n",
the 14th letter, is added to the numeral system. At 31, "u", the 21st letter, is
added and the entire string can be decoded. At 37 on there is no longer any valid
numeral set that can be generated and NaN is returned.

js> parseInt(null, 36)
1112745

>>> reduce(lambda x, y: x * 36 + y, [(string.digits + string.lowercase).index(x)
for x in 'null'])
1112745
*/


parseInt(1 / 0, 19)  // 18
/*
The result of 1/0 is Infinity.

parseInt treats its first argument as a string which means first of all
Infinity.toString() is called, producing the string "Infinity". So it works
the same as if you asked it to convert "Infinity" in base 19 to decimal.

Here are the digits in base 19 along with their decimal values:

Base 19   Base 10 (decimal)
---------------------------
   0            0
   1            1
   2            2
   3            3
   4            4
   5            5
   6            6
   7            7
   8            8
   9            9
   a            10
   b            11
   c            12
   d            13
   e            14
   f            15
   g            16
   h            17
   i            18
What happens next is that parseInt scans the input "Infinity" to find
which part of it can be parsed and stops after accepting the first I
(because n is not a valid digit in base 19).

Therefore it behaves as if you called parseInt("I", 19), which converts to
decimal 18 by the table above.
*/