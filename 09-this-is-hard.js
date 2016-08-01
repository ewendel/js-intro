/* THIS IS HARD
    
    This section is about the keyword "this" in JavaScript.
    It behaves very differently from class-based object-oriented langauges
    like Java and C#.

    We'll be using the function hello() throughout this section.
*/

function hello() {
    return this + ' says hello';
}


const task1 = hello();   
// now we want our function to say 'Erik says hello'
// by manipulating the function context (the value of "this" inside the function)
// use call() to set the function context!
const task2 = hello.call('Erik');
// same as above, but using apply
const task3 = hello.apply('Erik');

// Imagine not having to use "call" og "apply" every time, but rather
// create a new function with a certain context. Whenever this new function is called,
// it calls the old function with the desired context. Sounds great?!
// Function.prototype.bind lets us do exactly this.

// Use bind to create a new version of "hello()" that' always bound to "Kygo"

let boundHello = hello.bind('Kygo');

// Now lets implement bind() manually, by creating a wrapper function
// that always calls the inner function with a certain context when called.
// It should work like this: 
// let boundFunc = bind(unboundFunc, context);
// i.e: let boundHello = bind(hello, 'Kygo');

function bind(func, context) {
    return () => func.call(context);
}

const homeboundHello = bind(hello, 'Kygo');

// If you want to learn more about function invocation in
// JavaScript, here's some recommended reading:
// http://yehudakatz.com/2011/08/11/understanding-javascript-function-invocation-and-this/

test('This is hard', function() {
    equal(task1, '[object Window] says hello');
    equal(task2, 'Erik says hello');
    equal(task3, 'Erik says hello');
    equal(boundHello(), 'Kygo says hello');
    equal(homeboundHello(), 'Kygo says hello');
});