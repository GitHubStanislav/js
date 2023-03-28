// closure

function outer() {
    let a = 10;
    return function inner() {
        let sum = a + 10;
        return sum;
    };
}

const res = outer();
const res2 = res();
console.log(res2);

// ******************

const createPrase = (world) => {
    return (world2) => `Hello ${world} ${world2}`;
};

const say = createPrase("Mike");
const say2 = say("Smith");

console.log(say2);
//***************

// pure function
function add(a, b) {
    return a + b;
}

// not pure function
let a = 1;

function add1(b) {
    a += b;
}
