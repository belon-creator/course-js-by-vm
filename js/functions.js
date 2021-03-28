// fn declaration
function greet(name) {
  console.log('hi', name);
}
greet('qwe');
greet('alex');

// fn expression
const greet2 = function greet2(name) {
  console.log('hello', name);
};
greet2('qwe');
greet2('alex');

console.log(typeof greet);
console.dir(greet);

// anonimous fn

let counter = 0;
const interval = setInterval(function () {
  if (counter === 8) {
    clearInterval(interval);
  } else {
    console.log(++counter);
  }
}, 1000);

// arrow fn

const arrowFn = (prLang) => {
  console.log('learn', prLang);
};

arrowFn('js');

const arrowFn2 = (prLang) => console.log('learn', prLang);
arrowFn2('python');

// ===
const sum = (a, b) => a + b;
console.log(sum(1, 2));
console.log(sum(10, 20));
console.log(sum(100, 200));

// ===

function sumAll(...all) {
  let result = 0;
  for (let num of all) {
    result += num;
  }
  return result;
}
const res = sumAll(1, 2, 3);
const res2 = sumAll(4, 5, 6, 7, 8, 9, 0);
console.log(res);
console.log(res2);

// ===

function createMember(name) {
  return function (lastName) {
    console.log(name + lastName);
  };
}

const logUser = createMember('gfvgffds');
console.log(logUser('qwe'));
console.log(logUser('qweqwe'));
