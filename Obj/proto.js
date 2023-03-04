let a = {
  value: 1,
};

let b = {
  age: a,
};

console.log(a.__proto__);

// ссылочной тип даних

console.log({} != {});

console.log(Boolean.prototype);
console.log(a.__proto__);

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  seyHello() {
    console.log(`Hello ${this.name}`);
  }
}

const person = new User("Stas", 35);

console.log(User.prototype);
console.log(person.__proto__);

console.log(y);
var y = 10;
