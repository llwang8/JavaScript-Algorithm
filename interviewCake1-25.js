//Interview Cake

/*==================================
#1. Apple Stocks
Suppose we could access yesterday's stock prices as an array, where:

The indices are the time in minutes past trade opening time, which was 9:30am local time.
The values are the price in dollars of Apple stock at that time.
So if the stock cost $500 at 10:30am, stockPricesYesterday[60] = 500.

Write an efficient function that takes stockPricesYesterday and returns the best profit I could
have made from 1 purchase and 1 sale of 1 Apple stock yesterday.
    var stockPricesYesterday = [10, 7, 5, 8, 11, 9];

    getMaxProfit(stockPricesYesterday);
// returns 6 (buying for $5 and selling for $11)
====================================*/
var stockPricesYesterday = [10, 7, 5, 8, 11, 9];
function getMaxProfit(stockPriceArray){
    var maxProfit = 0;
    var maxIndex = 0;
    if (stockPriceArray.length === 0) {
        return "invalid entry to calculate profit";
    }
    for (var i=0; i< stockPriceArray.length; i++){
        var temp = stockPriceArray.slice(i).reduce(function(max, current){
            return max < current)? current - stockPriceArray[i] : max;
        });
        if (maxProfit < temp){
            maxProfit = temp;
            maxBuyIndex = i;
        }
    }
}
getMaxProfit(stockPricesYesterday)
function getMaxProfit2(stockPriceArray){
    var maxProfit = 0;
    var maxIndex = 0;
    var minPrice = 0;
    var minIndex = 0;
    for (var i=0; i< stockPriceArray.length; i++){
        currentPrice = stockPriceArray[i];
        minPrice = Math.min(minPrice, currentPrice);
        maxProfit = Math.max(maxProfit, currentPrice - minPrice);
    }
    return maxProfit;
}
/*==================================
#2.  Products of All Others
You have an array of integers, and for each index you want to find the product of
every integer except the integer at that index.
Write a function getProductsOfAllIntsExceptAtIndex() that takes an array of integers
and returns an array of the products.

For example, given:

  [1, 7, 3, 4]

your function would return:

  [84, 12, 28, 21]

by calculating:

  [7*3*4, 1*3*4, 1*7*4, 1*7*3]

Do not use division in your solution.
====================================*/
function getProductsOfAllIntsExceptAtIndex(intArray){
    var productsOfAllIntsExceptAtIndex = [];
    var productsSoFar = 1;
    for (var i=0; i<intArray.length; i++){
        productsOfAllIntsExceptAtIndex[i] = productsSoFar;
        productsSoFar *= intArray[i];
    }
    productsSoFar = 1;
    for (var j=intArray.length-1; j>=0; j--){
        productsOfAllIntsExceptAtIndex[j] *= productsSoFar;
        productsSoFar *= intArray[j];
    }
    return productsOfAllIntsExceptAtIndex;
}

