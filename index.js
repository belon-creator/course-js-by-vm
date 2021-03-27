'use strict';

// ============ variables ===========

var name = 'Alex';
const lastName = 'Belon';
let age = 31;
name = 'Aleksander';
const isProgrammer = true;

console.log(name, lastName);

const _a = 'a';
const $ = 'some value';

console.log(`name: ${name}, lastName ${lastName}, he is ${age} years old`);

// const userName = prompt('Enter your name');
// alert(`hello ${userName}`);

// ========= numbers ===========

let currentYear = 2021;
const yearOfBirth = 1989;
const userAge = currentYear - yearOfBirth;
console.log(userAge);

const fullAge = 31;
const birthYear = 1989;
const currentYear1 = 2021;

const isFullAge = currentYear1 - birthYear >= fullAge;
console.log(isFullAge);

// ============ oper =============

const courseStatus = 'pending';

if (courseStatus === 'ready') {
  console.log('course completed');
} else if (courseStatus === 'pending') {
  console.log('in progress of styding');
} else {
  console.log('qweqwe');
}

// ========= fn ==========

function calcAge(year) {
  return 2021 - year;
}
const myAge = calcAge(1989);
console.log(myAge);

function logInfoAbout(name, year) {
  const age = calcAge(year);

  if (age > 0) {
    console.log(`user ${name} now is ${age} years old`);
  } else {
    console.log('this is future');
  }
}
logInfoAbout('Alex', 1989);
logInfoAbout('qwe', 2000);
logInfoAbout('gbjh', 2050);

// ====== arr ======

const cars = ['Lexus', 'Infiniti', 'Mercedes', 'bmw'];
console.log(cars);

const countries = new Array('Ukraine', 'USA', 'UK');
console.log(countries);

console.log(cars[1]);
console.log(cars.length);
console.log(countries[0]);

cars[3] = 'Porshe';
console.log(cars);
cars[4] = 'Acura';
console.log(cars);

// ==================================

for (let i = 0; i < cars.length; i++) {
  const car = cars[i];
  console.log(car);
}

for (const country of countries) {
  console.log(country);
}

//=============== objects =================

const person = {
  name: 'Alexander',
  lastName: 'Belon',
  year: 1989,
  city: 'Kyiv',
  greet: function () {
    console.log('Hi from obj');
  },
};
console.log(person);
console.log(person.name);
console.log(person['lastName']);
person.isProgrammer = true;
person.greet();
console.log(person);
