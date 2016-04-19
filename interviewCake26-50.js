//Interview Cake #26 - # 50

/*==================================
#26. reverse string in-place
Write a function to reverse a string in-place ↴ .
Since strings in JavaScript are immutable ↴ , first convert the string into an array of
characters, do the in-place reversal on that array, and re-join that array into a string
before returning it. This isn't technically "in-place," and the array of characters will
cost O(n) additional space, so if you're comfortable coding in a language with mutable
strings, that'd be even better!
====================================*/
function reverse(string){
    var arr = string.split('');
    var len = Math.floor(arr.length/2);
    var temp;
    for (var i=0, i<len; i++){
        temp = arr[i];
        arr[i] = arr[len-1-i];
        arr[len-1-i] = temp;
    }
    return arr.join('');
}



/*==================================
#27. Reverse words
You're working on a secret team solving coded transmissions.
Your team is scrambling to decipher a recent message, worried it's a plot to break into a
major European National Cake Vault. The message has been mostly deciphered, but all the
words are backwards! Your colleagues have handed off the last step to you.

Write a function reverseWords() that takes a string message and reverses the order of the
ords in-place ↴ .

Since strings in JavaScript are immutable ↴ , we'll first convert the string into an array
of characters, do the in-place word reversal on that array, and re-join that array into a
string before returning it. But keep in mind that this isn't technically "in-place," and
the array of characters will cost
O
n
O(n) additional space! If you're comfortable coding in a language with mutable strings,
that'd be even better!

For example:

  var message = 'find you will pain only go you recordings security the into if';

reverseWords(message);
// returns: 'if into the security recordings you go only pain will you find'

When writing your function, assume the message contains only letters and spaces, and all
words are separated by one space.
====================================*/




/*==================================
#28. Parenthesis matching
I like parentheticals (a lot).
"Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get
confusing."

Write a function that, given a sentence like the one above, along with the position of an
opening parenthesis, finds the corresponding closing parenthesis.

Example: if the example string above is input with the number 10 (position of the first
parenthesis), the output should be 79 (position of the last parenthesis).
====================================*/
function getClosingParen(sentence, openParenIndex){
    var parenCounts = 0;
    for (var i=openParenIndex + 1; i<sentence.length; i++){
        var char = sentence[i];
        if (char === "("){
            parenCounts += 1;
        }else if (char === ")"){
            if (parenCounts === 0){
                return i;
            }else {
                parenCounts -= 0;
            }
        }
    }
    throw new Error ("no cloing parenthesis for :(");
}


/*==================================
#29. Bracket validator
You're working with an intern that keeps coming to you with JavaScript code that won't
run because the braces, brackets, and parentheses are off. To save you both some time,
you decide to write a braces/brackets/parentheses validator.
Let's say:

'(', '{', '[' are called "openers."
')', '}', ']' are called "closers."
Write an efficient function that tells us whether or not an input string's openers and
closers are properly nested.

Examples:

"{ [ ] ( ) }" should return true
"{ [ ( ] ) }" should return false
"{ [ }" should return false

====================================*/
function validBracket(str){
    var openersClosers = {
        "(": ")",
        "{": "}",
        "[": "]"
    };
    var openers = new Set(["(", "{". "["]);
    var closers = new Set([")", "}", "]"]);
    var openersStack = [];

    for (var i=0; i<str.length; i++){
        var char = str.charAt(i);
        if (openers.has(char)){
            openersStack.push(char);
        }
        if (closers.has(char)){
            if(!openersStack.length){
                return false;
            }else {
                var lastUnclosedOpener = openersStack.pop();
                if (openersClosers[lastUnclosedOpener] != char){
                    return false
                }
            }
        }
    }
    return openersStack.length === 0;

}



