const nestedArr = [1, 1, 1, 2, 2, 2, [5, 5], [1, 2, [1, 2]]];

const findNestedArraySum = (arr) => {
  let sum = 0;

  const findSum = (arr) => {
    arr.forEach((item) => {
      if (Array.isArray(item)) {
        findSum(item);
      } else {
        sum += item;
      }
    });
  };
  findSum(arr);
  return sum;
};

const result = findNestedArraySum(nestedArr)
console.log(result)