/*==================================
#3.  Highest Product of 3
Given an arrayOfInts, find the highestProduct you can get from three of the integers.
The input arrayOfInts will always have at least three integers.
====================================*/
function getHighestProductOfThree(intArray){
    if (intArray.length < 3){
        throw new Error ("Less than 3 items!");
    }
    var highest = Math.max(intArray[0], intArray[1]);
    var lowest = Math.min(intArray[0], intArray[1]);
    var highestProductOf2 = intArray[0] * intArray[1];
    var lowestProductOf2 = intArray[0] * intArray[1];
    var highestProductOf3 = intArray[0] * intArray[1] * intArray[2];


    for (var i=0; i<intArray.length; i++){
        var current = intArray[i];

        highestProductOf3 = Math.max(
            highestProductOf3,
            highestProductOf2 * current,
            current * lowestProductOf2
            );
        highestProductOf2 = Math.max(
            highestProductOf2,
            current * highest,
            current * lowest
            );
        lowestProductOf2 = Math.min(
            lowestProductOf2,
            current * lowestProductOf2,
            );
        highest = Math.max(highest, current);
        lowest = Math.min(lowest, current);

    }
    return highestProductOf3;
}
/*==================================
#4.  Merge Meeting Times
Your company built an in-house calendar tool called HiCal. You want to add a
feature to see the times in a day when everyone is available.
To do this, you’ll need to know when any team is having a meeting. In HiCal, a
meeting is stored as objects ↴ with attributes startTime and endTime. These integers
represent the number of 30-minute blocks past 9:00am.

For example:

  {startTime: 2, endTime: 3} // meeting from 10:00 – 10:30 am
{startTime: 6, endTime: 9} // meeting from 12:00 – 1:30 pm

Write a function condenseMeetingTimes() that takes an array of meeting time ranges
and returns an array of condensed ranges.

For example, given:

  [
    {startTime: 0,  endTime: 1},
    {startTime: 3,  endTime: 5},
    {startTime: 4,  endTime: 8},
    {startTime: 10, endTime: 12},
    {startTime: 9,  endTime: 10},
]

your function would return:

  [
    {startTime: 0, endTime: 1},
    {startTime: 3, endTime: 8},
    {startTime: 9, endTime: 12},
]

Do not assume the meetings are in order. The meeting times are coming from multiple
teams.

In this case the possibilities for startTime and endTime are bounded by the number
of 30-minute slots in a day. But soon you plan to refactor HiCal to store times as
Unix timestamps (which are big numbers). Write something that's efficient even when
we can't put a nice upper bound on the numbers representing our time ranges.
====================================*/
function condenseMeetingTimes(arrMeeingTimes){
    var sortedMeetingTimes = arrMeetingTimes.sort(function(a, b){
        return a.startTime > b.startTime ? 1 : -1;
    }):
    var mergeTimes = [];
    var previousMeetingStart = sortedMeetingTimes[0].startTime;
    var previousMeetingEnd = sortedMeetingTimes[0].endTime;
    for (var i=0; i<sortedMeetingTimes; i++){
        var current = sortedMeetingTimes[i];
            if (current.startTime <= previousMeetingEnd){
                previousMeetingEnd = Math.max(current.endTime, previousMeetingEnd);
            }else {
                mergetimes.push({startTime: previousMeetingStart, endTime; previousMeetingEnd});
                previousMeetingStart = current.startTime;
                previousMeetingEnd = current.endTime;
            }
        }
    }
    mergetimes.push({startTime: previousMeetingStart, endTime; previousMeetingEnd});
    return mergeTimes;
}
/*==================================
#5. Making Changes
Imagine you landed a new job as a cashier...
Your quirky boss found out that you're a programmer and has a weird request about something
they've been wondering for a long time.

Write a function that, given:

an amount of money
an array of coin denominations
computes the number of ways to make amount of money with coins of the available denominations.

Example: for amount=44 (44¢) and denominations=123[1,2,3] (11¢, 22¢ and 33¢), your program
would output 44—the number of ways to make 44¢ with those denominations:

1¢, 1¢, 1¢, 1¢
1¢, 1¢, 2¢
1¢, 3¢
2¢, 2¢

====================================*/



/*==================================
#6.  Rectangle Love
A crack team of love scientists from OkEros (a hot new dating site) have devised a way to
represent dating profiles as rectangles on a two-dimensional plane.
They need help writing an algorithm to find the intersection of two users' love rectangles.
They suspect finding that intersection is the key to a matching algorithm so powerful it will
cause an immediate acquisition by Google or Facebook or Obama or something.
As with the example above, love rectangles are always "straight" and never "diagonal." More
rigorously: each side is parallel with either the x-axis or the y-axis.

They are defined as objects ↴ like this:

  var myRectangle = {

    // coordinates of bottom-left corner
    leftX: 1,
    bottomY: 5,

    // width and height
    width: 10,
    height: 4,

};

Your output rectangle should use this format as well.
====================================*/
function findLoveRectangle(r1, r2){

    function findRangeOverlap(p1, length1, p2, length2){
        var highestStartPoint = Math.max(p1, p2);
        var lowestEndPoint = Math.min(p1 + length1, p2 + length2);
        if (highestStartPoint >= lowestEndPoint){
            return {
                    startPoint: null,
                    overlapLength: null
                    };
            };
        }else {
            return {
                    startPoint: highestStartPoint,
                    overlapLength: lowestEndPoint - highestStartPoint
                    };
        }
    }

    var xOverlap = findRangeOverlap(r1.leftX, r1.width, r2.leftX, r2.width);
    var yOverlap = findRangeOverlap(r1.bottomY, r1.height, r2.bottomY, r2.height);

    if (!xOverlap.overlapLength || !yOverlap.overlapLength) {
        return {
                leftX: null,
                bottomY: null,
                width: null,
                height: null
        };
    }else {
        return {
                leftX: xOverlap.startPoint,
                bottomY: yOverlap.startPoint,
                width: xOverlap.overlapLength,
                height: yOverlap.overlapLength
        };
    }
}



