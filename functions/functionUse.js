// initials
function toInitials(name) {
  let nameArr = name.split(" ");
  let firstLetters = nameArr.map((el) => {
    return el.slice(0, 1).toUpperCase() + ".";
  });
  let initials = firstLetters.join("");
  return initials;
}

console.log(toInitials("stas spiridonov"));

//************************************************** */
// reverse number
function reversedNum(num) {
  return parseFloat(num.toString().split("").reverse().join("")) * Math.sign(num);
}

console.log(reversedNum(123));
console.log(reversedNum(-123));
//https://www.freecodecamp.org/news/js-basics-how-to-reverse-a-number-9aefc20afa8d/
// parseFloat возвращает число
// Все примеры ниже вернут 3.14
// parseFloat(3.14);
// parseFloat('3.14');
// parseFloat('314e-2');
// parseFloat('0.0314E+2');
// parseFloat('3.14какие-нибудь не цифровые знаки');

// var foo = Object.create(null);
// foo.toString = function () { return "3.14"; };
// parseFloat(foo);

// var foo = Object.create(null);
// foo.valueOf = function () { return "3.14"; };
// parseFloat(foo);

//

// reverse number 2
function reverseNumber2(num) {
  let str = num.toString();
  let minus = "";

  if (str[0] === "-") {
    minus = "-";
    str = str.slice(1);
  }

  return +(minus + str.split("").reverse().join(""));
}

console.log(reverseNumber2(123));
console.log(reverseNumber2(-123));
console.log(reverseNumber2(120));
console.log(reverseNumber2(0));

// функция создания дубликатов символов строки

// функция поиска самого короткого слова

function findShortWorld(str) {
  let strSplit = str.split(" ");
  let sortAtr = strSplit.sort((a, b) => {
    return a.length - b.length;
  });
  let sortedWorld = sortAtr[0];
  return sortedWorld;
}

console.log(findShortWorld("Hello my people"));
