//Algorithms and datastructure in JavaScript

//factorial
function factorial(n) {
    if(n == 0) {
        return 1;
    }else{
        return n * factorial(n-1);
    }

}

console.log(factorial(3));

//check whether a given year is a leap year or not
function checkLeapYear(year){
    //(year % 4 == 0) && (( year % 100 != 0) || (year % 400 == 0)) ? true : false;
    if ((year % 4 == 0) && (( year % 100 != 0) || (year % 400 == 0))) {
        return true;
    }else {
        return false;
    }

}
checkLeapYear(2013);
checkleapYear(2012);

//So determining the lowest and highest values ​​of the given set.
var tab = new Array(16, 9, 86, 48, 59, 2, 78, 240, 18);
function minMax(arr) {
    var min = arr[0];
    var max = arr[0];
    for (var i = 0; i<arr.length; i++){
        if (min > arr[i]){
            min = arr[i];
        }
        if (max < arr[i]){
            max = arr[i];
        }
    }
   return ("Min: " + min + " Max: " + max);
}
minMax(tab);


//This algorithm is a simple generator of random string.
var _list = "abcdefghijklmnopqrstuvwxyz9876543210";

function randomStringGenerator(n){
    var msg = "", i = 0,  length = _list.length;
    for (i=0; i<n; i++){
        msg += _list.charAt(Math.floor(Math.random()*length));
    }
    return msg;
}
randomStringGenerator(8);

//Based on the “divide and conquer”, the binary search a simple
//but optimal way to find the value even in large input lists

inputList = new Array();
inputList[0] = 'E';
inputList[1] = 'I';
inputList[2] = 'O';
inputList[3] = 'P';
inputList[4] = 'Q';
inputList[5] = 'R';
inputList[6] = 'T';
inputList[7] = 'U';
inputList[8] = 'W';
inputList[9] = 'Y';

function binarySearch(inputList, key) {
    var left = 0;
    var right = inputList.length - 1;

    while (left <= right) {
        var mid = parseInt((left + right) / 2);

        if (inputList[mid] == key)
            return mid;
        else if (inputList[mid] < key)
            left = mid + 1;
        else
            right = mid - 1;
    }

    return 'Not found';
}

alert(binarySearch(inputList, 'T'));
alert(binarySearch(inputList, 'Z')); // Not found




//merge sort
function mergeSort(data)
{
    if(data.length == 1 ) return data;

    var mid = data.length / 2;
    var left = data.slice(0, mid);
    var right = data.slice(mid);

    left = mergeSort(left);
    right = mergeSort(right);

    return merge(left, right);
}

function merge(left, right)
{
    var result=[];
    var leftIndex=0;
    var rightIndex=0;

    while(leftIndex<left.length && rightIndex<right.length)
    {
        if(left[leftIndex]>right[rightIndex])
        {

            result.push(right[rightIndex]);
            rightIndex++;
        }
        else
        {
            result.push(left[leftIndex]);
            leftIndex++;
        }
    }
    while(leftIndex<left.length)
    {
        result.push(left[leftIndex]);
        leftIndex++;
    }
    while(rightIndex<right.length)
    {
        result.push(right[rightIndex]);
        rightIndex++;
    }
    return result;
}


//quick sort

function quickSort(arr, left, right){
   var len = arr.length,
   pivot,
   partitionIndex;


  if(left < right){
    pivot = right;
    partitionIndex = partition(arr, pivot, left, right);

   //sort left and right
   quickSort(arr, left, partitionIndex - 1);
   quickSort(arr, partitionIndex + 1, right);
  }
  return arr;
}

 function partition(arr, pivot, left, right){
   var pivotValue = arr[pivot],
       partitionIndex = left;

   for(var i = left; i < right; i++){
    if(arr[i] < pivotValue){
      swap(arr, i, partitionIndex);
      partitionIndex++;
    }
  }
  swap(arr, right, partitionIndex);
  return partitionIndex;
}

function swap(arr, i, j){
   var temp = arr[i];
   arr[i] = arr[j];
   arr[j] = temp;
}



