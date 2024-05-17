//demonstrating toString and valueof

let obj = {x : 10,valueOf(){
    return "10"
}};

console.log(obj.toString()); //[object Object]
console.log(typeof obj.valueOf());
console.log(typeof obj.toString()); //string
//override to string method

let obj2 = {
    toString(){
        // return "let's learn javascript";
        return 10;
    }
}

console.log(obj2.toString());
console.log(typeof obj2.toString());