//In JavaScript, short-circuiting is the evaluation of an expression from left to right with || and && operators.

var person = {
    name :"krishna",
    "age":25
};

console.log(person.job|| "unemployed");

console.log(person.age > 18 && "Driving allowed");

console.log( 0 && 'Orange ');
console.log('' && 'Orange');
console.log(true && null);
console.log('Apple' && 'Orange');

console.log(3 || 'Orange');
console.log('' || 'Orange');
console.log(true || 0);
console.log(undefined || null);
console.log(0 || -0);
console.log(0 && -0);