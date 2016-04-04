
//JavaScript validation [10 exercises with solution]

/*==============================

1. Write a JavaScript function to validate whether a given value type is boolean or not.
==============================*/
return value === true || value === false || Object.prototype.toString.call(value) === '[object Boolean';


/*==============================

2. Write a JavaScript function to validate whether a given value type is error or not.
==============================*/
return x != x;


/*==============================

3. Write a JavaScript function to validate whether a given value type is NaN or not.

==============================*/
return x != x;


/*==============================

4. Write a JavaScript function to validate whether a given value type is null or not.

==============================*/
return x === null;


/*==============================

5. Write a JavaScript function to validate whether a given value is number or not.
==============================*/
return !isNaN(num) && Object.prototype.toString.call(num) === '[object Number]';


/*==============================

6. Write a JavaScript function to validate whether a given value is object or not.
==============================*/
return Object.prototype.toString.call(obj) === '[object Object]'
return typeof value === 'function' || typeof value === 'object' || !!value;

/*==============================

7. Write a JavaScript function to validate whether a given value type is pure json
object or not.

==============================*/
return Object.prototype.toString.call(obj) === '[object Object]';


/*==============================

8. Write a JavaScript function to validate whether a given value is RegExp or not.
==============================*/
return Object.prototype.toString.call(obj) === '[object RegExp]'


/*==============================

9. Write a JavaScript function to validate whether a given value type is char or not.
==============================*/
function is_char(value){
    if (Object.prototype.toString.call(value) !== '[object String]')
        return false;
    return value && value.length === 1;
}

console.log(is_char('f'));
console.log(is_char('*'));


/*==============================

10. Write a JavaScript function to check whether given value types are same or not.

==============================*/
function is_sameType(value1, value2) {
        if(is_nan(value1) || is_nan(value2)) {
         return is_nan(value1) === is_nan(value2);
        }
        return toString.call(value1) === toString.call(value2);
    }

function is_nan(val)
        {
        return val !== val;
       }

console.log(is_sameType('12', 100));
console.log(is_sameType('12', '100'));
console.log(is_sameType(12, 100));



/*==============================

