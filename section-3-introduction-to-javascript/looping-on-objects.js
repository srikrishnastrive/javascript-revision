let x = {
    name : "jhon",
    company : "Microsoft",
    salary : 400000,
    age : 24,
    city :"bengaluru",
    team : "Azure storage",
    designation: "software enginerr"
};

let keyofX = Object.keys(x);
let valuesOfx = Object.values(x);
console.log(keyofX);
console.log(valuesOfx);

let entiresOfx = Object.entries(x) //it will return the array of arrays in the x;

console.log(entiresOfx);