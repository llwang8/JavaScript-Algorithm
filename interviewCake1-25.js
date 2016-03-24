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

