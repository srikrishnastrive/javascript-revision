function getRandomInt(max){
    return Math.floor(Math.random() * max);
}

function createPromiseWithLoop(){
    return new Promise(function executor(resolve,reject){
        setTimeout(function(){
            let num = getRandomInt(10);
        if(num % 2 == 0){
            resolve(num);
        }
        else {
            reject(num)
        }
        },10000);
        
    });
}

x = createPromiseWithLoop();

console.log(x);