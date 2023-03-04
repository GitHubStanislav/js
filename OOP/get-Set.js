// get / set
// accessor properties
// https://learn.javascript.ru/property-accessors

class Person {
  constructor(name, age) {
    this.name = name;
    this._age = age;
  }

  #surname = "Spiridonov";

  say() {
    console.log(`My name is ${this.name}, and im a ${this._age}`);
  }

  get age() {
    return this._age;
  }

  set age(age) {
    if (typeof age === "number" && age > 0 && age < 100) {
      this._age = age;
    } else {
      console.log(`mistake`);
    }
  }
}

const user = new Person("Stas", 35);
console.log(user.age);
user.age = 36;
