// const car = {
//   color: 'blue',
//   hp: 4000,
//   year: 1989
// }
//
// console.log(car);


// undefined
// console.log(car[0]);


// Compare and contrast
const vehicle = ["blue", 4000, 1989];
const car = { color: "blue",  year: 1989, hp: 4000};


// console.log(car.length)
//
// console.log('car'.toUpperCase())



//
// const person = {
//   name : 'Karolin',
//   height: 67,
//   hairColor: 'Dark Ash Copper Blonde',
//   naturalHairColor: false,
//   temperment: 'Space Cadet',
//   eyeColor: 'green',
//   age: 40
// }
//
//
// console.log(person.name);
//
// console.log(person['name']);
//
// console.log(person.naturalHairColor , person.eyeColor);


// const dog = {
//   name: 'Fido',
//   age: 15
// }
//
// console.log(dog);
// console.log(dog.name);
// console.log(dog.age);


// Add properties to object
const house = {
  doors: 9
}

// console.log(house);

house.windows = 30;

// console.log(house);

house.hasGarden = true;

// console.log(house);

// Change properties

house.doors = 12;

// console.log(house.doors);

const bicycle = {
  isATricycle: false
}

// console.log(bicycle);

bicycle.isATricycle = true

// console.log(bicycle);

let macros = {}

macros.protein = 'tempeh';

macros.carbohydrates = 'spuds'

// macros.fats = 'olive oil'

// console.log(macros);


macros  = 'this is gross, I would not eat for lunch!'

// console.log(macros);


// const guitar = {
//   strings: 6,
//   isAcoustic: true,
// }
//
// console.log(guitar);
//
// guitar.strings = 100;
//
// console.log(guitar);
//
// guitar.isAcoustic = !guitar.isAcoustic;
//
// console.log(guitar);


// YES
// const mogwai = {}

// mogwai.name = 'Gizmo';

// console.log(mogwai);

// NO

// mogwai = { name: 'Gizmo' }


// New Cool ES6 /ESNext
const name = 'Gizmo';
const age = 1;

// const mogwai = { name, age}

// console.log(mogwai);

// Old Classic

const mogwai = {
  name: name,
  age : age
}

// console.log(mogwai);

// const borough = {
//   name: 'Brooklyn',
//   bestBorough: 'Brooklyn'
// }
//
// console.log(borough);



const goblin = {
  badGuy: true
}



// console.log(goblin['badGuy']);
// console.log(goblin.badGuy);
//
//
// const bg = 'badGuy'
// console.log(goblin[bg]);


// Does not work - looking for a variable badGuy
// console.log(goblin[badGuy]);


// const strangeObj = {}
//
// strangeObj['a key with spaces'] = 999;
//
// console.log(strangeObj);
//
// console.log(strangeObj['a key with spaces']);


// const obj = {}
//
// for (let i = 0; i < 10; i++ ) {
//   obj['key'+ i] = 'foo';
// }
//
//
// console.log(obj);



// const obj = {
//   1 : 'one'
// }
//
// console.log(obj);
//
//
// console.log(obj[1]);
// console.log(obj['1']);
//
// obj.2 = 'hey'

// console.log(obj.2);


const testObj = {}

// testObj['this is a test'] = 'test';
//
// console.log(testObj['this is a test']);
//
// testObj[2] = 'I\'m just messing around with objects';
//
// console.log(testObj[2]);



const obj = {
  whatevs: 'hi',
  count: 4,
  something: 'wuttt'
}

// if (obj.whatevs === 'hi') {
//   console.log('ok');
// }

// for ( let i = 0; i < obj.count; i++){
//   console.log(i);
// }

if (obj.something){
  console.log('cool');
}

if (obj.anotherthing) {
  console.log('ok');
} else {
  console.log('no go');
}
