// Syntax
// ex.
// const obj = {
//   name: 'Sean',
// }

// const - the variable used to hold the object.
// obj - the name assigned to the object used to call it later on
// = - the assignment operator assigning the variable and name to the object.
// {} - create and define the object.
// name - a property which will hold a value
// : - assignment operator assigning the following value to the property
// 'Sean' - the property value

// Me

// const me = {
//   name: 'Sean',
//   age: 30,
//   email: 'email@me.com'
// }
//
// // console.log(me);
//
// // console.log(me.name);
//
// me.age = 1000;
//
// // console.log(me.age);
//
// me['place of residence'] = 'Sacramento';
//
// console.log(me['place of residence']);

// Slimer
// const monster = {
//   name: "Slimer",
//   color: "greenish",
//   type: "plasm or ghost or something"
// }

// What would you write to access the name and console.log it?
// console.log(monster.name);

// What would you write to change the type to 'creature' (without changing it inside the object)
// monster.type = "creature",

// What would you write to add a key to the object called age, and set the age to 6?
// monster.age = 6;

// console.log(monster);

// Ogres
const adventurer = {
  name: 'Arya',
  age: 9,
  hitpoints: 50,
  mana: 35,
  weapons: ['Needle', 'Common Dagger'],
  armor: ['Wooden Sheild', 'Boiled Leather Jerkin'],
  companion: 'Dire Wolf'
}

const ogre = {
  name: 'Shrek',
  age: 35,
  hitpoints: 75,
  mana: 5,
  weapons: ['Wooden Club'],
  armor: ['Linen Tunic', 'Crude Steel Helmet'],
  companion: 'Donkey'
}

// Battle
// when adventurer.name uses adventure.weapons, orge.hitpoints goes down
// when orge.name used ogre.weapons, adveturer.hitpoints goes down

// let aryaNeedle = 20;
// let ogreWoodenClub = 10;
// let ogreLinenTunic = 10
//
// const battle = () => {
//   for (let i = 0; ogre.hitpoints >= 0; i--) {
//       if (aryaNeedle > ogreLinenTunic) {
//         ogre.hitpoints -= 10;
//         console.log(ogre.hitpoints);
//       } else {
//         console.log('weapon not strong enough');
//       }
//   }
// }
//
// battle();

// EXTRA STUFF
const cat1 = {
  name: 'Ruth',
  breed: 'DLH',
  age: 4
}

const cat2 = {
  name: 'Zimmy',
  breed: 'Tuxedo',
  age: 9
}

const combineCats = (mama, papa) => {

}

return an object {name: cat1.name + cat2.name, age: 1, breed: cat1.breed + cat2.breed}

combineCats();

console.log(cat1, cat2);