/*==================================
#7. Temperature Tracker
You decide to test if your oddly-mathematical heating company is fulfilling its All-Time Max,
Min, Mean and Mode Temperature Guarantee™.
Write a class TempTracker with these methods:

insert()—records a new temperature
getMax()—returns the highest temp we've seen so far
getMin()—returns the lowest temp we've seen so far
getMean()—returns the mean ↴ of all temps we've seen so far
getMode()—returns the mode ↴ of all temps we've seen so far
Optimize for space and time. Favor speeding up the getter functions (getMax(), getMin(),
getMean(), and getMode()) over speeding up the insert() function.

getMean() should return a float, but the rest of the getter functions can return integers.
Temperatures will all be inserted as integers. We'll record our temperatures in Fahrenheit,
so we can assume they'll all be in the range 0..1100..110.

If there is more than one mode, return any of the modes.

====================================*/
function TempTracker(){
    //for mode
    this.occurences = [];
    for (var i=0; i<110; i++){
        this.occurences[i] = 0;
    }
    this.maxOccurrences = 0;
    this.mode = null;
    //for mean
    this.totalNums = 0;
    this.totalSum = 0;
    this.mean = 0;
    //for max, min
    this.maxTemp = 0;
    this.minTemp = 0;

}
TempTracker.prototype.insert = function(temp){
    //for mode
    this.occurences[temp] ++;
    if (this.occurrences[temp] > this.maxOccurrences){
        this.maxOccurrences = this.occurrences[temp];
        this.mode = temp;
    }
    //for mean
    this.totalNums ++;
    this.totalSum += temp;
    this.mean = this.totalNums / this.totalSum;
    //for max, min
    if (this.maxTemp === null || temp > this.maxTemp){
        this.maxTemp = temp;
    }
    if (this.minTemp === null || temp < this.minTemp){
        this.minTemp = temp;
    }
}

TempTracker.prototype.getMax = function(){
    return this.maxTemp;
}
TempTracker.prototype.getMin = function(){
    return this.minTemp;
}
TempTracker.prototype.getMean = function(){
    return this.mean;
}
TempTracker.prototype.getMode = function(){
    return this.mode;
}

/*==================================
#8. Balanced Binary Tree
Write a function to see if a binary tree ↴ is "superbalanced" (a new tree property we just
made up).
A tree is "superbalanced" if the difference between the depths of any two leaf nodes is no
greater than one.

Here's a sample binary tree node class:

  function BinaryTreeNode(value) {
    this.value = value;
    this.left  = null;
    this.right = null;
}

BinaryTreeNode.prototype.insertLeft = function(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
};

BinaryTreeNode.prototype.insertRight = function(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
};
====================================*/
function BinaryTreeNode() = function(){
    this.value = null;
    this.left = null;
    this.right = null;
}
BinaryTreeNode.prototype.insertLeft = function(value){
    this.left = new BinaryTreeNode(value);
    return this.left;
}
BinaryTreeMode.prototype.insertRight = function(value){
    this.right = new BinaryTreeNode(value);
    return this.right;
}
BinaryTreeNode.prototype.depthSearch = function(value){
    if()
}


/*==================================
#9. Binary Search Tree
Write a function to check that a binary tree ↴ is a valid binary search tree ↴
====================================*/
function bstChecker(treeRoot){
    var nodeAndBoundsStack = [];
    nodeAndBoundsStack.push{node: treeRoot, lowerBound: -infinite, upperBound: infinite};
    while (nodeAndBoundsStack.length){
        var nodeAndBounds = nodeAndBoundsStack.pop(),
            lowerBound = nodeAndBounds.lowerBound,
            upperBound = nodeAndBounds;

        if(node.value < lowerBound || node.value > upperBound){
            return false;
        }

        if(node.left){
            nodeAndBoundsStack.push(node:node.left, lowerBound:lowerBound, upperBound:node.value);

        }
        if(node.right){
            nodeAndBoundsStack.push(node:node.right, lowerBound:node.value, upperBound:upperBound);
        }
    }
    return true;
}
function bstCheckerRecuisive(treeRoot){
    lowerBound = lowerBound || -infinite;
    upperBound = upperBound || infinite;

    if(!treeRoot) return true;
    if(treeRoot.value > upperBound || treeRoot.value < lowerBound){
        return false;
    }

    return bstCheckerRecuisive(treeRoot.left, lowerBound, treeRoot.value) &&
           bstCheckerRecuisive(treeRoot.right, treeRoot.value, upperBound);
}
/*==================================
#10. 2nd Largest Item in Binary Search Tree
Write a function to find the 2nd largest element in a binary search tree ↴ .
====================================*/
function largestRecursive(rootNode){
    if (rootNode.right){
        return largest(rootNode.right);
    }
    return rootNode.value;
}

