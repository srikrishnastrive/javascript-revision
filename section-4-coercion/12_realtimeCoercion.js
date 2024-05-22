let obj = {x: 10, y: 20};

//coercion with Templated string


console.log("value of x is",10);

let num = 10;

console.log(typeof `my object is ${num}`);


//coercion special case with comparison

console.log(1 < 2 < 3); // true < 3 --> 1 < 3 -> true
console.log(1 > 2 > 3);