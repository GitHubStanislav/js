const testObj = {
  name: "Aladdin",
  age: 30,
};

function showInfo(nameIndex, ageIndex) {
  return this.name, this.age;
}

showInfo.call(testObj);

const user = {
  firstName: "Василий",
  surname: "Петров",
  patronym: "Иванович",
};

function showFullName(firstPart, lastPart) {
  console.log(this[firstPart] + " " + this[lastPart]);
}
showFullName.call(user, "firstName", "surname"); // "Василий Петров"
showFullName.call(user, "firstName", "patronym"); // "Василий Иванович"