/*==================================
#30. Palindrome permutation
Write an efficient function that checks whether any permutation ↴ of an input string is
a palindrome ↴ .
Examples:

"civic" should return true
"ivicc" should return true
"civil" should return false
"livci" should return false
"But 'ivicc' isn't a palindrome!"
If you had this thought, read the question again carefully. We're asking if any
permutation of the string is a palindrome. Spend some extra time ensuring you fully
understand the question before starting. Jumping in with a flawed understanding of
the problem doesn't look good in an interview.
====================================*/
function palindromePermutation(str){
    var unpairedChar = new Set();
    for (var i=0; i<str.length; i++){
        var char = str[i];
        if(unpairedChar.has(char)){
            unpairedChar.delete(char);
        }ele {
            unpairedChar.add(char);
        }
    }
    return unpairedChar.length <= 1;
}



/*==================================
#31. Recursive Permutation
Write a recursive function for generating all permutations of an input string. Return them as a set.
Don't worry about time or space complexity—if we wanted efficiency we'd write an iterative version.

To start, assume every character in the input string is unique.

Your function can have loops—it just needs to also be recursive.
====================================*/
function recursivePermutation(string){
    if (string.length <= 1){
        return new Set(string);
    }
    var allCharExceptLast = string.slice(0, -1);
    var lastChar = string[string.length -1];

    var permutationsAllExceptLast = recursivePermutation(allCharExceptLast);

    var permutations = new Set();
    permutationsAllExceptLast.forEach(function(permutationAllExceptLast){
        for (var position=0, position<allCharExceptLast.length; position++){
            var permutation = permutationAllExceptLast.slice(0, position) + lastChar +
                              permutationAllExceptLast.slice(position);
            permutations.add(permutation);
        }
    });
    return permutations;
}

/*==================================
#32. Top Score
You created a game that is more popular than Angry Birds.
You rank players in the game from highest to lowest score. So far you're using an algorithm
that sorts in O(nlgn) time, but players are complaining that their rankings aren't updated
fast enough. You need a faster sorting algorithm.

Write a function that takes:

an array of unsortedScores
the highestPossibleScore in the game
and returns a sorted array of scores in less than O(nlgn) time.
====================================*/
function topScore(arr, maxValue){
    var numCounts = [];
    for (var i=0; i<maxValue; i++){
        numCounts.push(i);
    }
    arr.forEach(function(num){
        numCounts[num] ++;
    });
    var sortedArray = [];
    for (var num=0; i<numCounts.length; num++){
        var count = numCounts[num];
        for(var i=0; i<count; i++){
            sortedArray.push(num);
        }
    }
    return sortedArray;
}



/*==================================
#33. Which appears first
I have an array where every number in the range
1...n appears once except for one number which appears twice.
Write a function for finding the number that appears twice.

====================================*/
function findDuplicate(arr){
    var n = arr[-1];
    var sumN = n * (n + 1) / 2;
    var arrTotal = arr.reduce(function(total, cur){
        total += cur;
    });
    return arrTotal - sumN;

}

/*==================================
#34. World Cloud Date
You want to build a word cloud, an infographic where the size of a word corresponds
to how often it appears in the body of text.  To do this, you'll need data. Write
code that takes a long string and builds its word cloud data in a map ↴ , where the
keys are words and the values are the number of times the words occured.

We'll use a JavaScript Map instead of an object because it's more explicit—we're
mapping words to counts. And it'll be easier and cleaner when we want to iterate
over our data.

Think about capitalized words. For example, look at these sentences:

'After beating the eggs, Dana read the next step:'
'Add milk and eggs, then add flour and sugar.'
What do we want to do with "After", "Dana", and "add"? In this example, your final
map should include one "Add" or "add" with a value of
2. Make reasonable (not necessarily perfect) decisions about cases like "After" and
"Dana".

Assume the input will only contain words and standard punctuation.
====================================*/






/*==================================
#35 in-Place shuffle
Write a function for doing an in-place ↴ shuffle of an array.
The shuffle must be "uniform," meaning each item in the original array must have
the same probability of ending up in each spot in the final array.

Assume that you have a function getRandom(floor, ceiling) for getting a random integer
that is >=floor and <=ceiling.
This is a semi-famous algorithm known as the Fisher-Yates shuffle (sometimes called
the Knuth shuffle).
====================================*/

