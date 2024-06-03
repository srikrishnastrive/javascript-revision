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

console.log('starting1......');
const p = createPromise();
console.log('we are waiting for the promise to complete');
console.log('currently promise obect is like......',p);

console.log('going inside the handlers');

p.then(
    function fulFillHandler(value){
        console.log("Inside fulfillhandler 1 with value",value);
        console.log("promise after fullfillhandler 1 is ",p);
        setTimeout(function t() {console.log('Ended 0s timer')},0);
        console.log("exiting the fullfillment  handler");

    },
    function rejectionHandler(value){
        console.log("Inside rejectionhandler 1 with the value",value);
        console.log("promise after rejectionhandler 1  is ",p);
        setTimeout(function t() {console.log('Ended 0s timer')},0);
        console.log("exiting the rejection handler");
    }

);

console.log("Going to register 2nd set of handlers")
;
p.then(
    function fulFillHandler(value){
        console.log("Inside fulfillhandler 2  with value",value);
        console.log("promise after fulfillhandler 2  is ",p);
        setTimeout(function t() {console.log('Ended 0s timer')},0);
        console.log("exiting the fullfillment  handler");

    },
    function rejectionHandler(value){
        console.log("Inside rejectionhandler 2 with the value",value);
        console.log("promise after  rejectionhandler 2 is ",p);
        setTimeout(function t() {console.log('Ended 0s timer')},0);
        console.log("exiting the rejection handler");
    }

);

console.log("end");

for (let i = 0; i < 10000000;i++){}
setTimeout(function (){console.log("global timer of 0s")},0);
console.log("ending the loop");
setTimeout(function (){console.log("global timer of 10s")},10000);