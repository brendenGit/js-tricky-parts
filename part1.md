1. What is a potential pitfall with using typeof bar === "object" to determine if bar is an object? How can this pitfall be avoided?
   1. If bar is null this is considered an object. We can avoid this by first checking if bar is null.
2. What will this code output
   1. `a defined? false`
   2. `b defined? true`
```javascript
(function(){
    var a = b = 3;
})();
console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));
```
3. What will this code output
   1. `outer func:  this.foo = bar`
   2. `outer func:  self.foo = bar`
   3. `inner func: this.foo = undefined`
   4. `inner func: self.foo = bar`
```javascript
var myObject = {
    foo: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.foo = " + this.foo);
        console.log("outer func:  self.foo = " + self.foo);
        (function() {
            console.log("inner func:  this.foo = " + this.foo);
            console.log("inner func:  self.foo = " + self.foo);
        }());
    }
};
myObject.func();
```
4. What is the significance of, and reason for, wrapping the entire content of a JavaScript source file in a function block?
   1. This is commonly done with libraries like JQuery. This is done so that the variables inside of the library are not accessible but their methods are. Because of closure the variables inside of it are as well.
5. What is the significance, and what are the benefits, of including 'use strict' at the beginning of a JavaScript source file?
   1. This helps with:
      1. Debugging
      2. Prevents accidental globals
      3. Eliminates `this` coercion
      4. Disallows duplicate parameter values
      5. makes `eval()` safer
      6. Throws error on invalid usage of `delete`
6. Consider the two functions below. Will they both return the same thing? Why or why not?
   1. No they will not. Due to there not being a semicolon after the return of foo2. Also due to the new line we have the object being returned on. 
```javascript
function foo1()
{
  return {
      bar: "hello"
  };
}

function foo2()
{
  return
  {
      bar: "hello"
  };
```
7. What will the code below output? Explain your answer.
   1. `0.30000000000000004`
   2. `false`
   3. The first is fairly straight forward, its hard to say what it will print out but it will print something close to 0.3. The second however will likely print false since the two numbers could be different but it could print true RNG.
```javascript
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 == 0.3);
```
8. In what order will the numbers 1-4 be logged to the console when the code below is executed? Why?
   1. `1 => 4 => 3 => 2`
   2. It will print in this order because the 1 and 4 print immediately, there is no timeout. The second timeout will then print as the event queue is empty. The first timeout will then be printed after 1 second.
```javascript
(function() {
    console.log(1); 
    setTimeout(function(){console.log(2)}, 1000); 
    setTimeout(function(){console.log(3)}, 0); 
    console.log(4);
})();
```
9. Write a simple function (less than 160 characters) that returns a boolean indicating whether or not a string is a palindrome.
```javascript
function isPalindrome(str) {
    let left = 0;
    let right = str.length - 1;
    while (left < right) {
        if(str[left] !== str[right]) return false;
        left++;
        right--;
    }
    return true;
}
```
10. Write a `sum` method which will work properly when invoked using either syntax below.
    1.  `console.log(sum(2,3));   // Outputs 5`
    2.  `console.log(sum(2)(3));  // Outputs 5`
```javascript
function sum(x, y) {
    if (y !== undefined) {
        return x + y;
    } else {
        return function (y) { return x + y; };
    }
}
```
11. Consider the following code snippet:
    1.  (a) What gets logged to the console when the user clicks on “Button 4” and why?
        1.  5 would be logged
    2.  (b) Provide one or more alternate implementations that will work as expected.
        1.  use the let keyword in the for loop. This ensures the buttons are taking the value of I from the instance of the for loopo.
```javascript
for (var i = 0; i < 5; i++) {
  var btn = document.createElement('button');
  btn.appendChild(document.createTextNode('Button ' + i));
  btn.addEventListener('click', function(){ console.log(i); });
  document.body.appendChild(btn);
}
```
12. Assuming d is an “empty” object in scope, say: `var d = {};`…what is accomplished using the following code?
    1.  The object would look like:
    2.  `{'zebra': undefined, 'horse': undefined}`
