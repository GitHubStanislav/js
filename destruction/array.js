"use strict";

const japaneseRestaurant = {
  name: "Banzai",
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
};

// Способ распаковки значений в отдельные переменные
// Разбиение структур данных на более простые

const arr = [3, 5, 7];
const [a, b, c] = arr;
console.log(a, b, c);

const [category1, category2] = japaneseRestaurant.categories;
console.log(category1, category2);

// извлекает только 3 и 2 категорию (f,,t)

const [Category1, , Category3] = japaneseRestaurant.categories;
console.log(Category1, Category3);

// допустим мы хотим поменять местами категории
// use let , const cant be use
// Swapping variables (обмен значениями)
let [main, second] = japaneseRestaurant.categories;
[second, main] = [main, second];
console.log(main, second);

// use function
// returning 2 values from function
japaneseRestaurant.orderFood(2, 1);
console.log(japaneseRestaurant.orderFood(2, 1));

const [appetizer2, main1] = japaneseRestaurant.orderFood(2, 1);
console.log(appetizer2, main1);

// example
function setOptions(height, width, ...additional) {
  console.log(height, width, additional);
  console.log(...additional, typeof additional);
}
setOptions("red", "red", "red", "top");

function f([year, month, day]) {
  console.log(year); // выведет 2025
  console.log(month); // выведет 12
  console.log(day); // выведет 31
}

f([2025, 12, 31]);

// деструктуризация вложенного массива
const nestedArr = [1, 2, [7, 9]];
const [s, , d] = nestedArr;
console.log(s, d);

// деструктуризация внутри деструктуризации
// Nested destructuring
const [f1, , [x1, y1]] = nestedArr;
console.log(f1, x1, y1);

// установка дефолтных значений
// Default values
// полезно когда получаем данные при помощи API
const unknownArr = [3, 5];
const [g, i, j] = unknownArr;
console.log(g, i, j);

const [gDefault = 0, iDefault = 1, jDefault = 2] = unknownArr;
console.log(gDefault, iDefault, jDefault);
