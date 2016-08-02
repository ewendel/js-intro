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
const square = x => x.map(y => y*y);

// Create a method "onlyOdds()" that accepts an array
// of numbers and returns only the odd numbers of the array 
const onlyOdds = x => x.filter(y => y % 2 === 1);

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
const names = people.map(x => x.name);

// Create an array containing names of the underaged people (<18)
const underagedNames = people.filter(p => p.age < 18).map(p => p.name)

// Create an array containing all ages, sorted ascending
const sortedAges = people.map(p => p.age).sort();

// Find the average age
const averageAge = people.map(p => p.age).reduce((x,y) => x+y, 0)/people.length;


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

function thirstyIn(water, ageArray) {
    const ageToConsumption = age => {
        if (age < 18) return 1;
        if (age <= 50) return 2;
        return 1.5;
    };

    const dailyConsumption = ageArray
            .map(ageToConsumption)
            .reduce((x,y) => x+y, 0);
  
    return Math.floor(water / dailyConsumption); 
}

const waterSupplyInDays = thirstyIn(1000, people.map(p => p.age));

test('Map, filter, reduce', function() {
    deepEqual(square([1,2,3,4,5]), [1,4,9,16,25], 'square');
    deepEqual(onlyOdds([1,2,3,4,5]), [1,3,5], 'onlyOdds');
    
    deepEqual(names, ['Jack', 'Jill', 'Joe', 'Jane', 'James', 'Jodie', 'Jorn', 'Jessica'], 'Names');
    deepEqual(underagedNames, ['Jack', 'Jill'], 'Names');
    deepEqual(sortedAges, [15,17,25,37,45,50,68,72], 'Names');
    deepEqual(averageAge, 41.125, 'Names');
    
    equal(thirstyIn(150, [ 5, 30, 10 ]), 37, 'The Water Problem');
    equal(waterSupplyInDays, 76, 'The Water Problem #2');
});