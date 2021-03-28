// const Animal = function (options) {
//   this.name = options.name;
//   this.color = options.color;

//   //   this.voice = function () {
//   //     console.log('base voice from ', this.name);
//   //   };
// };

// Animal.prototype.voice = function () {
//   console.log('base voice from ', this.name);
// };

// console.log(Animal.prototype);

// const dog = new Animal({ name: 'Rex', color: '#fff' });
// console.log(dog);
// // dog.voice();

// const Cat = function (options) {
//   Animal.apply(this, arguments);
//   this.hasTail = options.hasTail;
//   this.type = 'cat';
// };

// Cat.prototype = Object.create(Animal.prototype);
// Cat.prototype.constructor = Cat;

// Animal.prototype.voice = function () {
//   console.log('this is from ', this.name);
// };

// Cat.prototype.voice = function () {
//   Animal.prototype.voice.apply(this.arguments);
//   console.log(this.name + ' says meow');
// };

// const cat = new Cat({ name: 'Murzik', color: '#000', hasTail: true });
// console.log(cat);

// ES6

class Animal {
  constructor(options) {
    this.name = options.name;
    this.color = options.color;
  }
  voice() {
    console.log('base voice from ', this.name);
  }
}

const dog = new Animal({ name: 'Rex', color: '#fff' });
console.log(dog);

class Cat extends Animal {
  constructor(options) {
    super(options);
    this.hasTail = options.hasTail;
    this.type = 'cat';
  }

  voice() {
    super.voice();
    console.log(this.name + ' says meow');
  }
}

const cat = new Cat({ name: 'Murzik', color: '#000', hasTail: true });
console.log(cat);

// ========
Object.prototype.print = function () {
  console.log('this is obj', this);
};
cat.print();

Array.prototype.myMap = function () {
  return this.map.apply(this, arguments);
};

console.log([1, 2, 3].myMap((x) => x ** 2));
