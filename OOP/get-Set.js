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
//***************************************
const product = {
  // title:'Apple',
  desc:'',
  price: 2000,
  deliveryPrice: 200,
  getPrice(){
    return this.price
  },

  set title (value) {
    if (value !== '') {
      this.hiddenTitle = value
    } else {
      this.hiddenTitle = 'default'
    }
  },
  get title (){
    return this.hiddenTitle
  },
}

product.title = 'TV'

console.log(product.title)
//**********************************************
let user1 = {
  name: "John",
  surname: "Smith",

  get fullName() {
    return `${this.name} ${this.surname}`;
  },

  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  }
};

// set fullName запустится с данным значением
user.fullName = "Alice Cooper";

alert(user1.name); // Alice
alert(user1.surname); // Cooper

