//Algorithms and datastructure in JavaScript

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
Given a license plate string which contains letters and numbers, find the shortest word in a dictionary that contains all of the letters in the license plate.

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
//generating permutations. It took me a while to get right, as my reference source has a
//typo in the algorithm -_-.

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
