/*
    MAP, FILTER AND REDUCE
 
    These are built-in methods located on the Array object.
    Use these methods to solve the tasks.
    Avoid using for-loops!
    
*/

/* ------------------------------------------------- */
// Part 1 - Playing with numbers
/* ------------------------------------------------- */

// Create a method "square()" that accepts an array
// of numbers and returns these numbers squared (x^2)
let square;

// Create a method "onlyOdds()" that accepts an array
// of numbers and returns only the odd numbers of the array 
let onlyOdds;

/* ------------------------------------------------- */
// Part 2 - Playing with people
/* ------------------------------------------------- */

const people = [
{ name: 'Jack', age: 17 },
{ name: 'Jill', age: 15 },
{ name: 'Joe', age: 45 },
{ name: 'Jane', age: 72 },
{ name: 'James', age: 37 },
{ name: 'Jodie', age: 68 },
{ name: 'Jorn', age:  50 },
{ name: 'Jessica', age: 25 }];

// Create an array containing all the people's names
let names;

// Create an array containing names of the underaged people (<18)
let underagedNames;

// Create an array containing all ages, sorted ascending
let sortedAges;

// Find the average age
let averageAge;


/*  
    Part 3 - The Water Supply

    You live in a camp, with a limited supply of water 
    and a certain amount of people. Your task is to calculate
    at what time you'll run out of water.

    Each person has a different water consumption.
    A person under 18 consume 1 liter/day, 
    persons up to 50 years consume 2 liters 
    and all others need 1.5 liters/day.

    Write a function thirstyIn(water, ageArray) that calculates
    the amount of days until you run out of water.
*/

function thirstyIn(water, ageArray) {}

// Determine how long the folks in the array up top will 
// last with a water supply for 1000 liters

let waterSupplyInDays;

test('Map, filter, reduce', function() {
    deepEqual(square([1,2,3,4,5]), [1,4,9,16,25], 'square');
    deepEqual(onlyOdds([1,2,3,4,5]), [1,3,5], 'onlyOdds');
    
    deepEqual(names, ['Jack', 'Jill', 'Joe', 'Jane', 'James', 'Jodie', 'Jorn', 'Jessica'], 'Names');
    deepEqual(underagedNames, ['Jack', 'Jill'], 'underagedNames');
    deepEqual(sortedAges, [15,17,25,37,45,50,68,72], 'sortedAges');
    deepEqual(averageAge, 41.125, 'averageAge');
    
    equal(thirstyIn(150, [ 5, 30, 10 ]), 37, 'The Water Problem');
    equal(waterSupplyInDays, 76, 'The Water Problem #2');
});