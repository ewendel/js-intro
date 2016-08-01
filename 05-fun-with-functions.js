// Create a function that returns a new function that returns true when called.
function createFunction() {
    return function() {
        return true;
    }
}

// Make the function times return a function that 
// returns the next multiple of n for each subsequent call.
// times(2) should return 2,4,6,8, etc
// times(3) should return 3,6,9,12
var times = function (n) {
    let m = 0;
    return () => { m += n; return m }
};

var times2 = times(2);

// Memoization
// Make a function memoize that will take a function fn and a number n
// and return a new function that serves as a memoized version of fn.
const memoize = fn => {
    const resultMap = {};
    return n => {
        if (!resultMap[n]) resultMap[n] = fn(n);
        return resultMap[n];
    }
}

test('Fun with functions', function() {
    ok(typeof createFunction() === 'function',
        'createFunction() should return a function');

    ok(createFunction()() === true,
        "calling createFunction's returned function should return true");

    ok(times2() === 2);
    ok(times2() === 4);
    ok(times2() === 6);

    equal(typeof memoize(() => 1), 'function', 'memoize() should return a function');
    const func = n => Math.random();
    const memoizedFunc = memoize(func);
    equal(memoizedFunc(1), memoizedFunc(1), 'memoize() should remember value for parameter 1')
    notEqual(memoizedFunc(1), memoizedFunc(2), 'memoize() should not mix return values for different parameters')
}); 