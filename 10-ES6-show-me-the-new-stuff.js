/*
    ES6

    Here you'll get a taste of new features included in the 
    2015-version of javascript, ES6 (or ES2015 or ES6 Harmony).
*/

/* 
    Template literals
    
    Replace the string concatenation with template literals
*/
const lastLogon = 'yesterday at 10:55';
const fullName = 'Josefine Pettersen';
const weatherForecast = () => 'sunny';

function footerMessage(fullName, lastLogon, weatherForecast) {
    return 'Hello, ' + fullName + '! Your last logon was ' + lastLogon +
        '. Todays weather forecast is ' + weatherForecast();
}

/*
    Default parameters
    
    Extend footerMessage() to use the following default values:
    fullName: 'Bjarne Betjent',
    lastLogon: 'today at noon'
*/ 

/*
    Rest parameters
    
    Implement "addAll", adding all numbers given together,
    using only one named argument and the rest parameter syntax
*/ 
function addAll() {}

/*
    Spread operator
    
    Find a way to easily add destroyed planets to the array of all planets
    using the spread operator
*/ 
const destroyedPlanets = ['Alderaan', 'Kamino','Geonosis'];
const allPlanets = ['Yavin IV','Hoth','Dagobah','Bespin', 'Endor','Naboo','Coruscant'];

/*
    Set
    
    Use a Set to find the number of unique starships
*/ 

const spaceships = ['X-wing','Executor','Calamari Cruiser','Naboo fighter','Republic Cruiser','J-type diplomatic barge','EF76 Nebul','AA-9 Coruscant freighter','B-wing','Republic Cruiser','Executor','Slave 1','Millennium Falcon','Imperial shuttle','Scimitar','Naboo fighter','J-type diplomatic barge','Imperial shuttle','EF76 Nebulon-B escort frigate','TIE Advanced x1','Naboo Royal Starship','Slave 1','Naboo Roya','Calamari Cruiser','Y-wing','Executor','Scimitar','Sentinel-class landing craft','Naboo Royal Starship','Jedi starfighter','Republic Cruiser','Naboo fighter','EF76 Nebulon-B escort frigate','Jedi starfighter','Y-wing','Imperial shuttle','B-wing','Slave 1','A-wing','A-wing','X-wing','Death Star','TIE Advanced x1','AA-9 Coruscant freighter'];

let spaceshipCount;

/*
    Destructuring
    
    Using only one statement and one line, extract the height, 
    mass and gender of Luke Skywalker into separate variables    
    Also, get the last film Luke was featured in and put 
    this in a variable lastMovie.
*/ 
const luke = {
      "name": "Luke Skywalker",
      "height": "1.72 m",
      "mass": "77 Kg",
      "hair_color": "Blond",
      "eye_color": "Blue",
      "birth_year": "19 BBY",
      "gender": "Male",
      "homeworld": "http://swapi.co/api/planets/1/",
      "films": [
          "A New Hope",
          "The Empire Strikes Back",
          "Return of the Jedi"
      ],
      "species": [
          "http://swapi.co/api/species/1/"
      ]
}


test('ES6', function() {
    equal(footerMessage(fullName, lastLogon, weatherForecast), 
          'Hello, Josefine Pettersen! Your last logon was yesterday at 10:55. Todays weather forecast is sunny',
          'This test is supposed to pass');

    equal(footerMessage(undefined, undefined, weatherForecast),
          'Hello, Bjarne Betjent! Your last logon was today at noon. Todays weather forecast is sunny');

    equal(addAll(1,2,3,4,5,6,7,8,9), 45);

    equal(allPlanets.length, 10, 'there should be 10 planets');

    equal(spaceshipCount, 22, 'number of starships is correct');

    ok(height !== undefined, 'variable height should exist')
    ok(mass !== undefined, 'variable mass should exist')
    ok(gender !== undefined, 'variable gender should exist')
    
    ok(lastMovie !== undefined, 'variable lastMovie should exist')
    equal(lastMovie, 'Return of the Jedi', 'lastMovie should be the Jedis return')

})