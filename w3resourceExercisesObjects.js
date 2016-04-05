
//JavaScript Object [12 exercises with solution]

/*==============================

1. Write a JavaScript program to list the properties of a JavaScript object.
var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };
Sample Output : name,sclass,rollno
==============================*/
var student = {name : "David Rayy", sclass : "VI", rollno : 12};
console.log(Object.keys(student));


/*==============================

2. Write a JavaScript program to delete the rollno property from the following object.
Also print the object before or after deleting the property.
Sample object :
var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };
==============================*/
console.log(student);
delete student.rollno;
console.log(student);


/*==============================

3. Write a JavaScript program to get the length of an JavaScript object.
Sample object :
var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };
==============================*/
return Object.getPropertyNames(student).length;


/*==============================

4. Write a JavaScript program to display the reading status (i.e. display book name,
author name and reading status) of the following books.

var library = [
   {
       author: 'Bill Gates',
       title: 'The Road Ahead',
       readingStatus: true
   },
   {
       author: 'Steve Jobs',
       title: 'Walter Isaacson',
       readingStatus: true
   },
   {
       author: 'Suzanne Collins',
       title:  'Mockingjay: The Final Book of The Hunger Games',
       readingStatus: false
   }];
==============================*/
var result = library.map(function(book){
  if (book.readingStatus) {
    return "Already read: " + book.title;
  }else {
    return "You still need to read " + book.title;
  }
});
console.log(result);

/*==============================

5. Write a JavaScript program to get the volume of a Cylinder with four decimal
places using object classes.
Volume of a cylinder : V = πr2h
where r is the radius and h is the height of the cylinder.
==============================*/
function Cylinder(r, h){
  this.radius = r;
  this.height = h;
  this.volume = function(){
    return (Math.PI * this.radius * 2 * this.height).toFixed(4);
  };
}
/*==============================

6. Write a Bubble Sort algorithm in JavaScript.
Note : Bubble sort is a simple sorting algorithm that works by repeatedly
stepping through the list to be sorted,
Sample Data : [6,4,0, 3,-2,1]
Expected Output : [-2, 0, 1, 3, 4, 6]
==============================*/
function bubbleSort(arr){
  var i, j,temp;
  var len = arr.length;
  for (i=0; i<len; i++){
    for (j=1; j<len-i; j++){
      if (arr[j-1] > arr[j]){
        temp = arr[j-1];
        arr[j-1]= arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}
console.log(bubbleSort([6,4,0, 3,-2,1]));

/*==============================

7. Write a JavaScript program which returns a subset of a string.
Sample Data : dog
Expected Output : ["d", "do", "dog", "o", "og", "g"]
==============================*/
String.prototype.subStr = function(){
  var result = [];
  for (var i=0; i<this.length; i++){
    for (var j=i+1; j<this.length+1; j++){
      result.push(this.slice(i, j));
    }
  }
  return result;
}
console.log("dog".subStr());




/*==============================

8. Write a JavaScript program to create a Clock.
Note : The output will come every second.
Expected Console Output :
"14:37:42"
"14:37:43"
"14:37:44"
"14:37:45"
"14:37:46"
"14:37:47"
==============================*/
function MyClock(){
  this.curDate = new Date();
  this.hours = this.curDate.getHours();
  this.minutes = this.curDate.getMinutes();
  this.seconds = this.curDate.getSeconds();
}
MyClock.prototype.run = function(){
  setInterval(this.update.bind(this), 1000);
}
MyClock.prototype.update = function(){
  this.updateTime(1);
  console.log(this.hours + this.minutes + this.seconds);
}
MyClock.prototype.updateTime = funciton(sec){
  this.seconds += sec;
  if (this.seconds >= 60){
    this.minutes ++;
    this.seconds = 0;
  }
  if (this.minutes >= 60){
    this.hours ++;
    this.minutes =0;
  }
  if (this.hours >= 24){
    this.hours = 0;
  }
}

var clock = new MyClock();
clock.run();


/*==============================

9. Write a JavaScript program to calculate the area and perimeter of a circle.
Note : Create two methods to calculate the area and perimeter. The radius of the
circle will be supplied by the user.
==============================*/
function Circle(r){
  this.radius = r;
  this.area = Math.PI * r * r;
  this.perimeter = 2 * r * Math.PI;
}


/*==============================
10. Write a JavaScript program to sort an array of JavaScript objects.
Sample Object :

var library = [
   {
       title:  'The Road Ahead',
       author: 'Bill Gates',
       libraryID: 1254
   },
   {
       title: 'Walter Isaacson',
       author: 'Steve Jobs',
       libraryID: 4264
   },
   {
       title: 'Mockingjay: The Final Book of The Hunger Games',
       author: 'Suzanne Collins',
       libraryID: 3245
   }];
Expected Output :

[[object Object] {
  author: "Walter Isaacson",
  libraryID: 4264,
  title: "Steve Jobs"
}, [object Object] {
  author: "Suzanne Collins",
  libraryID: 3245,
  title: "Mockingjay: The Final Book of The Hunger Games"
}, [object Object] {
  author: "The Road Ahead",
  libraryID: 1254,
  title: "Bill Gates"
}]
==============================*/
function sortBy(byField, reverse, process){
  return library.sort(function(a, b){
    if (process != null){
      return reverse ? process(b[byField]) - process(a[byField]) : process(a[byField]) - process(b[byField]);
    }else {
      return reverse ? b[byField] - a[byField] : a[byField] - b[byField];
    }
  });
}

var newobj = library.sort(sortBy('libraryID', true, parseInt));
console.log(newobj);

/*==============================
11. Write a JavaScript function to print all the methods in an JavaScript object.
Test Data :
console.log(all_properties(Array));
["length", "name", "arguments", "caller", "prototype", "isArray", "observe", "unobserve"]
==============================*/
function printObjMethods(obj){
    console.log(Object.getPropertyNames(obj));

}
console.log(printObjMethods(Math));
console.log(printObjMethods(Array));

/*==============================
12. Write a JavaScript function to parse an URL.

==============================*/
function parse_URL(url) {
    var a = document.createElement('a');
    a.href = url;
    return {
        source: url,
        protocol: a.protocol.replace(':', ''),
        host: a.hostname,
        port: a.port,
        query: a.search,
        params: (function () {
            var ret = {},
                seg = a.search.replace(/^\?/, '').split('&'),
                len = seg.length,
                i = 0,
                s;
            for (; i < len; i++) {
                if (!seg[i]) {
                    continue;
                }
                s = seg[i].split('=');
                ret[s[0]] = s[1];
            }
            return ret;
        })(),
        file: (a.pathname.match(/\/([^\/?#]+)$/i) || [, ''])[1],
        hash: a.hash.replace('#', ''),
        path: a.pathname.replace(/^([^\/])/, '/$1'),
        relative: (a.href.match(/tps?:\/\/[^\/]+(.+)/) || [, ''])[1],
        segments: a.pathname.replace(/^\//, '').split('/')
    };
}

console.log(parse_URL('https://github.com/pubnub/python/search?utf8=%E2%9C%93&q=python'));


/*==============================




