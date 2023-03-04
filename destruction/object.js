"use strict";
const japaneseRestaurant = {
  restName: "Banzai",
  location: "108 Markham Woods Rd, Longwood, USA",
  categories: ["Japanese", "Sushi", "Vegetarian", "Organic"],
  appetizers: ["Seaweed salad", "Tempura shrimp", "Edamame", "Sushi rice"],
  mainMenu: ["Sushi", "Ramen", "Tempura"],
  workingHours: {
    wed: {
      open: 10,
      close: 23,
    },
    fri: {
      open: 10,
      close: 23,
    },
    sun: {
      open: 12,
      close: 23,
    },
  },

  orderFood: function (appetizersIndex, mainMenuIndex) {
    return [this.appetizers[appetizersIndex], this.mainMenu[mainMenuIndex]];
  },

  foodDelivery: function ({
    mainMenuIndex,
    appetizersIndex,
    address,
    deliveryTime,
  }) {
    console.log(
      `Your order on the way to you!
       ${this.appetizers[appetizersIndex]} 
       and ${this.mainMenu[mainMenuIndex]},
        will be arrived to ${address} 
        at ${deliveryTime}`
    );
  },
};

japaneseRestaurant.foodDelivery({
  deliveryTime: "12.30",
  address: "18 Markham Woods Rd",
  mainMenuIndex: 1,
  appetizersIndex: 0,
});

const { workingHours, restName, categories } = japaneseRestaurant;
console.log(workingHours);
console.log(restName);
console.log(categories);

// якщо ми хочемо встановити свої властивості

const {
  workingHours: hours,
  restName: newName,
  categories: aggradedCategories,
} = japaneseRestaurant;

console.log(hours);
console.log(newName);
console.log(aggradedCategories);

// ще одна гарна фіча при роботі з API це встановлювати ДЕФОЛТНІ значення
// коли ми звертаємось до властивості якої не існує ми отримуємо undefined
// якщо menu властивості немає, то ми встановимо її та якусь властивість menu = []
// ми комбінуємо дві техніки: якщо немає властивості, то встановлюємо за замовчуванням
// також змінюємо назву властивості appetizers на starterMenu і якщо там пусто ,
// то буде присвоєнні значення.
// Default values
const { menu = [], appetizers: starterMenu = [] } = japaneseRestaurant;
console.log(menu);
console.log(starterMenu);

//Mutating variables

let x = 3;
let y = 5;

const obj = {
  x: 11,
  y: 22,
  z: 33,
};
// ми розпаковуємо значення x,y з об'єкта і змінюємо значення наших змінних
// let x = 3(11); let y = 5(12); переопределили значення змінних

({ x, y } = obj);
console.log(x, y);

// ми хочемо витягнути часи роботи закладу в неділю
// Nested objects

//  const {workingHours: hours,} = japaneseRestaurant;

// const { sun } = hours;
// console.log(sun);

// дестр. в деструк. ми з объекта sun витягуємо дві властивості
// і створюємо дві змінні open,close

const {
  sun: { open, close },
} = hours;
console.log(open, close);

// також ми можем змінювати назви змінних

const {
  sun: { open: hoursOpen, close: hoursClose },
} = hours;
console.log(hoursOpen, hoursClose);