function secondLargestRecursive(treeRoot){
    if (!treeRoot) return null;

    var largest = largestRecursive(rootNode);
    if(!largest.left){
        return largest.
    }else {
        return largestRecursive(largest);
    }
}
//===================
function findLargest(rootNode){
    var current = rootNode;
    while (current){
        if (!current.right) return current.value;
        current = current.right;
    }
}

function findSecondLargest(rootNode){
    if (!rootNode.left && !rootNode) {
        throw new Error("Tree must have at least 2 nodes");
    }

    var current = rootNode;
    while (current){
        if(current.left && !current.right){
            return findLargest(current.left);
        }
        if (current.right && !current.right.left && !current.right.left){
            return current.value;
        }
        current = current.right;
    }
}

/*==================================
#11. MillionGazillion
I'm making a search engine called MillionGazillion™.
I wrote a crawler that visits web pages, stores a few keywords in a database, and
follows links to other web pages. I noticed that my crawler was wasting a lot of time
visiting the same pages over and over, so I made an object visited where I'm storing
URLs I've already visited. Now the crawler only visits a URL if it hasn't already been
visited.

Thing is, the crawler is running on my old desktop computer in my parents' basement
(where I totally don't live anymore), and it keeps running out of memory because visited
is getting so huge.

How can I trim down the amount of space taken up by visited?
====================================*/




/*==================================
#12.  Find Ordered Set
Suppose we had an array ↴ of
n
n integers in sorted order. How quickly could we check if a given integer is in the array?
====================================*/




/*==================================
#13.  Find Rotation Point
I want to learn some big words so people think I'm smart.
I opened up a dictionary to a page in the middle and started flipping through, looking for
words I didn't know. I put each word I didn't know at increasing indices in a huge array I
created in memory. When I reached the end of the dictionary, I started from the beginning
and did the same thing until I reached the page I started at.

Now I have an array of words that are mostly alphabetical, except they start somewhere in
the middle of the alphabet, reach the end, and then start from the beginning of the
alphabet. In other words, this is an alphabetically ordered array that has been "rotated."
For example:

  var words = [
    'ptolemaic',
    'retrograde',
    'supplant',
    'undulate',
    'xenoepist',
    'asymptote', // <-- rotates here!
    'babka',
    'banoffee',
    'engender',
    'karpatka',
    'othellolagkage',
];

Write a function for finding the index of the "rotation point," which is where I started
working from the beginning of the dictionary. This array is huge (there are lots of words
I don't know) so we want to be efficient here.
====================================*/
function findRotationIndex(words){
    const firstWord = words[0];
    var floorIndex = 0;
    var ceilingIndex = words.length -1;
    var guessIndex;

    while (floorIndex < ceilingIndex){
        guessIndex = Math.floor(floorIndex + (ceilingIndex - floorIndex)/2);
        if (words[guessIndex] > firstWord){
            floorIndex = guessIndex;
        }else {
            ceilingIndex = guessIndex;
        }
        if (floorIndex + 1 == ceilingIndex){
            break;
        }
        if (ceilingIndex == words.length){
            return 0;
        }
    }
    return ceilingIndex;
}

