// MAP, FILTER AND REDUCE
// use the built-in methods on the Array prototype to solve these

// Part 1 - Playing with numbers
const squared = x => x.map(y => y*y);
const odd = x => x.filter(y => y % 2 === 1);

const people = [
{ name: 'Jack', age: 17 },
{ name: 'Jill', age: 15 },
{ name: 'Joe', age: 45 },
{ name: 'Jane', age: 72 },
{ name: 'James', age: 37 },
{ name: 'Jodie', age: 68 },
{ name: 'Jorn', age:  50 },
{ name: 'Jessica', age: 25 }];

// Part 2 - Playing with people

// create an array with all names
const names = people.map(x => x.name);
// create an array with names of the underaged people
const underagedNames = people.filter(p => p.age < 18).map(p => p.name)
// sort all ages
const sortedAges = people.map(p => p.age).sort();
// find the average age
const averageAge = people.map(p => p.age).reduce((x,y) => x+y, 0)/people.length;


// Part 3 - The Water Supply
/*
    You have a limited supply of water and a certain amount of people.
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
    deepEqual(squared([1,2,3,4,5]), [1,4,9,16,25], 'Squared');
    deepEqual(odd([1,2,3,4,5]), [1,3,5], 'Odd numbers');
    
    deepEqual(names, ['Jack', 'Jill', 'Joe', 'Jane', 'James', 'Jodie', 'Jorn', 'Jessica'], 'Names');
    deepEqual(underagedNames, ['Jack', 'Jill'], 'Names');
    deepEqual(sortedAges, [15,17,25,37,45,50,68,72], 'Names');
    deepEqual(averageAge, 41.125, 'Names');
    
    equal(thirstyIn(150, [ 5, 30, 10 ]), 37, 'The Water Problem');
    equal(waterSupplyInDays, 76, 'The Water Problem #2');
});