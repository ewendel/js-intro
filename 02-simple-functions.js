/*  
    SIMPLE FUNCTIONS
*/

// Write a function "echo3rd()" that returns the first argument
function echo(a) {
    return a;
}

// Write a function "echo3rd()" that returns the third argument
function echo3rd(a,b,c) {
    return c;
}

// Lag en funksjon som tar inn og summerer to tall
function add(a,b) { 
    return a + b 
}

function countArguments() {
    return arguments.length;
}

function addAll() {
    let sum = 0;
    for (let i=0 ; i < arguments.length ; i++) {
        sum += arguments[i];
    }
    return sum;
}

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

    equal(addAll(1,2,3,4,5), 15, 'addAll()');
    equal(addAll(1,2,3,4,5,6), 21, 'addAll()');

});