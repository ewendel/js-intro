/* 
    SCOPING AND HOISTING
    Your task: make all the asserts pass
    Possible actions:
        change double dots into
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

        ok( a === 2);
        ok( b === 4);
        ok( C === 3);
        ok( d === 1);
        ok( s === 2);
        ok( typeof f === 'undefined');

    });

})();

test('Scope (outside function)', function() {

    ok( a === 2);
    ok( b === 4);
    ok( typeof C === 'undefined');
    ok( d === 1);
    ok( s === 1);
    ok( typeof f === 'undefined');

}); 