```javascript
[ 'zebra', 'horse' ].forEach(function(k) {
	d[k] = undefined;
});
```
13. What will the code below output to the console and why?
    1.  `array 1: length=5 last=j,o,n,e,s`
    2.  `array 2: length=5 last=j,o,n,e,s`
```javascript
var arr1 = "john".split('');
var arr2 = arr1.reverse();
var arr3 = "jones".split('');
arr2.push(arr3);
console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));
```
14. What will the code below output to the console and why?
    1.  `+` and `-` operators will attempt to convert string to int then to positive or negative. Adding a number to a string will concat and convert num to string. Cannot use `-` on strings so `NaN` is returned in those instances.
    2.  `122`
    3.  `32`
    4.  `02`
    5.  `112`
    6.  `NaN2`
    7.  `NaN`
```javascript
console.log(1 +  "2" + "2");
console.log(1 +  +"2" + "2");
console.log(1 +  -"1" + "2");
console.log(+"1" +  "1" + "2");
console.log( "A" - "B" + "2");
console.log( "A" - "B" + 2);
```
15. The following recursive code will cause a stack overflow if the array list is too large. How can you fix this and still retain the recursive pattern?
    1.  We can solve this by adding a `setTimeout(nextListItem, 0)`. This will add the calls to the event queue and not the call stack. This keeps the call stack clear and helps avoid a stack overflow.
```Javascript
var list = readHugeList();

var nextListItem = function() {
    var item = list.pop();

    if (item) {
        // process the list item...
        nextListItem();
    }
};
```
16. What is a “closure” in JavaScript? Provide an example.
    1.  Closure is the concept where an inner function has access to all of the variables inside itself and its outerfunction. These are typically IIFEs and are common practice for many libraries. It ensures the variables are acccessible but not editable inside of these functions.
```Javascript
function outerFunction() {
    let count = 0;
    return function setCount(val) {
        count = count + val;
        return count;
    }
}
```
17. What would the following lines of code output to the console?
    1.  `0 || 1 = 1` 
    2.  `1 || 2 = 1`
    3.  `0 && 1 = 0`
    4.  `1 && 2 = 2`
```javascript
console.log("0 || 1 = "+(0 || 1));
console.log("1 || 2 = "+(1 || 2));
console.log("0 && 1 = "+(0 && 1));
console.log("1 && 2 = "+(1 && 2));
```
18. What will be the output when the following code is executed? Explain.
    1.  `true`
    2.  `false`
    3.  The first line is comparing the values, false and falsy for 0, which is converted to an int by js, which results to true. The second is attempting to compare both the type and the value.
```javascript
console.log(false == '0')
console.log(false === '0')
```
19. What is the output out of the following code? Explain your answer.
    1.  Objects are converted to strings when passed in as keys so the key would look like `[object Object]`. Therefor the code below would print `456` because we reference the same key `[object Object]` when we assign `a[c]`.
```javascript
var a={},
    b={key:'b'},
    c={key:'c'};

a[b]=123;
a[c]=456;

console.log(a[b]);
```
20. What will the following code output to the console:
    1.  `3,628,800`
```javascript
console.log((function f(n){return ((n > 1) ? n * f(n-1) : n)})(10));
```
21. Consider the code snippet below. What will the console output be and why?
    1.  The output would be `1`. This is an example of closure. The inner function has access to x. An important feature of closures is that an inner function still has access to the outer function’s variables.
```javascript
(function(x) {
    return (function(y) {
        console.log(x);
    })(2)
})(1);
```
22. What will the following code output to the console and why:
    1.  The first would print `undefined` or an error as the this keyword would not know what it is pointing at. The second would return `John Doe` because this is pointing to `hero`.
    2.  To solve for this we can use `.bind(hero)` when initializing stoleSecretIdentity to bind `this` to `hero`.
```javascript
var hero = {
    _name: 'John Doe',
    getSecretIdentity: function (){
        return this._name;
    }
};

var stoleSecretIdentity = hero.getSecretIdentity;

console.log(stoleSecretIdentity());
console.log(hero.getSecretIdentity());
```
23. Create a function that, given a DOM Element on the page, will visit the element itself and all of its descendents (not just its immediate children). For each element visited, the function should pass that element to a provided callback function.
The arguments to the function should be:
    - a DOM element
    - a callback function (that takes a DOM element as its argument)
