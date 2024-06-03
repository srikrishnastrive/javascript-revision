function getRandomInt(max){
    return Math.floor(Math.random() * max);
}

function createPromise(){
    return new Promise(function executor(resolve,reject){
        console.log('started the execution of the pronise');
        setTimeout(function (){
            let num = getRandomInt(10);
            if(num % 2 == 0){
                resolve(num);
            }
            else{
                reject(num);
            }
        },1000);

        console.log('ended the execution of the pronise');
    })
}

console.log('starting......');
const p = createPromise();
console.log('we are waiting for the promise to complete');
console.log('currently promise obect is like......',p);

p.then(
    function fulFillHandler(value){
        console.log("Inside fulfill handler with value",value);
        console.log("promise after fullfilltime is ",p);

    },
    function rejectionHandler(value){
        console.log("Inside rejection handler with the value",value);
        console.log("promise after rejected  is ",p);
    }

)