//Interview Cake

/*==================================
#51
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
# 70
A crack team of love scientists from OkEros (a hot new dating site) have devised a way to
represent dating profiles as rectangles on a two-dimensional plane.
They need help writing an algorithm to find the intersection of two users' love rectangles.
They suspect finding that intersection is the key to a matching algorithm so powerful it will
cause an immediate acquisition by Google or Facebook or Obama or something.

It must
be love
Write a function to find the rectangular intersection of two given love rectangles.

As with the example above, love rectangles are always "straight" and never "diagonal." More
rigorously: each side is parallel with either the x-axis or the y-axis.

They are defined as hashes ↴ like this:

  my_rectangle = {

    # coordinates of bottom-left corner
    'x' => 1,
    'y' => 5,

    # width and height
    'width' => 10,
    'height' => 4,

}

Your output rectangle should use this format as well.
====================================*/

/*==================================
#71
You want to build a word cloud, an infographic where the size of a word corresponds to how often
it appears in the body of text.
To do this, you'll need data. Write code that takes a long string and builds its word cloud data
in a hash ↴ , where the keys are words and the values are the number of times the words occured.

Think about capitalized words. For example, look at these sentences:

  'After beating the eggs, Dana read the next step:'
'Add milk and eggs, then add flour and sugar.'
What do we want to do with "After", "Dana", and "add"? In this example, your final hash should
include one "Add" or "add" with a value of
2
2. Make reasonable (not necessarily perfect) decisions about cases like "After" and "Dana".

Assume the input will only contain words and standard punctuation.

====================================*/

/*==================================
#72
A building has 100 floors. One of the floors is the highest floor an egg can be
dropped from without breaking.
If an egg is dropped from above that floor, it will break. If it is dropped from
that floor or below, it will be completely undamaged and you can drop the egg again.

Given two eggs, find the highest floor an egg can be dropped from without breaking,
with as few drops as possible.
====================================*/

/*==================================
#73
Write a function fib() that a takes an integer n and returns the nth fibonacci
number.
Let's say our fibonacci series is 0-indexed and starts with 0. So:
fib(0) # => 0
fib(1) # => 1
fib(2) # => 1
fib(3) # => 2
fib(4) # => 3
...
====================================*/
function fib(n) {
    if (n <= 0) {
        console.log (Error: n is 0 or less than 0.)
    }
    var arr = [1,1];
    for (var i = 2; i < n - 2; i++) {
        arr.push(arr[i-1]+arr[i-2]);
    }
    return arr.pop;
}

function fib_recursive(n) {
    if  (n === 0 || n === 1) {
        return n;
    }
    return fib_recursive(n-1) + fib_recursive(n-2);
}

//ruby
  def fib_iterative(n)

    # edge cases:
    if n < 0
        raise Exception, "Index was negative. No such thing as a negative index in a series."

    elif n == 0 || n == 1
        return n
    end

    prev = 0
    prev_prev = 1
    current = 0
    n.times do
        current = prev + prev_prev
        prev_prev = prev
        prev = current
    end

    return current
end

/*==================================
#74
Your company delivers breakfast via autonomous quadcopter drones. And something
mysterious has happened.
Each breakfast delivery is assigned a unique ID, a positive integer. When one of
the company's 100 drones takes off with a delivery, the delivery's ID is added to
an array, delivery_id_confirmations. When the drone comes back and lands, the ID is
again added to the same array.

After breakfast this morning there were only 99 drones on the tarmac. One of the
drones never made it back from a delivery. We suspect a secret agent from Amazon
placed an order and stole one of our patented drones. To track them down, we need
to find their delivery ID.

Given the array of IDs, which contains many duplicate integers and one unique
integer, find the unique integer.

The IDs are not guaranteed to be sorted or sequential. Orders aren't always fulfilled
 in the order they were received, and some deliveries get cancelled before takeoff.
*/
//ruby
  def find_unique_delivery_id(delivery_ids)

    ids_to_occurrences = {}

    delivery_ids.each do |delivery_id|
        if ids_to_occurrences.include? delivery_id
            ids_to_occurrences[delivery_id] += 1
        else
            ids_to_occurrences[delivery_id]  = 1
        end
    end

    ids_to_occurrences.each do |delivery_id, occurrences|
        return delivery_id if occurrences == 1
    end
