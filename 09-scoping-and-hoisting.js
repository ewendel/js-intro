/* 
    SCOPING AND HOISTING
    Your task: make all the asserts pass
    Possible actions:
        change empty strings into
            variables
            function calls
            typeof-s

    .. and only that.
    Don't change the source code.
*/

var a = 1;
b = 3;
var s = 1;

(function () {
    a = 2;
    b = 4;
    var C = 3;
    d = 1;
    s = 2;

    if (false) {
        var s;
        function f() {
            var s = 7;
            return s;
        }
    }

    test('Scope (inside function)', function() {

        ok( '' === 2);
        ok( '' === 4);
        ok( '' === 3);
        ok( '' === 1);
        ok( '' === 2);
        ok( '' === 'undefined');

    });

})();

test('Scope (outside function)', function() {

    ok( '' === 2);
    ok( '' === 4);
    ok( '' === 'undefined');
    ok( '' === 1);
    ok( '' === 1);
    ok( '' === 'undefined');

}); 