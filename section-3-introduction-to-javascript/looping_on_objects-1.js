//for of loop

let x = {
    name : "jhon",
    company : "Microsoft",
    salary : 400000,
    age : 24,
    city :"bengaluru",
    team : "Azure storage",
    designation: "software enginerr"
};


//loop over an object
for(const entry of Object.entries(x)){
    console.log(entry);
}


//for in loop actually helps us loop over the keys
for (const key in x){
    console.log(key, x[key]);
}


//for loop not work in objects

for (let i = 0; i< x.length; i++){
    console.log(i);
}