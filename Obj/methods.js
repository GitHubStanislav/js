"use strict";

// method Object.entries

const obj1 = {
  ivan: "person",
  ira: "person",
  dog: "animal",
  cat: "animal",
};

const obj = Object.entries(obj1)
  .filter((item) => item[1] === "person")
  .map((item) => item[0]);

const createPhrase = (greeting) => {
  return (name) => `${greeting} ${name}`;
};

const sayHi = createPhrase("Hello");
console.log(sayHi("Stas"));

// reduce

const arr = [1, 2, 5, 10];
const arr1 = arr.reduce(function (sum, elem) {
  return sum + elem;
});
console.log(arr1);

// знайти сумму всіх позитивних елементів

const listOfNumber = [1, 2, 3, -5, -2];
const resault = listOfNumber.reduce((sum, elem) => {
  if (elem > 0) {
    return sum + elem;
  } else {
    return sum;
  }
});
console.log(resault);

// map
const arr2 = [1, 2, 3, 4, 5];
const arrResault = arr2.map((el) => {
  return el * 2;
});
console.log(arrResault);

// reverse string map
const string = "Hello";
const reversedString = Array.prototype.map
  .call(string, (x) => x)
  .reverse()
  .join("");
console.log(reversedString);
