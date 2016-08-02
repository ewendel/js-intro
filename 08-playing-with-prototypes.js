// PLAYING WITH PROTOTYPES

/* ------------------------------------------------- */
// Part 1 - extending built-ins
/* ------------------------------------------------- */

// Remember "makeImportant()" earlier?
// Lets add it to the String prototype, under the name "importantify".
// This lets us do the following: "hello world".importantify();


// Make this syntax possible:
// (5).plus(3).minus(6)
// hint: extend the Number prototype

/* Part 2 - Constructors
    
    Create a constructor function "Warship" that creates new warship objects.
    The constructors accepts parameters name (string) and cannons (number).
    { destroyed: false, cannons: 3, name: 'HMS Belfast' }
*/


// All warships should be able to shoot. Extend your constructor with
// a function by using "this" inside the constructor
// (this is how they shoot: () => console.log('BOOM!'))


// Now every warship contains its own shoot-method.
// We can improve memory consumption vastly by adding the method to the prototype instead.
// Remove the instance method and add shoot() to the prototype.


test('Playing with prototypes', function() {
    equal(typeof String.prototype.importantify, 'function', 
          'String.prototype.importantify should be defined')
    equal(importantify('helloes'), 'HELLOES!!!', 'it should also work');
    
    equal((5).plus(3).minus(4), 4, 'Basic maths');

    const ship = new Warship('HMS Belfast', 3);
    equal(typeof ship, 'object');
    equal(ship.name, 'HMS Belfast');
    equal(ship.cannons, 3);

    ok(ship.shoot)
});