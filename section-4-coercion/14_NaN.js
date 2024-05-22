console.log(Number("123"));

console.log(Number("abcd")); // NaN

let x = NaN;

console.log(isNaN(x));

console.log(isNaN("krishna"));
console.log(Number.isNaN("krishna")); // it will not convert
console.log(Number.isNaN(x));

let a = -0;
let b = 0;

console.log(Math.sign(a) === Math.sign(b))
