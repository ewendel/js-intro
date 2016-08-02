/*
    ARRAYS
    
    This page might prove helpful: 
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
*/
const coacher = ['Erik', 'Tine', 'Ola', 'Nicolay', 'Ingvild', 'Ingrid', 'Espen', 'Espen', 'Linda', 'Tori', 'Eivind', 'Safi', 'Jøran'];

/* ------------------------------------------------- */
// Part 1 - Warmup
/* ------------------------------------------------- */

// Find the amount of coaches programatically
let coachCount;
// Put the name of the fifth coach in here 
// (programatically, no hard coding!)
let fifthCoachName;
// Find the index of Espen
let espenIndex;
// Lastly, we want a string in the following format:
// 'ERIK-TINE-OLA-NICOLAY' etc. (check out "join()")
let uppercasedCoachNames;

/* ------------------------------------------------- 
    Part 2
    Use a for-loop or the forEach-method to create a "types" array 
    adding the types of the contents in the collection
   ------------------------------------------------- */

var collection = [
    null,
    1,
    2.5,
    true,
    false || true && (3 !== undefined),
    function() {},
    undefined
];

const types = [];

/* ------------------------------------------------- 
    Part 3
    We'll need a large array, a very large array indeed.
    Exactly one hundred elements should do it.
    (Oh, and they should be unique. No element twice!)
   ------------------------------------------------- */

let veryLargeArray;

test('Arrays', function() {
    equal(coachCount, 13);
    equal(fifthCoachName, 'Ingvild');
    equal(espenIndex, 6)
    equal(uppercasedCoachNames, 'ERIK-TINE-OLA-NICOLAY-INGVILD-INGRID-ESPEN-ESPEN-LINDA-TORI-EIVIND-SAFI-JØRAN');

    equal(String(types), 'object,number,number,boolean,boolean,function,undefined')

    equal(veryLargeArray.length, 100, 'A very large array');
    equal((new Set(veryLargeArray || [])).size, 100, 'A very large array should contain unique elements');
})