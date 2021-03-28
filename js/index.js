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

countries.push('Austria');
console.log(countries);
// ===

const txt = 'hi. i study js';
const reverseTxt = txt.split('').reverse().join('');
console.log(reverseTxt);

const fib = [1, 1, 2, 3, 5, 8];

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
  languages: ['ua', 'en', 'ru'],
  greet: function () {
    console.log('Hi from obj');
  },
  info() {
    console.info('info about', this.name);
  },
};

console.log(person);
console.log(person.name);
console.log(person['lastName']);
person.isProgrammer = true;
person.greet();
console.log(person);

for (let key in person) {
  if (person.hasOwnProperty(key)) {
    console.log('key: ', key);
    console.log('value: ', person[key]);
  }
}

const keys = Object.keys(person);
keys.forEach((key) => {
  console.log('key: ', key);
  console.log('value: ', person[key]);
});

// context
person.info();

const logger = {
  keys() {
    console.log('obj keys:', Object.keys(this));
  },
  keysAndValues() {
    Object.keys(this).forEach((key) => {
      console.log(`'${key}' ${this[key]}`);
    });
  },
};
const bound = logger.keys.bind(person);
bound();

logger.keys.call(person);
logger.keysAndValues.call(person);

// ====== async ======

const timeout = setTimeout(() => {
  console.log('after timeout');
}, 1000);

// const interval = setInterval(() => {
//   console.log('after interval');
// }, 1500);

const delay = (callback, wait = 1000) => {
  setTimeout(callback, wait);
};

delay(() => {
  console.log('after 2s');
}, 2000);
