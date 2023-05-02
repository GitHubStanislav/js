const arr = [1, 2, 3, [1, 23, 4], [1, [2, 3, 4]], 5, 1];
function flat(n) {
  let res = [];
  n.forEach((item) => {
    if (Array.isArray(item)) {
      res = res.concat(flat(item));
    } else {
      res.push(item);
    }
  });
  return res.reduce((a, c) => a + c);
}
console.log(flat(arr));

// sum element
const sum = (...num) => num.reduce((s, num) => s + num, 0);
console.log(sum(2, 4));

// sum element
function findSum(...num) {
  let accum = 0;
  num.forEach((num) => {
    accum += num;
  });
  return accum;
}
const arr1 = [1, 2, 3];
console.log(findSum(...arr1));

// find not odd numbers
function noOdds (values) {
  return values.filter((num) => num % 2 === 0);

}

console.log(noOdds(arr))