```javascript
function Traverse(p_element, p_callback) {
	p_callback(p_element);
	var list = p_element.children;
	for (var i = 0; i < list.length; i++) {
		Traverse(list[i], p_callback);  // recursive call
	}
}
```
24. Testing your `this` knowledge in JavaScript: What is the output of the following code?
    1.  `10, 2`
```javascript
var length = 10;
function fn() {
	console.log(this.length);
}

var obj = {
  length: 5,
  method: function(fn) {
    fn();
    arguments[0]();
  }
};

obj.method(fn, 1);
```
25. Consider the following code. What will the output be, and why?
    1.  Hoisting. A var value is hoisted to the top without its value. Therefor the result will print `1` inside of the catch since it is defined there, `undefined` since when hoisted x is not defined and then `2`.
```javascript
(function () {
    try {
        throw new Error();
    } catch (x) {
        var x = 1, y = 2;
        console.log(x);
    }
    console.log(x);
    console.log(y);
})();
```
26. What will be the output of this code?
    1.  `undefined` In javascript hoisting variables are sent to the top of there containing function or global scope. So `var x = 20` is moved to the top like so `var x`, since nothing is defined there the `console.log(x)` results in `undefined`.
```javascript
var x = 21;
var girl = function () {
    console.log(x);
    var x = 20;
};
girl ();
```
27. What will this code print?
    1.  `0, 1, 2, 3, 4`
```javascript
for (let i = 0; i < 5; i++) {
  setTimeout(function() { console.log(i); }, i * 1000 );
}
```
28. What do the following lines output, and why?
    1.  The first statement returns true which is as expected. The second returns false because of how the engine works regarding operator associativity for < and >. It compares left to right, so 3 > 2 > 1 JavaScript translates to true > 1. true has value 1, so it then compares 1 > 1, which is false.
```javascript
console.log(1 < 2 < 3);
console.log(3 > 2 > 1);
```
29. How do you add an element at the begining of an array? How do you add one at the end?
    1.  We use `.push()` to add an element to the end of an array. We use `.unshift()` to place an element at the begining of an array. 
30. Imagine you have this code:
    1.  a) No the array would just be empty in spots between 3 and 10 with 99 at the end
    2.  b) this would output `undefined`
    `var a = [1, 2, 3];`
    a) Will this result in a crash?
    `a[10] = 99;`
    b) What will this output?
    `console.log(a[6]);`
31. What is the value of `typeof undefined == typeof NULL`?
    1.  True because `NULL` will be treated as any other undefined variable.
32. What would following code return?
    1.  `string` `typeof 1` will return `"number"` and `typeof "number"` will return `string`.
```javascript
console.log(typeof typeof 1);
```
33. What will be the output of the following code:
    1.  `5, 5, 5, 5, 5`
```javascript
for (var i = 0; i < 5; i++) {
	setTimeout(function() { console.log(i); }, i * 1000 );
}
```
34. What is `NaN`? What is its type? How can you reliably test if a value is equal to `NaN`?
    1.  `NaN` means not a number. Its type is a Number. We can reliably test if value !== value, which would only produce true if the value is equal to NaN. Also, ES6 offers a new Number.isNaN().
35. What will the following code output and why?
    1.  The output to the console would be `3`
```javascript
var b = 1;
function outer(){
   	var b = 2
    function inner(){
        b++;
        var b = 3;
        console.log(b)
    }
    inner();
}
outer();
```
36. Discuss possible ways to write a function isInteger(x) that determines if x is an integer.
    1.  `function isInteger(x) { return (x ^ 0) === x; } `
    2.  The above is the most accurate pre ECMAscript 6. With ECMAscript 6 we can now use Number `.isInteger()`
37. How do you clone an object?
    1.  Assign will do the trick however this creates a shallow copy. Nested objects aren't copied. They still refer to the nested objects in the original. 
```javascript
var obj = {a: 1 ,b: 2}
var objclone = Object.assign({},obj);
```