end
//ruby
  def find_unique_delivery_id(delivery_ids)

    unique_delivery_id = 0

    delivery_ids.each do |delivery_id|
        unique_delivery_id ^= delivery_id
    end

    return unique_delivery_id
end

/*==================================
 #75
You are a renowned thief who has recently switched from stealing precious metals
to stealing cakes because of the insane profit margins. You end up hitting the
jackpot, breaking into the world's largest privately owned stock of cakes—the
vault of the Queen of England.
While Queen Elizabeth has a limited number of types of cake, she has an unlimited
supply of each type.

Each type of cake has a weight and a value, stored in an array with two indices:

An integer representing the weight of the cake in kilograms
An integer representing the monetary value of the cake in British pounds
For example:

  # weighs 7 kilograms and has a value of 160 pounds
[7, 160]

# weighs 3 kilograms and has a value of 90 pounds
[3, 90]

You brought a duffel bag that can hold limited weight, and you want to make off with
the most valuable haul possible.

Write a function max_duffel_bag_value() that takes an array of cake type arrays and
a weight capacity, and returns the maximum monetary value the duffel bag can hold.

For example:

  cake_arrays = [ [7, 160], [3, 90], [2, 15] ]
capacity = 20

max_duffel_bag_value(cake_arrays, capacity)
# returns 555 (6 of the middle type of cake and 1 of the last type of cake)

Weights and values may be any non-negative integer. Yes, it's weird to think about
cakes that weigh nothing or duffel bags that can't hold anything. But we're not just
 super mastermind criminals—we're also meticulous about keeping our algorithms
 flexible and comprehensive.
*/
//ruby

  INFINITY = (2 ** (0.size * 8 -2) -1)
/*
def max_duffel_bag_value(cake_arrays, weight_capacity)

    # we make an array to hold the maximum possible value at every
    # duffel bag weight capacity from 0 to weight_capacity
    # starting each index with value 0
    max_values_at_capacities = [0] * (weight_capacity + 1)

    (0..weight_capacity).each do |current_capacity|

        # set a variable to hold the max monetary value so far for current_capacity
        current_max_value = 0

        cake_arrays.each do |cake_weight, cake_value|

            # if a cake weighs 0 and has a positive value the value of our duffel bag is infinite!
            if (cake_weight == 0 && cake_value != 0)
                return INFINITY
            end

            # if the current cake weighs as much or less than the current weight capacity
            # it's possible taking the cake would give get a better value
            if (cake_weight <= current_capacity)

                # so we check: should we use the cake or not?
                # if we use the cake, the most kilograms we can include in addition to the cake
                # we're adding is the current capacity minus the cake's weight. we find the max
                # value at that integer capacity in our array max_values_at_capacities
                max_value_using_cake = cake_value + max_values_at_capacities[current_capacity - cake_weight]

                # now we see if it's worth taking the cake. how does the
                # value with the cake compare to the current_max_value?
                current_max_value = [max_value_using_cake, current_max_value].max
            end
        end

        # add each capacity's max value to our array so we can use them
        # when calculating all the remaining capacities
        max_values_at_capacities[current_capacity] = current_max_value
    end

    return max_values_at_capacities[weight_capacity]
end
*/

/*
Write a function for doing an in-place ↴ shuffle of an array.
The shuffle must be "uniform," meaning each item in the original array must have the same
probability of ending up in each spot in the final array.

Assume that you have a function getRandom(floor, ceiling) for getting a random integer that
is >=floor and <=ceiling.
*/

function getRandom(floor, ceiling) {
    return Math.floor(Math.random() * (ceiling - floor + 1)) + floor;
}

function shuffle(theArray) {
    // if it's 1 or 0 items, just return
    if (theArray.length <= 1) return;

    // walk through from beginning to end
    for (var indexWeAreChoosingFor = 0; indexWeAreChoosingFor < theArray.length; indexWeAreChoosingFor++) {

        // choose a random not-yet-placed item to place there
        // (could also be the item currently in that spot)
        // must be an item AFTER the current item, because the stuff
        // before has all already been placed
        var randomChoiceIndex = getRandom(indexWeAreChoosingFor, theArray.length - 1);

        // place our random choice in the spot by swapping
        var valueAtIndexWeChoseFor = theArray[indexWeAreChoosingFor];
        theArray[indexWeAreChoosingFor] = theArray[randomChoiceIndex];
        theArray[randomChoiceIndex] = valueAtIndexWeChoseFor;
    }
}
