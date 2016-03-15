/*
This is a series of interactive exercises for learning Microsoft's
Reactive Extensions (Rx) Library for Javascript. So why is the title
"Functional Programming in Javascript"? Well it turns out that the key
to learning Rx is training yourself to use functional programming to
manipulate collections. Functional programming provides developers with
the tools to abstract common collection operations into reusable,
composable building blocks. You'll be surprised to learn that most of
the operations you perform on collections can be accomplished with five
simple functions (some native to JavaScript and some included in the RxJS library):

map
filter
concatAll
reduce
zip

Here's my promise to you: if you learn these 5 functions your code will become
shorter, more self-descriptive, and more durable. Also, for reasons that might
not be obvious right now, you'll learn that these five functions hold the key to
simplifying asynchronous programming. Once you've finished this tutorial you'll
also have all the tools you need to easily avoid race conditions, propagate and
handle asynchronous errors, and sequence events and AJAX requests. In short, these
5 functions will probably be the most powerful, flexible, and useful functions you'll
ever learn.
*/

//==================================================
//Traversing an Array
//Exercise 1: Print all the names in an array
//==================================================
function(console) {
    var names = ["Ben", "Jafar", "Matt", "Priya", "Brian"],
        counter;

    for(counter = 0; counter < names.length; counter++) {
        console.log(names[counter]);
    }
}

/*====================================
Exercise 2: Use forEach to print all the names in an array
=====================================*/
function(console) {
    var names = ["Ben", "Jafar", "Matt", "Priya", "Brian"];

    names.forEach(function(name) {
        console.log(name);
    });
}

/*====================================
Projecting Arrays
Applying a function to a value and creating a new value is called a projection.
To project one array into another, we apply a projection function to each item in
the array and collect the results in a new array.

Exercise 3: Project an array of videos into an array of {id,title} pairs using
forEach()

For each video, add a projected {id, title} pair to the videoAndTitlePairs array.

=====================================*/
function() {
    var newReleases = [
            {
                "id": 70111470,
                "title": "Die Hard",
                "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
                "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": [4.0],
                "bookmark": []
            },
            {
                "id": 654356453,
                "title": "Bad Boys",
                "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
                "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": [5.0],
                "bookmark": [{ id:432534, time:65876586 }]
            },
            {
                "id": 65432445,
                "title": "The Chamber",
                "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
                "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": [4.0],
                "bookmark": []
            },
            {
                "id": 675465,
                "title": "Fracture",
                "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
                "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": [5.0],
                "bookmark": [{ id:432534, time:65876586 }]
            }
        ],
        videoAndTitlePairs = [];

    newReleases.forEach(function(video) {
        videoAndTitlePairs.push({id:video.id, title: video.title});
    });

    return videoAndTitlePairs;
}


/*====================================
Exercise 4: Implement map()

To make projections easier, let's add a map() function to the Array type.
Map accepts the projection function to be applied to each item in the source array,
and returns the projected array.

=====================================*/
Array.prototype.map = function(projectionFunction) {
    var results = [];
    this.forEach(function(itemInArray) {

        // ------------ INSERT CODE HERE! ----------------------------
        // Apply the projectionFunction to each item in the array and add
        // each result to the results array.
        // Note: you can add items to an array with the push() method.
        // ------------ INSERT CODE HERE! ----------------------------
    results.push(projectionFunction(itemInArray));

    });

    return results;
};

// JSON.stringify([1,2,3].map(function(x) { return x + 1; })) === '[2,3,4]'


/*====================================
Exercise 5: Use map() to project an array of videos into an array of {id,title}
pairs

=====================================*/
function() {
    var newReleases = [
            {
                "id": 70111470,
                "title": "Die Hard",
                "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
                "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": [4.0],
                "bookmark": []
            },
            {
                "id": 654356453,
                "title": "Bad Boys",
                "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
                "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": [5.0],
                "bookmark": [{ id:432534, time:65876586 }]
            },
            {
                "id": 65432445,
                "title": "The Chamber",
                "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
                "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": [4.0],
                "bookmark": []
            },
            {
                "id": 675465,
                "title": "Fracture",
                "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
                "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": [5.0],
                "bookmark": [{ id:432534, time:65876586 }]
            }
        ];

  return newReleases.map(function(video) { return {id: video.id, title: video.title}; });
}

