function process(){
    let i = 0;
    function innerProcess(){
        i += 1;
        return i;
    }
    return innerProcess; //we are not calling the function, wea re just returning
}

let res = process();

console.log("the first values is res",res())
console.log("the first values is res",res())
console.log("the first values is res",res())