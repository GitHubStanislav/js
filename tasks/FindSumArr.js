const arr1 = [1, 2, 3, [1, 23, 4], [1, [2, 3, 4]], 5,1];

function findSumArr (n) {
  let arr = [];
  n.forEach((item) => {
    if (Array.isArray(item)) {
      arr = [...arr, findSumArr(item)]
    } else {
      arr.push(item);
    }
  });
  return arr.reduce((a, b) => a + b);
}
console.log(findSumArr(arr1))

// Sum Numbers