//Data Structure
//Stack - LIFO-last in first out
//In computer science, a stack is a linear data structure.
//A stack organizes data into sequential order.

function ourStack() {
    var stack = new Array();
    stack.push('Audi');
    stack.push('Skoda');
    stack.push('Opel');
    stack.push('VW');

    // in this case VW is at the top of the stack
    // (added as the last)

    alert(stack.toString());
    stack.pop(); // get VW
    alert(stack.toString()); // no VW anymore

    // add new element
    stack.push('Mercedes');
    alert(stack.toString()); // Mercedes on the top
}

ourStack();

//Kim cho
function Stack() {
    this._size = 0;
    this._storage = {};
}
Stack.prototype.push = function(data) {
    // increases the size of our storage
    var size = this._size++;

    // assigns size as a key of storage
    // assigns data as the value of this key
    this._storage[size] = data;
};
Stack.prototype.pop = function() {
    var size = this._size,
        deletedData;

    if (size) {
        deletedData = this._storage[size];

        delete this._storage[size];
        this._size--;

        return deletedData;
    }
};


//A Queue - FIFO
//Similar to a stack, a queue is a linear data structure.
//Unlike a stack, a queue deletes only the oldest added data.
//example like the event-loop of a web browser.  Each event added
//to event loop's queue and handled in the order they entered the queue
//cho kim

function Queue() {
    this._oldestIndex = 1;
    this._newestIndex = 1;
    this._storage = {};
}

Queue.prototype.size = function() {
    return this._newestIndex - this._oldestIndex;
};

Queue.prototype.enqueue = function(data) {
    this._storage[this._newestIndex] = data;
    this._newestIndex++;
};

Queue.prototype.dequeue = function() {
    var oldestIndex = this._oldestIndex,
        newestIndex = this._newestIndex,
        deletedData;

    if (oldestIndex !== newestIndex) {
        deletedData = this._storage[oldestIndex];
        delete this._storage[oldestIndex];
        this._oldestIndex++;

        return deletedData;
    }
};


//A Singly-Linked List
//In computer science, a singly-linked list is a data structure that
//holds a sequence of linked nodes. Each node, in turn, contains data
//and a pointer, which can point to another node.
function Node(data) {
    this.data = data;
    this.next = null;
}

function SinglyList() {
    this._length = 0;
    this.head = null;
}

SinglyList.prototype.add = function(value) {
    var node = new Node(value),
        currentNode = this.head;

    // 1st use-case: an empty list
    if (!currentNode) {
        this.head = node;
        this._length++;

        return node;
    }

    // 2nd use-case: a non-empty list
    while (currentNode.next) {
        currentNode = currentNode.next;
    }

    currentNode.next = node;

    this._length++;

    return node;
};

SinglyList.prototype.searchNodeAt = function(position) {
    var currentNode = this.head,
        length = this._length,
        count = 1,
        message = {failure: 'Failure: non-existent node in this list.'};

    // 1st use-case: an invalid position
    if (length === 0 || position < 1 || position > length) {
        throw new Error(message.failure);
    }

    // 2nd use-case: a valid position
    while (count < position) {
        currentNode = currentNode.next;
        count++;
    }

    return currentNode;
};

SinglyList.prototype.remove = function(position) {
    var currentNode = this.head,
        length = this._length,
        count = 0,
        message = {failure: 'Failure: non-existent node in this list.'},
        beforeNodeToDelete = null,
        nodeToDelete = null,
        deletedNode = null;

    // 1st use-case: an invalid position
    if (position < 0 || position > length) {
        throw new Error(message.failure);
    }

    // 2nd use-case: the first node is removed
    if (position === 1) {
        this.head = currentNode.next;
        deletedNode = currentNode;
        currentNode = null;
        this._length--;

        return deletedNode;
    }

    // 3rd use-case: any other node is removed
    while (count < position) {
        beforeNodeToDelete = currentNode;
        nodeToDelete = currentNode.next;
        count++;
    }

    beforeNodeToDelete.next = nodeToDelete.next;
    deletedNode = nodeToDelete;
    nodeToDelete = null;
    this._length--;

    return deletedNode;
};

