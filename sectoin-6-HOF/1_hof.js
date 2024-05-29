

function f(x, fn){
    console.log(x);

    fn();
}

f(10,function exec(){
    console.log("I am expression passed to a HOF");
})

let arr = [1,10,9,100,1000,11,12,13,14,2,3];

const sortedArray = arr.sort((a,b)=> a -b );
console.log(sortedArray);