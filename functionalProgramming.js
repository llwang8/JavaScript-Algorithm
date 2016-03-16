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
Array.prototype.concatAll = function() {
    var results = [];

    this.forEach(function(subArray) {
        if (typeof subArray == "array"){
            results.push.apply(results, subArray);
        }else {
            throw "Error: This is a one-dimensional array.";
        }
    });

    return results;
};

// JSON.stringify([ [1,2,3], [4,5,6], [7,8,9] ].concatAll()) === "[1,2,3,4,5,6,7,8,9]"
// [1,2,3].concatAll(); // throws an error because this is a one-dimensional array



/*====================================
Exercise 11: Use map() and concatAll() to project and flatten the movieLists into an
array of video ids

Hint: use two nested calls to map() and one call to concatAll().

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
        ];

    // ------------   INSERT CODE HERE!  -----------------------------------
    // Use map and concatAll to flatten the movieLists in a list of video ids.
    // ------------   INSERT CODE HERE!  -----------------------------------
    return movieLists.map(function(list){
        return list.video.map(function(video){
            return video.id;
        });
    }).concatAll();


/*====================================
Exercise 12: Retrieve id, title, and a 150x200 box art url for every video

You've managed to flatten a tree that's two levels deep, let's try for three! Let's
say that instead of a single boxart url on each video, we had a collection of boxart
objects, each with a different size and url. Create a query that selects {id, title, boxart}
for every video in the movieLists. This time though, the boxart property in the result will
be the url of the boxart object with dimensions of 150x200px. Let's see if you can solve this
problem with map(), concatAll(), and filter().

There's just more one thing: you can't use indexers. In other words, this is illegal:
=====================================*/
function() {
    var movieLists = [
            {
                name: "Instant Queue",
                videos : [
                    {
                        "id": 70111470,
                        "title": "Die Hard",
                        "boxarts": [
                            { width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
                            { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" }
                        ],
                        "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                        "rating": 4.0,
                        "bookmark": []
                    },
                    {
                        "id": 654356453,
                        "title": "Bad Boys",
                        "boxarts": [
                            { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
                            { width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" }

                        ],
                        "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                        "rating": 5.0,
                        "bookmark": [{ id:432534, time:65876586 }]
                    }
                ]
            },
            {
                name: "New Releases",
                videos: [
                    {
                        "id": 65432445,
                        "title": "The Chamber",
                        "boxarts": [
                            { width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
                            { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" }
                        ],
                        "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                        "rating": 4.0,
                        "bookmark": []
                    },
                    {
                        "id": 675465,
                        "title": "Fracture",
                        "boxarts": [
                            { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
                            { width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
                            { width: 300, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" }
                        ],
                        "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                        "rating": 5.0,
                        "bookmark": [{ id:432534, time:65876586 }]
                    }
                ]
            }
        ];


    // Use one or more map, concatAll, and filter calls to create an array with the following items
    // [
    //   {"id": 675465,"title": "Fracture","boxart":"http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
    //   {"id": 65432445,"title": "The Chamber","boxart":"http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
    //   {"id": 654356453,"title": "Bad Boys","boxart":"http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" },
    //   {"id": 70111470,"title": "Die Hard","boxart":"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" }
    // ];

  return movieLists.map(function(list){
    list.videos.map(function(video){
        return video.boxarts.filter(function(boxart){
            if(boxart.width==150  && boxart.height==200){return  boxart;}
        }).map(function(boxart){
            return {id:boxart.id, title:boxart.title, boxart:boxart.url};
        });
    }).concatAll()
  }).cancatAll(); // Complete this expression!

}


/*====================================
Exercise 13: Implement concatMap()

Nearly every time we flatten a tree we chain map() and concatAll(). Sometimes, if we're
dealing with a tree several levels deep, we'll repeat this combination many times in our
code. To save on typing, let's create a concatMap function that's just a map operation,
followed by a concatAll.

=====================================*/
Array.prototype.concatMap = function(projectionFunctionThatReturnsArray) {
    return this.
        map(function(item) {
            return projectionFunctionThatReturnsArray(item);
        }).
        // apply the concatAll function to flatten the two-dimensional array
        concatAll();
};

/*
    var spanishFrenchEnglishWords = [ ["cero","rien","zero"], ["uno","un","one"],
    ["dos","deux","two"] ];
    // collect all the words for each number, in every language, in a single, flat list
    var allWords = [0,1,2].
        concatMap(function(index) {
            return spanishFrenchEnglishWords[index];
        });

    return JSON.stringify(allWords) === '["cero","rien","zero","uno","un","one","dos","deux","two"]';
*/

/*====================================
Exercise 14: Use concatMap() to retrieve id, title, and 150x200 box art url for every video

Let's repeat the exercise we just performed. However this time we'll simplify the code by
replacing the map().concatAll() calls with concatMap().

=====================================*/
function() {
    var movieLists = [
            {
                name: "Instant Queue",
                videos : [
                    {
                        "id": 70111470,
                        "title": "Die Hard",
                        "boxarts": [
                            { width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
                            { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" }
                        ],
                        "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                        "rating": 4.0,
                        "bookmark": []
                    },
                    {
                        "id": 654356453,
                        "title": "Bad Boys",
                        "boxarts": [
                            { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
                            { width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" }

                        ],
                        "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                        "rating": 5.0,
                        "bookmark": [{ id:432534, time:65876586 }]
                    }
                ]
            },
            {
                name: "New Releases",
                videos: [
                    {
                        "id": 65432445,
                        "title": "The Chamber",
                        "boxarts": [
                            { width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
                            { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" }
                        ],
                        "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                        "rating": 4.0,
                        "bookmark": []
                    },
                    {
                        "id": 675465,
                        "title": "Fracture",
                        "boxarts": [
                            { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
                            { width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
                            { width: 300, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" }
                        ],
                        "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                        "rating": 5.0,
                        "bookmark": [{ id:432534, time:65876586 }]
                    }
                ]
            }
        ];


    // Use one or more concatMap, map, and filter calls to create an array with the following items
    // [
    //   {"id": 675465,"title": "Fracture","boxart":"http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
    //   {"id": 65432445,"title": "The Chamber","boxart":"http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
    //   {"id": 654356453,"title": "Bad Boys","boxart":"http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" },
    //   {"id": 70111470,"title": "Die Hard","boxart":"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" }
    // ];

  return movieLists.concatMap(function(list){
    return list.videos.concatMap(function(video){
      return video.boxarts.filter(function(boxart){
        return boxart.width == 150;
      }).map(function(boxart){
        return {id:boxart.id, title:boxart.title, boxart:boxart.url};
        });
    });
 }); // Complete this expression!

}

/*====================================
Exercise 15: Use forEach to find the largest box art

In this example we use forEach to find the largest box art. Each time we examine a new
boxart we update a variable with the currently known maximumSize. If the boxart is
smaller than the maximum size, we discard it. If it's larger, we keep track of it.
Finally we're left with a single boxart which must necessarily be the largest.

=====================================*/
function() {
    var boxarts = [
            { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
            { width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
            { width: 300, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" },
            { width: 425, height:150, url:"http://cdn-0.nflximg.com/images/2891/Fracture425.jpg" }
        ],
        currentSize,
        maxSize = -1,
        largestBoxart;
    boxarts.forEach(boxart){
        currentSize = boxart.width * boxart.height;
        if (currentSize > maxSize){
            maxSize = currentSize;
            largestBoxart = boxart;
        }
        return largestBoxart;
    };

/*====================================
Exercise 16: Implement reduce()

Let's add a reduce() function to the Array type. Like map. Take note this is different
from the reduce in ES5, which returns an value instead of an Array!

=====================================*/
// [1,2,3].reduce(function(accumulatedValue, currentValue) { return accumulatedValue + currentValue; }); === [6];
// [1,2,3].reduce(function(accumulatedValue, currentValue) { return accumulatedValue + currentValue; }, 10); === [16];
Array.prototype.reduce = function(combinter, initialValue){
    var counter, accumalatedVale;
    if (this.length === 0){
        return this;
    }else {
        if (arguments.length === 1) {
            counter = 1;
            accumulatedValue = this[0];
        }else if (arguments >= 2){
            counter = 0;
            accumulatedValue = initialValue;
        }else {
            throw "Invalid arguments";
        }
    }
    while (counter < this.length){
        accumulatedValue = combiner(accumulative, this[counter]);
        counter++;
    }
    return [accumulatedValue];
};



/*====================================
Exercise 17: Retrieve the largest rating.

Let's use our new reduce function to isolate the largest value in an array of
ratings.

=====================================*/
function() {
    var ratings = [2,3,1,4,5];

    // You should return an array containing only the largest rating. Remember that reduce always
    // returns an array with one item.
  return ratings.reduce(function(largest, current){
    if (current > largest) {
      return current;
    } else {
        return largest;
    }
  });   // Complete this expression
}

/*====================================
Exercise 18: Retrieve url of the largest boxart

Let's try combining reduce() with map() to reduce multiple boxart objects to a single value:
the url of the largest box art.

=====================================*/
function() {
    var boxarts = [
            { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
            { width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
            { width: 300, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" },
            { width: 425, height:150, url:"http://cdn-0.nflximg.com/images/2891/Fracture425.jpg" }
        ];

    // You should return an array containing only the URL of the largest box art. Remember that reduce always
    // returns an array with one item.
  return boxarts.reduce(function(max, cur){
      if (max.width * max.height > cur.width * max.height){
        return max;
      }else {
        return cur;
      }
  }).map(function(boxart){return boxart.url;});   // Complete this expression
}

/*====================================
Exercise 19: Reducing with an initial value

Sometimes when we reduce an array, we want the reduced value to be a different
type than the items stored in the array. Let's say we have an array of videos
and we want to reduce them to a single map where the key is the video id and the
value is the video's title.

=====================================*/
function() {
    var videos = [
        {
            "id": 65432445,
            "title": "The Chamber"
        },
        {
            "id": 675465,
            "title": "Fracture"
        },
        {
            "id": 70111470,
            "title": "Die Hard"
        },
        {
            "id": 654356453,
            "title": "Bad Boys"
        }
    ];

    // Expecting this output...
    // [
    //     {
    //         "65432445": "The Chamber",
    //         "675465": "Fracture",
    //         "70111470": "Die Hard",
    //         "654356453": "Bad Boys"
    //     }
    // ]
    return videos.
        reduce(function(accumulatedMap, video) {
        var obj = {};

        // ----- INSERT CODE TO ADD THE VIDEO TITLE TO THE ----
        // ----- NEW MAP USING THE VIDEO ID AS THE KEY   ----
        obj[video.id] = video.title;

        // Object.assign() takes all of the enumerable properties from
        // the object listed in its second argument (obj) and assigns them
        // to the object listed in its first argument (accumulatedMap).
        return Object.assign(accumulatedMap, obj);
        },
        // Use an empty map as the initial value instead of the first item in
        // the list.
        {});
}



/*====================================
Exercise 20: Retrieve the id, title, and smallest box art url for every video.

This is a variation of the problem we solved earlier, where we retrieved the url
of the boxart with a width of 150px. This time we'll use reduce() instead of
filter() to retrieve the smallest box art in the boxarts array.

=====================================*/
function() {
    var movieLists = [
        {
            name: "New Releases",
            videos: [
                {
                    "id": 70111470,
                    "title": "Die Hard",l
                    "boxarts": [
                        { width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
                        { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" }
                    ],
                    "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                    "rating": 4.0,
                    "bookmark": []
                },
                {
                    "id": 654356453,
                    "title": "Bad Boys",
                    "boxarts": [
                        { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
                        { width: 140, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys140.jpg" }

                    ],
                    "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                    "rating": 5.0,
                    "bookmark": [{ id:432534, time:65876586 }]
                }
            ]
        },
        {
            name: "Thrillers",
            videos: [
                {
                    "id": 65432445,
                    "title": "The Chamber",
                    "boxarts": [
                        { width: 130, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber130.jpg" },
                        { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" }
                    ],
                    "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                    "rating": 4.0,
                    "bookmark": []
                },
                {
                    "id": 675465,
                    "title": "Fracture",
                    "boxarts": [
                        { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
                        { width: 120, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture120.jpg" },
                        { width: 300, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" }
                    ],
                    "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                    "rating": 5.0,
                    "bookmark": [{ id:432534, time:65876586 }]
                }
            ]
        }
    ];


    // Use one or more concatMap, map, and reduce calls to create an array with the following items (order doesn't matter)
    // [
    //   {"id": 675465,"title": "Fracture","boxart":"http://cdn-0.nflximg.com/images/2891/Fracture120.jpg" },
    //   {"id": 65432445,"title": "The Chamber","boxart":"http://cdn-0.nflximg.com/images/2891/TheChamber130.jpg" },
    //   {"id": 654356453,"title": "Bad Boys","boxart":"http://cdn-0.nflximg.com/images/2891/BadBoys140.jpg" },
    //   {"id": 70111470,"title": "Die Hard","boxart":"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" }
    // ];

    return movieLists.concatMap(function(movieList) {
      return list.videos.map(function(video){
        return video.boxarts.reduce(function(minBoxart, curBoxart){
            if(minBoxart.width.minBoxart.height > curBoxart.width * curBoxart.height){
                    return curBoxart.url;
            }else {
                    return minBoxart.url;
            }
          }).map(function(boxart){
            return {id: video.id, title:video.title, boxart: boxart.url};
          });

      });
    })

}





/*====================================


=====================================*/






/*====================================


=====================================*/





/*====================================


=====================================*/






/*====================================


=====================================*/





/*====================================


=====================================*/






/*====================================


=====================================*/






/*====================================


=====================================*/






/*====================================


=====================================*/







/*====================================


=====================================*/


