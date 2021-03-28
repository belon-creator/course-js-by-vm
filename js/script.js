// numbers

const num = 8;
const float = 8.8;
const pow = 10e3;
console.log('MAX_SAFE_INTEGER', Number.MAX_SAFE_INTEGER);
console.log('MAX_SAFE_INTEGER', Number.MAX_SAFE_INTEGER);
console.log(Math.pow(2, 53) - 1);
console.log('MIN_SAFE_INTEGER', Number.MIN_SAFE_INTEGER);
console.log('MAX_VALUE', Number.MAX_VALUE);
console.log('MIN_VALUE', Number.MIN_VALUE);
console.log(Number.NaN);
console.log(isFinite(Infinity));
console.log(isFinite(1));

const stringInt = '1';
const stringFloat = '1.1';
console.log(Number.parseInt(stringInt) + 2);
console.log(+stringInt + 3);
console.log(Number.parseFloat(stringFloat) + 5);
console.log(0.1 + 0.2);
console.log(1 / 10 + 2 / 10);
console.log(parseFloat((0.1 + 0.2).toFixed(5)));

// math

console.log(Math.E);
console.log(Math.PI);
console.log(Math.sqrt(25));
console.log(Math.pow(5, 2));
console.log(Math.abs(-42));
console.log(Math.max(1, 2, 3, 4, 5, 6, 7, 8, 9));
console.log(Math.min(1, 2, 3, 4, 5, 6, 7, 8, 9));
console.log(Math.floor(5.9));
console.log(Math.ceil(5.1));
console.log(Math.round(5.5));
console.log(Math.trunc(5.5));
console.log(Math.random());

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(getRandom(0, 20));

// ========= strings ==========

const name = 'Alexander';
const age = 31;
console.log(typeof name);

const output = `add 2 + 2 = ${2 + 2} ternary ${age < 18 ? 'yong' : 'old'}`;
console.log(output);
console.log(name.length);
console.log(name.toUpperCase());
console.log(name.charAt(8));
console.log(name.indexOf('x'));
console.log(name.startsWith('A'));
console.log(name.repeat(8));

const string = '               a          ';
console.log(string);
console.log(string.trim());

function logPerson(s, name, age) {
  if (age < 18) {
    age = 'youg';
  } else {
    age = 'old';
  }
  return `${s[0]}${name}${s[1]}${age}${s[2]}`;
}

const personName = 'Alex';
const personAge = 31;
const intput = logPerson`name${personName}, age${personAge}!`;
console.log(intput);
