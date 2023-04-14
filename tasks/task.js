const arr = [1, 2, 3, [1, 23, 4], [1, [2, 3, 4]],5];

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
