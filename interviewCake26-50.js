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