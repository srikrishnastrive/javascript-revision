function createPromise(){
    return new Promise(function exec(resolve,reject){
        setTimeout(function exec(){
            console.log("rejecting the promise");
            reject("Done");
        },1000);
    });
}

setTimeout(function process(){
    console.log("time complted")
},0);


let p = createPromise();

p.then(function fulFillHandler(value){
    console.log('we fulfilled handler 1 with a value',value);
},function rejectionHandler(value) {
    console.log('we rejection handler 1 with a value',value);
    
});

p.then(function fulFillHandler(value){
    console.log('we fulfilled handler 2 with a value',value);
},function rejectionHandler(value) {
    console.log('we rejection handler 2 with a value',value);
    
});


for (i = 0; i < 1000000; i++){}
console.log("ending");