function getRandom(floor, ceiling){
    return Match.floor(Math.random() * (Ceiling -floor +) + floor);
}
function shuffle(array){
    var indexChosed, indexRandomChosed, temp;
    if (array.length <=1) return;
    for (indexChosed=0; indexChosed<array.length; i++){
        indexRandomChosed = getRandom(indexChosed, array.length - 1);
        temp = array(indexChosed);
        array[indexChosed] = array[indexRandomChosed];
        array[indexRandomChosed] = temp;
    }
}

/*==================================
#36 Single Riffle Shuffle
I figured out how to get rich: online poker.
I suspect the online poker game I'm playing shuffles cards by doing a single " riffle ↴ ."

To prove this, let's write a function to tell us if a full deck of cards shuffledDeck is
a single riffle of two other halves half1 and half2.

We'll represent a stack of cards as an array of integers in the range 1..52
(since there are 52 distinct cards in a deck).

Why do I care? A single riffle is not a completely random shuffle. If I'm right, I can
make more informed bets and get rich and finally prove to my ex that I am not a "loser
with an unhealthy cake obsession" (even though it's too late now because she let me go
and she's never getting me back).
====================================*/
function isSingleRiffleRecursive(half1, half2, shuffledDeck){
    if (shuffledDeck.length === 0){
        return true;
    }
    if (half1.length && half1[0] == shuffledDeck[0]){
        return isSingleRiffleRecursive(half1.slice(1), half2, shuffledDeck.slice(0));
    }else if (half2.length && half2[0] = shuffledDeck[0]) {
        return isSingleRiffleRecursive(half1, half2.slice(1), shuffledDeck.slice(0));
    }else {
        return false;
    }
}

function isSingleRiffleRecursiveOptimized(half1, half2, shuffledDeck, half1Index, half2Index, shuffledDeckIndex){
    shuffledDeckIndex = shuffledDeckIndex || 0;
    half1Index = half1Index || 0;
    half2Index = half2Index || 0;
    if (shuffledDeckIndex = shuffledDeck.length){
        return true;
    }
    if ((half1Index < half1Index.length) &&
        (half1[half1Index] == shuffledDeck[shuffledDeckIndex])){
        half1Index ++;
    }else if ((half2Index < half2Index.length) &&
        (half2Index[half2Index] == shuffledDeck[shuffledDeckIndex])){
        half2Index ++;
    }esel {
        return false;
    }
    shuffledDeckIndex++;
    return isSingleRiffleRecursiveOptimized(half1, half2, shuffledDeck, half1Index, half2Index, shuffledDeckIndex);
}

function isSingleRiffle(half1, half2, shuffledDeck){
    var half1Index = 0;
    var half2Index = 0;
    var half1MaxIndex = half1.length -1;
    var half2MaxIndex = half2.length -1;
    for (var i=0; i<shuffledDeck.length; i++){
        var card = shuffledDeck[i];
        if (half1Index < = half1MaxIndex && card === half1[half1Index]){
            half1Index++;
        }else if (half2Index <= half2MaxIndex && card === half2[half2MaxIndex]){
            half2Index++;
        }else {
            return false;
        }
    }
    return true;
}



/*==================================
#37 Simulate 5-side die
You have a function rand7() that generates a random integer from 1 to 7. Use it to write
a function rand5() that generates a random integer from 1 to 5.
rand7() returns each integer with equal probability. rand5() must also return each integer
with equal probability.
====================================*/
function rand5(){
    var result = 7;
    while (result > 5){
        result = rand7();
    }
    return result;
}

function rand5Recursive(){
    var roll = rand7();
    return roll <= 5 ? roll : rand5Recursive();
}

