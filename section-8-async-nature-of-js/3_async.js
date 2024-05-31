
function timeConsumingByLoop(){
    console.log("loop starts");
    for (let i = 0; i < 100000000; i++){

    }
    console.log("loop ends");
}

function timeConsumingByRuntime(){
    console.log("timer stats");
    setTimeout(function exec(){
        console.log("completed the timer");
    })
}

console.log("hi");
timeConsumingByLoop();
timeConsumingByRuntime();
timeConsumingByLoop();
console.log("bye");