//Interview Cake

/*==================================
#1. Suppose we could access yesterday's stock prices as an array, where:

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
#2.  You have an array of integers, and for each index you want to find the product of
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
#3.  Given an arrayOfInts, find the highestProduct you can get from three of the integers.
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
#4.  Your company built an in-house calendar tool called HiCal. You want to add a
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
#5. Imagine you landed a new job as a cashier...
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
#6.  A crack team of love scientists from OkEros (a hot new dating site) have devised a way to
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