/*==================================
#14 Inflight Entainment
You've built an in-flight entertainment system with on-demand movie streaming.
Users on longer flights like to start a second movie right when their first one ends, but
hey complain that the plane usually lands before they can see the ending. So you're
building a feature for choosing two movies whose total runtimes will equal the exact flight
length.

Write a function that takes an integer flightLength (in minutes) and an array of integers
movieLengths (in minutes) and returns a boolean indicating whether there are two numbers
in movieLengths whose sum equals flightLength.

When building your function:

Assume your users will watch exactly two movies
Don't make your users watch the same movie twice
Optimize for runtime over memory
====================================*/
function inFlightMovies(flightLength, arrMovies){
    if (flightLength === 0 || arrMovies.length === 0){
        throw new Error ("Invalid Entry");
    }
    var result = [];
    var otherMovieLength = 0;
    for (var i=0; i<arrMovies.length; i++){
        otherMovieLength = flightLength - arrMovies[i];
        if (arrMovies.indexOf(otherMovieLength) > 0 && arrMovies.indexOf(otherMovieLength) != i){
            return true;
        }
    }
    return false;
}
function getTwoMoviesToFillUpTime(movieLengths, flightLength){
    var movieLengthSeen = new Set();

    for (var i=0; i<movieLengths.length; i++){
        var firstMovieLength = movieLengths[i];
        if (movieLengthSeen.has(flightLength -  firstMovieLength)){
            return true;
        }
        movieLengthSeen.push(firstMovieLength); ///???
    }
    return false;
}


/*==================================
#15. Commute nth fibonacci number
Write a function fib() that a takes an integer
n
n and returns the
n
nth fibonacci ↴ number.
Let's say our fibonacci series is 0-indexed and starts with 0. So:

fib(0); // => 0
fib(1); // => 1
fib(2); // => 1
fib(3); // => 2
fib(4); // => 3
...
====================================*/
function Fibber(n){
    this.memo = {};
}

Fibber.prototype.fibonacciNumbers = function(n){
    if (n < 0){
        throw new Error("Index was nagitive.  Invalid entry.")
    }
    if (n === 0 || n === 1){
        return n;
    }
    if (this.memo.hasOwnProperty(n)){
        return memo[n];
    }

    var result = fibonacciNumbers(n-1) + fibonacciNumbers(n-2);
    this.memo[n] = result;

}
// botton-up approach
function fibBottomUp(n){
    if (n < 0){
        throw new Error("Index was nagitive.  Invalid entry.")
    }
    var pre = 1;
    var prepre = 0;
    for (var i = 0, i<n; i++){
        current = pre + prepre;
        prepre = pre;
        pre = current;
    }
    return current;
}

/*==================================
#16. The Cake thief
You are a renowned thief who has recently switched from stealing precious metals to
stealing cakes because of the insane profit margins. You end up hitting the jackpot,
breaking into the world's largest privately owned stock of cakes—the vault of the Queen
of England.
While Queen Elizabeth has a limited number of types of cake, she has an unlimited supply
of each type.

Each type of cake has a weight and a value, stored in an object with two properties:

weight: the weight of the cake in kilograms
value: the monetary value of the cake in British pounds
For example:

  // weighs 7 kilograms and has a value of 160 pounds
{weight: 7, value: 160}

// weighs 3 kilograms and has a value of 90 pounds
{weight: 3, value: 90}

You brought a duffel bag that can hold limited weight, and you want to make off with the
most valuable haul possible.

Write a function maxDuffelBagValue() that takes an array of cake type objects and a weight
capacity, and returns the maximum monetary value the duffel bag can hold.

For example:

  var cakeTypes = [
    {weight: 7, value: 160},
    {weight: 3, value: 90},
    {weight: 2, value: 15},
];

var capacity = 20;

maxDuffelBagValue(cakeTypes, capacity);
// returns 555 (6 of the middle type of cake and 1 of the last type of cake)

Weights and values may be any non-negative integer. Yes, it's weird to think about cakes
that weigh nothing or duffel bags that can't hold anything. But we're not just super
mastermind criminals—we're also meticulous about keeping our algorithms flexible and
comprehensive.
====================================*/
function maxDuffelBagValue(cakeTypes, weightCapacity){
    var maxValueAtCapacity = [];
    for (var i=0; i<cakeTypes.length; i++){
        maxValueAtCapacity[i] = 0;
    }

    for (var currentCapacity=0; currentCapacity<weightCapacity; currentCapacity++){
        var currentMaxValue = 0;
        for (var j=0; j<cakeTypes.length; j++){
            var currentCake = cakeTypes[i];
            if(cakeType.weight === 0 && cakeType.value != 0){
                return Infinity;
            }
            if (cakeType.weight < currentCapacity){
                var maxValueUsingCake = cakeType.value + maxValueAtCapacity[weightCapacity - cakeType.weight];
            }
            currentMaxValue = Math.max(maxValueUsingCake + currentMaxValue);
        }
        maxValueAtCapacity[currentCapacity] = currentMaxValue;
    }
    return maxValueAtCapacity[weightCapacity];
}

