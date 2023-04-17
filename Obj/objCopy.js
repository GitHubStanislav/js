const user = {
  id: 101,
  age: 35,
  email: "abc@eyehunts.com",
  adult: true,
  personalInfo: {
    name: "John",
    address: {
      line1: "101",
      line2: "Stree Line",
      city: "NY",
      state: "WX",
    },
  },
};

// structuredClone
// Does not copy methods
// deep copy
const copyUser1 = structuredClone(user);
console.log(copyUser1);

// The JSON.stringify() JSON.parse()
// Does not copy methods
// deep copy
const copyUser2 = JSON.parse(JSON.stringify(user));
console.log(copyUser2);

// Object.assign()
// copy methods
// doesn't deep copy nested objects
// Shallow copy
const copyUser3 = Object.assign({}, user);
console.log(copyUser3);

//Spread...
// doesn't deep copy nested objects
const copyUser4 = {...user}
console.log(copyUser4)