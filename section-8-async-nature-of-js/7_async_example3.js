console.log("hello world");

for (let i = 0; i < 3; i++){
    setTimeout(function exec(){
        console.log("timer done");
    },10)
}

for (let i = 0; i< 100000000; i++){

}

console.log("end");