/*==================================
#17. JS Scopt
If we execute this Javascript, what will the browser's console show?
  var text = 'outside';
function logIt(){
    console.log(text);
    var text = 'inside';
};
logIt();
====================================*/




/*==================================
#18. What's wrong with this code?
We're building a web game where everybody wins and we are all friends forever.
It's simple—you click on one of three boxes to see what nice thing you've won. You always
win something nice. Because we love you.

Here's what we have so far. Something's going wrong though. Can you tell what it is?

<button id="btn-0">Button 1!</button>
<button id="btn-1">Button 2!</button>
<button id="btn-2">Button 3!</button>

<script type="text/javascript">
    var prizes = ['A Unicorn!', 'A Hug!', 'Fresh Laundry!'];
    for (var btnNum = 0; btnNum < prizes.length; btnNum++) {
        // for each of our buttons, when the user clicks it...
        document.getElementById('btn-' + btnNum).onclick = function() {
            // tell her what she's won!
            alert(prizes[btnNum]);
        };
    }
</script>
HTML
The syntax is just fine—the problem is some unexpected behavior.
====================================*/
<button id="btn-0">Button 1!</button>
<button id="btn-1">Button 2!</button>
<button id="btn-2">Button 3!</button>

<script type="text/javascript">
    var prizes = ['A Unicorn!', 'A Hug!', 'Fresh Laundry!'];
    for (var btnNum = 0; btnNum < prizes.length; btnNum++){
        document.getElementById('btn-' + btnNum).onclick = function(frozenNum){
            return function(){
                alert(prizes[frozenNum]);
            }(btnNum);
        }
    }
</script>


/*==================================
#19. Queue two stacks
Implement a queue ↴ with 2 stacks ↴ . Your queue should have an enqueue and a dequeue
function and it should be "first in first out" (FIFO).
Optimize for the time cost of m function calls on your queue. These can be any mix of
enqueue and dequeue calls.

Assume you already have a stack implementation and it gives O(1) time push and pop.
====================================*/




/*==================================
#20. Largest Stack
You want to be able to access the largest element in a stack.
You've already implemented this Stack class:

  function Stack() {
    // initialize an empty array
    this.items = [];
}

// push a new item to the last index
Stack.prototype.push = function(item) {
    this.items.push(item);
};

// remove the last item
Stack.prototype.pop = function() {

    // if the stack is empty, return null
    // (it would also be reasonable to throw an exception)
    if (!this.items.length) return null;

    return this.items.pop();
};

// see what the last item is
Stack.prototype.peek = function() {
    if (!this.items.length) return null;
    return this.items[this.items.length -1];
};
JavaScript
Use your Stack class to implement a new class MaxStack with a function getMax() that
returns the largest element in the stack. getMax() should not remove the item.

Your stacks will contain only integers.
====================================*/



/*==================================
#21. Stolen drone
Your company delivers breakfast via autonomous quadcopter drones. And something mysterious
has happened.
Each breakfast delivery is assigned a unique ID, a positive integer. When one of the
company's 100 drones takes off with a delivery, the delivery's ID is added to an array,
deliveryIdConfirmations. When the drone comes back and lands, the ID is again added to the
same array.

After breakfast this morning there were only 99 drones on the tarmac. One of the drones
never made it back from a delivery. We suspect a secret agent from Amazon placed an order
and stole one of our patented drones. To track them down, we need to find their delivery
ID.

Given the array of IDs, which contains many duplicate integers and one unique integer,
find the unique integer.

The IDs are not guaranteed to be sorted or sequential. Orders aren't always fulfilled in
the order they were received, and some deliveries get cancelled before takeoff.
====================================*/
//use map
function findUniqueDeliveryId(deliveryIds){
    var idsToOccurance = new Map();
    deliveryIds.forEach(function(deliveryId){
        if (idsToOccurance.has(deliveryId)){
            var newCount = idsToOccurance.get(deliveryId) + 1;
            idsToOccurance.set(deliveryId, newCount);
        }else {
            idsToOccurance.set(deliveryId, 1);
        }
    });
    for (var[id, count] of idsToOccurance){
        if (count === 1){
            return id;
        }
    }
}

