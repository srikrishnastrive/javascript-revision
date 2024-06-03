setTimeout(function timer1(){
    console.log("Timer 1 done");
},0);

for (let i = 0; i < 100000; i++){

}

function f (){
    return new Promise(function exec(res,res){
        res("my promise");
    })
}

let x = Promise.resolve("my promsise");
x.then(function processPromise(value){
    console.log("whose promise ?",value);
});

setTimeout(function time2(){
    console.log("Timer 2 done");
},0);


console.log("End of the file");