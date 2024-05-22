//To string

// undefined --> "undefined"
// Null --------> "Null";
// Boolean ------> "true" --> true
// Boolean ------> "false" --> false
// Number ------> Return NumberToString
// String Return argument
// Object --> TO primitive

console.log(typeof "" + 0);
console.log(typeof ""+(-0));
console.log(""+[]); // [] -> "";
console.log(""+{});
console.log(""+[1,2,3]);
console.log(""+[1,null,undefined]);

//ToNumber
console.log(0 - "010"); // -10
console.log(0 - "O10"); //NaN