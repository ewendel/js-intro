function hello(name="World") {
    return 'Hello ' + name;
}

function addAll(...numbers) {
    return numbers.reduce((x,y) => x+y, 0);
}

test('ES6', function() {
    equal(hello(), 'Hello World');
    equal(addAll(1,2,3,4,5,6,7,8,9), 45);
})