let company = {
    name:"google",
    type:"mnc",
    salary:"30000"

}

console.log(company.name);
//accessing with the . name



let x = {name:"krishna",age:24};

//accessing with in the ['name']

console.log(x['name']);

//updating the object

x.name = 'srikrishna';
console.log(x.name);

x["company"]="google";

console.log(x);

delete x.age;

console.log(x);