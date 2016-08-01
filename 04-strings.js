// STRINGS

// skal returnere true hvis strengen er lenger enn åtte tegn
function isLong(str) {
    return str.length > 8;
}

// skal returnere inputstrengen i store bokstaver fulgt av tre utropstegn:
// makeImportant('hey, man') -> 'HEY, MAN!!!'
function makeImportant(message) {
    return message.toUpperCase() + '!!!';
}

function cookieMonster(food) {
    return food.toLowerCase().includes('cake') ? makeImportant('cake') : false;
}

// The Mumbler
function mumble(input) {
    return input
            .split('')
            .map((c, idx) => c.toUpperCase() + c.toLowerCase().repeat(idx))
            .join('-');
}

// The Trolls!
// "This website is for losers LOL!" => "Ths wbst s fr lsrs LL!".

function trolls(input) {
    return input.replace(/[aeiouyAEIOUY]/g, '');
}

function isPalindrome(input) {
    return input.split('').reverse().join('');
}

test('Strings', function() {
    notOk(isLong('trump'), 'isLong()');
    ok(isLong('trump university'), 'isLong()');
    notOk(isLong('winning'), 'isLong()');
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