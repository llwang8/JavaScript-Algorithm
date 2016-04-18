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