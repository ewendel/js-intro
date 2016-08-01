// PLAYING WITH PROTOTYPES

// Part 1 - extending built-ins
const importantify = msg => msg.toUpperCase() + '!!!';

String.prototype.importantify = importantify;

// Make this syntax possible:
// (5).plus(3).minus(6)

Number.prototype.plus = function(n) {
    return this + n;
};

Number.prototype.minus = function(n) {
    return this - n;
};

/* Part 2 - Constructors
    
    Create a constructor function "Warship" that creates new warship objects.
    The constructors accepts parameters name (string) and cannons (number).
    { destroyed: false, cannons: 3, name: 'HMS Belfast' }
*/

function Warship(name, cannons) {
    this.destroyed = false;
    this.name = name;
    this.cannons = cannons;
}

// All warships should be able to shoot. Extend your constructor with
// a function by using "this" inside the constructor
// (this is how they shoot: () => console.log('BOOM!'))

function Warship(name, cannons) {
    this.destroyed = false;
    this.name = name;
    this.cannons = cannons;
    // this.shoot = () => console.log('BOOM!');
}

// Now every warship contains its own shoot-method.
// We can improve memory consumption vastly by adding the method to the prototype instead.
// Remove the instance method and add shoot() to the prototype.

Warship.prototype.shoot = () => console.log('BOOM!');

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