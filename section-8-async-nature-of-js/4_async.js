
function timeConsumingByLoop(){
    console.log("loop starts");
    for (let i = 0; i < 100000000; i++){

    }
    console.log("loop ends");
}

function timeConsumingByRuntimeFeature0(){
    console.log("starting the timer 0");
    setTimeout(function exec(){
        console.log("completed the timer0");
    },5000)
}

function timeConsumingByRuntimeFeature1(){
    console.log("starting the timer 1");
    setTimeout(function exec(){
        console.log("completed the timer1");
    },0)
}

function timeConsumingByRuntimeFeature2(){
    console.log("starting the timer 2");
    setTimeout(function exec(){
        console.log("completed the timer2");
    },200)
}
console.log("hi"); //hi
timeConsumingByLoop();//2md
timeConsumingByRuntimeFeature0();//7th
timeConsumingByRuntimeFeature1();//5td
timeConsumingByRuntimeFeature2();//6th
timeConsumingByLoop();//3rd
console.log("bye");//4th