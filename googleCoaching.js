
/*
[1] Given an array of integers, determine whether or not there exist two elements
in the array (at different positions) whose sum is equal to some target value.

Examples:
[5, 4, 2, 4], 8 --> true
[5, 1, 2, 4], 8 --> false
*/
function isSumOfTwoEqualToTarget(arr, target){
    var i, diff, length = arr.length;
    for (i=0; i<length; i++){
        diff = target - arr[i];
        array = arr.slice(0);
        array.splice(i, 1);
        if (array.indexOf(diff) > 0){
            return true;
        }
    }
    return false;
}

isSumOfTwoEqualToTarget([5, 4, 2, 4], 8);
isSumOfTwoEqualToTarget([5, 1, 2, 4], 8);

/*

var array = [5, 1, 2, 4]
array.splice(2, 1);
console.log(array.indexOf(2) > 0);

*/

/*
[2] Implement a set-like data structure that supports Insert, Remove, and
GetRandomElement efficiently.

Example:
If you insert the elements 1, 3, 6, 8 and remove 6, the structure should
contain [1, 3, 8]. Now, GetRandom should return one of 1, 3 or 8 with equal
probability.
*/

var SetLike = function(){
    if (arguments.length > 0){
        var args = Array.prototype.slice.call(arguments);
        this.data = args.slice(0);
        this.size = args.length;
        console.log(this.data);
    }else {
        this.data = [];
        this.size = 0;
    }
};


SetLike.prototype.has = function(value){
    if (!this.data || this.data.indexOf(value) >= 0){
        return true;
    }
    return false;
}

SetLike.prototype.insert = function(value){
        if (!this.has(value)){
            this.data.push(value);
            this.size++;
            return true;
        }{
            return false;
        }

};

SetLike.prototype.remove = function(value){
    if (this.has(value)){
        var index = this.data.indexOf(value);
        console.log(this.data.splice(index, 1));
        this.size--;
        return true;
    }else {
        return false;
    }
};

SetLike.prototype.GetRandomElement = function(){
    var randomNum = Math.floor(Math.random() * this.size);
    return this.data[randomNum];
};

var testSetLike = new SetLike(1,3,8);
console.log("has 6: " + testSetLike.has(6));
console.log("insert 6: " + testSetLike.insert(6));
console.log("remove 6: " + testSetLike.remove(6));
console.log("has 6: " + testSetLike.has(6));
console.log("data: " + testSetLike.data);
console.log(testSetLike.GetRandomElement());

//var randomNum = Math.floor(Math.random() * 4);
//console.log(randomNum);

/*
var SetLike = function(){
    this.data = [];
    this.size = 0;
};

SetLike.prototype.has = function(value){
    if (this[data].indexOf(value) >= 0){
        return true;
    }
    return false;
}

SetLike.prototype.insert = function(value){
    //var args = Array.prototype.slice.call(arguments);

        if (!this.has(value)){
            this.data.push(value);
            this.size++;
            return true;
        }{
            return false;
        }

};

SetLike.prototype.remove = function(value){
    if (this.has(value)){
        var index = this.data.indexOf(value);
        this.data.splice(index, 1);
        this.size--;
        return true;
    }else {
        return false;
    }
};

SetLike.prototype.GetRandomElement = function(){
    var randomNum = Math.floor(Math.random() * (this.size + 1) + 1);
    return this.data[randomNum];
};

*/




