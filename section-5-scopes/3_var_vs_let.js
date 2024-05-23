var name = "krishna";

function varvsLet(){
    console.log(name);
}

varvsLet();

console.log(name);


let x = 1;

function letScope(){
    let x = 2;
    console.log(x)
}

letScope();
console.log(x);