/*====================================
Exercise 6: Use forEach() to collect only those videos with a rating of 5.0

Use forEach() to loop through the videos in the newReleases array and, if a video has a
rating of 5.0, add it to the videos array.

=====================================*/
function() {
    var newReleases = [
        {
            "id": 70111470,
            "title": "Die Hard",
            "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 4.0,
            "bookmark": []
        },
        {
            "id": 654356453,
            "title": "Bad Boys",
            "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 5.0,
            "bookmark": [{ id:432534, time:65876586 }]
        },
        {
            "id": 65432445,
            "title": "The Chamber",
            "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 4.0,
            "bookmark": []
        },
        {
            "id": 675465,
            "title": "Fracture",
            "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 5.0,
            "bookmark": [{ id:432534, time:65876586 }]
        }
    ],
    videos = [];

    // ------------ INSERT CODE HERE! -----------------------------------
    // Use forEach function to accumulate every video with a rating of 5.0
    // ------------ INSERT CODE HERE! -----------------------------------
  newReleases.forEach(function(video){
    if (video.rating == 5.0){
        videos.push(video);
    }
  });
    return videos;
}

/*====================================
Exercise 7: Implement filter()

To make filtering easier, let's add a filter() function to the Array type.
The filter() function accepts a predicate. A predicate is a function that accepts
an item in the array, and returns a boolean indicating whether the item should be
retained in the new array.

=====================================*/
Array.prototype.filter = function(predicateFunction) {
    var results = [];
    this.forEach(function(itemInArray) {
        // ------------ INSERT CODE HERE! ----------------------------
        // Apply the predicateFunction to each item in the array.
        // If the result is truthy, add the item to the results array.
        // Note: remember you can add items to the array using the array's
        // push() method.
        // ------------ INSERT CODE HERE! ----------------------------
    if (predicateFunction(itemInArray)){
        results.push(itemInArray);
    }
    });

    return results;
};

// JSON.stringify([1,2,3].filter(function(x) { return x > 2})) === "[3]"

/*====================================
Query Data by Chaining Method Calls
Exercise 8: Chain filter and map to collect the ids of videos that have a rating
of 5.0

=====================================*/
function() {
    var newReleases = [
            {
                "id": 70111470,
                "title": "Die Hard",
                "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
                "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 4.0,
                "bookmark": []
            },
            {
                "id": 654356453,
                "title": "Bad Boys",
                "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
                "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 5.0,
                "bookmark": [{ id:432534, time:65876586 }]
            },
            {
                "id": 65432445,
                "title": "The Chamber",
                "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
                "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 4.0,
                "bookmark": []
            },
            {
                "id": 675465,
                "title": "Fracture",
                "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
                "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 5.0,
                "bookmark": [{ id:432534, time:65876586 }]
            }
        ];

    // ------------   INSERT CODE HERE!  -----------------------------------
    // Chain the filter and map functions to select the id of all videos
    // with a rating of 5.0.
    return newReleases.filter(function(video){
        return video.rating === 5.0;
    }).map(function(video){
        return video.id;
    })
}

/*====================================
Querying Trees
Sometimes, in addition to flat arrays, we need to query trees. Trees pose a challenge
because we need to flatten them into arrays in order to apply filter() and map() operations
on them. In this section we'll define a concatAll() function that we can combine with map()
and filter() to query trees.

Exercise 9: Flatten the movieLists array into an array of video ids

Let's start by using two nested forEach loops to collect the id of every video in the
two-dimensional movieLists array.

=====================================*/
function() {
    var movieLists = [
        {
            name: "New Releases",
            videos: [
                {
                    "id": 70111470,
                    "title": "Die Hard",
                    "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
                    "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                    "rating": 4.0,
                    "bookmark": []
                },
                {
                    "id": 654356453,
                    "title": "Bad Boys",
                    "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
                    "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                    "rating": 5.0,
                    "bookmark": [{ id:432534, time:65876586 }]
                }
            ]
        },
        {
            name: "Dramas",
            videos: [
                {
                    "id": 65432445,
                    "title": "The Chamber",
                    "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
                    "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                    "rating": 4.0,
                    "bookmark": []
                },
                {
                    "id": 675465,
                    "title": "Fracture",
                    "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
                    "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                    "rating": 5.0,
                    "bookmark": [{ id:432534, time:65876586 }]
                }
            ]
        }
    ],
    allVideoIdsInMovieLists = [];

    // ------------   INSERT CODE HERE!  -----------------------------------
    // Use two nested forEach loops to flatten the movieLists into a list of
    // video ids.
    // ------------   INSERT CODE HERE!  -----------------------------------
  movieLists.forEach(function(cat){
    cat.videos.forEach(function(video){
        allVideoIdsInMovieLists.push( video.id);
    });
  });

    return allVideoIdsInMovieLists;

}



/*====================================
Exercise 10: Implement concatAll()

Let's add a concatAll() function to the Array type. The concatAll() function iterates
over each sub-array in the array and collects the results in a new, flat array. Notice
that the concatAll() function expects each item in the array to be another array.

=====================================*/



/*====================================


=====================================*/



/*====================================


=====================================*/