//use bitwise operation
function findUniqueDeliveryIdBinary(deliveryIds){
    var findUniqueDeliveryId = 0;
    deliveryIds.forEach(function(deliveryId){
        findUniqueDeliveryId ^= deliveryId;
    });
    return findUniqueDeliveryId;
}


/*==================================
#22. Delete Node
Delete a node from a singly-linked list ↴ , given only a variable pointing to that node.
The input could, for example, be the variable b below:

  function LinkedListNode(value) {
    this.value = value;
    this.next = null;
}

var a = new LinkedListNode('A');
var b = new LinkedListNode('B');
var c = new LinkedListNode('C');

a.next = b;
b.next = c;

deleteNode(b);
====================================*/
function deleteNode(nodeToDelete){
    var next = nodeToDelete.next;
    if (next){
        nodeToDelete.value = next.value;
        nodeToDelete.next = next.next;
    }else {
        throw new Error("can't delete the last node with this method");
    }
}



/*==================================
#23.Does this linked list havae a cycle?
ou have a singly-linked list ↴ and want to check if it contains a cycle.
A singly-linked list is built with nodes, where each node has:

node.next—the next node in the list.
node.data—the data held in the node. For example, if our linked list stores people in
line at the movies, node.data might be the person's name.
For example:

  function LinkedListNode(value) {
    this.value = value;
    this.next = null;
}

A cycle occurs when a node’s next points back to a previous node in the list. The linked
list is no longer linear with a beginning and end—instead, it cycles through a loop of
nodes.

Write a function containsCycle() that takes the first node in a singly-linked list and
returns a boolean indicating whether the list contains a cycle.
====================================*/
function containsCycle(firstNode){
    var fastRunner = firstNode;
    var slowRunner = slowRunner;
    while (fastRunner && fastRunner.next){
        slowRunner = slowRunner.next;
        fastRunner = fastRunner.next.next;
        if(slowRunner == fastRunner){
            return true;
        }
    }
    return false;
}



/*==================================
#24. Reversed a linked list
Hooray! It's opposite day. Linked lists go the opposite way today.
Write a function for reversing a linked list ↴ . Do it in-place ↴ .

Your function will have one input: the head of the list.

Your function should return the new head of the list.

Here's a sample linked list node class:

  function LinkedListNode(value) {
    this.value = value;
    this.next = null;
}
====================================*/
functin reversedLinkedList(firstNode){
    var previousNode = firstNode;
    var currentNode = null;
    var nextNode = null;
    firstNode.next = null;
    while (currentNode){
        nextNode = currentNode.next;
        currentNode.next = previousNode;
        previousNode = currentNode;
        currentNode = nextNode;
    }
    return previousNode
}



/*==================================
#25. Kth to the last node in a singled-linked list
You have a linked list ↴ and want to find the kth to last node.
Write a function kthToLastNode() that takes an integer k and the headNode of a singly
linked list, and returns the kth to last node in the list.

For example:

  function LinkedListNode(value) {
    this.value = value;
    this.next = null;
}

var a = new LinkedListNode("Angel Food");
var b = new LinkedListNode("Bundt");
var c = new LinkedListNode("Cheese");
var d = new LinkedListNode("Devil's Food");
var e = new LinkedListNode("Eccles");

a.next = b;
b.next = c;
c.next = d;
d.next = e;
====================================*/
function kthToLastNode(n, firstNode){
    var arr = [];
    var currentNode = firstNode;
    while (currentNode){
        arr.push(currentNode);
        currentNode = currentNode.next;
    }
    if (n > arr.length){
        throw new Error("n is great than list's length");
    }
    return arr[-k];
}

function kthToLastNodeStick(k, firstNode){
    var leftNode = firstNode;
    var rightNode = firstNode;
    for (var i=0; i<k; i++){
        if (!right.next){
            throw new Error ("invalid entry");
        }
        rightNode = rightNode.next;
    }
    while(rightNode.next){
        leftNode = leftNode.next;
        rightNode = rightNode.next;
    }
    return leftNode;
}



