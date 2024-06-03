function createPromise(){
    return new Promise(function exec(resolve,reject){
        console.log("Resolving the promise");
        resolve("Done");
    })
}

setTimeout(function process(){
    console.log("time complted")
},0);


let p = createPromise();

p.then(function fulFillHandler(value){
    console.log('we fulfilled with a value',value);
},function rejectionHandler() {
    console.log('we rejection with a value',value);
    
});

console.log("ending");