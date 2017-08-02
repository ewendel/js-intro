/*  
    SIMPLE FUNCTIONS
*/

// Write a function "echo()" that returns the first argument
function echo() {}
// Write a function "echo3rd()" that returns the third argument
function echo3rd() {}

// Complete the function: it takes two numbers and returns the sum
function add() {}

// Complete the function: it should return the amount of arguments it was given
function countArguments() {}

// Complete the function: return the sum of all arguments given
function sumAll() {}

// As a last assignment, try to re-write all the functions above as arrow functions
// (what's an arrow function?
// as always - google "mdn arrow function")

test('Simple functions', function() {
    equal(echo(0), 0, 'echo()');
    equal(echo('Hello world!'), 'Hello world!', 'echo()');

    equal(echo3rd(0,0, 'Hai there.'), 'Hai there.', 'echo()');

    equal(add(0,2), 2, 'add()');
    equal(add(2,2), 4, 'add()');
    equal(add(4,4), 8, 'add()');
    equal(add(-1,1), 0, 'add()');

    equal(countArguments(), 0, 'countArguments()');
    equal(countArguments(true, ''), 2, 'countArguments()');
    equal(countArguments(false, 1, 'hello'), 3, 'countArguments()');

    equal(sumAll(1,2,3,4,5), 15, 'sumAll()');
    equal(sumAll(1,2,3,4,5,6), 21, 'sumAll()');

});