/*
    STRINGS
*/

// skal returnere true hvis strengen er lenger enn åtte tegn
function isLong(str) {}

// skal returnere inputstrengen i store bokstaver fulgt av tre utropstegn:
// makeImportant('hey, man') -> 'HEY, MAN!!!'
function makeImportant(message) {}

function cookieMonster(food) {}

// The Mumbler
function mumble(input) {}

// The Trolls!
// "This website is for losers LOL!" => "Ths wbst s fr lsrs LL!".

function trolls(input) {}

function isPalindrome(input) {}

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
    ok(isPalindrome('ann'), 'isPalindrome()');
    ok(isPalindrome('anna oxo anna'), 'isPalindrome()');
})