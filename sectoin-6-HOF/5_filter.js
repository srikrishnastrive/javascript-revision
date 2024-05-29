

let arr = [1,2,3,4,5,6,7,8,9];
function addOrEven(x){
    return (x % 2 == 0);
}

console.log(arr.filter(addOrEven));