/*
    ARRAYS
    
    This page might prove helpful: 
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
*/
const coacher = ['Erik', 'Tine', 'Ola', 'Nicolay', 'Ingvild', 'Ingrid', 'Espen', 'Espen', 'Linda', 'Tori', 'Eivind', 'Safi', 'Jøran'];

/* ------------------------------------------------- */
// Part 1 - Warmup
/* ------------------------------------------------- */

// find the amount of coaches programatically
const coachCount = coacher.length;
// put the name of the fifth coach in here
const fifthCoachName = coacher[4];
// find the index of Espen
const espenIndex = coacher.indexOf('Espen');
// lastly, we want a string in the following format:
// 'ERIK-TINE-OLA-NICOLAY' etc. (check out "join()")
const uppercasedCoachNames = coacher.join('-').toUpperCase();

/* ------------------------------------------------- */
// Part 2
/* ------------------------------------------------- */

var collection = [
    null,
    1,
    2.5,
    true,
    false || true && (3 !== undefined),
    function() {},
    undefined
];

// Use a for-loop or the forEach-method to create a "types" array 
// adding the types of the contents in the collection

const types = [];

collection.forEach(c => types.push(typeof c));

test('Arrays', function() {
    equal(coachCount, 13);
    equal(fifthCoachName, 'Ingvild');
    equal(espenIndex, 6)
    equal(uppercasedCoachNames, 'ERIK-TINE-OLA-NICOLAY-INGVILD-INGRID-ESPEN-ESPEN-LINDA-TORI-EIVIND-SAFI-JØRAN');

    equal(String(types), 'object,number,number,boolean,boolean,function,undefined')
})