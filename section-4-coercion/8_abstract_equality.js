console.log(null == undefined);

console.log(2 == "2");
//"2" --> coercoin --> string --> number --> 2 = 2 === 2 --> strict equality--> true


//booleam

console.log(1 == true);

//x is number and y is object


let obj = {x:10, valueOf() {return 10}};

console.log(10 == obj);

let obj1 = {x : 10};
let obj2 = {x : 10};
let obj3 = {y : 10};

console.log(obj1 === obj2); // different memory location give false
console.log(obj1 === obj3); // 
console.log(obj1 === obj1); // same memory location