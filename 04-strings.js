/*
    STRINGS INCORPORATED

    You're a junior programmed at STRINGS INCORPORATED,
    creating highly specialized string software.
    Complete the functions in this file as per the instructions.
*/

// Long strings are >8 characters long.
function isLong(str) {}

// Stuff gets more important UPPERCASED and with a couple of exclamations!
// makeImportant('hey, man') -> 'HEY, MAN!!!'
function makeImportant(message) {}

// Cookie man is constantly in search of cake.
// If "food" contains the string 'cake', return 'CAKE!!!', otherwise false.
function cookieMonster(food) {}

/* 
    The Mumbler
    I couldn't understand what the client wanted me to do, he mumbled like a caveman!
    See the test below for hints.
*/
function mumble(input) {}

/* 
    The Trolls!

    Our forum is infected with trolls. 
    Lets just filter them out for now - remove all vowels from forum posts!
    "This website is for losers LOL!" -> "Ths wbst s fr lsrs LL!".
*/

function trolls(message) {}

/*
    Lastly, we need a way to determine whether a string is 
    a palindrome or not - create such a function.
*/
function isPalindrome(input) {}

/*
    Oh, and one more thing, due to new EU regulations, we need a mirror in our office.
    A mirror will return the given string concatened with the given string reversed.
    mirror('yes') -> 'yessey'
*/
function mirror(input) {}

test('Strings', function() {
    equal(isLong('trump'), false, 'isLong()');
    ok(isLong('trump university'), 'isLong()');
    equal(isLong('winning'), false, 'isLong()');
    ok(isLong('moustache mario'), 'isLong()')

    equal(makeImportant('helloes'), 'HELLOES!!!')

    equal(cookieMonster('big mac'), false, 'cookieMonster()');
    equal(cookieMonster('big mac and cake'), 'CAKE!!!', 'cookieMonster()');

    equal(mumble('ZpglnRxqenU'), 'Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu', 'mumble()');
    equal(mumble('NyffsGeyylB'), 'N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb', 'mumble()');
    equal(mumble('MjtkuBovqrU'), 'M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu', 'mumble()');
    equal(mumble('EvidjUnokmM'), 'E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm', 'mumble()');
    equal(mumble('HbideVbxncC'), 'H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc', 'mumble()');

    equal(trolls('This website is for losers LOL!'), 'Ths wbst s fr lsrs LL!', 'trolls()')

    ok(isPalindrome('anna'), 'isPalindrome()');
    notOk(isPalindrome('ann'), 'isPalindrome()');
    ok(isPalindrome('anna oxo anna'), 'isPalindrome()');

    equal(mirror('yes'), 'yessey', 'mirror()');
    equal(mirror('duke of york'), 'duke of yorkkroy fo ekud', 'mirror()');
    equal(mirror('desserts'), 'dessertsstressed', 'mirror()');
})