/*==================================
You have a function rand5() that generates a random integer from 1 to 5. Use it to
write a function rand7() that generates a random integer from 1 to 7.
rand5() returns each integer with equal probability. rand7() must also return each
integer with equal probability.
====================================*/
function rand7(){
    while(true){
        var roll1 = rand5();
        var roll2 = rand5();
        var outcomeNum = (roll1 - 1) * 5 + (roll2 - 1) + 1;
        if (outcomeNum > 21) continue;
        return outcomeNum % 7 + 1;
    }
}



/*==================================
#39 Two-egg problem
A building has 100 floors. One of the floors is the highest floor an egg can be dropped from
without breaking.
If an egg is dropped from above that floor, it will break. If it is dropped from that floor
or below, it will be completely undamaged and you can drop the egg again.

Given two eggs, find the highest floor an egg can be dropped from without breaking, with as
few drops as possible.
====================================*/




/*==================================
#40 find repeat, space edition
We have an array of integers, where:

The integers are in the range 1..n
The array has a length of n+1
It follows that our array has at least one integer which appears at least twice. But it may
have several duplicates, and each duplicate may appear more than twice.

Write a function which finds any integer that appears more than once in our array.

We're going to run this function on our new, super-hip Macbook Pro With Retina Display™.
Thing is, the damn thing came with the RAM soldered right to the motherboard, so we can't
upgrade our RAM. So we need to optimize for space!
====================================*/
function findRepeatUsingSet(numbers){  //O(n) time and O(n) space
    var numbersSeen = new Set();
    for (var i=0; i<numbers.length; i++){
        if (numbersSeen.has(numbers[i])){
            return numbers[i];
        }else {
            numbersSeen.add(numbers[i]);
        }
    }
    return "no duplicate found";
}
function findRepeatBruteForce(numbers){
    var i, j, found, num;
    for (i=0; i<numbers.length; i++){
        found = false;
        num = numbers[i];
        for (j=0; i<numbers.length; j++){
            if (num == numbers[j]){
                if (found){
                    return num;
                }else {
                    found = false;
                }
            }
        }
    }
    return "no duplicate found";
}

function findRepeat(numArr){
    var floor = 1,
        ceiling = numArr.length -1;

    while (floor < ceiling){
        var midpoint = Math.floor(floor + (ceiling - floor)/2),
            lowerRangeFloor = floor,
            lowerRangeCeiling = midpoint,
            upperRangeFloor = midpoint + 1,
            upperRangeCeiling = ceiling,
            distinctPossibleIntergerInLowerRange = lowerRangeCeiling - lowerRangeFloor + 1,
            itemsInLowerRange = 0;
        numArr.forEach(function(item)){
            if (item >= lowerRangeFloor && item <= lowerRangeCeiling){
                itemsInLowerRange++;
            }
        });
        if (itemsInLowerRange > distinctPossibleIntergerInLowerRange){
            floor = lowerRangeFloor;
            ceiling = lowerRangeCeiling;
        }else {
            floor = upperRangeFloor;
            ceiling = upperRangeCeiling;
        }
    }
    return floor;
}

/*==================================

====================================*/




/*==================================

====================================*/




/*==================================

====================================*/








/*==================================

====================================*/




/*==================================

====================================*/




/*==================================

====================================*/






/*==================================

====================================*/




/*==================================

====================================*/




/*==================================

====================================*/






/*==================================

====================================*/




/*==================================

====================================*/




/*==================================

====================================*/






/*==================================

====================================*/




/*==================================

====================================*/




/*==================================

====================================*/






/*==================================

====================================*/




/*==================================

====================================*/




/*==================================

====================================*/




/*==================================

====================================*/




/*==================================

====================================*/




/*==================================

====================================*/




/*==================================

====================================*/




/*==================================

====================================*/




/*==================================

====================================*/






/*==================================

====================================*/




/*==================================

====================================*/




/*==================================

====================================*/





/*==================================

====================================*/




/*==================================

====================================*/




/*==================================

====================================*/




/*==================================

====================================*/




/*==================================

====================================*/




/*==================================

====================================*/